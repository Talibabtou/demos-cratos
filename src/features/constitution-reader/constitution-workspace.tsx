import { ConstitutionWorkspaceShell } from '@/features/constitution-reader/constitution-workspace-shell';
import { DocumentNavigation } from '@/features/constitution-reader/document-navigation';
import { DocumentOpening } from '@/features/constitution-reader/document-opening';
import { DocumentSection } from '@/features/constitution-reader/document-section';
import type { ConstitutionDocument } from '@api/constitution-reader/corpus';

type ConstitutionWorkspaceProps = {
  document: ConstitutionDocument;
};

export function ConstitutionWorkspace({
  document,
}: ConstitutionWorkspaceProps) {
  return (
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
  );
}
