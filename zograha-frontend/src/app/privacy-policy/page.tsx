import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout, PageHero, SectionEyebrow } from "@/components/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Zograha Technologies handles information submitted through its website forms.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { type: "website", title: "Privacy Policy", description: "How Zograha Technologies handles information submitted through its website forms." },
};

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <main className="site-main page-main">
        <PageHero breadcrumb="Privacy Policy" eyebrow="Your information" title="Privacy" accent="Policy" description="How information submitted through this website is handled." />
        <article className="legal-content site-section">
          <SectionEyebrow>Website privacy</SectionEyebrow>
          <p>This website collects the information you choose to provide through the Contact and Careers forms, such as your name, email address, phone number, message, application details, and an optional resume.</p>
          <h2>How information is used</h2>
          <p>Contact information is used to respond to enquiries. Career application information is used to review and follow up on applications. The service hashes request IP addresses for rate limiting; raw IP addresses are not included in inbox responses.</p>
          <h2>Service providers</h2>
          <p>Form data is stored by the Zograha Technologies backend in its configured PostgreSQL database. Email notifications may be sent through Resend when configured. Resume files may be stored in Vercel Blob when uploads are enabled.</p>
          <h2>Retention and requests</h2>
          <p>A retention period and a dedicated privacy contact have not been supplied in the project configuration. To ask about information you submitted, please <Link href="/contact">contact Zograha Technologies</Link>.</p>
          <h2>External links</h2>
          <p>WhatsApp, Google Maps, social networks, and project links lead to third-party services with their own privacy practices.</p>
          <p className="legal-review-note">Company review and approval are required before production publication.</p>
        </article>
      </main>
    </SiteLayout>
  );
}