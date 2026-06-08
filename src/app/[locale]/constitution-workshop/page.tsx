import { VersionWorkshopMock } from '@/components/ui-mocks/version-workshop';
import type { Metadata } from 'next';
import {
  generateLocaleStaticParams,
  getSectionMetadata,
  type LocalePageProps,
  renderLocalizedSectionPage,
} from '../section-route';

const sectionKey = 'constitutionWorkshop';

export const generateStaticParams = generateLocaleStaticParams;

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  return getSectionMetadata(params, sectionKey);
}

export default async function SixthRepublicPage({ params }: LocalePageProps) {
  return renderLocalizedSectionPage(
    params,
    sectionKey,
    <VersionWorkshopMock />,
  );
}
