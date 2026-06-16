import { getConstitutionDocument } from '@/features/constitution-reader/server/corpus';
import { NextResponse } from 'next/server';

type ConstitutionDocumentRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(
  _request: Request,
  { params }: ConstitutionDocumentRouteProps,
) {
  const { slug } = await params;
  const document = await getConstitutionDocument(slug);

  if (!document) {
    return NextResponse.json({ error: 'Document not found' }, { status: 404 });
  }

  return NextResponse.json(document);
}
