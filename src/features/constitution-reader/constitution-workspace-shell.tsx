'use client';

import { SlidingChevronToggle } from '@/components/sliding-chevron-toggle';
import { type ReactNode, useState } from 'react';

type ConstitutionWorkspaceShellProps = {
  children: ReactNode;
  navigation: ReactNode;
};

export function ConstitutionWorkspaceShell({
  children,
  navigation,
}: ConstitutionWorkspaceShellProps) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  return (
    <section className="bg-civic-wash p-5">
      <div className="mx-auto max-w-448">
        <div className="pointer-events-none sticky top-24 z-50 -mb-8 hidden h-8 xl:block">
          <SlidingChevronToggle
            closedLabel="Show glossaire"
            isOpen={isNavigationOpen}
            onToggle={() => setIsNavigationOpen((value) => !value)}
            openLabel="Hide glossaire"
            openPositionClassName="left-[calc(17rem+0.125rem)]"
          />
        </div>
        <div className={isNavigationOpen ? 'flex gap-4' : 'flex gap-0'}>
          <div
            className={
              isNavigationOpen
                ? 'relative hidden w-68 shrink-0 transition-[width] duration-300 ease-out xl:block'
                : 'relative hidden w-0 shrink-0 transition-[width] duration-300 ease-out xl:block'
            }
          >
            <div className="sticky top-24 max-h-[calc(100svh-7rem)] overflow-visible">
              <div
                aria-hidden={isNavigationOpen ? undefined : true}
                className={
                  isNavigationOpen
                    ? 'max-h-[calc(100svh-7rem)] overflow-auto pr-4 opacity-100 transition-opacity duration-300'
                    : 'pointer-events-none max-h-[calc(100svh-7rem)] overflow-hidden opacity-0 transition-opacity duration-150'
                }
                inert={isNavigationOpen ? undefined : true}
              >
                {navigation}
              </div>
            </div>
          </div>
          <div className="relative isolate min-w-0 flex-1">
            <div className="relative z-0">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
