import {
  CONSTITUTION_CORPUS_CACHE_SECONDS,
  NOTE_CHANGE_STATUS,
  SUPABASE_PAGE_SIZE,
} from '@/features/constitution-reader/constants';
import { getSupabaseServerKey, getSupabaseUrl } from '@/server/supabase/config';
import { createSupabaseServerClient } from '@/server/supabase/server';
import type {
  ConstitutionArticle,
  ConstitutionDocument,
  ConstitutionDocumentSummary,
  ConstitutionNote,
  ConstitutionParagraph,
  ConstitutionSection,
  RevisionGroup,
} from '@/features/constitution-reader/types';
import { createClient } from '@supabase/supabase-js';
import { unstable_cache } from 'next/cache';

type DocumentRow = {
  id: string;
  slug: string;
  year: string;
  short_label: string;
  title: string;
  source_title: string;
  regime: string;
  adopted_on: string;
  summary: string;
  source_url: string;
  local_source_path: string | null;
  revision_groups: RevisionGroup[];
};

type DocumentNoteRow = {
  document_id: string;
  position: number;
  title: string;
  text: string;
};

type SectionRow = {
  id: string;
  document_id: string;
  position: number;
  source_key: string;
  title: string;
};

type ArticleRow = {
  id: string;
  document_id: string;
  position: number;
  section_id: string;
  source_key: string;
  title: string;
};

type ParagraphRow = {
  id: string;
  article_id: string;
  position: number;
  text: string;
};

type NoteRow = {
  author_id?: string | null;
  article_id: string;
  id?: string;
  position: number;
  title: string;
  text: string;
};

const emptyConstitutionDocumentSummaries: readonly ConstitutionDocumentSummary[] =
  [];
export const getConstitutionDocumentSummaries = unstable_cache(
  async () => {
    const supabase = createSupabasePublicCorpusClient();
    const documents = await fetchAllRows<DocumentRow>((from, to) =>
      supabase
        .from('constitution_documents')
        .select(
          'id, slug, year, short_label, title, source_title, regime, adopted_on, summary, source_url, local_source_path, revision_groups',
        )
        .order('position', { ascending: true })
        .range(from, to)
        .returns<DocumentRow[]>(),
    );

    return documents.length === 0
      ? emptyConstitutionDocumentSummaries
      : documents.map(mapConstitutionDocumentSummary);
  },
  ['constitution-document-summaries'],
  {
    revalidate: CONSTITUTION_CORPUS_CACHE_SECONDS,
    tags: ['constitution-corpus'],
  },
);

export async function getConstitutionDocument(documentSlug: string) {
  const document = await getConstitutionDocumentStructure(documentSlug);

  if (!document) {
    return null;
  }

  const articleIds = document.sections.flatMap((section) =>
    section.articles.map((article) => article.databaseId),
  );
  const notes = await getApprovedArticleNotes(articleIds);

  return attachArticleNotes(document, notes);
}

const getConstitutionDocumentStructure = unstable_cache(
  async (documentSlug: string) => {
    const supabase = createSupabasePublicCorpusClient();
    const { data: document, error: documentError } = await supabase
      .from('constitution_documents')
      .select(
        'id, slug, year, short_label, title, source_title, regime, adopted_on, summary, source_url, local_source_path, revision_groups',
      )
      .eq('slug', documentSlug)
      .maybeSingle<DocumentRow>();

    if (documentError) {
      throw new Error(
        `Constitution document query failed: ${documentError.message}`,
      );
    }

    if (!document) {
      return null;
    }

    const [documentNotes, sections, articles] = await Promise.all([
      fetchAllRows<DocumentNoteRow>((from, to) =>
        supabase
          .from('constitution_document_notes')
          .select('document_id, position, title, text')
          .eq('document_id', document.id)
          .order('position', { ascending: true })
          .range(from, to)
          .returns<DocumentNoteRow[]>(),
      ),
      fetchAllRows<SectionRow>((from, to) =>
        supabase
          .from('constitution_sections')
          .select('id, document_id, position, source_key, title')
          .eq('document_id', document.id)
          .order('position', { ascending: true })
          .range(from, to)
          .returns<SectionRow[]>(),
      ),
      fetchAllRows<ArticleRow>((from, to) =>
        supabase
          .from('constitution_articles')
          .select('id, document_id, position, section_id, source_key, title')
          .eq('document_id', document.id)
          .order('position', { ascending: true })
          .range(from, to)
          .returns<ArticleRow[]>(),
      ),
    ]);
    const articleIds = articles.map((article) => article.id);
    const paragraphs =
      articleIds.length === 0
        ? []
        : await fetchAllRows<ParagraphRow>((from, to) =>
            supabase
              .from('constitution_paragraphs')
              .select('id, article_id, position, text')
              .in('article_id', articleIds)
              .order('position', { ascending: true })
              .range(from, to)
              .returns<ParagraphRow[]>(),
          );

    return buildConstitutionDocuments({
      articles,
      documentNotes,
      documents: [document],
      notes: [],
      paragraphs,
      sections,
    })[0];
  },
  ['constitution-document-structure'],
  {
    revalidate: CONSTITUTION_CORPUS_CACHE_SECONDS,
    tags: ['constitution-corpus'],
  },
);

async function getApprovedArticleNotes(articleIds: readonly string[]) {
  if (articleIds.length === 0) {
    return [];
  }

  const supabase = await createSupabaseServerClient();

  return fetchAllRows<NoteRow>((from, to) =>
    supabase
      .from('constitution_notes')
      .select('id, article_id, author_id, position, title, text')
      .in('article_id', articleIds)
      .eq('status', NOTE_CHANGE_STATUS.approved)
      .order('position', { ascending: true })
      .range(from, to)
      .returns<NoteRow[]>(),
  );
}

function attachArticleNotes(
  document: ConstitutionDocument,
  notes: readonly NoteRow[],
): ConstitutionDocument {
  const notesByArticle = groupByPositioned([...notes], 'article_id');

  return {
    ...document,
    sections: document.sections.map((section) => ({
      ...section,
      articles: section.articles.map((article) => ({
        ...article,
        notes: (notesByArticle.get(article.databaseId) ?? []).map(
          mapConstitutionNote,
        ),
      })),
    })),
  };
}

function createSupabasePublicCorpusClient() {
  return createClient(getSupabaseUrl(), getSupabaseServerKey(), {
    auth: {
      persistSession: false,
    },
  });
}

async function fetchAllRows<T>(
  createQuery: (
    from: number,
    to: number,
  ) => PromiseLike<{
    data: T[] | null;
    error: { message: string } | null;
  }>,
) {
  const rows: T[] = [];

  for (let from = 0; ; from += SUPABASE_PAGE_SIZE) {
    const to = from + SUPABASE_PAGE_SIZE - 1;
    const { data, error } = await createQuery(from, to);

    if (error) {
      throw new Error(`Constitution corpus query failed: ${error.message}`);
    }

    const page = data ?? [];
    rows.push(...page);

    if (page.length < SUPABASE_PAGE_SIZE) {
      return rows;
    }
  }
}

function buildConstitutionDocuments({
  articles,
  documentNotes,
  documents,
  notes,
  paragraphs,
  sections,
}: {
  articles: ArticleRow[];
  documentNotes: DocumentNoteRow[];
  documents: DocumentRow[];
  notes: NoteRow[];
  paragraphs: ParagraphRow[];
  sections: SectionRow[];
}) {
  const documentNotesByDocument = groupByPositioned(
    documentNotes,
    'document_id',
  );
  const sectionsByDocument = groupByPositioned(sections, 'document_id');
  const articlesBySection = groupByPositioned(articles, 'section_id');
  const paragraphsByArticle = groupByPositioned(paragraphs, 'article_id');
  const notesByArticle = groupByPositioned(notes, 'article_id');

  return documents.map((document): ConstitutionDocument => {
    const documentSections = sectionsByDocument.get(document.id) ?? [];

    return {
      notes: (documentNotesByDocument.get(document.id) ?? []).map(
        mapConstitutionNote,
      ),
      sections: documentSections.map((section): ConstitutionSection => {
        const sectionArticles = articlesBySection.get(section.id) ?? [];

        return {
          articles: sectionArticles.map((article): ConstitutionArticle => {
            const articleParagraphs = paragraphsByArticle.get(article.id) ?? [];
            const articleNotes = notesByArticle.get(article.id) ?? [];

            return {
              databaseId: article.id,
              id: article.source_key,
              notes: articleNotes.map(mapConstitutionNote),
              paragraphs: articleParagraphs.map(mapConstitutionParagraph),
              title: article.title,
            };
          }),
          databaseId: section.id,
          id: section.source_key,
          title: section.title,
        };
      }),
      ...mapConstitutionDocumentSummary(document),
    };
  });
}

function mapConstitutionDocumentSummary(
  document: DocumentRow,
): ConstitutionDocumentSummary {
  return {
    databaseId: document.id,
    date: document.adopted_on,
    id: document.slug,
    localSourcePath: document.local_source_path ?? undefined,
    regime: document.regime,
    revisionGroups: document.revision_groups,
    shortLabel: document.short_label,
    sourceTitle: document.source_title,
    sourceUrl: document.source_url,
    summary: document.summary,
    title: document.title,
    year: document.year,
  };
}

function mapConstitutionNote(
  note: DocumentNoteRow | NoteRow,
): ConstitutionNote {
  return {
    authorId: 'author_id' in note ? (note.author_id ?? undefined) : undefined,
    databaseId: 'id' in note ? note.id : undefined,
    text: note.text,
    title: note.title,
  };
}

function mapConstitutionParagraph(
  paragraph: ParagraphRow,
): ConstitutionParagraph {
  return {
    databaseId: paragraph.id,
    text: paragraph.text,
  };
}

function groupByPositioned<
  T extends Record<K, string> & { position: number },
  K extends keyof T,
>(rows: T[], key: K) {
  const grouped = new Map<string, T[]>();

  for (const row of rows) {
    const groupKey = row[key];
    const groupRows = grouped.get(groupKey) ?? [];

    groupRows.push(row);
    grouped.set(groupKey, groupRows);
  }

  for (const groupRows of grouped.values()) {
    groupRows.sort((left, right) => left.position - right.position);
  }

  return grouped;
}
