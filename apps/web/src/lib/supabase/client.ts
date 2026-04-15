import { createSupabaseBrowserClient } from "@fyk/supabase/client";

let client: ReturnType<typeof createSupabaseBrowserClient> | null = null;

export function getSupabaseBrowserClient() {
  if (!client) {
    client = createSupabaseBrowserClient();
  }
  return client;
}

export { createSupabaseBrowserClient as createBrowserClient };
