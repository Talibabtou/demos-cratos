alter table public.note_change_requests
  add column proposed_title text;

update public.note_change_requests
set proposed_title = 'Note'
where proposed_title is null;

alter table public.note_change_requests
  alter column proposed_title set not null;

alter table public.note_change_requests
  add constraint note_change_requests_proposed_title_check
  check (length(trim(proposed_title)) > 0);
