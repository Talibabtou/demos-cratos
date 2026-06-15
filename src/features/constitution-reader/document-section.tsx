import { ArticleBlock } from '@/features/constitution-reader/article-block';
import { getSectionDomId } from '@/features/constitution-reader/constitution-dom-ids';
import {
  formatSectionTitle,
  hasSameConstitutionTitle,
  isArticleSectionTitle,
} from '@/features/constitution-reader/constitution-formatting';
import type { ConstitutionSection } from '@api/constitution-reader/corpus';

type DocumentSectionProps = {
  documentId: string;
  section: ConstitutionSection;
};

export function DocumentSection({ documentId, section }: DocumentSectionProps) {
  const sectionTitle = formatSectionTitle(section.title);
  const firstArticleTitle = section.articles[0]?.title;
  const isSingleArticleWrapper =
    section.articles.length === 1 &&
    Boolean(firstArticleTitle) &&
    hasSameConstitutionTitle(firstArticleTitle, sectionTitle);
  const shouldHideSectionTitle =
    isSingleArticleWrapper && isArticleSectionTitle(sectionTitle);
  const shouldHideArticleTitle =
    isSingleArticleWrapper && !shouldHideSectionTitle;

  return (
    <section
      className="mt-16 scroll-mt-24"
      id={getSectionDomId(documentId, section.id)}
    >
      {shouldHideSectionTitle ? null : (
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
          hideTitle={shouldHideArticleTitle}
          key={`${documentId}-${section.id}-${article.id}`}
          sectionId={section.id}
        />
      ))}
    </section>
  );
}
