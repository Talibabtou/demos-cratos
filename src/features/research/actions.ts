'use server';

import {
  RESEARCH_BLOCK_KINDS,
  RESEARCH_PAGE_STATUSES,
} from '@/features/research/constants';
import { requireResearchAdmin } from '@/features/research/server/research';
import type {
  ResearchBlockContent,
  ResearchBlockKind,
  ResearchPageStatus,
} from '@/features/research/types';
import { isLocale, type Locale } from '@/i18n/routing';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

function readRequiredText(formData: FormData, name: string) {
  const value = formData.get(name);

  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${name} is required.`);
  }

  return value.trim();
}

function readText(formData: FormData, name: string) {
  const value = formData.get(name);

  return typeof value === 'string' ? value.trim() : '';
}

function readLocale(formData: FormData): Locale {
  const locale = readRequiredText(formData, 'locale');

  if (!isLocale(locale)) {
    throw new Error('Invalid locale.');
  }

  return locale;
}

function readPageStatus(formData: FormData): ResearchPageStatus {
  const status = readRequiredText(formData, 'status');

  if (!RESEARCH_PAGE_STATUSES.includes(status as ResearchPageStatus)) {
    throw new Error('Invalid research page status.');
  }

  return status as ResearchPageStatus;
}

function readBlockKind(formData: FormData): ResearchBlockKind {
  const kind = readRequiredText(formData, 'kind');

  if (!RESEARCH_BLOCK_KINDS.includes(kind as ResearchBlockKind)) {
    throw new Error('Invalid research block type.');
  }

  return kind as ResearchBlockKind;
}

function getBlockContent(kind: ResearchBlockKind, formData: FormData) {
  const text = readText(formData, 'text');
  const content: ResearchBlockContent = {};

  if (['decision', 'heading', 'paragraph', 'question'].includes(kind)) {
    content.text = text;
  }

  if (kind === 'source') {
    content.authors = readText(formData, 'authors');
    content.institution = readText(formData, 'institution');
    content.relevance = readText(formData, 'relevance');
    content.title = readRequiredText(formData, 'title');
    content.url = readText(formData, 'url');
    content.year = readText(formData, 'year');
  }

  if (kind === 'image') {
    content.alt = readText(formData, 'alt');
    content.caption = readText(formData, 'caption');
    content.url = readRequiredText(formData, 'url');
  }

  if ('text' in content && !content.text) {
    throw new Error('Text is required.');
  }

  return content;
}

export async function createResearchPage(formData: FormData) {
  const { supabase, userId } = await requireResearchAdmin();
  const locale = readLocale(formData);
  const slug = readRequiredText(formData, 'slug');
  const status = readPageStatus(formData);

  const { error } = await supabase.from('research_pages').insert({
    created_by: userId,
    description: readText(formData, 'description'),
    locale,
    published_at: status === 'published' ? new Date().toISOString() : null,
    slug,
    status,
    title: readRequiredText(formData, 'title'),
    updated_by: userId,
  });

  if (error) {
    throw new Error('Research page creation failed.');
  }

  revalidateResearch(locale);
  redirect(`/${locale}/research/${slug}`);
}

export async function updateResearchPage(formData: FormData) {
  const { supabase, userId } = await requireResearchAdmin();
  const locale = readLocale(formData);
  const pageId = readRequiredText(formData, 'pageId');
  const slug = readRequiredText(formData, 'slug');
  const status = readPageStatus(formData);

  const { error } = await supabase
    .from('research_pages')
    .update({
      description: readText(formData, 'description'),
      published_at: status === 'published' ? new Date().toISOString() : null,
      slug,
      status,
      title: readRequiredText(formData, 'title'),
      updated_by: userId,
    })
    .eq('id', pageId);

  if (error) {
    throw new Error('Research page update failed.');
  }

  revalidateResearch(locale);
  redirect(`/${locale}/research/${slug}`);
}

export async function deleteResearchPage(formData: FormData) {
  const { supabase } = await requireResearchAdmin();
  const locale = readLocale(formData);
  const pageId = readRequiredText(formData, 'pageId');

  const { error } = await supabase
    .from('research_pages')
    .delete()
    .eq('id', pageId);

  if (error) {
    throw new Error('Research page deletion failed.');
  }

  revalidateResearch(locale);
  redirect(`/${locale}/research`);
}

export async function createResearchBlock(formData: FormData) {
  const { supabase } = await requireResearchAdmin();
  const locale = readLocale(formData);
  const pageId = readRequiredText(formData, 'pageId');
  const pageSlug = readRequiredText(formData, 'pageSlug');
  const kind = readBlockKind(formData);
  const position = Number(readRequiredText(formData, 'position'));

  if (!Number.isInteger(position) || position < 0) {
    throw new Error('Invalid block position.');
  }

  const { error } = await supabase.rpc('insert_research_block', {
    block_content: getBlockContent(kind, formData),
    block_kind: kind,
    target_page_id: pageId,
    target_position: position,
  });

  if (error) {
    throw new Error('Research block creation failed.');
  }

  revalidateResearch(locale);
  redirect(`/${locale}/research/${pageSlug}`);
}

export async function updateResearchBlock(formData: FormData) {
  const { supabase } = await requireResearchAdmin();
  const locale = readLocale(formData);
  const pageSlug = readRequiredText(formData, 'pageSlug');
  const blockId = readRequiredText(formData, 'blockId');
  const kind = readBlockKind(formData);

  const { error } = await supabase
    .from('research_blocks')
    .update({
      content: getBlockContent(kind, formData),
      kind,
    })
    .eq('id', blockId);

  if (error) {
    throw new Error('Research block update failed.');
  }

  revalidateResearch(locale);
  redirect(`/${locale}/research/${pageSlug}`);
}

export async function deleteResearchBlock(formData: FormData) {
  const { supabase } = await requireResearchAdmin();
  const locale = readLocale(formData);
  const pageSlug = readRequiredText(formData, 'pageSlug');
  const blockId = readRequiredText(formData, 'blockId');

  const { error } = await supabase
    .from('research_blocks')
    .delete()
    .eq('id', blockId);

  if (error) {
    throw new Error('Research block deletion failed.');
  }

  revalidateResearch(locale);
  redirect(`/${locale}/research/${pageSlug}`);
}

function revalidateResearch(locale: Locale) {
  revalidatePath(`/${locale}/research`);
  revalidatePath(`/${locale}/research/[slug]`, 'page');
}
