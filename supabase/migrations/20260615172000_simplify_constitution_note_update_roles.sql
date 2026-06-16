drop policy if exists "Admins can update constitution notes"
on public.constitution_notes;

drop policy if exists "Moderators can update their constitution notes"
on public.constitution_notes;

drop policy if exists "Moderators can create constitution notes"
on public.constitution_notes;

drop policy if exists "Admins can create constitution notes"
on public.constitution_notes;

drop policy if exists "Admins can read all constitution notes"
on public.constitution_notes;

create policy "Admins can read all constitution notes"
on public.constitution_notes
for select
to authenticated
using (public.has_app_role('admin'));

create policy "Admins can create constitution notes"
on public.constitution_notes
for insert
to authenticated
with check (
  public.has_app_role('admin')
  and author_id = (select auth.uid())
  and status = 'approved'
);

create policy "Admins can update all constitution notes"
on public.constitution_notes
for update
to authenticated
using (public.has_app_role('admin'))
with check (public.has_app_role('admin'));
