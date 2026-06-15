with target_articles as (
  select article.id
  from public.constitution_articles article
  join public.constitution_documents document
    on document.id = article.document_id
  where document.slug = 'charte-constitutionnelle-du-14-aout-1830'
    and article.source_key = 'a-60'
)
update public.constitution_articles article
set title = 'Article 60.'
from target_articles
where article.id = target_articles.id;

with target_paragraphs as (
  select paragraph.id
  from public.constitution_paragraphs paragraph
  join public.constitution_articles article
    on article.id = paragraph.article_id
  join public.constitution_documents document
    on document.id = article.document_id
  where document.slug = 'charte-constitutionnelle-du-14-aout-1830'
    and article.source_key = 'a-60'
    and paragraph.position = 0
)
update public.constitution_paragraphs paragraph
set text = regexp_replace(text, '^o\\.\\s*-\\s*', '')
from target_paragraphs
where paragraph.id = target_paragraphs.id;

with target_articles as (
  select article.id
  from public.constitution_articles article
  join public.constitution_documents document
    on document.id = article.document_id
  where document.slug = 'constitution-de-l-an-xii-empire-28-floreal-an-xii'
    and article.source_key = 'a-80'
)
update public.constitution_articles article
set title = 'Article 80.'
from target_articles
where article.id = target_articles.id;

with target_paragraphs as (
  select paragraph.id
  from public.constitution_paragraphs paragraph
  join public.constitution_articles article
    on article.id = paragraph.article_id
  join public.constitution_documents document
    on document.id = article.document_id
  where document.slug = 'constitution-de-l-an-xii-empire-28-floreal-an-xii'
    and article.source_key = 'a-80'
    and paragraph.position = 0
)
update public.constitution_paragraphs paragraph
set text = regexp_replace(text, '^o\\.\\s*-\\s*', '')
from target_paragraphs
where paragraph.id = target_paragraphs.id;

with target_articles as (
  select article.id
  from public.constitution_articles article
  join public.constitution_documents document
    on document.id = article.document_id
  where document.slug = 'constitution-du-16-thermidor-an-x'
    and article.source_key = 'a-86'
)
update public.constitution_articles article
set title = 'Article 80.'
from target_articles
where article.id = target_articles.id;

with target_paragraphs as (
  select paragraph.id
  from public.constitution_paragraphs paragraph
  join public.constitution_articles article
    on article.id = paragraph.article_id
  join public.constitution_documents document
    on document.id = article.document_id
  where document.slug = 'constitution-du-16-thermidor-an-x'
    and article.source_key = 'a-86'
    and paragraph.position = 0
)
update public.constitution_paragraphs paragraph
set text = regexp_replace(text, '^o\\.\\s*-\\s*', '')
from target_paragraphs
where paragraph.id = target_paragraphs.id;

with target_articles as (
  select article.id
  from public.constitution_articles article
  join public.constitution_documents document
    on document.id = article.document_id
  where document.slug = 'constitution-du-16-thermidor-an-x'
    and article.source_key = 'a-87'
)
update public.constitution_articles article
set title = 'Article 81.'
from target_articles
where article.id = target_articles.id;

with target_paragraphs as (
  select paragraph.id
  from public.constitution_paragraphs paragraph
  join public.constitution_articles article
    on article.id = paragraph.article_id
  join public.constitution_documents document
    on document.id = article.document_id
  where document.slug = 'constitution-du-16-thermidor-an-x'
    and article.source_key = 'a-87'
    and paragraph.position = 0
)
update public.constitution_paragraphs paragraph
set text = regexp_replace(text, '^I\\.\\s*-\\s*', '')
from target_paragraphs
where paragraph.id = target_paragraphs.id;
