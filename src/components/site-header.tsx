import { ThemeToggle } from '@/components/theme-toggle';
import { FileText } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { withLocale } from '@/i18n/routing';
import type { Messages } from '@/i18n/messages';
import Link from 'next/link';

type SiteHeaderProps = {
  locale: Locale;
  messages: Messages['navigation'];
};

export function SiteHeader({ locale, messages }: SiteHeaderProps) {
  const navItems = [
    {
      href: withLocale(locale, '/constitution-reader'),
      label: messages.constitutionReader,
    },
    {
      href: withLocale(locale, '/constitution-workshop'),
      label: messages.constitutionWorkshop,
    },
    {
      href: withLocale(locale, '/municipal-democracy'),
      label: messages.municipalDemocracy,
    },
  ];

  return (
    <header className="sticky top-0 z-20 border-civic-line border-b bg-civic-paper/88 backdrop-blur">
      <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-6 md:grid-cols-[1fr_auto_1fr] md:px-10 lg:px-12">
        <Link
          className="focus-ring justify-self-start font-semibold font-serif text-2xl text-civic-ink"
          href={withLocale(locale)}
        >
          Demos<span className="text-civic-blue">:</span>Cratos
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 justify-self-center md:flex"
        >
          {navItems.map((item) => (
            <Link
              className="focus-ring font-medium text-civic-text text-sm transition hover:text-civic-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <Link
            aria-label={messages.research}
            className="focus-ring inline-flex size-10 items-center justify-center rounded-full text-civic-ink transition hover:text-civic-blue"
            href="/research.md"
            title={messages.research}
          >
            <FileText aria-hidden="true" size={18} strokeWidth={1.9} />
          </Link>
          <a
            aria-label={messages.github}
            className="focus-ring inline-flex size-10 items-center justify-center rounded-full text-civic-ink transition hover:text-civic-blue"
            href="https://github.com/Talibabtou/demos-cratos"
            rel="noreferrer"
            target="_blank"
            title={messages.github}
          >
            <span
              aria-hidden="true"
              className="size-[18px] bg-current [mask:url('/icons/github.svg')_center/contain_no-repeat]"
            />
            <span className="sr-only">{messages.github}</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
