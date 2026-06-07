import { SiteHeader } from '@/components/site-header';
import type { Messages } from '@/i18n/messages';
import type { Locale } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type HomePageProps = {
  locale: Locale;
  messages: Messages;
};

export function HomePage({ locale, messages }: HomePageProps) {
  return (
    <main>
      <SiteHeader locale={locale} messages={messages.navigation} />
      <HeroSection messages={messages.home.hero} />
      <PurposeSection messages={messages.home.purpose} />
      <FeatureSection messages={messages.home.features} />
      <DoctrineSection messages={messages.home.doctrine} />
    </main>
  );
}

function HeroSection({ messages }: { messages: Messages['home']['hero'] }) {
  return (
    <section className="relative overflow-hidden border-civic-line border-b">
      <div className="civic-container relative grid min-h-[calc(100svh-73px)] content-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal-up">
          <p className="font-semibold font-serif text-6xl text-civic-ink leading-none sm:text-8xl lg:text-9xl">
            Demos<span className="text-civic-blue">:</span>Cratos
          </p>
          <h1 className="mt-8 max-w-3xl font-semibold font-serif text-4xl text-civic-ink leading-[1.05] sm:text-6xl">
            {messages.title}
          </h1>
        </div>

        <div className="reveal-up-delay max-w-2xl self-end lg:pb-8">
          <p className="text-civic-text text-xl leading-9">{messages.body}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              className="focus-ring inline-flex h-12 min-w-44 items-center justify-center gap-2 rounded-panel bg-civic-action px-6 font-semibold text-civic-action-text text-sm shadow-quiet transition hover:bg-civic-action-hover"
              href="#purpose"
            >
              {messages.primaryAction}
              <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
            </Link>
            <Link
              className="focus-ring inline-flex h-12 min-w-44 items-center justify-center whitespace-nowrap rounded-panel border border-civic-action bg-transparent px-6 font-semibold text-civic-ink text-sm transition hover:bg-civic-action hover:text-civic-action-text"
              href="/research.md"
            >
              {messages.secondaryAction}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PurposeSection({
  messages,
}: {
  messages: Messages['home']['purpose'];
}) {
  return (
    <section
      className="civic-section border-civic-line border-b bg-civic-paper"
      id="purpose"
    >
      <div className="civic-container scroll-reveal">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
              {messages.label}
            </p>
            <h2 className="mt-4 font-semibold font-serif text-4xl text-civic-ink leading-tight">
              {messages.title}
            </h2>
          </div>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {messages.pillars.map((pillar, index) => (
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

function FeatureSection({
  messages,
}: {
  messages: Messages['home']['features'];
}) {
  return (
    <section className="civic-section border-civic-line border-b">
      <div className="civic-container scroll-reveal grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
            {messages.label}
          </p>
          <h2 className="mt-4 max-w-xl font-semibold font-serif text-4xl text-civic-ink leading-tight">
            {messages.title}
          </h2>
        </div>
        <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {messages.items.map((feature) => (
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

function DoctrineSection({
  messages,
}: {
  messages: Messages['home']['doctrine'];
}) {
  return (
    <section className="civic-section bg-civic-paper">
      <div className="civic-container scroll-reveal">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-semibold text-civic-red text-sm uppercase tracking-[0.12em]">
              {messages.label}
            </p>
            <h2 className="mt-4 font-semibold font-serif text-4xl text-civic-ink">
              {messages.title}
            </h2>
          </div>
          <div className="space-y-6">
            {messages.principles.map((principle, index) => (
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
