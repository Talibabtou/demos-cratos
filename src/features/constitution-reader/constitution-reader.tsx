import { SiteHeader } from '@/components/site-header';
import { ConstitutionReaderClient } from '@/features/constitution-reader/constitution-reader-client';
import type { Messages } from '@/i18n/messages';
import type { Locale } from '@/i18n/routing';
import type {
  ConstitutionDocument,
  ConstitutionDocumentSummary,
} from '@/features/constitution-reader/types';

type ConstitutionReaderProps = {
  documents: readonly ConstitutionDocumentSummary[];
  locale: Locale;
  messages: Pick<Messages, 'constitutionReader' | 'navigation'>;
  selectedConstitution: ConstitutionDocument;
};

export function ConstitutionReader({
  documents,
  locale,
  messages,
  selectedConstitution,
}: ConstitutionReaderProps) {
  return (
    <main>
      <SiteHeader locale={locale} messages={messages.navigation} />
      <ConstitutionReaderClient
        documents={documents}
        errorLabel={messages.constitutionReader.loadingError}
        initialDocument={selectedConstitution}
        loadingLabel={messages.constitutionReader.loadingConstitution}
        locale={locale}
      />
    </main>
  );
}
