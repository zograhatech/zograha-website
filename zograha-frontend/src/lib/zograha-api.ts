/**
 * Zograha API Client
 *
 * Frontend client for communicating with the Zograha backend API.
 *
 * Local:
 *   NEXT_PUBLIC_API_URL=http://localhost:4000
 *
 * Production:
 *   NEXT_PUBLIC_API_URL=https://api.zograha.com
 */

import type {
  ApplicationResponse,
  BlogPost,
  CompanySettings,
  ContactRequest,
  ContactResponse,
  Industry,
  Job,
  Project,
  Service,
  Testimonial,
} from "@/types/api";

const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type Paginated<T> = {
  items: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

type PaginationMeta = {
  page?: number;
  limit?: number;
  total?: number;
  totalPages?: number;
};

type QueryParams = Record<string, string | number | boolean | undefined>;

/* -------------------------------------------------------------------------- */
/* API Error                                                                  */
/* -------------------------------------------------------------------------- */

export class ApiRequestError extends Error {
  status: number;
  fieldErrors?: Record<string, string[]>;

  constructor(
    status: number,
    message: string,
    fieldErrors?: Record<string, string[]>,
  ) {
    super(message);

    this.name = "ApiRequestError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

/* -------------------------------------------------------------------------- */
/* Request Helper                                                             */
/* -------------------------------------------------------------------------- */

async function request<T>(
  path: string,
  init?: RequestInit,
): Promise<{
  data: T;
  meta?: PaginationMeta;
}> {
  let response: Response;

  try {
    response = await fetch(`${BASE}/api${path}`, init);
  } catch {
    throw new ApiRequestError(
      0,
      "Network error. Please check your connection and try again.",
    );
  }

  const json: {
    success?: boolean;
    data?: T;
    meta?: PaginationMeta;
    error?: {
      message?: string;
      details?: Record<string, string[]>;
    };
  } | null = await response.json().catch(() => null);

  if (!response.ok || !json?.success) {
    throw new ApiRequestError(
      response.status,
      json?.error?.message ?? "Request failed",
      json?.error?.details,
    );
  }

  return {
    data: json.data as T,
    meta: json.meta,
  };
}

/* -------------------------------------------------------------------------- */
/* Query String Helper                                                        */
/* -------------------------------------------------------------------------- */

const qs = (params: QueryParams = {}): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      searchParams.set(key, String(value));
    }
  });

  const queryString = searchParams.toString();

  return queryString ? `?${queryString}` : "";
};

/* -------------------------------------------------------------------------- */
/* List Helper                                                                */
/* -------------------------------------------------------------------------- */

const list = async <T>(
  resource: string,
  params?: QueryParams,
): Promise<Paginated<T>> => {
  const { data, meta } = await request<T[]>(`/${resource}${qs(params)}`);

  return {
    items: data,
    page: meta?.page ?? 1,
    limit: meta?.limit ?? data.length,
    total: meta?.total ?? data.length,
    totalPages: meta?.totalPages ?? 1,
  };
};

/* -------------------------------------------------------------------------- */
/* Single Resource Helper                                                     */
/* -------------------------------------------------------------------------- */

const one = async <T>(resource: string, idOrSlug: string): Promise<T> => {
  const response = await request<T>(`/${resource}/${idOrSlug}`);

  return response.data;
};

/* -------------------------------------------------------------------------- */
/* JSON POST Helper                                                           */
/* -------------------------------------------------------------------------- */

const json = (body: unknown): RequestInit => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

/* -------------------------------------------------------------------------- */
/* Zograha API                                                                */
/* -------------------------------------------------------------------------- */

export const api = {
  /* ------------------------------------------------------------------------ */
  /* Company Settings                                                         */
  /* ------------------------------------------------------------------------ */

  settings: () =>
    request<CompanySettings>("/settings").then((response) => response.data),

  /* ------------------------------------------------------------------------ */
  /* Sitemap                                                                  */
  /* ------------------------------------------------------------------------ */

  sitemap: () => request<unknown>("/sitemap").then((response) => response.data),

  /* ------------------------------------------------------------------------ */
  /* Services                                                                 */
  /* ------------------------------------------------------------------------ */

  services: {
    list: (params?: QueryParams) => list<Service>("services", params),

    get: (slug: string) => one<Service>("services", slug),
  },

  /* ------------------------------------------------------------------------ */
  /* Industries                                                               */
  /* ------------------------------------------------------------------------ */

  industries: {
    list: (params?: QueryParams) => list<Industry>("industries", params),
  },

  /* ------------------------------------------------------------------------ */
  /* Projects                                                                 */
  /* ------------------------------------------------------------------------ */

  projects: {
    list: (params?: {
      featured?: boolean;
      category?: string;
      page?: number;
      limit?: number;
    }) => list<Project>("projects", params),

    get: (slug: string) => one<Project>("projects", slug),
  },

  /* ------------------------------------------------------------------------ */
  /* Testimonials                                                             */
  /* ------------------------------------------------------------------------ */

  testimonials: {
    list: (params?: QueryParams) => list<Testimonial>("testimonials", params),
  },

  /* ------------------------------------------------------------------------ */
  /* Blog                                                                     */
  /* ------------------------------------------------------------------------ */

  blog: {
    list: (params?: {
      page?: number;
      limit?: number;
      category?: string;
      tag?: string;
      q?: string;
    }) => list<BlogPost>("blog", params),

    get: (slug: string) => one<BlogPost>("blog", slug),
  },

  /* ------------------------------------------------------------------------ */
  /* Jobs                                                                     */
  /* ------------------------------------------------------------------------ */

  jobs: {
    list: (params?: QueryParams) => list<Job>("jobs", params),

    get: (slug: string) => one<Job>("jobs", slug),
  },

  /* ------------------------------------------------------------------------ */
  /* Contact Form                                                             */
  /* ------------------------------------------------------------------------ */

  sendContact: (body: ContactRequest) =>
    request<ContactResponse>("/contact", json(body)).then(
      (response) => response.data,
    ),

  /* ------------------------------------------------------------------------ */
  /* Career Application                                                       */
  /* ------------------------------------------------------------------------ */

  apply: (form: FormData) =>
    request<ApplicationResponse>("/applications", {
      method: "POST",
      body: form,
    }).then((response) => response.data),
};
