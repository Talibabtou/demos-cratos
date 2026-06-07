import { MunicipalityMock } from '@/components/ui-mocks/municipality';
import type { Metadata } from 'next';
import {
  generateLocaleStaticParams,
  getSectionMetadata,
  type LocalePageProps,
  renderLocalizedSectionPage,
} from '../section-route';

const sectionKey = 'municipalityTools';

export const generateStaticParams = generateLocaleStaticParams;

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  return getSectionMetadata(params, sectionKey);
}

export default async function MunicipalityToolsPage({
  params,
}: LocalePageProps) {
  return renderLocalizedSectionPage(params, sectionKey, <MunicipalityMock />);
}
