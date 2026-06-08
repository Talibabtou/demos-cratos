const timeline = ['v12 proposed', 'v11 proposed', 'v10 amendment', 'v1 draft'];

export function VersionWorkshopMock() {
  return (
    <div className="rounded-panel border border-civic-line bg-civic-paper shadow-quiet">
      <div className="flex flex-wrap items-center justify-between gap-3 border-civic-line border-b px-4 py-3">
        <span className="font-semibold text-civic-ink text-sm">
          Constitution Workshop
        </span>
        <button
          className="focus-ring h-8 rounded border border-civic-line px-3 font-semibold text-civic-ink text-xs"
          type="button"
        >
          Compare drafts
        </button>
      </div>
      <div className="grid gap-0 md:grid-cols-[1fr_150px]">
        <div className="grid border-civic-line border-b md:grid-cols-2 md:border-r md:border-b-0">
          <DiffColumn title="Current article" tone="current" />
          <DiffColumn title="Proposed article" tone="proposed" />
        </div>
        <aside className="p-4">
          <p className="font-semibold text-civic-muted text-xs uppercase tracking-[0.12em]">
            History
          </p>
          <ol className="mt-4 space-y-3">
            {timeline.map((item, index) => (
              <li className="flex gap-3 text-civic-text text-xs" key={item}>
                <span
                  className={`mt-1 h-2.5 w-2.5 rounded-full border ${
                    index === 0
                      ? 'border-civic-blue bg-civic-blue'
                      : 'border-civic-line'
                  }`}
                />
                {item}
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </div>
  );
}

function DiffColumn({
  title,
  tone,
}: {
  title: string;
  tone: 'current' | 'proposed';
}) {
  return (
    <section className="p-4">
      <h3 className="font-semibold text-civic-muted text-xs uppercase tracking-[0.12em]">
        {title}
      </h3>
      <div className="mt-4 space-y-3 text-civic-text text-sm leading-7">
        <p>The national sovereignty belongs to the people.</p>
        <p>
          Citizens exercise it through their representatives
          {tone === 'proposed' ? (
            <mark className="mx-1 bg-civic-red-soft px-1 text-civic-ink">
              and citizen consultation
            </mark>
          ) : (
            ' '
          )}
          and by referendum.
        </p>
        <p
          className={
            tone === 'current' ? 'bg-civic-red-soft px-2 text-civic-red' : ''
          }
        >
          No section of the people may claim the exercise of sovereignty.
        </p>
      </div>
    </section>
  );
}
