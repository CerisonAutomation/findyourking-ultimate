import { createClient } from "@supabase/supabase-js";

/**
 * Create a Supabase server client.
 * Uses SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env vars.
 */
export function createServerClient() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];

  if (!url || !key) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables"
    );
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
