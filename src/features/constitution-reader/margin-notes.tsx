'use client';

import { createNoteChangeRequest } from '@/app/constitution-reader/actions';
import { Check, Plus, X } from 'lucide-react';
import { type FormEvent, useState, useTransition } from 'react';
import type { ConstitutionNote } from '@api/constitution-reader/corpus';

type MarginNotesProps = {
  sourceNotes: readonly ConstitutionNote[];
  target: {
    articleDatabaseId: string;
    articleId: string;
    documentId: string;
    sectionId: string;
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

export function MarginNotes({ sourceNotes, target }: MarginNotesProps) {
  const hasNotes = sourceNotes.length > 0;
  const [draft, setDraft] = useState<NoteFormValues>(emptyDraft);
  const [isComposing, setIsComposing] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null,
  );
  const [isPending, startTransition] = useTransition();

  const onAddNote = (values: NoteFormValues) => {
    startTransition(async () => {
      const result = await createNoteChangeRequest({
        articleDatabaseId: target.articleDatabaseId,
        articleId: target.articleId,
        documentId: target.documentId,
        text: values.text,
        title: values.title,
      });

      if (result.ok) {
        setDraft(emptyDraft);
        setIsComposing(false);
        setSubmissionMessage(
          'Votre proposition est enregistrée et attend une relecture.',
        );
        return;
      }

      setSubmissionMessage(result.error);
    });
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
        {submissionMessage ? (
          <p className="border-civic-blue border-l pl-4 text-civic-muted text-sm leading-6">
            {submissionMessage}
          </p>
        ) : null}
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
        <div className="border-civic-blue border-l pl-4">
          {isComposing ? (
            <ReaderNoteForm
              isPending={isPending}
              initialValues={draft}
              onCancel={() => setIsComposing(false)}
              onChange={setDraft}
              onSubmit={onAddNote}
            />
          ) : null}
        </div>
      </div>
    </aside>
  );
}

function ReaderNoteForm({
  isPending,
  initialValues,
  onCancel,
  onChange,
  onSubmit,
}: {
  isPending: boolean;
  initialValues: NoteFormValues;
  onCancel: () => void;
  onChange?: (values: NoteFormValues) => void;
  onSubmit: (values: NoteFormValues) => void;
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
          disabled={isPending}
          type="submit"
        >
          {isPending ? (
            <Check aria-hidden="true" className="size-4" strokeWidth={2} />
          ) : (
            <Plus aria-hidden="true" className="size-4" strokeWidth={2} />
          )}
          {isPending ? 'Sending' : 'Propose'}
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
