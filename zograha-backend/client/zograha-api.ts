/**
 * Drop this file into your React frontend (e.g. src/lib/zograha-api.ts).
 * Set VITE_API_URL (Vite) or NEXT_PUBLIC_API_URL (Next) to the deployed backend URL.
 */
const BASE =
  (import.meta as any).env?.VITE_API_URL ??
  (typeof process !== "undefined" ? process.env.NEXT_PUBLIC_API_URL : undefined) ??
  "http://localhost:4000";

export type Paginated<T> = { items: T[]; page: number; limit: number; total: number; totalPages: number };

export class ApiRequestError extends Error {
  constructor(public status: number, message: string, public fieldErrors?: Record<string, string[]>) {
    super(message);
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<{ data: T; meta?: any }> {
  let res: Response;
  try {
    res = await fetch(`${BASE}/api${path}`, init);
  } catch {
    throw new ApiRequestError(0, "Network error. Please check your connection and try again.");
  }
  const json = await res.json().catch(() => null);
  if (!res.ok || !json?.success) {
    throw new ApiRequestError(res.status, json?.error?.message ?? "Request failed", json?.error?.details);
  }
  return json;
}

const qs = (p: Record<string, string | number | boolean | undefined> = {}) => {
  const s = new URLSearchParams();
  Object.entries(p).forEach(([k, v]) => v !== undefined && v !== "" && s.set(k, String(v)));
  const out = s.toString();
  return out ? `?${out}` : "";
};

const list = async <T>(res: string, params?: Record<string, any>): Promise<Paginated<T>> => {
  const { data, meta } = await request<T[]>(`/${res}${qs(params)}`);
  return { items: data, ...meta };
};
const one = async <T>(res: string, idOrSlug: string) => (await request<T>(`/${res}/${idOrSlug}`)).data;
const json = (body: unknown): RequestInit => ({
  method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
});

export const api = {
  settings: () => request<any>("/settings").then((r) => r.data),
  sitemap: () => request<any>("/sitemap").then((r) => r.data),

  services: { list: (p?: any) => list<any>("services", p), get: (slug: string) => one<any>("services", slug) },
  industries: { list: (p?: any) => list<any>("industries", p) },
  projects: { list: (p?: { featured?: boolean; category?: string; page?: number; limit?: number }) => list<any>("projects", p), get: (slug: string) => one<any>("projects", slug) },
  testimonials: { list: (p?: any) => list<any>("testimonials", p) },
  blog: {
    list: (p?: { page?: number; limit?: number; category?: string; tag?: string; q?: string }) => list<any>("blog", p),
    get: (slug: string) => one<any>("blog", slug), // includes `related`
  },
  jobs: { list: (p?: any) => list<any>("jobs", p), get: (slug: string) => one<any>("jobs", slug) },

  /** Contact form. Include a hidden `website` input (honeypot) and leave it empty. */
  sendContact: (body: { name: string; email: string; phone?: string; subject?: string; service?: string; message: string; website?: string }) =>
    request<{ id: string }>("/contact", json(body)).then((r) => r.data),

  /** Career form. Pass a FormData (with optional `resume` file) — do NOT set Content-Type manually. */
  apply: (form: FormData) => request<{ id: string }>("/applications", { method: "POST", body: form }).then((r) => r.data),
};
