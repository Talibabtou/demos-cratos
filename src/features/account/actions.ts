'use server';

import { deleteCurrentAccountPendingNoteRequest } from '@/features/account/server/current-account';
import { updateCurrentProfile } from '@/features/account/server/profile';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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
