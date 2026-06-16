with owner_user as (
  select profiles.id
  from public.profiles
  where profiles.email = 'talibabtou@gmail.com'
  union
  select users.id
  from auth.users
  where users.email = 'talibabtou@gmail.com'
)
delete from public.user_roles
where role = 'moderator'
  and user_id in (select id from owner_user);

with owner_user as (
  select profiles.id
  from public.profiles
  where profiles.email = 'talibabtou@gmail.com'
  union
  select users.id
  from auth.users
  where users.email = 'talibabtou@gmail.com'
)
insert into public.user_roles (user_id, role)
select id, 'admin'
from owner_user
on conflict (user_id, role) do nothing;
