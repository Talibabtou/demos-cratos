'use client';

import {
  createNoteChangeRequest,
  deleteNoteChangeRequest,
  updateNoteChangeRequest,
} from '@/features/constitution-reader/actions';
import { useToast } from '@/components/toaster';
import { NOTE_CHANGE_STATUS } from '@/features/constitution-reader/constants';
import type { ConstitutionNote } from '@/features/constitution-reader/types';
import { Check, Pencil, Plus, Trash2, X } from 'lucide-react';
import { type FormEvent, useState, useTransition } from 'react';

type MarginNotesProps = {
  canSuggestNotes: boolean;
  sourceNotes: readonly ConstitutionNote[];
  target: {
    articleDatabaseId: string;
  };
};

type NoteFormValues = {
  text: string;
  title: string;
};

const emptyDraft: NoteFormValues = {
  text: '',
  title: '',
};

export function MarginNotes({
  canSuggestNotes,
  sourceNotes,
  target,
}: MarginNotesProps) {
  const toast = useToast();
  const [notes, setNotes] = useState<readonly ConstitutionNote[]>(sourceNotes);
  const [editingNote, setEditingNote] = useState<ConstitutionNote | null>(null);
  const hasNotes = notes.length > 0;
  const [draft, setDraft] = useState<NoteFormValues>(emptyDraft);
  const [isComposing, setIsComposing] = useState(false);
  const [isPending, startTransition] = useTransition();

  const onAddNote = (values: NoteFormValues) => {
    startTransition(async () => {
      const result = await createNoteChangeRequest({
        articleDatabaseId: target.articleDatabaseId,
        text: values.text,
        title: values.title,
      });

      if (result.ok) {
        const nextNote = result.note;

        if (nextNote) {
          setNotes((currentNotes) => [...currentNotes, nextNote]);
        }

        setDraft(emptyDraft);
        setIsComposing(false);
        toast({
          message:
            result.status === NOTE_CHANGE_STATUS.approved
              ? 'La note est publiée.'
              : 'Votre proposition est enregistrée et attend une relecture.',
          tone:
            result.status === NOTE_CHANGE_STATUS.approved ? 'success' : 'info',
        });
        return;
      }

      toast({ message: result.error, tone: 'error' });
    });
  };

  const onEditNote = (note: ConstitutionNote, values: NoteFormValues) => {
    if (!note.databaseId) {
      return;
    }

    startTransition(async () => {
      const result = await updateNoteChangeRequest({
        noteId: note.databaseId ?? '',
        text: values.text,
        title: values.title,
      });

      if (result.ok) {
        const nextNote = result.note;

        if (nextNote?.databaseId) {
          setNotes((currentNotes) =>
            currentNotes.map((currentNote) =>
              currentNote.databaseId === nextNote.databaseId
                ? nextNote
                : currentNote,
            ),
          );
        }

        setEditingNote(null);
        toast({
          message:
            result.status === NOTE_CHANGE_STATUS.approved
              ? 'La note est modifiée.'
              : 'Votre modification attend une relecture.',
          tone:
            result.status === NOTE_CHANGE_STATUS.approved ? 'success' : 'info',
        });
        return;
      }

      toast({ message: result.error, tone: 'error' });
    });
  };

  const onDeleteNote = (note: ConstitutionNote) => {
    if (!note.databaseId) {
      return;
    }

    startTransition(async () => {
      const result = await deleteNoteChangeRequest({
        noteId: note.databaseId ?? '',
      });

      if (result.ok) {
        if (result.status === NOTE_CHANGE_STATUS.approved) {
          setNotes((currentNotes) =>
            currentNotes.filter(
              (currentNote) => currentNote.databaseId !== note.databaseId,
            ),
          );
        }

        toast({
          message:
            result.status === NOTE_CHANGE_STATUS.approved
              ? 'La note est supprimée.'
              : 'La suppression attend une relecture.',
          tone:
            result.status === NOTE_CHANGE_STATUS.approved ? 'success' : 'info',
        });
        return;
      }

      toast({ message: result.error, tone: 'error' });
    });
  };

  return (
    <aside className="mt-8 lg:mt-1">
      <div className="sticky top-24 max-h-[calc(100svh-7rem)] space-y-3 overflow-auto pr-2">
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold text-civic-muted text-xs uppercase tracking-[0.12em]">
            Notes
          </p>
          <AddNoteButton
            isHidden={!canSuggestNotes || isComposing}
            onClick={() => setIsComposing(true)}
          />
        </div>
        {hasNotes ? null : (
          <p className="border-civic-line border-l pl-4 text-civic-muted text-sm leading-6">
            No public note has been written for this article yet.
          </p>
        )}
        {notes.map((note) => (
          <ReaderNote
            editingNoteId={editingNote?.databaseId}
            isPending={isPending}
            key={note.databaseId ?? note.title}
            note={note}
            onCancelEdit={() => setEditingNote(null)}
            onDelete={onDeleteNote}
            onEdit={setEditingNote}
            onSubmitEdit={onEditNote}
            canSuggestNotes={canSuggestNotes}
          />
        ))}
        <div className="border-civic-blue border-l pl-4">
          {isComposing ? (
            <ReaderNoteForm
              isPending={isPending}
              initialValues={draft}
              onCancel={() => setIsComposing(false)}
              onChange={setDraft}
              onSubmit={onAddNote}
              pendingLabel="Sending"
              submitLabel="Propose"
            />
          ) : null}
        </div>
      </div>
    </aside>
  );
}

function AddNoteButton({
  isHidden,
  onClick,
}: {
  isHidden: boolean;
  onClick: () => void;
}) {
  if (isHidden) {
    return null;
  }

  return (
    <button
      className="focus-ring inline-flex size-7 items-center justify-center rounded-sm text-civic-muted transition hover:bg-civic-paper hover:text-civic-blue"
      onClick={onClick}
      type="button"
    >
      <span className="sr-only">Add note</span>
      <Plus aria-hidden="true" className="size-4" strokeWidth={2} />
    </button>
  );
}

function ReaderNote({
  canSuggestNotes,
  editingNoteId,
  isPending,
  note,
  onCancelEdit,
  onDelete,
  onEdit,
  onSubmitEdit,
}: {
  canSuggestNotes: boolean;
  editingNoteId?: string;
  isPending: boolean;
  note: ConstitutionNote;
  onCancelEdit: () => void;
  onDelete: (note: ConstitutionNote) => void;
  onEdit: (note: ConstitutionNote) => void;
  onSubmitEdit: (note: ConstitutionNote, values: NoteFormValues) => void;
}) {
  const isEditing =
    Boolean(note.databaseId) && editingNoteId === note.databaseId;

  if (isEditing) {
    return (
      <div className="border-civic-blue border-l py-1 pl-4">
        <ReaderNoteForm
          compactActions
          initialValues={{ text: note.text, title: note.title }}
          isPending={isPending}
          onCancel={onCancelEdit}
          onSubmit={(values) => onSubmitEdit(note, values)}
          pendingLabel="Sending"
          submitLabel="Propose edit"
        />
      </div>
    );
  }

  return (
    <details className="border-civic-line border-l py-1 pl-4" open>
      <summary className="cursor-pointer font-semibold text-civic-ink text-sm">
        {note.title}
      </summary>
      <p className="mt-2 text-civic-text text-sm leading-6">{note.text}</p>
      {canSuggestNotes && note.databaseId ? (
        <NoteActions
          isPending={isPending}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ) : null}
    </details>
  );
}

function NoteActions({
  isPending,
  note,
  onDelete,
  onEdit,
}: {
  isPending: boolean;
  note: ConstitutionNote;
  onDelete: (note: ConstitutionNote) => void;
  onEdit: (note: ConstitutionNote) => void;
}) {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <button
        className="focus-ring inline-flex items-center gap-1.5 rounded-sm border border-civic-line px-2 py-1 font-semibold text-civic-muted text-xs transition hover:border-civic-blue hover:text-civic-blue"
        onClick={() => onEdit(note)}
        type="button"
      >
        <Pencil aria-hidden="true" className="size-3.5" />
        Edit
      </button>
      {isConfirmingDelete ? (
        <div className="flex gap-2">
          <button
            aria-label="Confirm delete"
            className="focus-ring inline-flex h-[26px] items-center justify-center rounded-sm border border-civic-line px-2 text-civic-muted transition hover:border-civic-red hover:text-civic-red"
            disabled={isPending}
            onClick={() => onDelete(note)}
            type="button"
          >
            <Check aria-hidden="true" className="size-3.5" />
          </button>
          <button
            aria-label="Cancel delete"
            className="focus-ring inline-flex h-[26px] items-center justify-center rounded-sm border border-civic-line px-2 text-civic-muted transition hover:border-civic-blue hover:text-civic-blue"
            disabled={isPending}
            onClick={() => setIsConfirmingDelete(false)}
            type="button"
          >
            <X aria-hidden="true" className="size-3.5" />
          </button>
        </div>
      ) : (
        <button
          className="focus-ring inline-flex items-center gap-1.5 rounded-sm border border-civic-line px-2 py-1 font-semibold text-civic-muted text-xs transition hover:border-civic-red hover:text-civic-red"
          disabled={isPending}
          onClick={() => setIsConfirmingDelete(true)}
          type="button"
        >
          <Trash2 aria-hidden="true" className="size-3.5" />
          Delete
        </button>
      )}
    </div>
  );
}

function ReaderNoteForm({
  compactActions = false,
  isPending,
  initialValues,
  onCancel,
  onChange,
  onSubmit,
  pendingLabel,
  submitLabel,
}: {
  compactActions?: boolean;
  isPending: boolean;
  initialValues: NoteFormValues;
  onCancel: () => void;
  onChange?: (values: NoteFormValues) => void;
  onSubmit: (values: NoteFormValues) => void;
  pendingLabel: string;
  submitLabel: string;
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
  const actionButtonClass = compactActions
    ? 'focus-ring inline-flex h-[26px] items-center gap-1.5 rounded-sm bg-civic-action px-2 font-semibold text-civic-action-text text-xs transition hover:bg-civic-action-hover'
    : 'focus-ring inline-flex items-center gap-2 rounded-sm bg-civic-action px-3 py-2 font-semibold text-civic-action-text text-sm transition hover:bg-civic-action-hover';
  const cancelButtonClass = compactActions
    ? 'focus-ring inline-flex h-[26px] items-center gap-1.5 rounded-sm border border-civic-line px-2 font-semibold text-civic-muted text-xs transition hover:border-civic-blue hover:text-civic-blue'
    : 'focus-ring inline-flex items-center gap-2 rounded-sm border border-civic-line px-3 py-2 font-semibold text-civic-muted text-sm transition hover:border-civic-blue hover:text-civic-blue';
  const iconClassName = compactActions ? 'size-3.5' : 'size-4';

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
          className={actionButtonClass}
          disabled={isPending}
          type="submit"
        >
          {isPending ? (
            <Check
              aria-hidden="true"
              className={iconClassName}
              strokeWidth={2}
            />
          ) : (
            <Plus
              aria-hidden="true"
              className={iconClassName}
              strokeWidth={2}
            />
          )}
          {isPending ? pendingLabel : submitLabel}
        </button>
        <button className={cancelButtonClass} onClick={onCancel} type="button">
          <X aria-hidden="true" className={iconClassName} strokeWidth={2} />
          Cancel
        </button>
      </div>
    </form>
  );
}
