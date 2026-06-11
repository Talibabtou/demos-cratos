'use client';

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from 'react';
import {
  createReaderNote,
  getReaderNoteTargetKey,
  readStoredReaderNotes,
  type ReaderNote,
  type ReaderNotesByTarget,
  type ReaderNoteTarget,
  subscribeToStoredReaderNotes,
  updateReaderNote,
  writeStoredReaderNotes,
} from '@/features/constitution-reader/reader-notes';

type ReaderNotesContextValue = {
  addNote: (
    target: ReaderNoteTarget,
    note: Pick<ReaderNote, 'text' | 'title'>,
  ) => void;
  deleteNote: (target: ReaderNoteTarget, noteId: string) => void;
  getNotes: (target: ReaderNoteTarget) => readonly ReaderNote[];
  updateNote: (
    target: ReaderNoteTarget,
    noteId: string,
    note: Pick<ReaderNote, 'text' | 'title'>,
  ) => void;
};

const ReaderNotesContext = createContext<ReaderNotesContextValue | null>(null);
const emptyReaderNotes: ReaderNotesByTarget = {};
const emptyReaderNoteList: readonly ReaderNote[] = [];

export function ReaderNotesProvider({ children }: { children: ReactNode }) {
  const notesByTarget = useSyncExternalStore(
    subscribeToStoredReaderNotes,
    readStoredReaderNotes,
    () => emptyReaderNotes,
  );

  const persistNotes = useCallback((nextNotesByTarget: ReaderNotesByTarget) => {
    writeStoredReaderNotes(nextNotesByTarget);
  }, []);

  const getNotes = useCallback(
    (target: ReaderNoteTarget) =>
      notesByTarget[getReaderNoteTargetKey(target)] ?? emptyReaderNoteList,
    [notesByTarget],
  );

  const addNote = useCallback(
    (target: ReaderNoteTarget, note: Pick<ReaderNote, 'text' | 'title'>) => {
      const targetKey = getReaderNoteTargetKey(target);
      const existingNotes = notesByTarget[targetKey] ?? [];

      persistNotes({
        ...notesByTarget,
        [targetKey]: [...existingNotes, createReaderNote(note)],
      });
    },
    [notesByTarget, persistNotes],
  );

  const updateNote = useCallback(
    (
      target: ReaderNoteTarget,
      noteId: string,
      note: Pick<ReaderNote, 'text' | 'title'>,
    ) => {
      const targetKey = getReaderNoteTargetKey(target);
      const existingNotes = notesByTarget[targetKey] ?? [];
      const nextNotes = existingNotes.map((existingNote) =>
        existingNote.id === noteId
          ? updateReaderNote(existingNote, note)
          : existingNote,
      );

      persistNotes({
        ...notesByTarget,
        [targetKey]: nextNotes,
      });
    },
    [notesByTarget, persistNotes],
  );

  const deleteNote = useCallback(
    (target: ReaderNoteTarget, noteId: string) => {
      const targetKey = getReaderNoteTargetKey(target);
      const nextNotes = (notesByTarget[targetKey] ?? []).filter(
        (note) => note.id !== noteId,
      );
      const nextNotesByTarget = { ...notesByTarget };

      if (nextNotes.length > 0) {
        nextNotesByTarget[targetKey] = nextNotes;
      } else {
        delete nextNotesByTarget[targetKey];
      }

      persistNotes(nextNotesByTarget);
    },
    [notesByTarget, persistNotes],
  );

  const contextValue = useMemo(
    () => ({
      addNote,
      deleteNote,
      getNotes,
      updateNote,
    }),
    [addNote, deleteNote, getNotes, updateNote],
  );

  return (
    <ReaderNotesContext.Provider value={contextValue}>
      {children}
    </ReaderNotesContext.Provider>
  );
}

export function useReaderNotes() {
  const contextValue = useContext(ReaderNotesContext);

  if (!contextValue) {
    throw new Error('useReaderNotes must be used inside ReaderNotesProvider.');
  }

  return contextValue;
}
