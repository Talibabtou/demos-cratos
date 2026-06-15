import { getArticleDomId } from '@/features/constitution-reader/constitution-dom-ids';
import {
  formatArticleTitle,
  isGenericArticleTitle,
} from '@/features/constitution-reader/constitution-formatting';
import { MarginNotes } from '@/features/constitution-reader/margin-notes';
import type { ConstitutionArticle } from '@api/constitution-reader/corpus';

type ArticleBlockProps = {
  article: ConstitutionArticle;
  documentId: string;
  hideTitle?: boolean;
  sectionId: string;
};

export function ArticleBlock({
  article,
  documentId,
  hideTitle = false,
  sectionId,
}: ArticleBlockProps) {
  const notes = article.notes ?? [];

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
        sourceNotes={notes}
        target={{
          articleDatabaseId: article.databaseId,
          articleId: article.id,
          documentId,
          sectionId,
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
