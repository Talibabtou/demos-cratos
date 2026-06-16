export type ConstitutionNote = {
  authorId?: string;
  databaseId?: string;
  title: string;
  text: string;
};

export type ConstitutionParagraph = {
  databaseId: string;
  text: string;
};

export type ConstitutionArticle = {
  databaseId: string;
  id: string;
  title: string;
  paragraphs: readonly ConstitutionParagraph[];
  notes?: readonly ConstitutionNote[];
};

export type ConstitutionSection = {
  databaseId: string;
  id: string;
  title: string;
  articles: readonly ConstitutionArticle[];
};

export type RevisionGroup = {
  years: string;
  title: string;
  text: string;
};

export type ConstitutionDocumentSummary = {
  databaseId: string;
  id: string;
  year: string;
  shortLabel: string;
  title: string;
  sourceTitle: string;
  regime: string;
  date: string;
  summary: string;
  sourceUrl: string;
  localSourcePath?: string;
  revisionGroups: readonly RevisionGroup[];
};

export type ConstitutionDocument = ConstitutionDocumentSummary & {
  sections: readonly ConstitutionSection[];
  notes: readonly ConstitutionNote[];
};
