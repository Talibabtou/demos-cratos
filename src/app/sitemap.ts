import type { MetadataRoute } from 'next';

const baseUrl = 'https://demos-cratos.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/fifth-constitution',
    '/sixth-republic',
    '/municipality-tools',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
