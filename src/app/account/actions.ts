'use server';

import { updateCurrentProfile } from '@api/account/profile';
import { revalidatePath } from 'next/cache';

export async function updateProfile(locale: string, formData: FormData) {
  await updateCurrentProfile(formData);
  revalidatePath(`/${locale}/profile`);
}
