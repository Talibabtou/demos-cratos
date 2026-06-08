import { ConstitutionReader } from '@/features/constitution-reader';
import { getMessages } from '@/i18n/messages';
import { isLocale } from '@/i18n/routing';
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

  return (
    <ConstitutionReader
      locale={locale}
      messages={getMessages(locale)}
      selectedConstitutionId={selectedConstitutionId}
    />
  );
}
