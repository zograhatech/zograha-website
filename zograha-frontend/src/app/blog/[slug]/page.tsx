import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { ApiRequestError, api } from "@/lib/zograha-api";
import type { BlogPost } from "@/types/api";
import { SiteLayout } from "@/components/site";
import { BlogDetailContent } from "@/components/api-content";

type Props = { params: Promise<{ slug: string }> };
const getPost = cache((slug: string) => api.blog.get(slug));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    const pageTitle = post.seoTitle || post.title;
    return {
      title: { absolute: /\|\s*Zograha Technologies$/i.test(pageTitle) ? pageTitle : `${pageTitle} | Zograha Technologies` },
      description: post.seoDescription || post.excerpt || undefined,
      alternates: { canonical: `/blog/${post.slug}` },
      openGraph: {
        type: "article",
        title: pageTitle,
        description: post.seoDescription || post.excerpt || undefined,
        images: post.ogImage || post.coverImage ? [post.ogImage || post.coverImage!] : undefined,
        publishedTime: post.publishedAt || undefined,
      },
    };
  } catch {
    return { title: { absolute: "Article | Zograha Technologies" }, robots: { index: false, follow: true } };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  let post: BlogPost | undefined;
  try {
    post = await getPost(slug);
  } catch (error) {
    if (error instanceof ApiRequestError && error.status === 404) notFound();
  }
  return <SiteLayout><main className="site-main page-main article-page"><BlogDetailContent slug={slug} initialPost={post} /></main></SiteLayout>;
}