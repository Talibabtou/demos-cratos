const STORAGE_KEY = 'demos-cratos:preferences';
const STORAGE_CHANGE_EVENT = 'demos-cratos:preferences-change';

type Preferences = {
  locale?: string;
  theme?: string;
};

const readPreferences = (): Preferences => {
  if (typeof window === 'undefined') return {};

  try {
    return JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) ?? '{}',
    ) as Preferences;
  } catch {
    return {};
  }
};

export const readPreference = (key: keyof Preferences) =>
  readPreferences()[key];

export const writePreference = (key: keyof Preferences, value: string) => {
  const nextPreferences = {
    ...readPreferences(),
    [key]: value,
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPreferences));
    window.dispatchEvent(new Event(STORAGE_CHANGE_EVENT));
  } catch {}
};

export const subscribeToPreferences = (onStoreChange: () => void) => {
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener('storage', handleStorageChange);
  window.addEventListener(STORAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener('storage', handleStorageChange);
    window.removeEventListener(STORAGE_CHANGE_EVENT, onStoreChange);
  };
};

export const getPreferencesHydrationScript = () =>
  `
try {
  var preferences = JSON.parse(localStorage.getItem('${STORAGE_KEY}') || '{}');
  document.documentElement.classList.toggle('dark', preferences.theme === 'dark');
} catch (_) {}
`.trim();
