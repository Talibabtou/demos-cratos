import { SiteHeader } from '@/components/site-header';
import Link from 'next/link';

type SectionPageProps = {
  children: React.ReactNode;
  description: string;
  nextSteps: string[];
  status: string;
  title: string;
};

export function SectionPage({
  children,
  description,
  nextSteps,
  status,
  title,
}: SectionPageProps) {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        <Link
          className="focus-ring font-semibold text-civic-blue text-sm"
          href="/"
        >
          Back to overview
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="font-semibold text-civic-blue text-sm uppercase tracking-[0.12em]">
              {status}
            </p>
            <h1 className="mt-4 font-semibold font-serif text-5xl text-civic-ink leading-tight">
              {title}
            </h1>
            <p className="mt-6 text-civic-text text-lg leading-8">
              {description}
            </p>
            <div className="mt-10 border-civic-line border-t pt-8">
              <h2 className="font-semibold text-civic-ink text-sm uppercase tracking-[0.12em]">
                Next build steps
              </h2>
              <ul className="mt-5 space-y-4">
                {nextSteps.map((step) => (
                  <li
                    className="flex gap-3 text-civic-text text-sm leading-6"
                    key={step}
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-civic-blue" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </section>
    </main>
  );
}
