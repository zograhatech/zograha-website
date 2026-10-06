import { z } from "zod";

const slug = z.string().min(1).max(150).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers and hyphens");
const text = (min: number, max: number) => z.string().trim().min(min).max(max);
const optText = (max: number) => z.string().trim().max(max).optional().nullable();
const strList = z.array(z.string().trim().min(1).max(300)).max(50);
const phone = z.string().trim().regex(/^[+()\-.\s\d]{7,20}$/, "Enter a valid phone number");
const optUrl = z.string().trim().url("Enter a valid URL").max(500);

const seo = { seoTitle: optText(70), seoDescription: optText(170) };

/* ---------- Public forms ---------- */
export const contactSchema = z.object({
  name: text(2, 100),
  email: z.string().trim().email("Enter a valid email").max(150),
  phone: phone.optional(),
  subject: optText(150),
  service: optText(100),
  message: text(10, 3000),
  website: z.string().optional(), // honeypot — must stay empty
});

export const applicationSchema = z.object({
  name: text(2, 100),
  email: z.string().trim().email("Enter a valid email").max(150),
  phone,
  jobId: z.string().max(50).optional(),
  jobTitle: optText(150),
  experience: optText(100),
  currentCompany: optText(150),
  linkedinUrl: optUrl.optional(),
  portfolioUrl: optUrl.optional(),
  coverLetter: optText(3000),
  resumeUrl: optUrl.optional(),
  website: z.string().optional(), // honeypot
});

/* ---------- Admin content ---------- */
export const serviceSchema = z.object({
  slug: slug.optional(),
  title: text(2, 120),
  shortDescription: text(5, 300),
  description: text(5, 20000),
  icon: optText(100),
  image: optText(500),
  features: strList.default([]),
  order: z.number().int().default(0),
  published: z.boolean().default(true),
  ...seo,
});

export const blogSchema = z.object({
  slug: slug.optional(),
  title: text(2, 200),
  excerpt: text(5, 400),
  content: text(5, 200000),
  coverImage: optText(500),
  author: text(2, 100).default("Zograha Team"),
  category: optText(80),
  tags: strList.default([]),
  readingTime: z.number().int().min(1).optional(),
  published: z.boolean().default(false),
  publishedAt: z.coerce.date().optional(),
  ogImage: optText(500),
  ...seo,
});

export const projectSchema = z.object({
  slug: slug.optional(),
  title: text(2, 150),
  client: optText(150),
  category: optText(80),
  summary: text(5, 400),
  description: optText(20000),
  image: optText(500),
  gallery: strList.default([]),
  techStack: strList.default([]),
  liveUrl: optText(500),
  featured: z.boolean().default(false),
  order: z.number().int().default(0),
  published: z.boolean().default(true),
  ...seo,
});

export const testimonialSchema = z.object({
  name: text(2, 100),
  role: optText(100),
  company: optText(100),
  content: text(5, 1000),
  rating: z.number().int().min(1).max(5).default(5),
  avatar: optText(500),
  order: z.number().int().default(0),
  published: z.boolean().default(true),
});

export const industrySchema = z.object({
  slug: slug.optional(),
  name: text(2, 100),
  description: optText(500),
  icon: optText(100),
  order: z.number().int().default(0),
  published: z.boolean().default(true),
});

export const jobSchema = z.object({
  slug: slug.optional(),
  title: text(2, 150),
  department: optText(100),
  location: text(2, 100).default("Tamil Nadu, India"),
  type: text(2, 50).default("Full-time"),
  experience: optText(100),
  summary: text(5, 400),
  description: text(5, 20000),
  responsibilities: strList.default([]),
  requirements: strList.default([]),
  salaryRange: optText(100),
  order: z.number().int().default(0),
  published: z.boolean().default(true),
});

export const inboxStatusSchema = z.object({
  status: z.enum(["NEW", "READ", "REPLIED", "SPAM", "REVIEWING", "SHORTLISTED", "INTERVIEW", "REJECTED", "HIRED"]),
});
