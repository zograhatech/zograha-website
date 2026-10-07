import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout, PageHero, SectionEyebrow } from "@/components/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for using the Zograha Technologies website and submitting information through its forms.",
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: { type: "website", title: "Terms & Conditions", description: "Terms for using the Zograha Technologies website and submitting information through its forms." },
};

export default function TermsPage() {
  return (
    <SiteLayout>
      <main className="site-main page-main">
        <PageHero breadcrumb="Terms & Conditions" eyebrow="Website use" title="Terms &" accent="Conditions" description="Please use this website and its forms responsibly." />
        <article className="legal-content site-section">
          <SectionEyebrow>Terms of use</SectionEyebrow>
          <h2>Using this website</h2>
          <p>Website content describes Zograha Technologies and its services. Information submitted through the Contact or Careers forms should be accurate and should not contain unlawful, confidential third-party, or harmful material.</p>
          <h2>Enquiries and applications</h2>
          <p>Submitting an enquiry or application does not create a contract or guarantee employment. Resume uploads must use an accepted PDF, DOC, or DOCX format and comply with the size limit shown on the form.</p>
          <h2>Third-party services</h2>
          <p>This website may link to services operated by third parties. Zograha Technologies does not control those sites or their terms.</p>
          <h2>Questions</h2>
          <p>For questions about these terms, please <Link href="/contact">contact Zograha Technologies</Link>.</p>
          <p className="legal-review-note">Company review and approval are required before production publication.</p>
        </article>
      </main>
    </SiteLayout>
  );
}