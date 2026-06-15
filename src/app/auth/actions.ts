'use server';

import { defaultLocale, type Locale, withLocale } from '@/i18n/routing';
import { createGoogleSignInUrl, signOutCurrentUser } from '@api/auth/session';
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
  const origin = await getRequestOrigin();
  const nextPath = getLocaleHome(locale);
  const signInUrl = await createGoogleSignInUrl({
    nextPath,
    origin,
  });

  redirect(signInUrl);
}

export async function signOut(locale: Locale = defaultLocale) {
  await signOutCurrentUser();

  redirect(getLocaleHome(locale));
}
