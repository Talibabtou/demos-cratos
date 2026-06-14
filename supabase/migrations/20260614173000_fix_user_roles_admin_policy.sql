drop policy if exists "Admins can read all roles" on public.user_roles;

create policy "Admins can read all roles"
on public.user_roles
for select
to authenticated
using (public.has_app_role('admin'));
