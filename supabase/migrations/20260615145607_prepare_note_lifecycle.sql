alter table public.note_change_requests
  alter column proposed_text drop not null;

alter table public.note_change_requests
  drop constraint if exists note_change_requests_proposed_text_check;

alter table public.note_change_requests
  add constraint note_change_requests_proposed_text_check
  check (
    kind = 'delete'
    or (
      proposed_text is not null
      and length(trim(proposed_text)) > 0
    )
  );

update public.constitution_notes notes
set
  author_id = owner_profile.id,
  approved_by = coalesce(notes.approved_by, owner_profile.id),
  approved_at = coalesce(notes.approved_at, notes.created_at, now()),
  source = 'editorial'
from public.profiles owner_profile
where owner_profile.email = 'talibabtou@gmail.com'
  and notes.author_id is null;

create index if not exists constitution_notes_author_created_idx
  on public.constitution_notes(author_id, created_at desc);

create index if not exists constitution_notes_status_created_idx
  on public.constitution_notes(status, created_at desc);

create policy "Moderators can create constitution notes"
on public.constitution_notes
for insert
to authenticated
with check (
  (public.has_app_role('moderator') or public.has_app_role('admin'))
  and author_id = (select auth.uid())
  and status = 'approved'
);

create policy "Moderators can update constitution notes"
on public.constitution_notes
for update
to authenticated
using (public.has_app_role('moderator') or public.has_app_role('admin'))
with check (public.has_app_role('moderator') or public.has_app_role('admin'));

create policy "Moderators can create reviewed note requests"
on public.note_change_requests
for insert
to authenticated
with check (
  (public.has_app_role('moderator') or public.has_app_role('admin'))
  and requester_id = (select auth.uid())
  and reviewer_id = (select auth.uid())
  and status in ('approved', 'rejected', 'changes_requested')
  and reviewed_at is not null
);
