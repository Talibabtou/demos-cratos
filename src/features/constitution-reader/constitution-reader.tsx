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
      <ReaderHero document={selectedConstitution} />
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

function ReaderHero({ document }: { document: ConstitutionDocument }) {
  return (
    <section className="border-civic-line border-b">
      <div className="mx-auto grid min-h-[calc(72svh-73px)] max-w-400 content-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-14">
        <div className="reveal-up">
          <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
            {document.regime}
          </p>
          <h1 className="mt-5 max-w-4xl font-semibold font-serif text-5xl text-civic-ink leading-[1.02] md:text-7xl">
            Read France through its constitutional texts.
          </h1>
        </div>
        <div className="reveal-up-delay max-w-2xl self-end">
          <p className="font-serif text-2xl text-civic-text leading-10">
            Start from the current Constitution, then move backward through the
            archive to compare how France has defined sovereignty, rights, and
            public power.
          </p>
        </div>
      </div>
    </section>
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
      <div className="mx-auto max-w-448 px-6 py-14 md:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
              Constitutional memory
            </p>
            <h2 className="mt-4 font-semibold font-serif text-4xl text-civic-ink leading-tight">
              Choose a period. The reader below changes with it.
            </h2>
          </div>
          <p className="max-w-3xl font-serif text-civic-text text-xl leading-9 lg:justify-self-end">
            Each point is an archived source from the Conseil constitutionnel.
            The selected text keeps its original French wording and receives the
            same reading structure as the current Constitution.
          </p>
        </div>

        <nav
          aria-label="French constitutional timeline"
          className="mt-12 overflow-x-auto pb-5"
        >
          <ol className="relative flex min-w-max items-start gap-3 pr-6">
            <div className="absolute top-[2.68rem] right-10 left-10 h-px bg-civic-line" />
            {constitutionDocuments.map((document) => (
              <li key={document.id}>
                <TimelineButton
                  document={document}
                  isSelected={document.id === selectedConstitutionId}
                  locale={locale}
                />
              </li>
            ))}
          </ol>
        </nav>

        <div className="scroll-reveal mt-8 grid gap-8 border-civic-line border-t pt-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-semibold text-civic-red text-sm">
              {selectedConstitution.date}
            </p>
            <h3 className="mt-2 font-semibold font-serif text-3xl text-civic-ink">
              {selectedConstitution.title}
            </h3>
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
            <RevisionList document={selectedConstitution} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineButton({
  document,
  isSelected,
  locale,
}: {
  document: ConstitutionDocument;
  isSelected: boolean;
  locale: Locale;
}) {
  return (
    <a
      aria-current={isSelected ? 'true' : undefined}
      className={getTimelineButtonClassName(isSelected)}
      href={`/${locale}/constitution-reader?constitution=${document.id}#structured-full-text`}
    >
      <span className={getTimelineDotClassName(isSelected)}>
        <span className="size-2 rounded-full bg-current" />
      </span>
      <span className={getTimelineYearClassName(isSelected)}>
        {document.shortLabel}
      </span>
      <span className="mt-1 block font-serif text-lg leading-6">
        {document.title}
      </span>
      <span className="mt-2 block text-xs leading-5">{document.regime}</span>
    </a>
  );
}

function getTimelineButtonClassName(isSelected: boolean) {
  const stateClassName = isSelected
    ? 'text-civic-ink'
    : 'text-civic-muted hover:text-civic-ink';

  return `focus-ring group relative flex w-[11.25rem] shrink-0 flex-col items-start pt-2 text-left transition duration-200 ${stateClassName}`;
}

function getTimelineDotClassName(isSelected: boolean) {
  const stateClassName = isSelected
    ? 'border-civic-red bg-civic-red text-civic-action-text shadow-quiet'
    : 'border-civic-blue bg-civic-paper text-civic-blue group-hover:border-civic-red group-hover:text-civic-red';

  return `relative z-10 flex size-6 items-center justify-center rounded-full border transition ${stateClassName}`;
}

function getTimelineYearClassName(isSelected: boolean) {
  const stateClassName = isSelected ? 'text-civic-red' : 'text-civic-blue';

  return `mt-4 block font-semibold text-sm ${stateClassName}`;
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
      {document.revisionGroups.length > 0 ? (
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
      ) : (
        <p className="mt-4 border-civic-line border-l pl-4 text-civic-muted text-sm leading-6">
          No revision set has been structured for this text yet.
        </p>
      )}
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
        <a
          className="focus-ring mt-4 block text-civic-text text-sm hover:text-civic-blue"
          href="#structured-full-text"
        >
          Structured full text
        </a>
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
  return (
    <div>
      <a
        className="focus-ring block font-semibold text-civic-blue text-xs uppercase tracking-widest"
        href={`#${getSectionDomId(documentId, section.id)}`}
      >
        {section.title}
      </a>
      <div className="mt-2 flex flex-wrap gap-2">
        {section.articles.map((article) => (
          <a
            className="focus-ring text-civic-muted text-xs hover:text-civic-ink"
            href={`#${getArticleDomId(documentId, section.id, article.id)}`}
            key={`${documentId}-nav-${section.id}-${article.id}`}
          >
            {article.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function DocumentOpening({ document }: { document: ConstitutionDocument }) {
  return (
    <header
      className="mx-auto mb-12 max-w-3xl scroll-mt-24 text-center"
      id="structured-full-text"
    >
      <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
        Structured full text
      </p>
      <h2 className="mt-4 font-semibold font-serif text-5xl text-civic-ink leading-tight">
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
  return (
    <section
      className="mt-16 scroll-mt-24"
      id={getSectionDomId(documentId, section.id)}
    >
      <div className="mb-8 border-civic-line border-y py-5 text-center">
        <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
          Section
        </p>
        <h2 className="mt-2 font-semibold font-serif text-3xl text-civic-ink leading-tight">
          {section.title}
        </h2>
      </div>
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
        <h3 className="font-semibold font-serif text-3xl text-civic-ink">
          {article.title}
        </h3>
        <div className="mt-7 space-y-8">
          {article.paragraphs.map((paragraph, index) => (
            <ConstitutionParagraph
              index={index}
              key={getParagraphKey(
                documentId,
                sectionId,
                article.id,
                paragraph,
              )}
              note={index === 0 ? notes[0] : undefined}
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

function ConstitutionParagraph({
  index,
  note,
  text,
}: {
  index: number;
  note?: ConstitutionNote;
  text: string;
}) {
  return (
    <div>
      <p className="font-serif text-[1.42rem] text-civic-ink leading-[1.85]">
        {text}
      </p>
      <details className="group mt-4 border-civic-line border-l pl-4">
        <summary className="cursor-pointer font-semibold text-civic-blue text-sm transition group-open:text-civic-red">
          Reading note {index + 1}
        </summary>
        <div className="mt-3 max-w-2xl text-civic-text text-sm leading-7">
          {note ? (
            <>
              <p className="font-semibold text-civic-ink">{note.title}</p>
              <p className="mt-1">{note.text}</p>
            </>
          ) : (
            <p>
              A reserved space for an explanation, a historical example, a
              dispute, or a possible rewrite.
            </p>
          )}
        </div>
      </details>
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
