import { SectionPage } from '@/components/section-page';
import { MunicipalityMock } from '@/components/ui-mocks/municipality';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Municipality Tools',
};

export default function MunicipalityToolsPage() {
  return (
    <SectionPage
      title="Municipality Tools"
      description="A future operational space for cities and citizens: debates, studies, petitions, votes, participation lists, transparent prioritization, and privacy-preserving citizen access."
      status="Coming later"
      nextSteps={[
        'Define public viewer mode and verified resident permissions.',
        'Explore zero-knowledge identity flows for municipality participation.',
        'Prototype pages such as /lyon for local debates, votes, petitions, and studies.',
      ]}
    >
      <MunicipalityMock />
    </SectionPage>
  );
}
