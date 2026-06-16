'use client';

import {
  CONSTITUTION_DOCUMENT_CACHE_STORAGE_KEY,
  CONSTITUTION_DOCUMENTS_API_PATH,
} from '@/features/constitution-reader/constants';
import { ROUTES } from '@/constants';
import { ConstitutionDocumentView } from '@/features/constitution-reader/document-view';
import { ConstitutionTimeline } from '@/features/constitution-reader/constitution-timeline';
import type { Locale } from '@/i18n/routing';
import type {
  ConstitutionDocument,
  ConstitutionDocumentSummary,
} from '@/features/constitution-reader/types';
import { type ReactNode, useCallback, useEffect, useState } from 'react';

type ConstitutionReaderClientProps = {
  canSuggestNotes: boolean;
  documents: readonly ConstitutionDocumentSummary[];
  errorLabel: string;
  initialDocument: ConstitutionDocument;
  loadingLabel: string;
  locale: Locale;
};

type DocumentCache = Record<string, ConstitutionDocument>;

export function ConstitutionReaderClient({
  canSuggestNotes,
  documents,
  errorLabel,
  initialDocument,
  loadingLabel,
  locale,
}: ConstitutionReaderClientProps) {
  const [selectedDocument, setSelectedDocument] = useState(initialDocument);
  const [documentCache, setDocumentCache] = useState<DocumentCache>(() => ({
    ...readDocumentCache(),
    [initialDocument.id]: initialDocument,
  }));
  const [isLoadingDocument, setIsLoadingDocument] = useState(false);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const selectedDocumentId = selectedDocument.id;

  const selectConstitution = useCallback(
    async (documentId: string, options: { updateUrl: boolean }) => {
      if (documentId === selectedDocumentId) {
        return;
      }

      const cachedDocument = documentCache[documentId];

      if (cachedDocument) {
        setSelectedDocument(cachedDocument);
        setLoadingError(null);

        if (options.updateUrl) {
          replaceConstitutionUrl(locale, documentId);
        }

        return;
      }

      setIsLoadingDocument(true);
      setLoadingError(null);

      try {
        const nextDocument = await fetchConstitutionDocument(documentId);

        setDocumentCache((currentCache) => {
          const nextCache = {
            ...currentCache,
            [nextDocument.id]: nextDocument,
          };

          writeDocumentCache(nextCache);
          return nextCache;
        });
        setSelectedDocument(nextDocument);

        if (options.updateUrl) {
          replaceConstitutionUrl(locale, nextDocument.id);
        }
      } catch {
        setLoadingError(errorLabel);
      } finally {
        setIsLoadingDocument(false);
      }
    },
    [documentCache, errorLabel, locale, selectedDocumentId],
  );

  useEffect(() => {
    const handlePopState = () => {
      const documentId =
        new URL(window.location.href).searchParams.get('constitution') ??
        initialDocument.id;

      void selectConstitution(documentId, { updateUrl: false });
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, [initialDocument.id, selectConstitution]);

  async function handleSelectConstitution(documentId: string) {
    if (documentId === selectedDocumentId) {
      return;
    }

    await selectConstitution(documentId, { updateUrl: true });
  }

  return (
    <ReaderPendingBoundary
      isReaderPending={isLoadingDocument}
      loadingLabel={loadingLabel}
      loadingError={loadingError}
      timeline={
        <ConstitutionTimeline
          documents={documents}
          locale={locale}
          onSelectConstitution={handleSelectConstitution}
          selectedConstitution={selectedDocument}
          selectedConstitutionId={selectedDocument.id}
        />
      }
      workspace={
        <ConstitutionDocumentView
          canSuggestNotes={canSuggestNotes}
          document={selectedDocument}
        />
      }
    />
  );
}

function ReaderPendingBoundary({
  isReaderPending,
  loadingError,
  loadingLabel,
  timeline,
  workspace,
}: {
  isReaderPending: boolean;
  loadingError: string | null;
  loadingLabel: string;
  timeline: ReactNode;
  workspace: ReactNode;
}) {
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

async function fetchConstitutionDocument(documentId: string) {
  const response = await fetch(
    `${CONSTITUTION_DOCUMENTS_API_PATH}/${encodeURIComponent(documentId)}`,
  );

  if (!response.ok) {
    throw new Error(`Constitution document request failed: ${response.status}`);
  }

  return (await response.json()) as ConstitutionDocument;
}

function readDocumentCache(): DocumentCache {
  try {
    const cachedValue = window.sessionStorage.getItem(
      CONSTITUTION_DOCUMENT_CACHE_STORAGE_KEY,
    );

    if (!cachedValue) {
      return {};
    }

    return JSON.parse(cachedValue) as DocumentCache;
  } catch {
    return {};
  }
}

function writeDocumentCache(cache: DocumentCache) {
  try {
    window.sessionStorage.setItem(
      CONSTITUTION_DOCUMENT_CACHE_STORAGE_KEY,
      JSON.stringify(cache),
    );
  } catch {
    // If storage is full or blocked, the in-memory cache still works.
  }
}

function replaceConstitutionUrl(locale: Locale, documentId: string) {
  const nextUrl = `/${locale}${ROUTES.constitutionReader}?constitution=${encodeURIComponent(documentId)}`;
  window.history.pushState(null, '', nextUrl);
}
