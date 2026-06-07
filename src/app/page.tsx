import { SiteHeader } from '@/components/site-header';
import { ConstitutionReaderMock } from '@/components/ui-mocks/constitution-reader';
import { MunicipalityMock } from '@/components/ui-mocks/municipality';
import { VersionWorkshopMock } from '@/components/ui-mocks/version-workshop';
import { productAreas } from '@/lib/site-data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="relative min-h-[calc(100svh-73px)] overflow-hidden border-civic-line border-b">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_38%,rgba(245,247,244,0.82)_38%,rgba(245,247,244,0.82)_100%)]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-14 px-6 py-14 md:grid-cols-[0.78fr_1.22fr] md:px-10 lg:px-12">
          <div className="reveal-up max-w-xl">
            <p className="font-semibold font-serif text-7xl text-civic-ink leading-none sm:text-8xl lg:text-9xl">
              Demos<span className="text-civic-sage">:</span>Cratos
            </p>
            <h1 className="mt-8 font-semibold font-serif text-4xl text-civic-ink leading-[1.06] sm:text-5xl">
              Democracy, worked locally.
            </h1>
            <p className="mt-6 max-w-lg text-civic-text text-lg leading-8">
              A civic software suite for reading constitutional power, drafting
              democratic reform, and organizing municipal participation with
              clarity.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-panel bg-civic-ink px-6 font-semibold text-sm text-white shadow-quiet transition hover:bg-civic-blue"
                href="#project-areas"
              >
                Explore the project
                <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
              </Link>
              <Link
                className="focus-ring inline-flex h-12 items-center justify-center rounded-panel border border-civic-line bg-white px-6 font-semibold text-civic-ink text-sm transition hover:border-civic-sage hover:bg-civic-wash"
                href="/fifth-constitution"
              >
                Read the Fifth Constitution
              </Link>
            </div>
          </div>

          <div className="reveal-up-delay relative min-h-[380px] border-civic-line border-y py-8 md:min-h-[520px]">
            <div className="absolute inset-x-0 top-1/2 h-px bg-civic-line" />
            <div className="slow-drift relative ml-auto max-w-2xl">
              <ConstitutionReaderMock compact />
            </div>
            <div className="absolute bottom-8 left-0 hidden max-w-[260px] border-civic-sage border-l bg-white/80 py-3 pl-4 text-civic-text text-sm leading-6 backdrop-blur lg:block">
              Article-level reading today. Versioned public drafting next.
              Municipal tools after the foundations are clear.
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-civic-line border-b bg-white py-20"
        id="project-areas"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-semibold font-serif text-4xl text-civic-ink">
              Three public workspaces, one civic path.
            </h2>
            <p className="mt-4 text-base text-civic-text leading-7">
              The first version establishes clear places for constitutional
              reading, collective drafting, and local democratic operations
              without mixing their responsibilities.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {productAreas.map((area, index) => (
              <Link
                className="focus-ring group border-civic-line border-l pl-6 transition hover:border-civic-sage"
                href={area.href}
                key={area.href}
              >
                <span className="font-semibold text-civic-moss text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-semibold font-serif text-2xl text-civic-ink">
                  {area.title}
                </h3>
                <p className="mt-3 min-h-20 text-civic-text text-sm leading-6">
                  {area.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-civic-blue text-sm">
                  Open workspace
                  <ArrowRight
                    aria-hidden="true"
                    className="transition group-hover:translate-x-1"
                    size={14}
                    strokeWidth={2}
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2 lg:px-12">
        <VersionWorkshopMock />
        <MunicipalityMock />
      </section>
    </main>
  );
}
