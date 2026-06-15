'use server';

import { createConstitutionNoteRequest } from '@api/constitution-reader/note-requests';
import { revalidatePath } from 'next/cache';

export async function createNoteChangeRequest({
  articleDatabaseId,
  articleId,
  documentId,
  text,
  title,
}: {
  articleDatabaseId: string;
  articleId: string;
  documentId: string;
  text: string;
  title: string;
}) {
  const result = await createConstitutionNoteRequest({
    articleDatabaseId,
    articleId,
    documentId,
    text,
    title,
  });

  if (result.ok) {
    revalidatePath('/fr/profile');
    revalidatePath('/en/profile');
  }

  return result;
}
