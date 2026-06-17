create type public.research_page_status as enum (
  'draft',
  'published',
  'archived'
);

create type public.research_block_kind as enum (
  'heading',
  'paragraph',
  'image',
  'source',
  'decision',
  'question'
);

create table public.research_pages (
  id uuid primary key default gen_random_uuid(),
  locale text not null default 'en',
  slug text not null,
  title text not null,
  description text not null default '',
  status public.research_page_status not null default 'draft',
  created_by uuid references public.profiles(id) on delete set null,
  updated_by uuid references public.profiles(id) on delete set null,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (locale, slug),
  constraint research_pages_locale_check check (locale in ('en', 'fr')),
  constraint research_pages_slug_check check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  constraint research_pages_title_check check (length(trim(title)) > 0)
);

create table public.research_blocks (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.research_pages(id) on delete cascade,
  position integer not null,
  kind public.research_block_kind not null,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (page_id, position),
  constraint research_blocks_position_check check (position >= 0)
);

create index research_pages_public_idx
  on public.research_pages(locale, status, slug);

create index research_blocks_page_position_idx
  on public.research_blocks(page_id, position);

alter table public.research_pages enable row level security;
alter table public.research_blocks enable row level security;

create trigger research_pages_set_updated_at
before update on public.research_pages
for each row
execute function public.set_updated_at();

create trigger research_blocks_set_updated_at
before update on public.research_blocks
for each row
execute function public.set_updated_at();

create policy "Anyone can read published research pages"
on public.research_pages
for select
to anon, authenticated
using (status = 'published');

create policy "Admins can read all research pages"
on public.research_pages
for select
to authenticated
using (public.has_app_role('admin'));

create policy "Admins can create research pages"
on public.research_pages
for insert
to authenticated
with check (
  public.has_app_role('admin')
  and created_by = (select auth.uid())
  and updated_by = (select auth.uid())
);

create policy "Admins can update research pages"
on public.research_pages
for update
to authenticated
using (public.has_app_role('admin'))
with check (
  public.has_app_role('admin')
  and updated_by = (select auth.uid())
);

create policy "Admins can delete research pages"
on public.research_pages
for delete
to authenticated
using (public.has_app_role('admin'));

create policy "Anyone can read published research blocks"
on public.research_blocks
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.research_pages page
    where page.id = research_blocks.page_id
      and page.status = 'published'
  )
);

create policy "Admins can read all research blocks"
on public.research_blocks
for select
to authenticated
using (public.has_app_role('admin'));

create policy "Admins can create research blocks"
on public.research_blocks
for insert
to authenticated
with check (public.has_app_role('admin'));

create policy "Admins can update research blocks"
on public.research_blocks
for update
to authenticated
using (public.has_app_role('admin'))
with check (public.has_app_role('admin'));

create policy "Admins can delete research blocks"
on public.research_blocks
for delete
to authenticated
using (public.has_app_role('admin'));

create or replace function public.insert_research_block(
  target_page_id uuid,
  target_position integer,
  block_kind public.research_block_kind,
  block_content jsonb
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  next_block_id uuid;
begin
  if not public.has_app_role('admin') then
    raise exception 'Only admins can insert research blocks.';
  end if;

  update public.research_blocks
  set position = position + 10000
  where page_id = target_page_id
    and position >= target_position;

  insert into public.research_blocks (page_id, position, kind, content)
  values (target_page_id, target_position, block_kind, block_content)
  returning id into next_block_id;

  update public.research_blocks
  set position = position - 9999
  where page_id = target_page_id
    and position >= target_position + 10000;

  return next_block_id;
end;
$$;
