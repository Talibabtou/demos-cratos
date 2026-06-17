import { SiteHeader } from '@/components/site-header';
import {
  ResearchDocsLayout,
  ResearchOverview,
} from '@/features/research/research-docs';
import { getResearchIndex } from '@/features/research/server/research';
import { getMessages } from '@/i18n/messages';
import { isLocale, locales } from '@/i18n/routing';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type ResearchPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: ResearchPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    title: 'Research',
  };
}

export default async function ResearchPage({ params }: ResearchPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam;
  const messages = getMessages(locale);
  const { isAdmin, pages } = await getResearchIndex(locale);

  return (
    <main>
      <SiteHeader locale={locale} messages={messages.navigation} />
      <ResearchDocsLayout isAdmin={isAdmin} locale={locale} pages={pages}>
        <ResearchOverview isAdmin={isAdmin} locale={locale} pages={pages} />
      </ResearchDocsLayout>
    </main>
  );
}
