import { SiteHeader } from '@/components/site-header';
import {
  ResearchArticle,
  ResearchDocsLayout,
} from '@/features/research/research-docs';
import {
  getResearchIndex,
  getResearchPage,
} from '@/features/research/server/research';
import { getMessages } from '@/i18n/messages';
import { isLocale } from '@/i18n/routing';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type ResearchArticlePageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ResearchArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { page } = await getResearchPage(locale, slug);

  return {
    description: page?.description,
    title: page?.title ?? 'Research',
  };
}

export default async function ResearchArticlePage({
  params,
}: ResearchArticlePageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam;
  const messages = getMessages(locale);
  const [{ isAdmin, page }, { pages }] = await Promise.all([
    getResearchPage(locale, slug),
    getResearchIndex(locale),
  ]);

  if (!page) {
    notFound();
  }

  return (
    <main>
      <SiteHeader locale={locale} messages={messages.navigation} />
      <ResearchDocsLayout
        isAdmin={isAdmin}
        locale={locale}
        pages={pages}
        title={page.title}
      >
        <ResearchArticle isAdmin={isAdmin} locale={locale} page={page} />
      </ResearchDocsLayout>
    </main>
  );
}
