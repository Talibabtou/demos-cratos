const articles = ['Preamble', 'Title I', 'Title II', 'Title III', 'Title IV'];

export function ConstitutionReaderMock({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-panel border border-civic-line bg-civic-paper text-civic-ink shadow-quiet">
      <div className="flex items-center justify-between border-civic-line border-b px-4 py-3">
        <span className="font-semibold text-sm">Constitution reader</span>
        <span className="text-civic-muted text-xs">Article view</span>
      </div>
      <div className="grid min-h-[360px] grid-cols-[128px_1fr] sm:grid-cols-[168px_1fr]">
        <aside className="border-civic-line border-r bg-civic-wash/70 p-3">
          <div className="mb-3 font-semibold text-civic-muted text-xs uppercase tracking-[0.12em]">
            Structure
          </div>
          <div className="space-y-1">
            {articles.map((article, index) => (
              <div
                className={`rounded px-2 py-2 text-xs ${
                  index === 1
                    ? 'bg-civic-paper text-civic-ink shadow-sm'
                    : 'text-civic-text'
                }`}
                key={article}
              >
                {article}
              </div>
            ))}
          </div>
        </aside>
        <article className="p-5">
          <div className="mb-5 h-9 rounded border border-civic-line bg-civic-paper px-3 py-2 text-civic-muted text-xs">
            Search by title, article, or phrase
          </div>
          <p className="font-semibold text-civic-blue text-xs uppercase tracking-[0.12em]">
            Title I / Article 1
          </p>
          <h3 className="mt-3 font-semibold font-serif text-2xl">Article 1</h3>
          <div className="mt-5 space-y-4 text-civic-text text-sm leading-7">
            <p>
              France is an indivisible, secular, democratic and social Republic.
            </p>
            <p className={compact ? 'hidden sm:block' : ''}>
              This reader will connect each article to explanations, amendment
              history, institutional examples, and civic analysis.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
