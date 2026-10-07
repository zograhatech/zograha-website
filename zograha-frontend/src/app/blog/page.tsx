import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout, PageHero } from "@/components/site";
import { BlogContent } from "@/components/api-content";

export const metadata: Metadata = {
  title: "Technology Blog & Insights",
  description: "Technology, digital enterprise, and business transformation insights from Zograha Technologies.",
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", title: "Technology Blog & Insights", description: "Technology, digital enterprise, and business transformation insights from Zograha Technologies." },
};

export default function BlogPage() {
  return (
    <SiteLayout>
      <main className="site-main page-main">
        <PageHero breadcrumb="Blog" eyebrow="Knowledge hub" title="Our Blogs" accent="& Insights" description="Stay updated with the latest trends, insights, and innovations in technology, digital enterprise solutions, and business transformation." />
        <section className="blog-section site-section"><BlogContent /><div className="blog-back"><Link href="/">Back to home</Link></div></section>
      </main>
    </SiteLayout>
  );
}