'use client';

import {
  readPreference,
  subscribeToPreferences,
  writePreference,
} from '@/lib/preferences';
import { THEME_CLASS, THEME_STORAGE_KEY, THEME_VALUES } from '@/lib/theme';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useSyncExternalStore } from 'react';

const readThemePreference = () => {
  const theme = readPreference(THEME_STORAGE_KEY);

  return theme === THEME_VALUES.dark ? THEME_VALUES.dark : THEME_VALUES.light;
};

const subscribeToTheme = (onStoreChange: () => void) => {
  const unsubscribe = subscribeToPreferences(onStoreChange);
  window.addEventListener('focus', onStoreChange);

  return () => {
    unsubscribe();
    window.removeEventListener('focus', onStoreChange);
  };
};

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    readThemePreference,
    () => THEME_VALUES.light,
  );
  const isDarkMode = theme === THEME_VALUES.dark;

  useEffect(() => {
    document.documentElement.classList.toggle(THEME_CLASS, isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? THEME_VALUES.light : THEME_VALUES.dark;

    document.documentElement.classList.toggle(
      THEME_CLASS,
      nextTheme === THEME_VALUES.dark,
    );
    writePreference(THEME_STORAGE_KEY, nextTheme);
  };

  return (
    <button
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-civic-blue bg-civic-wash text-civic-ink transition hover:bg-civic-paper"
      onClick={toggleTheme}
      type="button"
    >
      {isDarkMode ? (
        <Sun aria-hidden="true" size={17} strokeWidth={1.8} />
      ) : (
        <Moon aria-hidden="true" size={17} strokeWidth={1.8} />
      )}
    </button>
  );
}
