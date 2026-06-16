import { APP_ROLES } from '@/constants';
import { NOTE_CHANGE_STATUS } from '@/features/constitution-reader/constants';
import { createSupabaseServerClient } from '@/server/supabase/server';
import type { AppRole, NoteChangeKind, NoteChangeRequestStatus } from '@/types';

type AccountProfile = {
  avatar_url: string | null;
  bio: string | null;
  display_name: string | null;
  email: string;
  id: string;
};

type NoteActivityItem = {
  article_id: string;
  created_at: string;
  document_slug: string;
  id: string;
  kind: NoteChangeKind;
  moderator_comment: string | null;
  proposed_title: string;
  proposed_text: string;
  status: NoteChangeRequestStatus;
};

function sortRoles(roles: AppRole[]) {
  const order = new Map([
    [APP_ROLES[0], 0],
    [APP_ROLES[1], 1],
  ]);

  return roles.toSorted(
    (left, right) => (order.get(left) ?? 10) - (order.get(right) ?? 10),
  );
}

export async function getCurrentAccount() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const [{ data: profile }, { data: roles }, { data: noteActivity }] =
    await Promise.all([
      supabase
        .from('profiles')
        .select('id, email, display_name, avatar_url, bio')
        .eq('id', user.id)
        .maybeSingle<AccountProfile>(),
      supabase.from('user_roles').select('role').eq('user_id', user.id),
      supabase
        .from('note_change_requests')
        .select(
          'id, document_slug, article_id, kind, status, proposed_title, proposed_text, moderator_comment, created_at',
        )
        .eq('requester_id', user.id)
        .order('created_at', { ascending: false })
        .limit(25)
        .returns<NoteActivityItem[]>(),
    ]);

  const sortedRoles = sortRoles(
    roles?.map(({ role }) => role as AppRole) ?? [],
  );
  const canReviewNotes =
    sortedRoles.includes('admin') || sortedRoles.includes('moderator');
  const { data: moderationQueue } = canReviewNotes
    ? await supabase
        .from('note_change_requests')
        .select(
          'id, document_slug, article_id, kind, status, proposed_title, proposed_text, moderator_comment, created_at',
        )
        .eq('status', NOTE_CHANGE_STATUS.pending)
        .neq('requester_id', user.id)
        .order('created_at', { ascending: true })
        .limit(50)
        .returns<NoteActivityItem[]>()
    : { data: [] };

  return {
    email: user.email ?? profile?.email ?? '',
    id: user.id,
    moderationQueue: moderationQueue ?? [],
    noteActivity: noteActivity ?? [],
    profile,
    roles: sortedRoles,
  };
}

export async function deleteCurrentAccountPendingNoteRequest(
  requestId: string,
) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('You must be signed in to delete a note request.');
  }

  const { error } = await supabase
    .from('note_change_requests')
    .delete()
    .eq('id', requestId)
    .eq('requester_id', user.id)
    .eq('status', NOTE_CHANGE_STATUS.pending);

  if (error) {
    throw new Error('Note request deletion failed.');
  }
}
