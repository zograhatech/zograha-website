import type { Metadata } from "next";
import { SiteLayout, PageHero, SectionEyebrow } from "@/components/site";
import { ServicesContent } from "@/components/api-content";

export const metadata: Metadata = {
  title: "Software, Web & Digital Services",
  description: "Explore software engineering, web, mobile, design, marketing, and technology services from Zograha Technologies.",
  alternates: { canonical: "/services" },
  openGraph: { type: "website", title: "Software, Web & Digital Services", description: "Explore software engineering, web, mobile, design, marketing, and technology services from Zograha Technologies." },
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <main className="site-main page-main">
        <PageHero breadcrumb="Services" eyebrow="What we offer" title="Digital capabilities designed for" accent="modern businesses." description="From concept to execution, we provide the technical expertise and strategic thinking you need to scale." />
        <section className="services-section site-section"><ServicesContent /></section>
        <section className="service-compare"><div><SectionEyebrow>One connected team</SectionEyebrow><h2>Strategy, delivery and support <em>in one place.</em></h2></div><p>Tell us where you want to go. We’ll bring together the right people and capabilities to help you get there.</p></section>
      </main>
    </SiteLayout>
  );
}