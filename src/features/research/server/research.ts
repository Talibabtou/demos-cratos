import { APP_ROLES } from '@/constants';
import { isLocale, type Locale } from '@/i18n/routing';
import { createSupabaseServerClient } from '@/server/supabase/server';
import type {
  ResearchBlock,
  ResearchBlockContent,
  ResearchBlockKind,
  ResearchPageStatus,
  ResearchPageSummary,
} from '@/features/research/types';

type SupabaseServerClient = Awaited<
  ReturnType<typeof createSupabaseServerClient>
>;

type ResearchPageRow = {
  description: string;
  id: string;
  locale: string;
  slug: string;
  status: ResearchPageStatus;
  title: string;
};

type ResearchBlockRow = {
  content: ResearchBlockContent;
  id: string;
  kind: ResearchBlockKind;
  position: number;
};

export async function getResearchIndex(locale: Locale) {
  const supabase = await createSupabaseServerClient();
  const isAdmin = await getIsResearchAdmin(supabase);
  const query = supabase
    .from('research_pages')
    .select('id, locale, slug, title, description, status')
    .eq('locale', locale)
    .order('slug', { ascending: true });

  if (!isAdmin) {
    query.eq('status', 'published');
  }

  const { data } = await query.returns<ResearchPageRow[]>();

  return {
    isAdmin,
    pages: (data ?? []).map(mapResearchPageSummary),
  };
}

export async function getResearchPage(locale: Locale, slug: string) {
  const supabase = await createSupabaseServerClient();
  const isAdmin = await getIsResearchAdmin(supabase);
  const query = supabase
    .from('research_pages')
    .select('id, locale, slug, title, description, status')
    .eq('locale', locale)
    .eq('slug', slug);

  if (!isAdmin) {
    query.eq('status', 'published');
  }

  const { data: page } = await query.maybeSingle<ResearchPageRow>();

  if (!page) {
    return {
      isAdmin,
      page: null,
    };
  }

  const { data: blocks } = await supabase
    .from('research_blocks')
    .select('id, position, kind, content')
    .eq('page_id', page.id)
    .order('position', { ascending: true })
    .returns<ResearchBlockRow[]>();

  return {
    isAdmin,
    page: {
      ...mapResearchPageSummary(page),
      blocks: (blocks ?? []).map(mapResearchBlock),
    },
  };
}

export async function requireResearchAdmin() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('You must be signed in as admin.');
  }

  const isAdmin = await getIsResearchAdmin(supabase);

  if (!isAdmin) {
    throw new Error('You must be admin to edit research pages.');
  }

  return {
    supabase,
    userId: user.id,
  };
}

async function getIsResearchAdmin(supabase: SupabaseServerClient) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return false;
  }

  const { data } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .eq('role', APP_ROLES[0])
    .maybeSingle<{ role: string }>();

  return data?.role === APP_ROLES[0];
}

function mapResearchPageSummary(row: ResearchPageRow): ResearchPageSummary {
  return {
    description: row.description,
    id: row.id,
    locale: isLocale(row.locale) ? row.locale : 'en',
    slug: row.slug,
    status: row.status,
    title: row.title,
  };
}

function mapResearchBlock(row: ResearchBlockRow): ResearchBlock {
  return {
    content: row.content ?? {},
    id: row.id,
    kind: row.kind,
    position: row.position,
  };
}

export function getResearchPageHref(locale: Locale, slug: string) {
  return `/${locale}/research/${slug}`;
}
