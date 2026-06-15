import type { ConstitutionDocument } from '@api/constitution-reader/corpus';

type DocumentOpeningProps = {
  document: ConstitutionDocument;
};

export function DocumentOpening({ document }: DocumentOpeningProps) {
  return (
    <header
      className="mx-auto mb-12 max-w-3xl scroll-mt-24 text-center"
      id="structured-full-text"
    >
      <h2 className="font-semibold font-serif text-5xl text-civic-ink leading-tight">
        {document.sourceTitle}
      </h2>
      <p className="mt-8 font-serif text-civic-text text-xl leading-9">
        {document.summary}
      </p>
      {document.notes.length > 0 ? (
        <div className="mt-8 space-y-3 border-civic-line border-y py-5 text-left">
          {document.notes.map((note) => (
            <div key={`${document.id}-opening-${note.title}`}>
              <p className="font-semibold text-civic-ink text-sm">
                {note.title}
              </p>
              <p className="mt-1 text-civic-text text-sm leading-6">
                {note.text}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}
