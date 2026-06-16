drop policy if exists "Admins can read all constitution notes"
on public.constitution_notes;

create policy "Admins can read all constitution notes"
on public.constitution_notes
for select
to authenticated
using (public.has_app_role('admin'));
