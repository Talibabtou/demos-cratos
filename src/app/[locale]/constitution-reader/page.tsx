import { ConstitutionReader } from '@/features/constitution-reader/constitution-reader';
import { getMessages } from '@/i18n/messages';
import { isLocale } from '@/i18n/routing';
import {
  getConstitutionDocument,
  getConstitutionDocumentSummaries,
} from '@/features/constitution-reader/server/corpus';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  generateLocaleStaticParams,
  getSectionMetadata,
  type LocalePageProps,
} from '../section-route';

const sectionKey = 'constitutionReader';

export const generateStaticParams = generateLocaleStaticParams;

type ConstitutionReaderPageProps = LocalePageProps & {
  searchParams: Promise<{
    constitution?: string | string[];
  }>;
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  return getSectionMetadata(params, sectionKey);
}

export default async function FifthConstitutionPage({
  params,
  searchParams,
}: ConstitutionReaderPageProps) {
  const { locale } = await params;
  const { constitution } = await searchParams;

  if (!isLocale(locale)) {
    notFound();
  }

  const selectedConstitutionId = Array.isArray(constitution)
    ? constitution[0]
    : constitution;
  const documents = await getConstitutionDocumentSummaries();

  if (documents.length === 0) {
    notFound();
  }

  const fallbackConstitutionId = documents[documents.length - 1].id;
  const selectedConstitution =
    (await getConstitutionDocument(
      selectedConstitutionId ?? fallbackConstitutionId,
    )) ?? (await getConstitutionDocument(fallbackConstitutionId));

  if (!selectedConstitution) {
    notFound();
  }

  return (
    <ConstitutionReader
      documents={documents}
      locale={locale}
      messages={getMessages(locale)}
      selectedConstitution={selectedConstitution}
    />
  );
}
