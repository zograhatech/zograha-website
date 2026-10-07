import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { ApiRequestError, api } from "@/lib/zograha-api";
import type { Service } from "@/types/api";
import { SiteLayout } from "@/components/site";
import { ServiceDetailContent } from "@/components/api-content";

type Props = { params: Promise<{ slug: string }> };
const getService = cache((slug: string) => api.services.get(slug));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const service = await getService(slug);
    return {
      title: { absolute: service.seoTitle || `${service.title} | Zograha Technologies` },
      description: service.seoDescription || service.shortDescription,
      alternates: { canonical: `/services/${service.slug}` },
      openGraph: { type: "article", title: service.seoTitle || service.title, description: service.seoDescription || service.shortDescription },
    };
  } catch {
    return { title: "Service details", robots: { index: false, follow: true } };
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  let service: Service | undefined;
  try {
    service = await getService(slug);
  } catch (error) {
    if (error instanceof ApiRequestError && error.status === 404) notFound();
  }
  return <SiteLayout><main className="site-main page-main"><ServiceDetailContent slug={slug} initialService={service} /></main></SiteLayout>;
}