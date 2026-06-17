import type { Locale } from '@/i18n/routing';

export type ResearchPageStatus = 'archived' | 'draft' | 'published';

export type ResearchBlockKind =
  | 'decision'
  | 'heading'
  | 'image'
  | 'paragraph'
  | 'question'
  | 'source';

export type ResearchBlockContent = {
  alt?: string;
  authors?: string;
  caption?: string;
  institution?: string;
  label?: string;
  relevance?: string;
  text?: string;
  title?: string;
  url?: string;
  year?: string;
};

export type ResearchBlock = {
  content: ResearchBlockContent;
  id: string;
  kind: ResearchBlockKind;
  position: number;
};

export type ResearchPageSummary = {
  description: string;
  id: string;
  locale: Locale;
  slug: string;
  status: ResearchPageStatus;
  title: string;
};

export type ResearchPage = ResearchPageSummary & {
  blocks: ResearchBlock[];
};
