import { GitHubMark } from '@/components/github-mark';
import { FileText } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-civic-line border-t bg-civic-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 px-6 py-8 text-civic-muted text-sm md:grid-cols-[1fr_auto_1fr] md:px-10 lg:px-12">
        <p className="justify-self-start font-semibold font-serif text-civic-ink text-lg">
          Demos<span className="text-civic-blue">:</span>Cratos
        </p>
        <p className="justify-self-start text-civic-muted md:justify-self-center">
          2026
        </p>
        <div className="flex items-center gap-2 justify-self-start md:justify-self-end">
          <Link
            aria-label="Research"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-full text-civic-ink transition hover:text-civic-blue"
            href="/research.md"
            title="Research"
          >
            <FileText aria-hidden="true" size={18} strokeWidth={1.9} />
          </Link>
          <a
            aria-label="GitHub"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-full text-civic-ink transition hover:text-civic-blue"
            href="https://github.com/Talibabtou/demos-cratos"
            rel="noreferrer"
            target="_blank"
            title="GitHub"
          >
            <GitHubMark />
          </a>
        </div>
      </div>
    </footer>
  );
}
