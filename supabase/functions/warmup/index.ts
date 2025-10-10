// Deno (Supabase Edge Runtime)
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(() =>
  new Response("ok", {
    status: 200,
    headers: { "content-type": "text/plain" },
  })
);