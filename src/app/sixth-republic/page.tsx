import { SectionPage } from '@/components/section-page';
import { VersionWorkshopMock } from '@/components/ui-mocks/version-workshop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sixth Republic',
};

export default function SixthRepublicPage() {
  return (
    <SectionPage
      title="Sixth Republic Workshop"
      description="A collaborative constitutional drafting space inspired by version control: proposals, diffs, branches, forks, comments, and a visual history of how the text evolves."
      status="Placeholder"
      nextSteps={[
        'Model constitutions as structured documents with article-level versions.',
        'Design proposal, review, merge, fork, and moderation workflows.',
        'Create a visual map of drafts and public iteration history.',
      ]}
    >
      <VersionWorkshopMock />
    </SectionPage>
  );
}
