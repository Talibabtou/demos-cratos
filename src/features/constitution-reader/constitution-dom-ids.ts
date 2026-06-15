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
