import { handleAuthCallback } from '@api/auth/callback';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return handleAuthCallback(request);
}
