import { SiteHeader } from '@/components/site-header';
import {
  constitutionDocuments,
  defaultConstitutionId,
  type ConstitutionArticle,
  type ConstitutionDocument,
  type ConstitutionNote,
  type ConstitutionSection,
} from '@/features/constitution-reader/constitution-corpus';
import type { Messages } from '@/i18n/messages';
import type { Locale } from '@/i18n/routing';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

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
      <ConstitutionalMemoryTimeline
        locale={locale}
        selectedConstitution={selectedConstitution}
        selectedConstitutionId={selectedConstitution.id}
      />
      <ConstitutionWorkspace document={selectedConstitution} />
    </main>
  );
}

function getSelectedConstitution(selectedConstitutionId: string) {
  return (
    constitutionDocuments.find(
      (document) => document.id === selectedConstitutionId,
    ) ?? constitutionDocuments[constitutionDocuments.length - 1]
  );
}

function ConstitutionalMemoryTimeline({
  locale,
  selectedConstitution,
  selectedConstitutionId,
}: {
  locale: Locale;
  selectedConstitution: ConstitutionDocument;
  selectedConstitutionId: string;
}) {
  return (
    <section className="border-civic-line border-b bg-civic-paper">
      <div className="mx-auto max-w-448 px-6 pt-10 pb-12 md:px-10 lg:px-14">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
              Constitutional memory
            </p>
            <h1 className="mt-3 font-semibold font-serif text-4xl text-civic-ink leading-tight md:text-5xl">
              Read France through its constitutional texts.
            </h1>
          </div>
          <div className="max-w-3xl lg:justify-self-end">
            <p className="font-serif text-civic-text text-xl leading-8">
              Choose a period to compare how France has defined sovereignty,
              rights, and public power.
            </p>
            <p className="mt-3 text-civic-muted text-sm leading-6">
              Each point links to an archived source from the Conseil
              constitutionnel. The original French wording stays intact.
            </p>
          </div>
        </div>

        <nav
          aria-label="French constitutional timeline"
          className="relative mt-8 overflow-x-auto py-3"
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-civic-paper to-transparent" />
          <ol className="relative flex min-w-max items-center gap-0 pr-8 md:min-w-0">
            <div className="absolute top-1/2 right-5 left-5 h-px bg-civic-line" />
            {constitutionDocuments.map((document, index) => (
              <li
                className="relative flex w-26 shrink-0 md:w-auto md:flex-1"
                key={document.id}
              >
                <TimelineButton
                  document={document}
                  index={index}
                  isSelected={document.id === selectedConstitutionId}
                  locale={locale}
                />
              </li>
            ))}
          </ol>
        </nav>

        <div className="scroll-reveal mt-8 grid gap-8 border-civic-line border-t pt-7 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-semibold text-civic-red text-sm">
              {selectedConstitution.date}
            </p>
            <h2 className="mt-2 font-semibold font-serif text-3xl text-civic-ink">
              {selectedConstitution.title}
            </h2>
            <p className="mt-2 text-civic-muted text-sm">
              {selectedConstitution.regime}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <SourceLink
                href={selectedConstitution.sourceUrl}
                label="Official source"
              />
              {selectedConstitution.localSourcePath ? (
                <SourceLink
                  href={selectedConstitution.localSourcePath}
                  label="Local archive"
                />
              ) : null}
            </div>
          </div>
          <div>
            <p className="max-w-3xl text-civic-text leading-7">
              {selectedConstitution.summary}
            </p>
            {selectedConstitution.revisionGroups.length > 0 ? (
              <RevisionList document={selectedConstitution} />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineButton({
  document,
  index,
  isSelected,
  locale,
}: {
  document: ConstitutionDocument;
  index: number;
  isSelected: boolean;
  locale: Locale;
}) {
  return (
    <Link
      aria-label={`${document.shortLabel}: ${document.title}, ${document.regime}`}
      aria-current={isSelected ? 'true' : undefined}
      title={`${document.title} - ${document.regime}`}
      className={getTimelineButtonClassName(isSelected)}
      href={`/${locale}/constitution-reader?constitution=${document.id}`}
      scroll={false}
    >
      <span className={getTimelineLabelClassName(index)}>
        <span className={getTimelineYearClassName(isSelected)}>
          {document.shortLabel}
        </span>
      </span>
      <span className={getTimelineDotClassName(isSelected)}>
        <span className="size-1.5 rounded-full bg-current" />
      </span>
    </Link>
  );
}

function getTimelineButtonClassName(isSelected: boolean) {
  const stateClassName = isSelected
    ? 'text-civic-ink'
    : 'text-civic-muted hover:text-civic-ink';

  return `focus-ring group relative flex h-20 w-full items-center justify-center px-1 text-center transition duration-200 ${stateClassName}`;
}

function getTimelineDotClassName(isSelected: boolean) {
  const stateClassName = isSelected
    ? 'border-civic-red bg-civic-red text-civic-action-text shadow-quiet'
    : 'border-civic-blue bg-civic-paper text-civic-blue group-hover:border-civic-red group-hover:text-civic-red';

  return `relative z-10 flex size-5 items-center justify-center rounded-full border transition ${stateClassName}`;
}

function getTimelineYearClassName(isSelected: boolean) {
  const stateClassName = isSelected ? 'text-civic-red' : 'text-civic-blue';

  return `block font-semibold text-sm ${stateClassName}`;
}

function getTimelineLabelClassName(index: number) {
  const positionClassName =
    index % 2 === 0 ? 'bottom-[calc(50%+1rem)]' : 'top-[calc(50%+1rem)]';

  return `absolute ${positionClassName} left-1/2 -translate-x-1/2`;
}

function SourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="focus-ring inline-flex items-center gap-2 font-semibold text-civic-blue text-sm transition hover:text-civic-red"
      href={href}
      rel="noreferrer"
      target={href.startsWith('http') ? '_blank' : undefined}
    >
      {label}
      <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
    </a>
  );
}

function RevisionList({ document }: { document: ConstitutionDocument }) {
  return (
    <div className="mt-8">
      <h4 className="font-semibold text-civic-ink text-sm uppercase tracking-[0.12em]">
        Revisions and later adjustments
      </h4>
      <ol className="mt-5 grid gap-4 md:grid-cols-2">
        {document.revisionGroups.map((period) => (
          <li
            className="border-civic-line border-l pl-4"
            key={`${document.id}-${period.years}-${period.title}`}
          >
            <p className="font-semibold text-civic-red text-sm">
              {period.years}
            </p>
            <p className="mt-1 font-serif text-civic-ink text-xl leading-7">
              {period.title}
            </p>
            <p className="mt-2 text-civic-text text-sm leading-6">
              {period.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ConstitutionWorkspace({
  document,
}: {
  document: ConstitutionDocument;
}) {
  return (
    <section className="px-4 py-10 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-448 gap-8 xl:grid-cols-[17rem_minmax(0,1fr)]">
        <DocumentNavigation document={document} />
        <div className="min-w-0">
          <article className="mx-auto max-w-368">
            <DocumentOpening document={document} />
            {document.sections.map((section) => (
              <DocumentSection
                documentId={document.id}
                key={`${document.id}-${section.id}`}
                section={section}
              />
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}

function DocumentNavigation({ document }: { document: ConstitutionDocument }) {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 max-h-[calc(100svh-7rem)] overflow-auto pr-4">
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
      </div>
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
    (article) => !isGenericArticleTitle(article.title),
  );

  if (isGenericSectionTitle(sectionTitle) && visibleArticles.length === 0) {
    return null;
  }

  return (
    <div>
      {isGenericSectionTitle(sectionTitle) ? null : (
        <a
          className="focus-ring block font-semibold text-civic-blue text-xs uppercase tracking-widest"
          href={`#${getSectionDomId(documentId, section.id)}`}
        >
          {sectionTitle}
        </a>
      )}
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
  documentId,
  section,
}: {
  documentId: string;
  section: ConstitutionSection;
}) {
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

function ArticleBlock({
  article,
  documentId,
  sectionId,
}: {
  article: ConstitutionArticle;
  documentId: string;
  sectionId: string;
}) {
  const notes = article.notes ?? [];

  return (
    <section
      className="scroll-mt-24 border-civic-line border-b py-10 lg:grid lg:grid-cols-[minmax(0,48rem)_18rem] lg:justify-center lg:gap-12"
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
      <MarginNotes notes={notes} />
    </section>
  );
}

function getSectionDomId(documentId: string, sectionId: string) {
  return `${documentId}-${sectionId}`;
}

function getArticleDomId(
  documentId: string,
  sectionId: string,
  articleId: string,
) {
  return `${documentId}-${sectionId}-${articleId}`;
}

function formatSectionTitle(title: string) {
  return title
    .replace(/^Titre\s+[^-–—]+[-–—]\s*/i, '')
    .replace(/^Chapitre\s+[^-–—]+[-–—]\s*/i, '')
    .trim();
}

function formatArticleTitle(title: string) {
  const normalizedTitle = title.trim().replace(/\.$/, '');

  if (/^\d+/.test(normalizedTitle)) {
    return `Article ${normalizedTitle}`;
  }

  return normalizedTitle;
}

function isGenericArticleTitle(title: string) {
  return title.trim().toLowerCase() === 'text';
}

function isGenericSectionTitle(title: string) {
  return [
    "texte d'ouverture",
    'texte d’ouverture',
    'dispositions initiales',
  ].includes(title.trim().toLowerCase());
}

function getParagraphKey(
  documentId: string,
  sectionId: string,
  articleId: string,
  paragraph: string,
) {
  let hash = 0;

  for (const char of paragraph) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return `${documentId}-${sectionId}-${articleId}-paragraph-${hash.toString(36)}`;
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

function MarginNotes({ notes }: { notes: readonly ConstitutionNote[] }) {
  return (
    <aside className="mt-8 lg:mt-1">
      <div className="sticky top-24 space-y-3">
        <p className="font-semibold text-civic-muted text-xs uppercase tracking-[0.12em]">
          Notes
        </p>
        {notes.length > 0 ? (
          notes.map((note) => (
            <details
              className="border-civic-line border-l py-1 pl-4"
              key={note.title}
              open
            >
              <summary className="cursor-pointer font-semibold text-civic-ink text-sm">
                {note.title}
              </summary>
              <p className="mt-2 text-civic-text text-sm leading-6">
                {note.text}
              </p>
            </details>
          ))
        ) : (
          <p className="border-civic-line border-l pl-4 text-civic-muted text-sm leading-6">
            No public note has been written for this article yet.
          </p>
        )}
      </div>
    </aside>
  );
}
