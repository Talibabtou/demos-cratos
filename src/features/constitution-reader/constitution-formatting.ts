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

export function isArticleSectionTitle(title: string) {
  return /^article\s+/i.test(title.trim());
}

export function hasSameConstitutionTitle(left: string, right: string) {
  return normalizeConstitutionTitle(left) === normalizeConstitutionTitle(right);
}

function normalizeConstitutionTitle(title: string) {
  return formatSectionTitle(title).trim().replace(/\.$/, '').toLowerCase();
}
