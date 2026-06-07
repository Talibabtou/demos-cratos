import Link from 'next/link';

const navItems = [
  { href: '/fifth-constitution', label: 'Fifth Constitution' },
  { href: '/sixth-republic', label: 'Sixth Republic' },
  { href: '/municipality-tools', label: 'Municipality Tools' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-civic-line border-b bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        <Link
          className="focus-ring font-semibold font-serif text-2xl text-civic-ink"
          href="/"
        >
          Demos<span className="text-civic-sage">:</span>Cratos
        </Link>
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
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
