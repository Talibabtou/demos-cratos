'use client';

import { createStorageNamespace } from '@/lib/storage';
import { THEME_CLASS, THEME_STORAGE_KEY, THEME_VALUES } from '@/lib/theme';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useSyncExternalStore } from 'react';

const preferencesStorage = createStorageNamespace('local', 'preferences');

const readThemePreference = () => {
  const theme = preferencesStorage.get<string>(THEME_STORAGE_KEY);

  return theme === THEME_VALUES.dark ? THEME_VALUES.dark : THEME_VALUES.light;
};

const subscribeToTheme = (onStoreChange: () => void) => {
  const unsubscribe = preferencesStorage.subscribe(onStoreChange);
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
    preferencesStorage.set(THEME_STORAGE_KEY, nextTheme);
  };

  return (
    <button
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-civic-line bg-civic-paper text-civic-ink transition hover:border-civic-blue"
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
