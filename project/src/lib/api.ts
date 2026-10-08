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
} from "../types/api";

const defaultBase =
  typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1"
    ? "https://zograha-backend.vercel.app"
    : "http://localhost:4000";

const rawBase = import.meta.env.VITE_API_URL || defaultBase;
export const API_BASE_URL = rawBase.replace(/\/+$/, "");

export type Paginated<T> = {
  items: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type PaginationMeta = {
  page?: number;
  limit?: number;
  total?: number;
  totalPages?: number;
};

export type QueryParams = Record<string, string | number | boolean | undefined>;

export class ApiRequestError extends Error {
  status: number;
  fieldErrors?: Record<string, string[]>;

  constructor(status: number, message: string, fieldErrors?: Record<string, string[]>) {
    super(message);
    this.name = "ApiRequestError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

async function request<T>(
  path: string,
  init?: RequestInit
): Promise<{
  data: T;
  meta?: PaginationMeta;
}> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/api${path}`, init);
  } catch {
    // If local development API is unreachable, try production backend fallback
    if (API_BASE_URL.includes("localhost") || API_BASE_URL.includes("127.0.0.1")) {
      try {
        response = await fetch(`https://zograha-backend.vercel.app/api${path}`, init);
      } catch {
        throw new ApiRequestError(0, "Network error. Please check your connection and try again.");
      }
    } else {
      throw new ApiRequestError(0, "Network error. Please check your connection and try again.");
    }
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
      json?.error?.details
    );
  }

  return {
    data: json.data as T,
    meta: json.meta,
  };
}

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

const list = async <T>(resource: string, params?: QueryParams): Promise<Paginated<T>> => {
  const { data, meta } = await request<T[]>(`/${resource}${qs(params)}`);

  return {
    items: data,
    page: meta?.page ?? 1,
    limit: meta?.limit ?? data.length,
    total: meta?.total ?? data.length,
    totalPages: meta?.totalPages ?? 1,
  };
};

const one = async <T>(resource: string, idOrSlug: string): Promise<T> => {
  const response = await request<T>(`/${resource}/${idOrSlug}`);
  return response.data;
};

const jsonPost = (body: unknown): RequestInit => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

export const api = {
  settings: () => request<CompanySettings>("/settings").then((res) => res.data),

  sitemap: () => request<unknown>("/sitemap").then((res) => res.data),

  health: () => request<unknown>("/health").then((res) => res.data),

  services: {
    list: (params?: QueryParams) => list<Service>("services", params),
    get: (slug: string) => one<Service>("services", slug),
  },

  industries: {
    list: (params?: QueryParams) => list<Industry>("industries", params),
  },

  projects: {
    list: (params?: {
      featured?: boolean;
      category?: string;
      page?: number;
      limit?: number;
    }) => list<Project>("projects", params),
    get: (slug: string) => one<Project>("projects", slug),
  },

  testimonials: {
    list: (params?: QueryParams) => list<Testimonial>("testimonials", params),
  },

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

  jobs: {
    list: (params?: QueryParams) => list<Job>("jobs", params),
    get: (slug: string) => one<Job>("jobs", slug),
  },

  sendContact: (body: ContactRequest) =>
    request<ContactResponse>("/contact", jsonPost(body)).then((res) => res.data),

  apply: (form: FormData) =>
    request<ApplicationResponse>("/applications", {
      method: "POST",
      body: form,
    }).then((res) => res.data),
};

