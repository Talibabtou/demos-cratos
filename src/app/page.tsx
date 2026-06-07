import { SiteHeader } from '@/components/site-header';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const platformPillars = [
  {
    label: 'Read power',
    title: 'The Fifth Republic, made inspectable',
    text: 'The current Constitution becomes a civic document: articles, history, examples, weak points, and plain-language notes in one place.',
  },
  {
    label: 'Rewrite institutions',
    title: 'A Sixth Republic as public work',
    text: 'Drafts, diffs, forks, review, and visible reasoning turn constitutional writing into a process citizens can follow and contest.',
  },
  {
    label: 'Work locally',
    title: 'Municipal democracy with receipts',
    text: 'Each city gets a public workspace for debates, petitions, studies, votes, budgets, and official answers that do not disappear.',
  },
  {
    label: 'Protect legitimacy',
    title: 'Rules before participation',
    text: 'Identity, moderation, delegation, sortition, and audit trails must protect citizens from capture instead of asking them to trust the platform.',
  },
];

const principles = [
  'Participation should end with an answer.',
  'Voting comes after shared facts and visible disagreement.',
  'Identity should prove rights, not expose opinions.',
  'The software should remember what institutions prefer to forget.',
];

const futureFeatures = [
  'Article-level constitutional reader',
  'Versioned Sixth Republic drafts',
  'Proposal review and public diffs',
  'Municipality pages such as /lyon',
  'Resident verification with privacy safeguards',
  'Consensus mapping before votes',
  'Participatory budgeting workflows',
  'Public follow-up for official decisions',
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <PurposeSection />
      <FeatureSection />
      <DoctrineSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-civic-line border-b">
      <div className="civic-container relative grid min-h-[calc(100svh-73px)] content-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal-up">
          <p className="font-semibold font-serif text-6xl text-civic-ink leading-none sm:text-8xl lg:text-9xl">
            Demos<span className="text-civic-blue">:</span>Cratos
          </p>
          <h1 className="mt-8 max-w-3xl font-semibold font-serif text-4xl text-civic-ink leading-[1.05] sm:text-6xl">
            A public workshop for French democracy.
          </h1>
        </div>

        <div className="reveal-up-delay max-w-2xl self-end lg:pb-8">
          <p className="text-civic-text text-xl leading-9">
            Demos:Cratos helps citizens read the institutions they live under,
            draft better ones in public, and bring democratic practice back to
            the municipality.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              className="focus-ring inline-flex h-12 min-w-44 items-center justify-center gap-2 rounded-panel bg-civic-action px-6 font-semibold text-civic-action-text text-sm shadow-quiet transition hover:bg-civic-action-hover"
              href="#purpose"
            >
              Read the project
              <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
            </Link>
            <Link
              className="focus-ring inline-flex h-12 min-w-44 items-center justify-center whitespace-nowrap rounded-panel border border-civic-action bg-transparent px-6 font-semibold text-civic-ink text-sm transition hover:bg-civic-action hover:text-civic-action-text"
              href="/research.md"
            >
              Open research notes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section
      className="civic-section border-civic-line border-b bg-civic-paper"
      id="purpose"
    >
      <div className="civic-container scroll-reveal">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
              What this is for
            </p>
            <h2 className="mt-4 font-semibold font-serif text-4xl text-civic-ink leading-tight">
              Less civic theatre. More public memory.
            </h2>
          </div>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {platformPillars.map((pillar, index) => (
              <article
                className="grid gap-4 border-civic-line border-l pl-5 transition-colors hover:border-civic-blue sm:grid-cols-[2.5rem_1fr]"
                key={pillar.title}
              >
                <span className="font-semibold text-civic-muted text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-semibold text-civic-red text-sm">
                    {pillar.label}
                  </p>
                  <h3 className="mt-2 font-semibold font-serif text-2xl text-civic-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-civic-text text-sm leading-7">
                    {pillar.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="civic-section border-civic-line border-b">
      <div className="civic-container scroll-reveal grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
            The working surface
          </p>
          <h2 className="mt-4 max-w-xl font-semibold font-serif text-4xl text-civic-ink leading-tight">
            The site will feel like a civic documentation system before it feels
            like a social network.
          </h2>
        </div>
        <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {futureFeatures.map((feature) => (
            <div
              className="flex items-start gap-3 border-civic-line border-l pl-4"
              key={feature}
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-civic-blue" />
              <p className="text-civic-text text-sm leading-6">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctrineSection() {
  return (
    <section className="civic-section bg-civic-paper">
      <div className="civic-container scroll-reveal">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-semibold text-civic-red text-sm uppercase tracking-[0.12em]">
              First doctrine
            </p>
            <h2 className="mt-4 font-semibold font-serif text-4xl text-civic-ink">
              Trust should not be a prerequisite.
            </h2>
          </div>
          <div className="space-y-6">
            {principles.map((principle, index) => (
              <p
                className="grid gap-4 border-civic-line border-l py-1 pl-5 text-civic-text text-lg leading-8 sm:grid-cols-[4rem_1fr]"
                key={principle}
              >
                <span className="font-semibold text-civic-muted text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{principle}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
