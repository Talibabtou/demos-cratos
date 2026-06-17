import {
  createResearchBlock,
  createResearchPage,
  deleteResearchBlock,
  deleteResearchPage,
  updateResearchBlock,
  updateResearchPage,
} from '@/features/research/actions';
import {
  RESEARCH_BLOCK_KINDS,
  RESEARCH_PAGE_STATUSES,
} from '@/features/research/constants';
import { getResearchPageHref } from '@/features/research/server/research';
import type {
  ResearchBlock,
  ResearchPage,
  ResearchPageSummary,
} from '@/features/research/types';
import type { Locale } from '@/i18n/routing';
import { BookOpen, FileText, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type ResearchDocsProps = {
  children: ReactNode;
  isAdmin: boolean;
  locale: Locale;
  pages: ResearchPageSummary[];
  title?: string;
};

export function ResearchDocsLayout({
  children,
  isAdmin,
  locale,
  pages,
  title = 'Research',
}: ResearchDocsProps) {
  return (
    <section className="bg-civic-wash">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:px-10 lg:grid-cols-[16rem_minmax(0,1fr)_14rem] lg:px-12">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
            Demos:Cratos
          </p>
          <h1 className="mt-3 font-semibold font-serif text-3xl text-civic-ink">
            {title}
          </h1>
          <nav aria-label="Research navigation" className="mt-8 grid gap-1">
            <ResearchNavLink href={`/${locale}/research`}>
              Overview
            </ResearchNavLink>
            {pages.map((page) => (
              <ResearchNavLink
                href={getResearchPageHref(locale, page.slug)}
                key={page.id}
              >
                {page.title}
                {isAdmin && page.status !== 'published' ? (
                  <span className="ml-2 text-civic-muted text-xs">
                    {page.status}
                  </span>
                ) : null}
              </ResearchNavLink>
            ))}
          </nav>
        </aside>
        {children}
      </div>
    </section>
  );
}

function ResearchNavLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      className="focus-ring rounded-sm px-2 py-2 font-medium text-civic-text text-sm transition hover:bg-civic-paper hover:text-civic-ink"
      href={href}
    >
      {children}
    </Link>
  );
}

export function ResearchOverview({
  isAdmin,
  locale,
  pages,
}: {
  isAdmin: boolean;
  locale: Locale;
  pages: ResearchPageSummary[];
}) {
  return (
    <>
      <main className="min-w-0">
        <div className="border-civic-line border-b pb-8">
          <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
            Research and doctrine
          </p>
          <h2 className="mt-4 font-semibold font-serif text-5xl text-civic-ink leading-tight">
            A working library for democratic software.
          </h2>
          <p className="mt-5 max-w-3xl text-civic-text leading-7">
            This section gathers doctrine, sources, cases, and product decisions
            for Demos:Cratos. It is opinionated by design: research is useful
            here when it changes how the product behaves.
          </p>
        </div>
        <div className="mt-8 grid gap-4">
          {pages.length > 0 ? (
            pages.map((page) => (
              <Link
                className="focus-ring rounded-panel border border-civic-line bg-civic-paper p-5 shadow-quiet transition hover:border-civic-blue"
                href={getResearchPageHref(locale, page.slug)}
                key={page.id}
              >
                <div className="flex items-center gap-2 text-civic-muted text-xs uppercase tracking-[0.12em]">
                  <FileText aria-hidden="true" className="size-4" />
                  {page.status}
                </div>
                <h3 className="mt-3 font-semibold font-serif text-2xl text-civic-ink">
                  {page.title}
                </h3>
                {page.description ? (
                  <p className="mt-2 text-civic-text text-sm leading-6">
                    {page.description}
                  </p>
                ) : null}
              </Link>
            ))
          ) : (
            <p className="text-civic-muted text-sm">No research page yet.</p>
          )}
        </div>
        {isAdmin ? (
          <ResearchAdminPanel label="Create page">
            <ResearchPageForm locale={locale} />
          </ResearchAdminPanel>
        ) : null}
      </main>
      <ResearchAside title="On this page" items={['Overview', 'Pages']} />
    </>
  );
}

export function ResearchArticle({
  isAdmin,
  locale,
  page,
}: {
  isAdmin: boolean;
  locale: Locale;
  page: ResearchPage;
}) {
  const headings = page.blocks.filter((block) => block.kind === 'heading');

  return (
    <>
      <main className="min-w-0">
        <article>
          <header className="border-civic-line border-b pb-8">
            <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
              {page.status}
            </p>
            <h2 className="mt-4 font-semibold font-serif text-5xl text-civic-ink leading-tight">
              {page.title}
            </h2>
            {page.description ? (
              <p className="mt-5 max-w-3xl text-civic-text leading-7">
                {page.description}
              </p>
            ) : null}
          </header>
          {isAdmin ? (
            <ResearchAdminPanel label="Edit page">
              <ResearchArticleEditor locale={locale} page={page} />
            </ResearchAdminPanel>
          ) : null}
          <div className="mt-8 grid gap-7">
            {page.blocks.map((block) => (
              <div key={block.id}>
                <ResearchBlockView block={block} />
              </div>
            ))}
          </div>
        </article>
      </main>
      <ResearchAside
        title="On this page"
        items={headings.map((block) => block.content.text ?? 'Section')}
      />
    </>
  );
}

function ResearchAdminPanel({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <details className="group mt-6">
      <summary className="focus-ring ml-auto flex h-9 w-fit cursor-pointer list-none items-center rounded-panel border border-civic-line bg-civic-paper px-3 font-semibold text-civic-text text-sm transition hover:border-civic-blue hover:text-civic-ink [&::-webkit-details-marker]:hidden">
        {label}
      </summary>
      <div className="mt-4 rounded-panel border border-civic-line bg-civic-paper p-4 shadow-quiet">
        {children}
      </div>
    </details>
  );
}

function ResearchArticleEditor({
  locale,
  page,
}: {
  locale: Locale;
  page: ResearchPage;
}) {
  return (
    <div className="grid gap-6">
      <div className="grid gap-3">
        <ResearchPageForm locale={locale} page={page} />
        <DeleteResearchPageForm locale={locale} page={page} />
      </div>
      <div className="grid gap-4">
        {page.blocks.map((block) => (
          <div
            className="grid gap-3 border-civic-line border-l pl-4"
            key={block.id}
          >
            <ResearchBlockView block={block} />
            <ResearchBlockForm block={block} locale={locale} page={page} />
            <DeleteResearchBlockForm
              block={block}
              locale={locale}
              page={page}
            />
            <ResearchBlockForm
              insertPosition={block.position + 1}
              locale={locale}
              page={page}
            />
          </div>
        ))}
      </div>
      {page.blocks.length === 0 ? (
        <ResearchBlockForm insertPosition={0} locale={locale} page={page} />
      ) : null}
    </div>
  );
}

function ResearchAside({ items, title }: { items: string[]; title: string }) {
  return (
    <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
      <p className="font-semibold text-civic-muted text-xs uppercase tracking-[0.12em]">
        {title}
      </p>
      <div className="mt-4 grid gap-2 border-civic-line border-l pl-4 text-civic-muted text-sm">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </aside>
  );
}

function ResearchBlockView({ block }: { block: ResearchBlock }) {
  const content = block.content;

  if (block.kind === 'heading') {
    return (
      <h3 className="font-semibold font-serif text-3xl text-civic-ink">
        {content.text}
      </h3>
    );
  }

  if (block.kind === 'image') {
    if (!content.url) {
      return null;
    }

    return (
      <figure className="overflow-hidden rounded-panel border border-civic-line bg-civic-paper">
        <Image
          alt={content.alt ?? ''}
          className="max-h-[34rem] w-full object-cover"
          height={720}
          src={content.url}
          unoptimized
          width={1280}
        />
        {content.caption ? (
          <figcaption className="border-civic-line border-t px-4 py-3 text-civic-muted text-sm">
            {content.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (block.kind === 'source') {
    return (
      <div className="rounded-panel border border-civic-line bg-civic-paper p-4">
        <div className="flex items-center gap-2 text-civic-muted text-xs uppercase tracking-[0.12em]">
          <BookOpen aria-hidden="true" className="size-4" />
          Source
        </div>
        <h4 className="mt-3 font-semibold text-civic-ink">{content.title}</h4>
        <p className="mt-1 text-civic-muted text-sm">
          {[content.authors, content.institution, content.year]
            .filter(Boolean)
            .join(' · ')}
        </p>
        {content.relevance ? (
          <p className="mt-3 text-civic-text text-sm leading-6">
            {content.relevance}
          </p>
        ) : null}
        {content.url ? (
          <a
            className="focus-ring mt-3 inline-flex items-center gap-2 font-semibold text-civic-blue text-sm"
            href={content.url}
            rel="noreferrer"
            target="_blank"
          >
            <LinkIcon aria-hidden="true" className="size-4" />
            Open source
          </a>
        ) : null}
      </div>
    );
  }

  if (block.kind === 'decision' || block.kind === 'question') {
    return (
      <div className="rounded-panel border border-civic-line bg-civic-paper p-4">
        <p className="font-semibold text-civic-blue text-xs uppercase tracking-[0.12em]">
          {block.kind === 'decision' ? 'Product decision' : 'Open question'}
        </p>
        <p className="mt-3 text-civic-text text-sm leading-6">{content.text}</p>
      </div>
    );
  }

  return (
    <p className="font-serif text-[1.32rem] text-civic-ink leading-[1.8]">
      {content.text}
    </p>
  );
}

function ResearchPageForm({
  locale,
  page,
}: {
  locale: Locale;
  page?: ResearchPage;
}) {
  const action = page ? updateResearchPage : createResearchPage;

  return (
    <form
      action={action}
      className="grid gap-4 rounded-panel border border-civic-line bg-civic-wash p-4"
    >
      <input name="locale" type="hidden" value={locale} />
      {page ? <input name="pageId" type="hidden" value={page.id} /> : null}
      <h3 className="font-semibold text-civic-ink">
        {page ? 'Edit page' : 'Create page'}
      </h3>
      <div className="grid gap-3 md:grid-cols-2">
        <ResearchInput defaultValue={page?.title} label="Title" name="title" />
        <ResearchInput defaultValue={page?.slug} label="Slug" name="slug" />
      </div>
      <label className="grid gap-2">
        <span className="font-semibold text-civic-text text-sm">
          Description
        </span>
        <textarea
          className="focus-ring min-h-20 rounded-panel border border-civic-line bg-civic-paper px-3 py-2 text-civic-ink text-sm"
          defaultValue={page?.description}
          name="description"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-semibold text-civic-text text-sm">Status</span>
        <select
          className="focus-ring h-10 rounded-panel border border-civic-line bg-civic-paper px-3 text-civic-ink text-sm"
          defaultValue={page?.status ?? 'draft'}
          name="status"
        >
          {RESEARCH_PAGE_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </label>
      <button
        className="focus-ring inline-flex h-9 w-fit items-center rounded-panel bg-civic-action px-3 font-semibold text-civic-action-text text-sm"
        type="submit"
      >
        Save page
      </button>
    </form>
  );
}

function DeleteResearchPageForm({
  locale,
  page,
}: {
  locale: Locale;
  page: ResearchPage;
}) {
  return (
    <form action={deleteResearchPage}>
      <input name="locale" type="hidden" value={locale} />
      <input name="pageId" type="hidden" value={page.id} />
      <button
        className="focus-ring inline-flex h-9 w-fit items-center rounded-panel border border-civic-line px-3 font-semibold text-civic-muted text-sm transition hover:border-civic-red hover:text-civic-red"
        type="submit"
      >
        Delete page
      </button>
    </form>
  );
}

function ResearchBlockForm({
  block,
  insertPosition,
  locale,
  page,
}: {
  block?: ResearchBlock;
  insertPosition?: number;
  locale: Locale;
  page: ResearchPage;
}) {
  const action = block ? updateResearchBlock : createResearchBlock;
  const content = block?.content ?? {};

  return (
    <details className="rounded-panel border border-civic-line bg-civic-wash p-3">
      <summary className="cursor-pointer font-semibold text-civic-text text-sm">
        {block ? 'Edit block' : 'Add block'}
      </summary>
      <form action={action} className="mt-4 grid gap-3">
        <input name="locale" type="hidden" value={locale} />
        <input name="pageId" type="hidden" value={page.id} />
        <input name="pageSlug" type="hidden" value={page.slug} />
        {block ? <input name="blockId" type="hidden" value={block.id} /> : null}
        {typeof insertPosition === 'number' ? (
          <input name="position" type="hidden" value={insertPosition} />
        ) : null}
        <label className="grid gap-2">
          <span className="font-semibold text-civic-text text-sm">Kind</span>
          <select
            className="focus-ring h-10 rounded-panel border border-civic-line bg-civic-paper px-3 text-civic-ink text-sm"
            defaultValue={block?.kind ?? 'paragraph'}
            name="kind"
          >
            {RESEARCH_BLOCK_KINDS.map((kind) => (
              <option key={kind} value={kind}>
                {kind}
              </option>
            ))}
          </select>
        </label>
        <ResearchInput
          defaultValue={content.title}
          label="Title"
          name="title"
        />
        <label className="grid gap-2">
          <span className="font-semibold text-civic-text text-sm">Text</span>
          <textarea
            className="focus-ring min-h-28 rounded-panel border border-civic-line bg-civic-paper px-3 py-2 text-civic-ink text-sm"
            defaultValue={content.text ?? content.relevance}
            name="text"
          />
        </label>
        <div className="grid gap-3 md:grid-cols-2">
          <ResearchInput defaultValue={content.url} label="URL" name="url" />
          <ResearchInput
            defaultValue={content.alt}
            label="Image alt"
            name="alt"
          />
          <ResearchInput
            defaultValue={content.caption}
            label="Image caption"
            name="caption"
          />
          <ResearchInput
            defaultValue={content.authors}
            label="Authors"
            name="authors"
          />
          <ResearchInput defaultValue={content.year} label="Year" name="year" />
          <ResearchInput
            defaultValue={content.institution}
            label="Institution"
            name="institution"
          />
        </div>
        <label className="grid gap-2">
          <span className="font-semibold text-civic-text text-sm">
            Source relevance
          </span>
          <textarea
            className="focus-ring min-h-20 rounded-panel border border-civic-line bg-civic-paper px-3 py-2 text-civic-ink text-sm"
            defaultValue={content.relevance}
            name="relevance"
          />
        </label>
        <button
          className="focus-ring inline-flex h-9 items-center justify-center rounded-panel bg-civic-action px-3 font-semibold text-civic-action-text text-sm"
          type="submit"
        >
          Save block
        </button>
      </form>
    </details>
  );
}

function DeleteResearchBlockForm({
  block,
  locale,
  page,
}: {
  block: ResearchBlock;
  locale: Locale;
  page: ResearchPage;
}) {
  return (
    <form action={deleteResearchBlock}>
      <input name="locale" type="hidden" value={locale} />
      <input name="pageSlug" type="hidden" value={page.slug} />
      <input name="blockId" type="hidden" value={block.id} />
      <button
        className="focus-ring inline-flex h-8 items-center rounded-panel border border-civic-line px-3 font-semibold text-civic-muted text-xs transition hover:border-civic-red hover:text-civic-red"
        type="submit"
      >
        Delete block
      </button>
    </form>
  );
}

function ResearchInput({
  defaultValue,
  label,
  name,
}: {
  defaultValue?: string;
  label: string;
  name: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="font-semibold text-civic-text text-sm">{label}</span>
      <input
        className="focus-ring h-10 rounded-panel border border-civic-line bg-civic-paper px-3 text-civic-ink text-sm"
        defaultValue={defaultValue}
        name={name}
        type="text"
      />
    </label>
  );
}
