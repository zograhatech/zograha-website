import type { MetadataRoute } from "next";
import { api } from "@/lib/zograha-api";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-dynamic";

type SitemapData = {
  services: Array<{ slug: string; updatedAt: string }>;
  blog: Array<{ slug: string; updatedAt: string }>;
  projects: Array<{ slug: string; updatedAt: string }>;
};

const staticPaths = ["/", "/about", "/services", "/blog", "/careers", "/contact", "/privacy-policy", "/terms-and-conditions"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  try {
    const rawData = await api.sitemap();
    const data = rawData as SitemapData;
    return [
      ...staticPaths.map((path) => ({ url: new URL(path, siteUrl).toString() })),
      ...(data.services ?? []).map((item) => ({ url: new URL(`/services/${item.slug}`, siteUrl).toString(), lastModified: new Date(item.updatedAt) })),
      ...(data.blog ?? []).map((item) => ({ url: new URL(`/blog/${item.slug}`, siteUrl).toString(), lastModified: new Date(item.updatedAt) })),
      ...(data.projects ?? []).map((item) => ({ url: new URL(`/projects/${item.slug}`, siteUrl).toString(), lastModified: new Date(item.updatedAt) })),
    ];
  } catch {
    return staticPaths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
  }
}