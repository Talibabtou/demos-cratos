import { SiteHeader } from '@/components/site-header';
import {
  constitutionDocuments,
  defaultConstitutionId,
  type ConstitutionDocument,
} from '@/features/constitution-reader/constitution-corpus';
import { ConstitutionTimeline } from '@/features/constitution-reader/constitution-timeline';
import { ConstitutionWorkspace } from '@/features/constitution-reader/constitution-workspace';
import type { Messages } from '@/i18n/messages';
import type { Locale } from '@/i18n/routing';

type ConstitutionReaderProps = {
  locale: Locale;
  messages: Pick<Messages, 'navigation'>;
  selectedConstitutionId?: string;
};

export function ConstitutionReader({
  locale,
  messages,
  selectedConstitutionId = defaultConstitutionId,
}: ConstitutionReaderProps) {
  const selectedConstitution = getSelectedConstitution(selectedConstitutionId);

  return (
    <main>
      <SiteHeader locale={locale} messages={messages.navigation} />
      <ConstitutionTimeline
        locale={locale}
        selectedConstitution={selectedConstitution}
        selectedConstitutionId={selectedConstitution.id}
      />
      <ConstitutionWorkspace document={selectedConstitution} />
    </main>
  );
}

function getSelectedConstitution(
  selectedConstitutionId: string,
): ConstitutionDocument {
  return (
    constitutionDocuments.find(
      (document) => document.id === selectedConstitutionId,
    ) ?? constitutionDocuments[constitutionDocuments.length - 1]
  );
}
