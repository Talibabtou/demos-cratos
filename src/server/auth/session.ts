import { ROUTES } from '@/constants';
import { createSupabaseServerClient } from '@/server/supabase/server';

export async function getCurrentUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function createGoogleSignInUrl({
  nextPath,
  origin,
}: {
  nextPath: string;
  origin: string;
}) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    options: {
      redirectTo: `${origin}${ROUTES.authCallback}?next=${encodeURIComponent(nextPath)}`,
    },
    provider: 'google',
  });

  if (error || !data.url) {
    throw new Error('Google sign-in failed.');
  }

  return data.url;
}

export async function signOutCurrentUser() {
  const supabase = await createSupabaseServerClient();

  await supabase.auth.signOut();
}
