import { SectionPage } from '@/components/section-page';
import { ConstitutionReaderMock } from '@/components/ui-mocks/constitution-reader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fifth Constitution',
};

export default function FifthConstitutionPage() {
  return (
    <SectionPage
      title="Fifth Republic Constitution"
      description="A public reader for the Constitution of 4 October 1958, with structure, search, article navigation, analysis notes, and practical examples of institutional strengths and weaknesses."
      status="Placeholder"
      nextSteps={[
        'Import the full official constitutional text with article-level anchors.',
        'Attach plain-language explanations and historically grounded examples.',
        'Add source references and amendment history for each article.',
      ]}
    >
      <ConstitutionReaderMock />
    </SectionPage>
  );
}
