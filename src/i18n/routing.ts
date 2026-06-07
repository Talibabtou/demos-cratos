export const locales = ['en', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale = 'en' satisfies Locale;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocale(locale: Locale, pathname = '/') {
  const normalizedPathname = pathname.startsWith('/')
    ? pathname
    : `/${pathname}`;

  return `/${locale}${normalizedPathname === '/' ? '' : normalizedPathname}`;
}
