import {
  readJsonStorageValue,
  subscribeToJsonStorageValue,
  writeJsonStorageValue,
} from '@/lib/local-storage-json';

export type ReaderNoteTarget = {
  articleId: string;
  documentId: string;
  sectionId: string;
};

export type ReaderNote = {
  id: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export type ReaderNotesByTarget = Record<string, ReaderNote[]>;

export const constitutionReaderStorageKey = 'demos-cratos:constitution-reader';
const constitutionReaderChangeEvent = 'demos-cratos:constitution-reader-change';
const emptyReaderNotes: ReaderNotesByTarget = {};

type StoredConstitutionReader = {
  version: 1;
  notesByTarget: ReaderNotesByTarget;
};

let cachedRawValue: string | null = null;
let cachedNotesByTarget: ReaderNotesByTarget = emptyReaderNotes;

export function getReaderNoteTargetKey({
  articleId,
  documentId,
  sectionId,
}: ReaderNoteTarget) {
  return `${documentId}/${sectionId}/${articleId}`;
}

export function createReaderNote({
  text,
  title,
}: {
  text: string;
  title: string;
}): ReaderNote {
  const now = new Date().toISOString();

  return {
    id: createReaderNoteId(),
    title,
    text,
    createdAt: now,
    updatedAt: now,
  };
}

export function updateReaderNote(
  note: ReaderNote,
  nextValues: Pick<ReaderNote, 'text' | 'title'>,
): ReaderNote {
  return {
    ...note,
    ...nextValues,
    updatedAt: new Date().toISOString(),
  };
}

function createReaderNoteId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `reader-note-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

export function readStoredReaderNotes(): ReaderNotesByTarget {
  if (typeof window === 'undefined') {
    return emptyReaderNotes;
  }

  let rawValue: string | null = null;

  try {
    rawValue = window.localStorage.getItem(constitutionReaderStorageKey);
  } catch {
    cachedNotesByTarget = emptyReaderNotes;
    return cachedNotesByTarget;
  }

  if (rawValue === cachedRawValue) {
    return cachedNotesByTarget;
  }

  cachedRawValue = rawValue;

  const storedValue = readJsonStorageValue<Partial<StoredConstitutionReader>>(
    constitutionReaderStorageKey,
    {},
  );

  if (storedValue.version !== 1 || !storedValue.notesByTarget) {
    cachedNotesByTarget = emptyReaderNotes;
    return cachedNotesByTarget;
  }

  cachedNotesByTarget = storedValue.notesByTarget;
  return cachedNotesByTarget;
}

export function writeStoredReaderNotes(notesByTarget: ReaderNotesByTarget) {
  if (typeof window === 'undefined') {
    return;
  }

  const storedNotes: StoredConstitutionReader = {
    version: 1,
    notesByTarget,
  };

  cachedRawValue = JSON.stringify(storedNotes);
  cachedNotesByTarget = notesByTarget;
  writeJsonStorageValue({
    changeEvent: constitutionReaderChangeEvent,
    storageKey: constitutionReaderStorageKey,
    value: storedNotes,
  });
}

export function subscribeToStoredReaderNotes(onStoreChange: () => void) {
  return subscribeToJsonStorageValue({
    changeEvent: constitutionReaderChangeEvent,
    onStoreChange,
    storageKey: constitutionReaderStorageKey,
  });
}
