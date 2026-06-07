import { SectionPage } from '@/components/section-page';
import { getMessages, type Messages } from '@/i18n/messages';
import { isLocale, locales } from '@/i18n/routing';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type SectionKey = keyof Messages['sections'];

export type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateLocaleStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function getSectionMetadata(
  params: LocalePageProps['params'],
  sectionKey: SectionKey,
): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);

  return {
    title: messages.sections[sectionKey].metadataTitle,
  };
}

export async function renderLocalizedSectionPage(
  params: LocalePageProps['params'],
  sectionKey: SectionKey,
  children: React.ReactNode,
) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);
  const page = messages.sections[sectionKey];

  return (
    <SectionPage
      description={page.description}
      locale={locale}
      messages={messages}
      nextSteps={page.nextSteps}
      status={page.status}
      title={page.title}
    >
      {children}
    </SectionPage>
  );
}
