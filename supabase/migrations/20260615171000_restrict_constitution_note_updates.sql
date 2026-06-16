drop policy if exists "Moderators can update constitution notes"
on public.constitution_notes;

create policy "Admins can update constitution notes"
on public.constitution_notes
for update
to authenticated
using (public.has_app_role('admin'))
with check (public.has_app_role('admin'));

create policy "Moderators can update their constitution notes"
on public.constitution_notes
for update
to authenticated
using (
  public.has_app_role('moderator')
  and author_id = (select auth.uid())
)
with check (
  public.has_app_role('moderator')
  and author_id = (select auth.uid())
);
