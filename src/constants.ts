export const APP_ROLES = ['admin', 'moderator'] as const;

export const ROUTES = {
  authCallback: '/auth/callback',
  constitutionReader: '/constitution-reader',
  constitutionWorkshop: '/constitution-workshop',
  home: '/',
  municipalDemocracy: '/municipal-democracy',
  profile: '/profile',
} as const;

export const PUBLIC_SITEMAP_ROUTES = [
  '',
  ROUTES.constitutionReader,
  ROUTES.constitutionWorkshop,
  ROUTES.municipalDemocracy,
] as const;

export const SITE_URL = 'https://demos-cratos.vercel.app';
