import type { MetadataRoute } from 'next';
import { PUBLIC_SITEMAP_ROUTES, SITE_URL } from '@/constants';
import { locales, withLocale } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    PUBLIC_SITEMAP_ROUTES.map((route) => ({
      url: `${SITE_URL}${withLocale(locale, route)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
    })),
  );
}
