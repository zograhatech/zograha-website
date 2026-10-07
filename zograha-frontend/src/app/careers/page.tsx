import type { Metadata } from "next";
import { SiteLayout, PageHero } from "@/components/site";
import { CareersContent } from "@/components/api-content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore current roles and apply to join the Zograha Technologies team.",
  alternates: { canonical: "/careers" },
  openGraph: { type: "website", title: "Careers at Zograha Technologies", description: "Explore current roles and apply to join the Zograha Technologies team." },
};

export default function CareersPage() {
  return (
    <SiteLayout>
      <main className="site-main page-main">
        <PageHero breadcrumb="Careers" eyebrow="Careers" title="Build and grow things" accent="with people who do both." description="Zograha’s developers, designers and marketers work on the same projects and with clients directly. That’s the job." />
        <CareersContent />
      </main>
    </SiteLayout>
  );
}