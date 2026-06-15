import { createSupabaseServerClient } from '@api/supabase/server';

function normalizeText(value: string, fallback: string, maxLength: number) {
  const trimmed = value.trim();
  return (trimmed || fallback).slice(0, maxLength);
}

export async function createConstitutionNoteRequest({
  articleDatabaseId,
  articleId,
  documentId,
  text,
  title,
}: {
  articleDatabaseId: string;
  articleId: string;
  documentId: string;
  text: string;
  title: string;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      error: 'Vous devez être connecté pour proposer une note.',
      ok: false,
    };
  }

  const proposedText = normalizeText(text, '', 5000);

  if (!proposedText) {
    return {
      error: 'La note ne peut pas être vide.',
      ok: false,
    };
  }

  const { error } = await supabase.from('note_change_requests').insert({
    article_id: articleId,
    constitution_article_id: articleDatabaseId,
    document_slug: documentId,
    kind: 'create',
    proposed_text: proposedText,
    proposed_title: normalizeText(title, 'Note de lecture', 120),
    requester_id: user.id,
  });

  if (error) {
    return {
      error: "La proposition n'a pas pu être enregistrée.",
      ok: false,
    };
  }

  return {
    error: null,
    ok: true,
  };
}
