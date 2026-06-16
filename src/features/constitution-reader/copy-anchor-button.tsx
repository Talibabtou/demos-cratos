'use client';

import { useToast } from '@/components/toaster';
import { Link2 } from 'lucide-react';

export function CopyAnchorButton({ anchorId }: { anchorId: string }) {
  const toast = useToast();

  const copyAnchor = async () => {
    const url = new URL(window.location.href);
    url.hash = anchorId;

    await navigator.clipboard.writeText(url.toString());
    toast({ message: 'Link copied.', tone: 'success' });
  };

  return (
    <button
      aria-label="Copy link"
      className="focus-ring inline-flex size-7 items-center justify-center rounded-sm text-civic-muted opacity-0 transition hover:bg-civic-paper hover:text-civic-blue focus-visible:opacity-100 group-hover:opacity-100"
      onClick={copyAnchor}
      type="button"
    >
      <Link2 aria-hidden="true" className="size-4" strokeWidth={2} />
    </button>
  );
}
