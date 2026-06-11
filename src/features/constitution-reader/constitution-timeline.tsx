import {
  constitutionDocuments,
  type ConstitutionDocument,
} from '@/features/constitution-reader/constitution-corpus';
import type { Locale } from '@/i18n/routing';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

type ConstitutionTimelineProps = {
  locale: Locale;
  selectedConstitution: ConstitutionDocument;
  selectedConstitutionId: string;
};

export function ConstitutionTimeline({
  locale,
  selectedConstitution,
  selectedConstitutionId,
}: ConstitutionTimelineProps) {
  return (
    <section className="border-civic-line border-b bg-civic-wash">
      <div className="mx-auto max-w-448 px-6 pt-10 pb-8 md:px-10 lg:px-14">
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
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-linear-to-l from-civic-wash to-transparent" />
          <div className="absolute top-1/2 right-5 left-5 h-px bg-civic-line" />
          <ol className="relative flex min-w-max items-center gap-0 pr-8 md:min-w-0">
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

        <div className="scroll-reveal relative mt-8 border-civic-line border-t pt-7">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
            <p className="font-semibold text-civic-red text-sm">
              {selectedConstitution.date}
            </p>
            <h2 className="mt-2 font-semibold font-serif text-3xl text-civic-ink">
              {selectedConstitution.title}
            </h2>
            <p className="mt-2 text-civic-muted text-sm">
              {selectedConstitution.regime}
            </p>
          </div>
          <div className="absolute top-7 right-0 flex flex-wrap justify-end gap-4">
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
