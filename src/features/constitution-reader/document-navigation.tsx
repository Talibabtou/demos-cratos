import {
  getArticleDomId,
  getSectionDomId,
} from '@/features/constitution-reader/constitution-dom-ids';
import {
  formatArticleTitle,
  formatSectionTitle,
  hasSameConstitutionTitle,
  isGenericArticleTitle,
} from '@/features/constitution-reader/constitution-formatting';
import type {
  ConstitutionDocument,
  ConstitutionSection,
} from '@api/constitution-reader/corpus';

type DocumentNavigationProps = {
  document: ConstitutionDocument;
};

export function DocumentNavigation({ document }: DocumentNavigationProps) {
  return (
    <aside>
      <p className="font-semibold text-civic-ink text-sm uppercase tracking-[0.12em]">
        Contents
      </p>
      <nav className="mt-5 space-y-5" aria-label="Constitution contents">
        {document.sections.map((section) => (
          <NavigationSection
            documentId={document.id}
            key={`${document.id}-nav-${section.id}`}
            section={section}
          />
        ))}
      </nav>
    </aside>
  );
}

function NavigationSection({
  documentId,
  section,
}: {
  documentId: string;
  section: ConstitutionSection;
}) {
  const sectionTitle = formatSectionTitle(section.title);
  const visibleArticles = section.articles.filter(
    (article) =>
      !isGenericArticleTitle(article.title) &&
      !hasSameConstitutionTitle(article.title, sectionTitle),
  );

  return (
    <div>
      <a
        className="focus-ring block font-semibold text-civic-blue text-xs uppercase tracking-widest"
        href={`#${getSectionDomId(documentId, section.id)}`}
      >
        {sectionTitle}
      </a>
      {visibleArticles.length > 0 ? (
        <div className="mt-2 flex flex-wrap gap-2">
          {visibleArticles.map((article) => (
            <a
              className="focus-ring text-civic-muted text-xs hover:text-civic-ink"
              href={`#${getArticleDomId(documentId, section.id, article.id)}`}
              key={`${documentId}-nav-${section.id}-${article.id}`}
            >
              {formatArticleTitle(article.title)}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
