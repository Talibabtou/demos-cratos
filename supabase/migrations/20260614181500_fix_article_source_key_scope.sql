alter table public.constitution_articles
  drop constraint if exists constitution_articles_document_id_source_key_key;

alter table public.constitution_articles
  add constraint constitution_articles_section_id_source_key_key
  unique (section_id, source_key);
