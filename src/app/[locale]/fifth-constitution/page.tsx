import { ConstitutionReaderMock } from '@/components/ui-mocks/constitution-reader';
import type { Metadata } from 'next';
import {
  generateLocaleStaticParams,
  getSectionMetadata,
  type LocalePageProps,
  renderLocalizedSectionPage,
} from '../section-route';

const sectionKey = 'fifthConstitution';

export const generateStaticParams = generateLocaleStaticParams;

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  return getSectionMetadata(params, sectionKey);
}

export default async function FifthConstitutionPage({
  params,
}: LocalePageProps) {
  return renderLocalizedSectionPage(
    params,
    sectionKey,
    <ConstitutionReaderMock />,
  );
}
