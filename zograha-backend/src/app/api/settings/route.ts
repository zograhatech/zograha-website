import { handle, ok, PUBLIC_CACHE } from "@/lib/api";
import { getSiteConfig } from "@/lib/site";

// Company info for header/footer/contact: click-to-call, click-to-email, WhatsApp, Maps, socials
export const GET = handle(async () => ok(getSiteConfig(), undefined, { headers: PUBLIC_CACHE }));
