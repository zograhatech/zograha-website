export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon?: string | null;
  image?: string | null;
  features: string[];
  order: number;
  published: boolean;
  seoTitle?: string | null;
  seoDescription?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  icon?: string | null;
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client?: string | null;
  category?: string | null;
  summary: string;
  description?: string | null;
  image?: string | null;
  gallery: string[];
  techStack: string[];
  liveUrl?: string | null;
  featured: boolean;
  published: boolean;
  order: number;
  seoTitle?: string | null;
  seoDescription?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string | null;
  company?: string | null;
  content: string;
  rating?: number | null;
  avatar?: string | null;
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  content: string;
  coverImage?: string | null;
  ogImage?: string | null;
  readingTime?: number | null;
  category?: string | null;
  tags: string[];
  author?: string | null;
  published: boolean;
  publishedAt?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  related?: Array<Pick<BlogPost, "id" | "slug" | "title" | "excerpt" | "coverImage">>;
  createdAt: string;
  updatedAt: string;
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  department?: string | null;
  summary: string;
  description: string;
  location?: string | null;
  type?: string | null;
  experience?: string | null;
  responsibilities: string[];
  requirements: string[];
  salaryRange?: string | null;
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CompanySettings {
  name: string;
  phone: string;
  email: string;
  address: string;
  links: {
    call: string | null;
    email: string | null;
    whatsapp: string | null;
  };
  googleMapsEmbedUrl?: string | null;
  siteUrl: string;
  social: Record<string, string>;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  service?: string;
  message: string;
  website?: string;
}

export interface ContactResponse {
  id: string;
}

export interface ApplicationResponse {
  id: string;
}

