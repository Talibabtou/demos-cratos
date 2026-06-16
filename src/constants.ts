export const APP_ROLES = ['admin', 'moderator'] as const;

export const NOTE_CHANGE_KIND = {
  create: 'create',
  delete: 'delete',
  update: 'update',
} as const;

export const NOTE_CHANGE_STATUS = {
  approved: 'approved',
  changesRequested: 'changes_requested',
  pending: 'pending',
  rejected: 'rejected',
} as const;

export const NOTE_TEXT_MAX_LENGTH = 5000;
export const NOTE_TITLE_MAX_LENGTH = 120;

export const PROFILE_BIO_MAX_LENGTH = 420;
export const PROFILE_DISPLAY_NAME_MAX_LENGTH = 80;
export const PROFILE_REVALIDATE_PATHS = ['/fr/profile', '/en/profile'] as const;

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

export const CONSTITUTION_CORPUS_CACHE_SECONDS = 60 * 60 * 24;
export const CONSTITUTION_DOCUMENT_CACHE_STORAGE_KEY =
  'demos-cratos:constitution-reader:documents:v1';
export const CONSTITUTION_DOCUMENTS_API_PATH =
  '/api/constitution-reader/documents';
export const SUPABASE_PAGE_SIZE = 1000;
