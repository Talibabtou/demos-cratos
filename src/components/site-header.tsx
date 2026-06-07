import { ThemeToggle } from '@/components/theme-toggle';
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
      href: withLocale(locale, '/fifth-constitution'),
      label: messages.fifthConstitution,
    },
    {
      href: withLocale(locale, '/sixth-republic'),
      label: messages.sixthRepublic,
    },
    {
      href: withLocale(locale, '/municipality-tools'),
      label: messages.municipalityTools,
    },
    { href: '/research.md', label: messages.research },
  ];

  return (
    <header className="sticky top-0 z-20 border-civic-line border-b bg-civic-paper/88 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        <Link
          className="focus-ring font-semibold font-serif text-2xl text-civic-ink"
          href={withLocale(locale)}
        >
          Demos<span className="text-civic-blue">:</span>Cratos
        </Link>
        <div className="flex items-center gap-4">
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 md:flex"
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
            <a
              className="focus-ring font-medium text-civic-text text-sm transition hover:text-civic-ink"
              href="https://github.com/Talibabtou/demos-cratos"
              rel="noreferrer"
              target="_blank"
            >
              {messages.github}
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
