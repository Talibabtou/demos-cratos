create policy "Users can delete their pending note requests"
on public.note_change_requests
for delete
to authenticated
using (
  (select auth.uid()) = requester_id
  and status = 'pending'
);
