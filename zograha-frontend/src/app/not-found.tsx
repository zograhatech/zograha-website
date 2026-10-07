import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SiteLayout>
      <main className="not-found-page">
        <span>404</span>
        <h1>This page could not be found.</h1>
        <p>The link may be outdated, or the page may have moved.</p>
        <Link className="button-primary" href="/">Back to home <span aria-hidden="true">→</span></Link>
      </main>
    </SiteLayout>
  );
}