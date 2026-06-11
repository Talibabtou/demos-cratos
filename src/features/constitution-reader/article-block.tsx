import type { ConstitutionArticle } from '@/features/constitution-reader/constitution-corpus';
import {
  getArticleDomId,
  getParagraphKey,
} from '@/features/constitution-reader/constitution-dom-ids';
import {
  formatArticleTitle,
  isGenericArticleTitle,
} from '@/features/constitution-reader/constitution-formatting';
import { MarginNotes } from '@/features/constitution-reader/margin-notes';

type ArticleBlockProps = {
  article: ConstitutionArticle;
  documentId: string;
  sectionId: string;
};

export function ArticleBlock({
  article,
  documentId,
  sectionId,
}: ArticleBlockProps) {
  const notes = article.notes ?? [];

  return (
    <section
      className="scroll-mt-24 border-civic-line border-b py-10 lg:grid lg:grid-cols-[minmax(0,52rem)_30rem] lg:justify-center lg:gap-12"
      id={getArticleDomId(documentId, sectionId, article.id)}
    >
      <div className="min-w-0">
        {isGenericArticleTitle(article.title) ? null : (
          <h3 className="font-semibold font-serif text-3xl text-civic-ink">
            {formatArticleTitle(article.title)}
          </h3>
        )}
        <div className="mt-7 space-y-8">
          {article.paragraphs.map((paragraph) => (
            <ConstitutionParagraph
              key={getParagraphKey(
                documentId,
                sectionId,
                article.id,
                paragraph,
              )}
              text={paragraph}
            />
          ))}
        </div>
      </div>
      <MarginNotes
        sourceNotes={notes}
        target={{
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
