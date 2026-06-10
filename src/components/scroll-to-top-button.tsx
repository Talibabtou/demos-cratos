'use client';

import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div
      className={`fixed right-5 bottom-6 z-30 transition-opacity duration-300 md:right-8 ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <button
        aria-label="Scroll to top"
        className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-civic-line bg-civic-paper/92 text-civic-ink shadow-quiet backdrop-blur transition hover:border-civic-blue hover:text-civic-blue"
        onClick={scrollToTop}
        type="button"
      >
        <ChevronUp aria-hidden="true" className="size-5" strokeWidth={2.4} />
      </button>
    </div>
  );
}
