import type { Metadata } from "next";
import { ContactForm } from "@/components/forms";
import { ContactOffice } from "@/components/api-content";
import { SiteLayout, PageHero } from "@/components/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Zograha Technologies about software, digital products, and technology projects.",
  alternates: { canonical: "/contact" },
  openGraph: { type: "website", title: "Contact Zograha Technologies", description: "Contact Zograha Technologies about software, digital products, and technology projects." },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string | string[] }> }) {
  const params = await searchParams;
  const initialService = Array.isArray(params.service) ? params.service[0] : params.service;
  return (
    <SiteLayout>
      <main className="site-main page-main">
        <PageHero breadcrumb="Contact Us" eyebrow="Start a conversation" title="Let’s make the next" accent="thing together." description="Tell us what you’re working on. We’ll get back to you and figure out the right next step." />
        <section className="contact-section site-section"><div className="contact-heading"><span className="section-eyebrow"><i />Get in touch</span><h2>A short message can start <em>something great.</em></h2><p>Share a little about your project and our team will be in touch.</p></div><ContactForm initialService={initialService} /></section>
        <ContactOffice />
      </main>
    </SiteLayout>
  );
}