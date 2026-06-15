update public.constitution_articles article
set title = section.title
from public.constitution_sections section
where article.section_id = section.id
  and lower(trim(article.title)) = 'text'
  and section.title ~* '^article[[:space:]]+';
