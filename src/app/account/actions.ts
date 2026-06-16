'use server';

import { deleteCurrentAccountPendingNoteRequest } from '@/server/account/current-account';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { updateCurrentProfile } from '@/server/account/profile';

export async function updateProfile(locale: string, formData: FormData) {
  await updateCurrentProfile(formData);
  revalidatePath(`/${locale}/profile`);
}

export async function deletePendingNoteRequest(
  locale: string,
  formData: FormData,
) {
  const requestId = formData.get('requestId');
  const profilePath = `/${locale}/profile`;

  if (typeof requestId !== 'string') {
    redirect(profilePath);
  }

  await deleteCurrentAccountPendingNoteRequest(requestId);
  revalidatePath(profilePath);
  redirect(profilePath);
}
