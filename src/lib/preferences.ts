import {
  readJsonStorageValue,
  subscribeToJsonStorageValue,
  writeJsonStorageValue,
} from '@/lib/local-storage-json';

const STORAGE_KEY = 'demos-cratos:preferences';
const STORAGE_CHANGE_EVENT = 'demos-cratos:preferences-change';

type Preferences = {
  locale?: string;
  theme?: string;
};

const readPreferences = (): Preferences => {
  return readJsonStorageValue<Preferences>(STORAGE_KEY, {});
};

export const readPreference = (key: keyof Preferences) =>
  readPreferences()[key];

export const writePreference = (key: keyof Preferences, value: string) => {
  const nextPreferences = {
    ...readPreferences(),
    [key]: value,
  };

  writeJsonStorageValue({
    changeEvent: STORAGE_CHANGE_EVENT,
    storageKey: STORAGE_KEY,
    value: nextPreferences,
  });
};

export const subscribeToPreferences = (onStoreChange: () => void) => {
  return subscribeToJsonStorageValue({
    changeEvent: STORAGE_CHANGE_EVENT,
    onStoreChange,
    storageKey: STORAGE_KEY,
  });
};

export const getPreferencesHydrationScript = () =>
  `
try {
  var preferences = JSON.parse(localStorage.getItem('${STORAGE_KEY}') || '{}');
  document.documentElement.classList.toggle('dark', preferences.theme === 'dark');
} catch (_) {}
`.trim();
