export function formatSectionTitle(title: string) {
  return title
    .replace(/^Titre\s+[^-–—]+[-–—]\s*/i, '')
    .replace(/^Chapitre\s+[^-–—]+[-–—]\s*/i, '')
    .trim();
}

export function formatArticleTitle(title: string) {
  const normalizedTitle = title.trim().replace(/\.$/, '');

  if (/^\d+/.test(normalizedTitle)) {
    return `Article ${normalizedTitle}`;
  }

  return normalizedTitle;
}

export function isGenericArticleTitle(title: string) {
  return title.trim().toLowerCase() === 'text';
}

export function isGenericSectionTitle(title: string) {
  return [
    "texte d'ouverture",
    'texte d’ouverture',
    'dispositions initiales',
  ].includes(title.trim().toLowerCase());
}
