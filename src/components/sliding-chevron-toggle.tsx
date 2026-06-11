'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

type SlidingChevronToggleProps = {
  closedLabel: string;
  closedPositionClassName?: string;
  isOpen: boolean;
  onToggle: () => void;
  openLabel: string;
  openPositionClassName: string;
  title?: string;
};

export function SlidingChevronToggle({
  closedLabel,
  closedPositionClassName = 'left-0',
  isOpen,
  onToggle,
  openLabel,
  openPositionClassName,
  title,
}: SlidingChevronToggleProps) {
  const label = isOpen ? openLabel : closedLabel;
  const positionClassName = isOpen
    ? openPositionClassName
    : closedPositionClassName;

  return (
    <button
      aria-label={label}
      aria-pressed={isOpen}
      className={`focus-ring pointer-events-auto absolute top-0 ${positionClassName} inline-flex size-8 items-center justify-center rounded-sm border border-civic-line bg-civic-paper text-civic-muted shadow-quiet transition-[left,color,border-color] duration-300 ease-out hover:border-civic-blue hover:text-civic-blue`}
      onClick={onToggle}
      title={title ?? label}
      type="button"
    >
      <ChevronLeft
        aria-hidden="true"
        className={isOpen ? 'size-4' : 'hidden size-4'}
        strokeWidth={2}
      />
      <ChevronRight
        aria-hidden="true"
        className={isOpen ? 'hidden size-4' : 'size-4'}
        strokeWidth={2}
      />
    </button>
  );
}
