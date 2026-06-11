import { ArticleBlock } from '@/features/constitution-reader/article-block';
import type { ConstitutionSection } from '@/features/constitution-reader/constitution-corpus';
import { getSectionDomId } from '@/features/constitution-reader/constitution-dom-ids';
import {
  formatSectionTitle,
  isGenericSectionTitle,
} from '@/features/constitution-reader/constitution-formatting';

type DocumentSectionProps = {
  documentId: string;
  section: ConstitutionSection;
};

export function DocumentSection({ documentId, section }: DocumentSectionProps) {
  const sectionTitle = formatSectionTitle(section.title);

  return (
    <section
      className="mt-16 scroll-mt-24"
      id={getSectionDomId(documentId, section.id)}
    >
      {isGenericSectionTitle(sectionTitle) ? null : (
        <div className="mb-8 border-civic-line border-y py-5 text-center">
          <h2 className="font-semibold font-serif text-3xl text-civic-ink leading-tight">
            {sectionTitle}
          </h2>
        </div>
      )}
      {section.articles.map((article) => (
        <ArticleBlock
          article={article}
          documentId={documentId}
          key={`${documentId}-${section.id}-${article.id}`}
          sectionId={section.id}
        />
      ))}
    </section>
  );
}
