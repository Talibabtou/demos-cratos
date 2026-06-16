'use client';

import { Check, Info, TriangleAlert, X } from 'lucide-react';
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type ToastTone = 'error' | 'info' | 'success';

type Toast = {
  id: number;
  message: string;
  tone: ToastTone;
};

type ToastInput = {
  message: string;
  tone?: ToastTone;
};

type ToastContextValue = {
  toast: (input: ToastInput) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);
const TOAST_DURATION_MS = 4500;

export function ToasterProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextToastId = useRef(0);

  const removeToast = useCallback((id: number) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id),
    );
  }, []);

  const toast = useCallback(({ message, tone = 'info' }: ToastInput) => {
    const id = nextToastId.current;
    nextToastId.current += 1;

    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id,
        message,
        tone,
      },
    ]);
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-5 left-5 z-[70] grid w-[min(24rem,calc(100vw-2.5rem))] gap-2"
      >
        {toasts.map((toast) => (
          <ToastItem key={toast.id} onClose={removeToast} toast={toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within ToasterProvider.');
  }

  return context.toast;
}

function ToastItem({
  onClose,
  toast,
}: {
  onClose: (id: number) => void;
  toast: Toast;
}) {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      onClose(toast.id);
    }, TOAST_DURATION_MS);

    return () => window.clearTimeout(timeout);
  }, [onClose, toast.id]);

  const Icon =
    toast.tone === 'success'
      ? Check
      : toast.tone === 'error'
        ? TriangleAlert
        : Info;
  const toneClassName =
    toast.tone === 'error'
      ? 'border-civic-red text-civic-red'
      : 'border-civic-blue text-civic-blue';

  return (
    <div
      className={`rounded-panel border bg-civic-paper p-3 text-sm shadow-quiet ${toneClassName}`}
      role={toast.tone === 'error' ? 'alert' : 'status'}
    >
      <div className="flex items-start gap-3">
        <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        <p className="min-w-0 flex-1 text-civic-text leading-6">
          {toast.message}
        </p>
        <button
          aria-label="Close notification"
          className="focus-ring inline-flex size-6 shrink-0 items-center justify-center rounded-sm text-civic-muted transition hover:text-civic-ink"
          onClick={() => onClose(toast.id)}
          type="button"
        >
          <X aria-hidden="true" className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
