import { createSupabaseServerClient } from '@api/supabase/server';

type AccountProfile = {
  avatar_url: string | null;
  bio: string | null;
  display_name: string | null;
  email: string;
  id: string;
};

type NoteChangeRequestSummary = {
  article_id: string;
  created_at: string;
  document_slug: string;
  id: string;
  kind: 'create' | 'update' | 'delete';
  moderator_comment: string | null;
  proposed_title: string;
  proposed_text: string;
  status: 'pending' | 'approved' | 'rejected' | 'changes_requested';
};

function sortRoles(roles: string[]) {
  const order = new Map([
    ['admin', 0],
    ['moderator', 1],
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

  const [{ data: profile }, { data: roles }, { data: noteRequests }] =
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
        .returns<NoteChangeRequestSummary[]>(),
    ]);

  return {
    email: user.email ?? profile?.email ?? '',
    id: user.id,
    noteRequests: noteRequests ?? [],
    profile,
    roles: sortRoles(roles?.map(({ role }) => role as string) ?? []),
  };
}
