create type public.constitution_note_status as enum ('approved', 'archived');
create type public.constitution_note_source as enum ('editorial', 'community');

create table public.constitution_documents (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  year text not null,
  short_label text not null,
  title text not null,
  source_title text not null,
  regime text not null,
  adopted_on text not null,
  summary text not null,
  source_url text not null,
  local_source_path text,
  source_storage_bucket text,
  source_storage_path text,
  source_sha256 text,
  position integer not null,
  revision_groups jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint constitution_documents_slug_check check (length(trim(slug)) > 0),
  constraint constitution_documents_position_check check (position >= 0)
);

create table public.constitution_document_notes (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references public.constitution_documents(id) on delete cascade,
  title text not null,
  text text not null,
  position integer not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (document_id, position),
  constraint constitution_document_notes_title_check check (length(trim(title)) > 0),
  constraint constitution_document_notes_text_check check (length(trim(text)) > 0),
  constraint constitution_document_notes_position_check check (position >= 0)
);

create table public.constitution_sections (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references public.constitution_documents(id) on delete cascade,
  source_key text not null,
  title text not null,
  position integer not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (document_id, source_key),
  constraint constitution_sections_source_key_check check (length(trim(source_key)) > 0),
  constraint constitution_sections_position_check check (position >= 0)
);

create table public.constitution_articles (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references public.constitution_documents(id) on delete cascade,
  section_id uuid not null references public.constitution_sections(id) on delete cascade,
  source_key text not null,
  title text not null,
  position integer not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (document_id, source_key),
  constraint constitution_articles_source_key_check check (length(trim(source_key)) > 0),
  constraint constitution_articles_position_check check (position >= 0)
);

create table public.constitution_paragraphs (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references public.constitution_articles(id) on delete cascade,
  position integer not null,
  text text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (article_id, position),
  constraint constitution_paragraphs_position_check check (position >= 0),
  constraint constitution_paragraphs_text_check check (length(trim(text)) > 0)
);

create table public.constitution_notes (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references public.constitution_articles(id) on delete cascade,
  title text not null,
  text text not null,
  status public.constitution_note_status not null default 'approved',
  source public.constitution_note_source not null default 'editorial',
  author_id uuid references public.profiles(id) on delete set null,
  approved_by uuid references public.profiles(id) on delete set null,
  position integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  approved_at timestamptz,
  unique (article_id, position),
  constraint constitution_notes_title_check check (length(trim(title)) > 0),
  constraint constitution_notes_text_check check (length(trim(text)) > 0),
  constraint constitution_notes_position_check check (position >= 0)
);

create index constitution_documents_position_idx
  on public.constitution_documents(position);
create index constitution_sections_document_position_idx
  on public.constitution_sections(document_id, position);
create index constitution_articles_section_position_idx
  on public.constitution_articles(section_id, position);
create index constitution_paragraphs_article_position_idx
  on public.constitution_paragraphs(article_id, position);
create index constitution_notes_article_position_idx
  on public.constitution_notes(article_id, position)
  where status = 'approved';

alter table public.constitution_documents enable row level security;
alter table public.constitution_document_notes enable row level security;
alter table public.constitution_sections enable row level security;
alter table public.constitution_articles enable row level security;
alter table public.constitution_paragraphs enable row level security;
alter table public.constitution_notes enable row level security;

create trigger constitution_documents_set_updated_at
before update on public.constitution_documents
for each row
execute function public.set_updated_at();

create trigger constitution_document_notes_set_updated_at
before update on public.constitution_document_notes
for each row
execute function public.set_updated_at();

create trigger constitution_sections_set_updated_at
before update on public.constitution_sections
for each row
execute function public.set_updated_at();

create trigger constitution_articles_set_updated_at
before update on public.constitution_articles
for each row
execute function public.set_updated_at();

create trigger constitution_paragraphs_set_updated_at
before update on public.constitution_paragraphs
for each row
execute function public.set_updated_at();

create trigger constitution_notes_set_updated_at
before update on public.constitution_notes
for each row
execute function public.set_updated_at();

create policy "Anyone can read constitution documents"
on public.constitution_documents
for select
to anon, authenticated
using (true);

create policy "Anyone can read constitution document notes"
on public.constitution_document_notes
for select
to anon, authenticated
using (true);

create policy "Anyone can read constitution sections"
on public.constitution_sections
for select
to anon, authenticated
using (true);

create policy "Anyone can read constitution articles"
on public.constitution_articles
for select
to anon, authenticated
using (true);

create policy "Anyone can read constitution paragraphs"
on public.constitution_paragraphs
for select
to anon, authenticated
using (true);

create policy "Anyone can read approved constitution notes"
on public.constitution_notes
for select
to anon, authenticated
using (status = 'approved');

alter table public.note_change_requests
  add column constitution_article_id uuid references public.constitution_articles(id) on delete set null;

alter table public.note_change_requests
  add constraint note_change_requests_target_note_id_fkey
  foreign key (target_note_id)
  references public.constitution_notes(id)
  on delete set null;

create index note_change_requests_constitution_article_idx
  on public.note_change_requests(constitution_article_id, status, created_at desc);
