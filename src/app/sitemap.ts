import type { MetadataRoute } from 'next';
import { locales, withLocale } from '@/i18n/routing';

const baseUrl = 'https://demos-cratos.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/fifth-constitution',
    '/sixth-republic',
    '/municipality-tools',
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}${withLocale(locale, route)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
    })),
  );
}
