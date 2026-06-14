create type public.app_role as enum ('moderator', 'admin');
create type public.note_change_request_status as enum (
  'pending',
  'approved',
  'rejected',
  'changes_requested'
);

create type public.note_change_request_kind as enum (
  'create',
  'update',
  'delete'
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  avatar_url text,
  bio text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.user_roles (
  user_id uuid not null references public.profiles(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  primary key (user_id, role)
);

create table public.note_change_requests (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references public.profiles(id) on delete cascade,
  reviewer_id uuid references public.profiles(id) on delete set null,
  document_slug text not null,
  article_id text not null,
  target_note_id uuid,
  kind public.note_change_request_kind not null,
  status public.note_change_request_status not null default 'pending',
  proposed_text text not null,
  moderator_comment text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  reviewed_at timestamptz,
  constraint note_change_requests_document_slug_check
    check (length(trim(document_slug)) > 0),
  constraint note_change_requests_article_id_check
    check (length(trim(article_id)) > 0),
  constraint note_change_requests_proposed_text_check
    check (length(trim(proposed_text)) > 0)
);

create index profiles_email_idx on public.profiles(email);
create index user_roles_role_idx on public.user_roles(role);
create index note_change_requests_requester_status_idx
  on public.note_change_requests(requester_id, status, created_at desc);
create index note_change_requests_moderation_queue_idx
  on public.note_change_requests(status, created_at desc)
  where status = 'pending';
create index note_change_requests_article_idx
  on public.note_change_requests(document_slug, article_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.note_change_requests enable row level security;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

create trigger note_change_requests_set_updated_at
before update on public.note_change_requests
for each row
execute function public.set_updated_at();

create or replace function public.prevent_profile_identity_changes()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.id <> old.id
    or new.email <> old.email
    or new.created_at <> old.created_at
  then
    raise exception 'Profile identity fields cannot be changed.';
  end if;

  return new;
end;
$$;

create trigger profiles_prevent_identity_changes
before update on public.profiles
for each row
execute function public.prevent_profile_identity_changes();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, email, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.email, ''),
    nullif(new.raw_user_meta_data ->> 'full_name', ''),
    nullif(new.raw_user_meta_data ->> 'avatar_url', '')
  );

  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

create policy "Users can read their own profile"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = id);

create policy "Users can update their own profile basics"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

create policy "Users can read their own roles"
on public.user_roles
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Admins can read all roles"
on public.user_roles
for select
to authenticated
using (
  exists (
    select 1
    from public.user_roles viewer_roles
    where viewer_roles.user_id = (select auth.uid())
      and viewer_roles.role = 'admin'
  )
);

create or replace function public.has_app_role(required_role public.app_role)
returns boolean
language sql
security definer
stable
set search_path = ''
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = (select auth.uid())
      and role = required_role
  );
$$;

create policy "Users can create their own note requests"
on public.note_change_requests
for insert
to authenticated
with check (
  (select auth.uid()) = requester_id
  and status = 'pending'
  and reviewer_id is null
  and moderator_comment is null
  and reviewed_at is null
);

create policy "Users can read their own note requests"
on public.note_change_requests
for select
to authenticated
using ((select auth.uid()) = requester_id);

create policy "Moderators can read note requests"
on public.note_change_requests
for select
to authenticated
using (public.has_app_role('moderator') or public.has_app_role('admin'));

create policy "Moderators can review note requests"
on public.note_change_requests
for update
to authenticated
using (public.has_app_role('moderator') or public.has_app_role('admin'))
with check (public.has_app_role('moderator') or public.has_app_role('admin'));
