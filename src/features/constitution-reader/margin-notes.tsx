'use client';

import { Check, Pencil, Plus, Trash2, X } from 'lucide-react';
import { type FormEvent, useState } from 'react';
import type { ConstitutionNote } from '@/features/constitution-reader/constitution-corpus';
import type {
  ReaderNote,
  ReaderNoteTarget,
} from '@/features/constitution-reader/reader-notes';
import { useReaderNotes } from '@/features/constitution-reader/reader-notes-provider';

type MarginNotesProps = {
  sourceNotes: readonly ConstitutionNote[];
  target: ReaderNoteTarget;
};

type NoteFormValues = Pick<ReaderNote, 'text' | 'title'>;

const emptyDraft: NoteFormValues = {
  text: '',
  title: '',
};

export function MarginNotes({ sourceNotes, target }: MarginNotesProps) {
  const { addNote, deleteNote, getNotes, updateNote } = useReaderNotes();
  const readerNotes = getNotes(target);
  const hasNotes = sourceNotes.length > 0 || readerNotes.length > 0;
  const [draft, setDraft] = useState<NoteFormValues>(emptyDraft);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [isComposing, setIsComposing] = useState(false);

  const onAddNote = (values: NoteFormValues) => {
    addNote(target, values);
    setDraft(emptyDraft);
    setIsComposing(false);
  };

  const onUpdateNote = (noteId: string, values: NoteFormValues) => {
    updateNote(target, noteId, values);
    setEditingNoteId(null);
  };

  return (
    <aside className="mt-8 lg:mt-1">
      <div className="sticky top-24 max-h-[calc(100svh-7rem)] space-y-3 overflow-auto pr-2">
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold text-civic-muted text-xs uppercase tracking-[0.12em]">
            Notes
          </p>
          {isComposing ? null : (
            <button
              className="focus-ring inline-flex size-7 items-center justify-center rounded-sm text-civic-muted transition hover:bg-civic-paper hover:text-civic-blue"
              onClick={() => setIsComposing(true)}
              type="button"
            >
              <span className="sr-only">Add note</span>
              <Plus aria-hidden="true" className="size-4" strokeWidth={2} />
            </button>
          )}
        </div>
        {hasNotes ? null : (
          <p className="border-civic-line border-l pl-4 text-civic-muted text-sm leading-6">
            No public note has been written for this article yet.
          </p>
        )}
        {sourceNotes.map((note) => (
          <details
            className="border-civic-line border-l py-1 pl-4"
            key={note.title}
            open
          >
            <summary className="cursor-pointer font-semibold text-civic-ink text-sm">
              {note.title}
            </summary>
            <p className="mt-2 text-civic-text text-sm leading-6">
              {note.text}
            </p>
          </details>
        ))}
        <div className="space-y-3 border-civic-blue border-l pl-4">
          {readerNotes.map((note) =>
            editingNoteId === note.id ? (
              <ReaderNoteForm
                key={note.id}
                initialValues={note}
                onCancel={() => setEditingNoteId(null)}
                onSubmit={(values) => onUpdateNote(note.id, values)}
                submitLabel="Save"
              />
            ) : (
              <ReaderNoteBlock
                key={note.id}
                note={note}
                onDelete={() => deleteNote(target, note.id)}
                onEdit={() => setEditingNoteId(note.id)}
              />
            ),
          )}
          {isComposing ? (
            <ReaderNoteForm
              initialValues={draft}
              onCancel={() => setIsComposing(false)}
              onChange={setDraft}
              onSubmit={onAddNote}
              submitLabel="Add"
            />
          ) : null}
        </div>
      </div>
    </aside>
  );
}

function ReaderNoteBlock({
  note,
  onDelete,
  onEdit,
}: {
  note: ReaderNote;
  onDelete: () => void;
  onEdit: () => void;
}) {
  return (
    <div className="py-1">
      <div className="flex items-start justify-between gap-2">
        <p className="font-semibold text-civic-ink text-sm">{note.title}</p>
        <div className="flex shrink-0 items-center gap-1">
          <button
            aria-label={`Edit ${note.title}`}
            className="focus-ring inline-flex size-7 items-center justify-center rounded-sm text-civic-muted transition hover:bg-civic-paper hover:text-civic-blue"
            onClick={onEdit}
            type="button"
          >
            <Pencil aria-hidden="true" className="size-3.5" strokeWidth={2} />
          </button>
          <button
            aria-label={`Delete ${note.title}`}
            className="focus-ring inline-flex size-7 items-center justify-center rounded-sm text-civic-muted transition hover:bg-civic-red-soft hover:text-civic-red"
            onClick={onDelete}
            type="button"
          >
            <Trash2 aria-hidden="true" className="size-3.5" strokeWidth={2} />
          </button>
        </div>
      </div>
      <p className="mt-2 whitespace-pre-wrap text-civic-text text-sm leading-6">
        {note.text}
      </p>
    </div>
  );
}

function ReaderNoteForm({
  initialValues,
  onCancel,
  onChange,
  onSubmit,
  submitLabel,
}: {
  initialValues: NoteFormValues;
  onCancel: () => void;
  onChange?: (values: NoteFormValues) => void;
  onSubmit: (values: NoteFormValues) => void;
  submitLabel: 'Add' | 'Save';
}) {
  const [values, setValues] = useState<NoteFormValues>(initialValues);

  const setFieldValue = (nextValues: NoteFormValues) => {
    setValues(nextValues);
    onChange?.(nextValues);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = values.title.trim() || 'Reader note';
    const text = values.text.trim();

    if (!text) {
      return;
    }

    onSubmit({ text, title });
  };

  return (
    <form className="space-y-2 pt-1" onSubmit={handleSubmit}>
      <label className="block">
        <span className="sr-only">Note title</span>
        <input
          className="focus-ring w-full rounded-sm border border-civic-line bg-civic-paper px-3 py-2 text-civic-ink text-sm"
          onChange={(event) =>
            setFieldValue({ ...values, title: event.target.value })
          }
          placeholder="Title"
          type="text"
          value={values.title}
        />
      </label>
      <label className="block">
        <span className="sr-only">Note text</span>
        <textarea
          className="focus-ring min-h-28 w-full resize-y rounded-sm border border-civic-line bg-civic-paper px-3 py-2 text-civic-ink text-sm leading-6"
          onChange={(event) =>
            setFieldValue({ ...values, text: event.target.value })
          }
          placeholder="Write a note"
          value={values.text}
        />
      </label>
      <div className="flex flex-wrap items-center gap-2">
        <button
          className="focus-ring inline-flex items-center gap-2 rounded-sm bg-civic-action px-3 py-2 font-semibold text-civic-action-text text-sm transition hover:bg-civic-action-hover"
          type="submit"
        >
          {submitLabel === 'Add' ? (
            <Plus aria-hidden="true" className="size-4" strokeWidth={2} />
          ) : (
            <Check aria-hidden="true" className="size-4" strokeWidth={2} />
          )}
          {submitLabel}
        </button>
        <button
          className="focus-ring inline-flex items-center gap-2 rounded-sm border border-civic-line px-3 py-2 font-semibold text-civic-muted text-sm transition hover:border-civic-blue hover:text-civic-blue"
          onClick={onCancel}
          type="button"
        >
          <X aria-hidden="true" className="size-4" strokeWidth={2} />
          Cancel
        </button>
      </div>
    </form>
  );
}
