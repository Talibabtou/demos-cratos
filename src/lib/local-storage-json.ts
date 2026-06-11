export function readJsonStorageValue<TValue>(
  storageKey: string,
  fallbackValue: TValue,
): TValue {
  if (typeof window === 'undefined') {
    return fallbackValue;
  }

  try {
    const rawValue = window.localStorage.getItem(storageKey);

    if (!rawValue) {
      return fallbackValue;
    }

    return JSON.parse(rawValue) as TValue;
  } catch {
    return fallbackValue;
  }
}

export function writeJsonStorageValue<TValue>({
  changeEvent,
  storageKey,
  value,
}: {
  changeEvent: string;
  storageKey: string;
  value: TValue;
}) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(storageKey, JSON.stringify(value));
    window.dispatchEvent(new Event(changeEvent));
  } catch {}
}

export function subscribeToJsonStorageValue({
  changeEvent,
  onStoreChange,
  storageKey,
}: {
  changeEvent: string;
  onStoreChange: () => void;
  storageKey: string;
}) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey) {
      onStoreChange();
    }
  };

  window.addEventListener('storage', onStorage);
  window.addEventListener(changeEvent, onStoreChange);

  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener(changeEvent, onStoreChange);
  };
}
