const rows = [
  ['Street safety study', 'Open', '12 June'],
  ['Participatory budget', 'Review', '20 June'],
  ['Citizen assembly list', 'Draft', '28 June'],
];

export function MunicipalityMock() {
  return (
    <div className="overflow-hidden rounded-panel border border-civic-line bg-white shadow-quiet">
      <div className="grid md:grid-cols-[150px_1fr]">
        <aside className="border-civic-line border-b bg-civic-ink p-4 text-white md:border-r md:border-b-0">
          <p className="text-white/70 text-xs">Commune</p>
          <p className="mt-1 font-semibold text-sm">Lyon</p>
          <nav className="mt-7 space-y-2 text-white/75 text-xs">
            <p className="text-white">Dashboard</p>
            <p>Debates</p>
            <p>Votes</p>
            <p>Petitions</p>
            <p>Studies</p>
          </nav>
        </aside>
        <section className="p-5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-semibold font-serif text-2xl text-civic-ink">
              Municipality workspace
            </h3>
            <span className="rounded border border-civic-line px-3 py-1 text-civic-muted text-xs">
              Viewer mode
            </span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Metric label="Participants" value="1,284" />
            <Metric label="Open subjects" value="37" />
            <Metric label="Participation" value="24%" />
          </div>
          <div className="mt-6 border-civic-line border-t pt-4">
            <p className="font-semibold text-civic-muted text-xs uppercase tracking-[0.12em]">
              Current work
            </p>
            <div className="mt-3 divide-y divide-civic-line">
              {rows.map(([name, status, date]) => (
                <div
                  className="grid grid-cols-[1fr_auto_auto] gap-4 py-3 text-xs"
                  key={name}
                >
                  <span className="font-medium text-civic-ink">{name}</span>
                  <span className="text-civic-moss">{status}</span>
                  <span className="text-civic-muted">{date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-panel border border-civic-line p-3">
      <p className="text-civic-muted text-xs">{label}</p>
      <p className="mt-2 font-semibold text-2xl text-civic-ink">{value}</p>
    </div>
  );
}
