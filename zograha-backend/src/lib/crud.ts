import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "./prisma";
import { ApiError, ok, readJson, slugify, PUBLIC_CACHE } from "./api";
import { isAdmin, requireAdmin } from "./auth";
import * as v from "./validators";

type Cfg = {
  model: string;
  lookup: "slug" | "id";
  create: z.AnyZodObject;
  search: string[];
  filters: string[];
  orderBy: unknown;
  slugFrom?: string;
  listOmit?: Record<string, boolean>;
  prepare?: (data: any, existing?: any) => any;
};

const byOrder = [{ order: "asc" }, { createdAt: "desc" }];

export const resources: Record<string, Cfg> = {
  services: {
    model: "service", lookup: "slug", create: v.serviceSchema, slugFrom: "title",
    search: ["title", "shortDescription"], filters: [], orderBy: byOrder,
  },
  blog: {
    model: "blogPost", lookup: "slug", create: v.blogSchema, slugFrom: "title",
    search: ["title", "excerpt"], filters: ["category", "tag"],
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    listOmit: { content: true },
    prepare(d, existing) {
      if (typeof d.content === "string" && d.readingTime === undefined) {
        d.readingTime = Math.max(1, Math.ceil(d.content.split(/\s+/).length / 200));
      }
      if (d.published === true && !d.publishedAt && !existing?.publishedAt) d.publishedAt = new Date();
      return d;
    },
  },
  projects: {
    model: "project", lookup: "slug", create: v.projectSchema, slugFrom: "title",
    search: ["title", "summary", "client"], filters: ["category", "featured"], orderBy: byOrder,
  },
  testimonials: {
    model: "testimonial", lookup: "id", create: v.testimonialSchema,
    search: ["name", "company", "content"], filters: [], orderBy: byOrder,
  },
  industries: {
    model: "industry", lookup: "slug", create: v.industrySchema, slugFrom: "name",
    search: ["name"], filters: [], orderBy: byOrder,
  },
  jobs: {
    model: "job", lookup: "slug", create: v.jobSchema, slugFrom: "title",
    search: ["title", "department"], filters: ["department", "type", "location"], orderBy: byOrder,
  },
};

function cfgFor(key: string) {
  const cfg = resources[key];
  if (!cfg) throw new ApiError(404, "Resource not found");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return { cfg, db: (prisma as any)[cfg.model] };
}

export async function listResource(req: NextRequest, key: string) {
  const { cfg, db } = cfgFor(key);
  const sp = req.nextUrl.searchParams;
  const admin = isAdmin(req);
  const page = Math.max(1, parseInt(sp.get("page") ?? "1") || 1);
  const limit = Math.min(50, Math.max(1, parseInt(sp.get("limit") ?? "12") || 12));

  const where: Record<string, unknown> = {};
  if (!(admin && sp.get("all") === "true")) where.published = true;

  for (const f of cfg.filters) {
    const val = sp.get(f);
    if (!val) continue;
    if (f === "featured") where.featured = val === "true";
    else if (f === "tag") where.tags = { has: val };
    else where[f] = { equals: val, mode: "insensitive" };
  }
  const q = sp.get("q")?.trim();
  if (q) where.OR = cfg.search.map((f) => ({ [f]: { contains: q, mode: "insensitive" } }));

  const [items, total] = await prisma.$transaction([
    db.findMany({ where, orderBy: cfg.orderBy, skip: (page - 1) * limit, take: limit, ...(cfg.listOmit ? { omit: cfg.listOmit } : {}) }),
    db.count({ where }),
  ]);
  return ok(items, { page, limit, total, totalPages: Math.ceil(total / limit) }, { headers: admin ? {} : PUBLIC_CACHE });
}

export async function getResource(req: NextRequest, key: string, id: string) {
  const { cfg, db } = cfgFor(key);
  const admin = isAdmin(req);
  const item = await db.findUnique({ where: { [cfg.lookup]: id } });
  if (!item || (!item.published && !admin)) throw new ApiError(404, "Not found");

  // Blog: include related posts for the "Blog Details" page
  let related: unknown[] | undefined;
  if (key === "blog") {
    related = await prisma.blogPost.findMany({
      where: { published: true, id: { not: item.id }, ...(item.category ? { category: item.category } : {}) },
      orderBy: { publishedAt: "desc" }, take: 3, omit: { content: true },
    });
  }
  return ok(related ? { ...item, related } : item, undefined, { headers: admin ? {} : PUBLIC_CACHE });
}

export async function createResource(req: NextRequest, key: string) {
  requireAdmin(req);
  const { cfg, db } = cfgFor(key);
  let data = cfg.create.parse(await readJson(req));
  if (cfg.slugFrom && !data.slug) data.slug = slugify(String(data[cfg.slugFrom]));
  if (cfg.prepare) data = cfg.prepare(data);
  return ok(await db.create({ data }), undefined, { status: 201 });
}

export async function updateResource(req: NextRequest, key: string, id: string) {
  requireAdmin(req);
  const { cfg, db } = cfgFor(key);
  const existing = await db.findUnique({ where: { [cfg.lookup]: id } });
  if (!existing) throw new ApiError(404, "Not found");
  let data = cfg.create.partial().parse(await readJson(req));
  if (cfg.prepare) data = cfg.prepare(data, existing);
  return ok(await db.update({ where: { [cfg.lookup]: id }, data }));
}

export async function deleteResource(req: NextRequest, key: string, id: string) {
  requireAdmin(req);
  const { cfg, db } = cfgFor(key);
  await db.delete({ where: { [cfg.lookup]: id } });
  return ok({ deleted: true });
}
