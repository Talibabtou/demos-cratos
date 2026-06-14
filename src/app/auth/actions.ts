'use server';

import { defaultLocale, type Locale, withLocale } from '@/i18n/routing';
import { createSupabaseServerClient } from '@api/supabase/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

function getLocaleHome(locale: Locale) {
  return withLocale(locale);
}

async function getRequestOrigin() {
  const headerStore = await headers();
  const origin = headerStore.get('origin');

  if (origin) {
    return origin;
  }

  return process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
}

export async function signInWithGoogle(locale: Locale = defaultLocale) {
  const supabase = await createSupabaseServerClient();
  const origin = await getRequestOrigin();
  const nextPath = getLocaleHome(locale);

  const { data, error } = await supabase.auth.signInWithOAuth({
    options: {
      redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(nextPath)}`,
    },
    provider: 'google',
  });

  if (error || !data.url) {
    throw new Error('Google sign-in failed.');
  }

  redirect(data.url);
}

export async function signOut(locale: Locale = defaultLocale) {
  const supabase = await createSupabaseServerClient();

  await supabase.auth.signOut();

  redirect(getLocaleHome(locale));
}
