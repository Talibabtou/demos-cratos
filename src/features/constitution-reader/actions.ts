'use server';

import { NOTE_CHANGE_KIND, PROFILE_REVALIDATE_PATHS } from '@/constants';
import { submitConstitutionNoteChange } from '@/features/constitution-reader/server/notes';
import { revalidatePath } from 'next/cache';

export async function createNoteChangeRequest({
  articleDatabaseId,
  text,
  title,
}: {
  articleDatabaseId: string;
  text: string;
  title: string;
}) {
  const result = await submitConstitutionNoteChange({
    articleDatabaseId,
    kind: NOTE_CHANGE_KIND.create,
    text,
    title,
  });

  if (result.ok) {
    revalidateConstitutionReaderProfilePaths();
  }

  return result;
}

export async function updateNoteChangeRequest({
  noteId,
  text,
  title,
}: {
  noteId: string;
  text: string;
  title: string;
}) {
  const result = await submitConstitutionNoteChange({
    kind: NOTE_CHANGE_KIND.update,
    noteId,
    text,
    title,
  });

  if (result.ok) {
    revalidateConstitutionReaderProfilePaths();
  }

  return result;
}

export async function deleteNoteChangeRequest({ noteId }: { noteId: string }) {
  const result = await submitConstitutionNoteChange({
    kind: NOTE_CHANGE_KIND.delete,
    noteId,
  });

  if (result.ok) {
    revalidateConstitutionReaderProfilePaths();
  }

  return result;
}

function revalidateConstitutionReaderProfilePaths() {
  for (const path of PROFILE_REVALIDATE_PATHS) {
    revalidatePath(path);
  }
}
