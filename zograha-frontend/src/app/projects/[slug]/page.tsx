import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { ApiRequestError, api } from "@/lib/zograha-api";
import type { Project } from "@/types/api";
import { SiteLayout } from "@/components/site";
import { ProjectDetailContent } from "@/components/api-content";

type Props = { params: Promise<{ slug: string }> };
const getProject = cache((slug: string) => api.projects.get(slug));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const project = await getProject(slug);
    return {
      title: { absolute: project.seoTitle || `${project.title} | Zograha Technologies` },
      description: project.seoDescription || project.summary,
      alternates: { canonical: `/projects/${project.slug}` },
      openGraph: { type: "article", title: project.seoTitle || project.title, description: project.seoDescription || project.summary, images: project.image ? [project.image] : undefined },
    };
  } catch {
    return { title: "Project details", robots: { index: false, follow: true } };
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  let project: Project | undefined;
  try {
    project = await getProject(slug);
  } catch (error) {
    if (error instanceof ApiRequestError && error.status === 404) notFound();
  }
  return <SiteLayout><main className="site-main page-main"><ProjectDetailContent slug={slug} initialProject={project} /></main></SiteLayout>;
}