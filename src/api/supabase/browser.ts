'use client';

import { createBrowserClient } from '@supabase/ssr';
import { getSupabaseBrowserKey, getSupabaseUrl } from '@api/supabase/config';

export function createSupabaseBrowserClient() {
  return createBrowserClient(getSupabaseUrl(), getSupabaseBrowserKey());
}
