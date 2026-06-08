'use client';

import { readPreference } from '@/lib/preferences';
import {
  defaultLocale,
  isLocale,
  type Locale,
  withLocale,
} from '@/i18n/routing';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function getPreferredLocale() {
  const candidates = [
    readPreference('locale'),
    navigator.language.split('-')[0],
    defaultLocale,
  ];

  return (
    candidates.find((locale): locale is Locale =>
      Boolean(locale && isLocale(locale)),
    ) ?? defaultLocale
  );
}

export function LocaleRootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(withLocale(getPreferredLocale()));
  }, [router]);

  return null;
}
