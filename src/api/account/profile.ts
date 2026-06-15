import { createSupabaseServerClient } from '@api/supabase/server';

function normalizeProfileText(
  value: FormDataEntryValue | null,
  maxLength: number,
) {
  if (typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  return trimmed.slice(0, maxLength);
}

export async function updateCurrentProfile(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('You must be signed in to update your profile.');
  }

  const displayName = normalizeProfileText(formData.get('displayName'), 80);
  const bio = normalizeProfileText(formData.get('bio'), 420);

  const { error } = await supabase
    .from('profiles')
    .update({
      bio,
      display_name: displayName,
    })
    .eq('id', user.id);

  if (error) {
    throw new Error('Profile update failed.');
  }
}
