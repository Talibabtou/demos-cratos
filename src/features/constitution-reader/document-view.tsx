import {
  getArticleDomId,
  getSectionDomId,
} from '@/features/constitution-reader/constitution-dom-ids';
import {
  formatArticleTitle,
  formatSectionTitle,
  hasSameConstitutionTitle,
  isArticleSectionTitle,
  isGenericArticleTitle,
} from '@/features/constitution-reader/constitution-formatting';
import { ConstitutionWorkspaceShell } from '@/features/constitution-reader/constitution-workspace-shell';
import { DocumentNavigation } from '@/features/constitution-reader/document-navigation';
import { MarginNotes } from '@/features/constitution-reader/margin-notes';
import type {
  ConstitutionArticle,
  ConstitutionDocument,
  ConstitutionSection,
} from '@/features/constitution-reader/types';

type ConstitutionDocumentViewProps = {
  canSuggestNotes: boolean;
  document: ConstitutionDocument;
};

export function ConstitutionDocumentView({
  canSuggestNotes,
  document,
}: ConstitutionDocumentViewProps) {
  return (
    <ConstitutionWorkspaceShell
      navigation={<DocumentNavigation document={document} />}
    >
      <article className="mx-auto max-w-400">
        <DocumentOpening document={document} />
        {document.sections.map((section) => (
          <DocumentSection
            canSuggestNotes={canSuggestNotes}
            documentId={document.id}
            key={`${document.id}-${section.id}`}
            section={section}
          />
        ))}
      </article>
    </ConstitutionWorkspaceShell>
  );
}

function DocumentOpening({ document }: { document: ConstitutionDocument }) {
  return (
    <header
      className="mx-auto mb-12 max-w-3xl scroll-mt-24 text-center"
      id="structured-full-text"
    >
      <h2 className="font-semibold font-serif text-5xl text-civic-ink leading-tight">
        {document.sourceTitle}
      </h2>
      <p className="mt-8 font-serif text-civic-text text-xl leading-9">
        {document.summary}
      </p>
      {document.notes.length > 0 ? (
        <div className="mt-8 space-y-3 border-civic-line border-y py-5 text-left">
          {document.notes.map((note) => (
            <div key={`${document.id}-opening-${note.title}`}>
              <p className="font-semibold text-civic-ink text-sm">
                {note.title}
              </p>
              <p className="mt-1 text-civic-text text-sm leading-6">
                {note.text}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function DocumentSection({
  canSuggestNotes,
  documentId,
  section,
}: {
  canSuggestNotes: boolean;
  documentId: string;
  section: ConstitutionSection;
}) {
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
          canSuggestNotes={canSuggestNotes}
          documentId={documentId}
          hideTitle={shouldHideArticleTitle}
          key={`${documentId}-${section.id}-${article.id}`}
          sectionId={section.id}
        />
      ))}
    </section>
  );
}

function ArticleBlock({
  article,
  canSuggestNotes,
  documentId,
  hideTitle = false,
  sectionId,
}: {
  article: ConstitutionArticle;
  canSuggestNotes: boolean;
  documentId: string;
  hideTitle?: boolean;
  sectionId: string;
}) {
  return (
    <section
      className="scroll-mt-24 border-civic-line border-b py-10 last:border-b-0 lg:grid lg:grid-cols-[minmax(0,52rem)_30rem] lg:justify-center lg:gap-12"
      id={getArticleDomId(documentId, sectionId, article.id)}
    >
      <div className="min-w-0">
        {hideTitle || isGenericArticleTitle(article.title) ? null : (
          <h3 className="font-semibold font-serif text-3xl text-civic-ink">
            {formatArticleTitle(article.title)}
          </h3>
        )}
        <div className="mt-7 space-y-8">
          {article.paragraphs.map((paragraph) => (
            <ConstitutionParagraph
              key={paragraph.databaseId}
              text={paragraph.text}
            />
          ))}
        </div>
      </div>
      <MarginNotes
        canSuggestNotes={canSuggestNotes}
        sourceNotes={article.notes ?? []}
        target={{
          articleDatabaseId: article.databaseId,
        }}
      />
    </section>
  );
}

function ConstitutionParagraph({ text }: { text: string }) {
  return (
    <div>
      <p className="font-serif text-[1.42rem] text-civic-ink leading-[1.85]">
        {text}
      </p>
    </div>
  );
}
