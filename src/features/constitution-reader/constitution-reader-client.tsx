'use client';

import { ConstitutionReaderPendingBoundary } from '@/features/constitution-reader/constitution-reader-pending-boundary';
import { ConstitutionTimeline } from '@/features/constitution-reader/constitution-timeline';
import { ConstitutionWorkspace } from '@/features/constitution-reader/constitution-workspace';
import type { Locale } from '@/i18n/routing';
import type {
  ConstitutionDocument,
  ConstitutionDocumentSummary,
} from '@api/constitution-reader/corpus';
import { useCallback, useEffect, useState } from 'react';

type ConstitutionReaderClientProps = {
  documents: readonly ConstitutionDocumentSummary[];
  errorLabel: string;
  initialDocument: ConstitutionDocument;
  loadingLabel: string;
  locale: Locale;
};

type DocumentCache = Record<string, ConstitutionDocument>;

const storageKey = 'demos-cratos:constitution-reader:documents:v1';

export function ConstitutionReaderClient({
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
    <ConstitutionReaderPendingBoundary
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
      workspace={<ConstitutionWorkspace document={selectedDocument} />}
    />
  );
}

async function fetchConstitutionDocument(documentId: string) {
  const response = await fetch(
    `/api/constitution-reader/documents/${encodeURIComponent(documentId)}`,
  );

  if (!response.ok) {
    throw new Error(`Constitution document request failed: ${response.status}`);
  }

  return (await response.json()) as ConstitutionDocument;
}

function readDocumentCache(): DocumentCache {
  try {
    const cachedValue = window.sessionStorage.getItem(storageKey);

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
    window.sessionStorage.setItem(storageKey, JSON.stringify(cache));
  } catch {
    // If storage is full or blocked, the in-memory cache still works.
  }
}

function replaceConstitutionUrl(locale: Locale, documentId: string) {
  const nextUrl = `/${locale}/constitution-reader?constitution=${encodeURIComponent(documentId)}`;
  window.history.pushState(null, '', nextUrl);
}
