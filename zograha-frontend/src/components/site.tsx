import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteContactLinks, SiteContactProvider } from "./site-contact";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-brand" href="/" aria-label="Zograha Technologies home">
          <Image src="/figma/zograha-logo.png" alt="Zograha Technologies" width={187} height={42} priority />
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
        <Link className="site-header-cta" href="/contact">Start a project</Link>
        <details className="site-mobile-nav">
          <summary aria-label="Open navigation menu"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
            <Link href="/contact">Start a project</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function PageHero({
  breadcrumb,
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <p className="page-breadcrumb">Home / {breadcrumb}</p>
      <span className="eyebrow-pill"><i />{eyebrow}</span>
      <h1>{title}{accent ? <> <em>{accent}</em></> : null}</h1>
      <p className="page-hero-description">{description}</p>
      {children}
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <Link href="/" aria-label="Zograha Technologies home">
            <Image src="/figma/zograha-logo.png" alt="Zograha Technologies" width={187} height={42} />
          </Link>
          <p>Technology that moves your business forward.</p>
        </div>
        <div>
          <h2>Explore</h2>
          {links.slice(1).map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </div>
        <div>
          <h2>Get in touch</h2>
          <Link href="/contact">Contact us</Link>
          <Link href="/careers">Open positions</Link>
          <Link href="/blog">Insights</Link>
          <SiteContactLinks />
        </div>
        <nav className="site-footer-legal" aria-label="Legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </nav>
      </div>
      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} Zograha Technologies</span>
        <span>Built and grown as one team.</span>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteContactProvider><SiteHeader />{children}<SiteFooter /></SiteContactProvider>;
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <span className="section-eyebrow"><i />{children}</span>;
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="arrow-link" href={href}>{children}<span aria-hidden="true">→</span></Link>;
}