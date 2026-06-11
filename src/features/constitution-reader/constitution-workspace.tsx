import type { ConstitutionDocument } from '@/features/constitution-reader/constitution-corpus';
import { ConstitutionWorkspaceShell } from '@/features/constitution-reader/constitution-workspace-shell';
import { DocumentNavigation } from '@/features/constitution-reader/document-navigation';
import { DocumentOpening } from '@/features/constitution-reader/document-opening';
import { DocumentSection } from '@/features/constitution-reader/document-section';
import { ReaderNotesProvider } from '@/features/constitution-reader/reader-notes-provider';

type ConstitutionWorkspaceProps = {
  document: ConstitutionDocument;
};

export function ConstitutionWorkspace({
  document,
}: ConstitutionWorkspaceProps) {
  return (
    <ReaderNotesProvider>
      <ConstitutionWorkspaceShell
        navigation={<DocumentNavigation document={document} />}
      >
        <article className="mx-auto max-w-400">
          <DocumentOpening document={document} />
          {document.sections.map((section) => (
            <DocumentSection
              documentId={document.id}
              key={`${document.id}-${section.id}`}
              section={section}
            />
          ))}
        </article>
      </ConstitutionWorkspaceShell>
    </ReaderNotesProvider>
  );
}
