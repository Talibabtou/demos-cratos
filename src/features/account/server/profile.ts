import {
  PROFILE_BIO_MAX_LENGTH,
  PROFILE_DISPLAY_NAME_MAX_LENGTH,
} from '@/features/account/constants';
import { createSupabaseServerClient } from '@/server/supabase/server';

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

  const displayName = normalizeProfileText(
    formData.get('displayName'),
    PROFILE_DISPLAY_NAME_MAX_LENGTH,
  );
  const bio = normalizeProfileText(formData.get('bio'), PROFILE_BIO_MAX_LENGTH);

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
