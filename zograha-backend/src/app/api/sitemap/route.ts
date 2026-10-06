import { handle, ok, PUBLIC_CACHE } from "@/lib/api";
import { prisma } from "@/lib/prisma";

// Feed this to the frontend's sitemap.xml generator
export const GET = handle(async () => {
  const select = { slug: true, updatedAt: true };
  const where = { published: true };
  const [services, blog, projects] = await Promise.all([
    prisma.service.findMany({ where, select }),
    prisma.blogPost.findMany({ where, select }),
    prisma.project.findMany({ where, select }),
  ]);
  return ok({ services, blog, projects }, undefined, { headers: PUBLIC_CACHE });
});
