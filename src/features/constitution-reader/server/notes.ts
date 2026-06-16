import {
  APP_ROLES,
  NOTE_CHANGE_KIND,
  NOTE_CHANGE_STATUS,
  NOTE_TEXT_MAX_LENGTH,
  NOTE_TITLE_MAX_LENGTH,
} from '@/constants';
import { createSupabaseServerClient } from '@/server/supabase/server';
import type { ConstitutionNote } from '@/features/constitution-reader/types';
import type { AppRole, NoteChangeKind } from '@/types';

type SupabaseServerClient = Awaited<
  ReturnType<typeof createSupabaseServerClient>
>;

type NoteChangeInput =
  | {
      articleDatabaseId: string;
      kind: typeof NOTE_CHANGE_KIND.create;
      text: string;
      title: string;
    }
  | {
      kind: typeof NOTE_CHANGE_KIND.update;
      noteId: string;
      text: string;
      title: string;
    }
  | {
      kind: typeof NOTE_CHANGE_KIND.delete;
      noteId: string;
    };

type NoteTarget = {
  articleDatabaseId: string;
  articleId: string;
  documentId: string;
};

function normalizeText(value: string, fallback: string, maxLength: number) {
  const trimmed = value.trim();
  return (trimmed || fallback).slice(0, maxLength);
}

export async function submitConstitutionNoteChange(input: NoteChangeInput) {
  const supabase = await createSupabaseServerClient();
  const userResult = await requireCurrentUser(supabase);

  if (!userResult.ok) {
    return userResult;
  }

  const proposedChange = getProposedChange(input);

  if (!proposedChange.ok) {
    return proposedChange;
  }

  const target = await getTargetForInput(supabase, input);

  if (!target.ok) {
    return target;
  }

  const roles = await getUserRoles(supabase, userResult.user.id);
  const isAdmin = roles.includes('admin');
  const change = {
    kind: input.kind,
    ...proposedChange,
    supabase,
    target: target.value,
    targetNoteId: 'noteId' in input ? input.noteId : undefined,
  };

  if (input.kind === NOTE_CHANGE_KIND.delete && !isAdmin) {
    return rejectedNoteResponse(
      'Vous ne pouvez supprimer que vos demandes en attente.',
    );
  }

  if (!isAdmin) {
    return createPendingRequest({
      ...change,
      requesterId: userResult.user.id,
    });
  }

  return applyApprovedChange({
    ...change,
    reviewerId: userResult.user.id,
  });
}

function getProposedChange(input: NoteChangeInput) {
  if (input.kind === NOTE_CHANGE_KIND.delete) {
    return {
      ok: true as const,
      proposedText: null,
      proposedTitle: 'Suppression de note',
    };
  }

  const proposedText = normalizeText(input.text, '', NOTE_TEXT_MAX_LENGTH);

  if (!proposedText) {
    return rejectedNoteResponse('La note ne peut pas être vide.');
  }

  return {
    ok: true as const,
    proposedText,
    proposedTitle: normalizeText(
      input.title,
      'Note de lecture',
      NOTE_TITLE_MAX_LENGTH,
    ),
  };
}

async function getTargetForInput(
  supabase: SupabaseServerClient,
  input: NoteChangeInput,
) {
  const target =
    input.kind === NOTE_CHANGE_KIND.create
      ? await getArticleTarget(supabase, input.articleDatabaseId)
      : await getNoteTarget(supabase, input.noteId);

  if (!target) {
    return rejectedNoteResponse(
      input.kind === NOTE_CHANGE_KIND.create
        ? "L'article n'existe pas."
        : "La note n'existe pas.",
    );
  }

  return {
    ok: true as const,
    value: target,
  };
}

async function getUserRoles(supabase: SupabaseServerClient, userId: string) {
  const { data } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', userId)
    .in('role', [...APP_ROLES]);

  return (data ?? []).map(({ role }) => role as AppRole);
}

async function requireCurrentUser(supabase: SupabaseServerClient) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return rejectedNoteResponse(
      'Vous devez être connecté pour proposer une note.',
    );
  }

  return {
    ok: true as const,
    user,
  };
}

async function createPendingRequest({
  kind,
  proposedText,
  proposedTitle,
  requesterId,
  supabase,
  target,
  targetNoteId,
}: {
  kind: NoteChangeKind;
  proposedText: string | null;
  proposedTitle: string;
  requesterId: string;
  supabase: SupabaseServerClient;
  target: NoteTarget;
  targetNoteId?: string;
}) {
  const { error } = await supabase.from('note_change_requests').insert({
    article_id: target.articleId,
    constitution_article_id: target.articleDatabaseId,
    document_slug: target.documentId,
    kind,
    proposed_text: proposedText,
    proposed_title: proposedTitle,
    requester_id: requesterId,
    target_note_id: targetNoteId,
  });

  if (error) {
    return rejectedNoteResponse("La proposition n'a pas pu être enregistrée.");
  }

  return {
    error: null,
    note: null,
    ok: true as const,
    status: NOTE_CHANGE_STATUS.pending,
  };
}

async function applyApprovedChange({
  kind,
  proposedText,
  proposedTitle,
  reviewerId,
  supabase,
  target,
  targetNoteId,
}: {
  kind: NoteChangeKind;
  proposedText: string | null;
  proposedTitle: string;
  reviewerId: string;
  supabase: SupabaseServerClient;
  target: NoteTarget;
  targetNoteId?: string;
}) {
  const note =
    kind === NOTE_CHANGE_KIND.create
      ? await createApprovedNote({
          proposedText: proposedText ?? '',
          proposedTitle,
          reviewerId,
          supabase,
          target,
        })
      : await updateApprovedNote({
          kind,
          proposedText,
          proposedTitle,
          reviewerId,
          supabase,
          targetNoteId: targetNoteId ?? '',
        });

  if (!note.ok) {
    return note;
  }

  await createReviewedRequestAudit({
    kind,
    proposedText,
    proposedTitle,
    reviewerId,
    supabase,
    target,
    targetNoteId: note.targetNoteId,
  });

  return {
    error: null,
    note: note.note,
    ok: true as const,
    status: NOTE_CHANGE_STATUS.approved,
  };
}

async function createApprovedNote({
  proposedText,
  proposedTitle,
  reviewerId,
  supabase,
  target,
}: {
  proposedText: string;
  proposedTitle: string;
  reviewerId: string;
  supabase: SupabaseServerClient;
  target: NoteTarget;
}) {
  const position = await getNextNotePosition(
    supabase,
    target.articleDatabaseId,
  );
  const { data: note, error } = await supabase
    .from('constitution_notes')
    .insert({
      approved_at: new Date().toISOString(),
      approved_by: reviewerId,
      article_id: target.articleDatabaseId,
      author_id: reviewerId,
      position,
      source: 'community',
      status: NOTE_CHANGE_STATUS.approved,
      text: proposedText,
      title: proposedTitle,
    })
    .select('id, author_id, title, text')
    .single<ReturnedNoteRow>();

  if (error) {
    return rejectedNoteMutation("La note n'a pas pu être publiée.");
  }

  return {
    note: mapReturnedNote(note),
    ok: true as const,
    targetNoteId: note.id,
  };
}

async function updateApprovedNote({
  kind,
  proposedText,
  proposedTitle,
  reviewerId,
  supabase,
  targetNoteId,
}: {
  kind: typeof NOTE_CHANGE_KIND.delete | typeof NOTE_CHANGE_KIND.update;
  proposedText: string | null;
  proposedTitle: string;
  reviewerId: string;
  supabase: SupabaseServerClient;
  targetNoteId: string;
}) {
  const query =
    kind === NOTE_CHANGE_KIND.delete
      ? supabase
          .from('constitution_notes')
          .update({ status: 'archived' })
          .eq('id', targetNoteId)
      : supabase
          .from('constitution_notes')
          .update({
            approved_at: new Date().toISOString(),
            approved_by: reviewerId,
            text: proposedText ?? '',
            title: proposedTitle,
          })
          .eq('id', targetNoteId)
          .select('id, author_id, title, text')
          .single<ReturnedNoteRow>();

  const { data, error } = await query;

  if (error) {
    console.error('constitution note mutation failed', {
      code: error.code,
      details: error.details,
      hint: error.hint,
      kind,
      message: error.message,
      targetNoteId,
    });

    return rejectedNoteMutation(
      kind === NOTE_CHANGE_KIND.delete
        ? "La note n'a pas pu être supprimée."
        : "La note n'a pas pu être modifiée.",
      targetNoteId,
    );
  }

  return {
    note:
      kind === NOTE_CHANGE_KIND.delete
        ? null
        : mapReturnedNote(data as ReturnedNoteRow),
    ok: true as const,
    targetNoteId,
  };
}

async function createReviewedRequestAudit({
  kind,
  proposedText,
  proposedTitle,
  reviewerId,
  supabase,
  target,
  targetNoteId,
}: {
  kind: NoteChangeKind;
  proposedText: string | null;
  proposedTitle: string;
  reviewerId: string;
  supabase: SupabaseServerClient;
  target: NoteTarget;
  targetNoteId: string;
}) {
  await supabase.from('note_change_requests').insert({
    article_id: target.articleId,
    constitution_article_id: target.articleDatabaseId,
    document_slug: target.documentId,
    kind,
    proposed_text: proposedText,
    proposed_title: proposedTitle,
    requester_id: reviewerId,
    reviewed_at: new Date().toISOString(),
    reviewer_id: reviewerId,
    status: NOTE_CHANGE_STATUS.approved,
    target_note_id: targetNoteId,
  });
}

async function getArticleTarget(
  supabase: SupabaseServerClient,
  articleDatabaseId: string,
) {
  const { data } = await supabase
    .from('constitution_articles')
    .select('id, source_key, constitution_documents!inner(slug)')
    .eq('id', articleDatabaseId)
    .maybeSingle<{
      constitution_documents: {
        slug: string;
      };
      id: string;
      source_key: string;
    }>();

  if (!data) {
    return null;
  }

  return {
    articleDatabaseId: data.id,
    articleId: data.source_key,
    documentId: data.constitution_documents.slug,
  };
}

async function getNoteTarget(supabase: SupabaseServerClient, noteId: string) {
  const { data } = await supabase
    .from('constitution_notes')
    .select(
      'article_id, constitution_articles!inner(source_key, constitution_documents!inner(slug))',
    )
    .eq('id', noteId)
    .maybeSingle<{
      article_id: string;
      constitution_articles: {
        constitution_documents: {
          slug: string;
        };
        source_key: string;
      };
    }>();

  if (!data) {
    return null;
  }

  return {
    articleDatabaseId: data.article_id,
    articleId: data.constitution_articles.source_key,
    documentId: data.constitution_articles.constitution_documents.slug,
  };
}

function rejectedNoteResponse(error: string) {
  return {
    error,
    note: null,
    ok: false as const,
    status: NOTE_CHANGE_STATUS.rejected,
  };
}

function rejectedNoteMutation(error: string, targetNoteId = '') {
  return {
    error,
    note: null,
    ok: false as const,
    targetNoteId,
  };
}

type ReturnedNoteRow = {
  author_id: string | null;
  id: string;
  text: string;
  title: string;
};

function mapReturnedNote(note: ReturnedNoteRow): ConstitutionNote {
  return {
    authorId: note.author_id ?? undefined,
    databaseId: note.id,
    text: note.text,
    title: note.title,
  };
}

async function getNextNotePosition(
  supabase: SupabaseServerClient,
  articleDatabaseId: string,
) {
  const { data } = await supabase
    .from('constitution_notes')
    .select('position')
    .eq('article_id', articleDatabaseId)
    .order('position', { ascending: false })
    .limit(1)
    .maybeSingle<{ position: number }>();

  return (data?.position ?? -1) + 1;
}
