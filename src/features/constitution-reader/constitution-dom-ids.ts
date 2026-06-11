export function getSectionDomId(documentId: string, sectionId: string) {
  return `${documentId}-${sectionId}`;
}

export function getArticleDomId(
  documentId: string,
  sectionId: string,
  articleId: string,
) {
  return `${documentId}-${sectionId}-${articleId}`;
}

export function getParagraphKey(
  documentId: string,
  sectionId: string,
  articleId: string,
  paragraph: string,
) {
  return `${documentId}-${getParagraphId(sectionId, articleId, paragraph)}`;
}

function getParagraphId(
  sectionId: string,
  articleId: string,
  paragraph: string,
) {
  let hash = 0;

  for (const char of paragraph) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return `${sectionId}-${articleId}-paragraph-${hash.toString(36)}`;
}
