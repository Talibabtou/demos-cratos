'use client';

import type { ReactNode } from 'react';

type ConstitutionReaderPendingBoundaryProps = {
  isReaderPending: boolean;
  loadingError: string | null;
  loadingLabel: string;
  timeline: ReactNode;
  workspace: ReactNode;
};

export function ConstitutionReaderPendingBoundary({
  isReaderPending,
  loadingError,
  loadingLabel,
  timeline,
  workspace,
}: ConstitutionReaderPendingBoundaryProps) {
  return (
    <>
      {timeline}
      <div className="relative">
        <div
          aria-busy={isReaderPending}
          className={
            isReaderPending
              ? 'pointer-events-none opacity-60 blur-lg transition duration-200 motion-reduce:transition-none'
              : 'opacity-100 blur-0 transition duration-200 motion-reduce:transition-none'
          }
        >
          {workspace}
        </div>
        {isReaderPending ? (
          <div className="pointer-events-none fixed top-24 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-civic-line bg-civic-paper px-4 py-2 font-medium text-civic-ink text-sm shadow-quiet">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-civic-blue"
            />
            {loadingLabel}
          </div>
        ) : null}
        {loadingError ? (
          <div className="pointer-events-none fixed top-24 left-1/2 z-50 inline-flex -translate-x-1/2 rounded-full border border-civic-red bg-civic-paper px-4 py-2 font-medium text-civic-red text-sm shadow-quiet">
            {loadingError}
          </div>
        ) : null}
      </div>
    </>
  );
}
