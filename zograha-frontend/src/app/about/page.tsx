import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout, PageHero, SectionEyebrow } from "@/components/site";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the team building dependable digital products, software, and AI solutions at Zograha Technologies.",
  alternates: { canonical: "/about" },
  openGraph: { type: "website", title: "About Zograha Technologies", description: "Meet the team building dependable digital products, software, and AI solutions at Zograha Technologies." },
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <main className="site-main page-main">
        <PageHero breadcrumb="About Us" eyebrow="About Zograha Technologies" title="Technology that moves" accent="your business forward." description="A digital solutions and technology company helping businesses build a strong online presence and grow through innovative, reliable and result-driven solutions."><div className="hero-actions"><Link className="button-light" href="/contact">Start a project <span>→</span></Link><Link className="button-glass" href="/services">Our services</Link></div></PageHero>
        <section className="about-story site-section"><div><SectionEyebrow>Who we are</SectionEyebrow><h2>Built around the work, <em>and the people behind it.</em></h2></div><div><p>We bring engineering, design and strategy together to solve real business challenges. Our teams work closely with clients, building dependable digital experiences that can grow with the people who use them.</p><p>From the first conversation through launch and beyond, we stay accountable to the outcome.</p><Link className="arrow-link" href="/contact">Meet the team <span>→</span></Link></div></section>
        <section className="about-values site-section"><div className="section-heading centered"><SectionEyebrow>How we work</SectionEyebrow><h2>Good technology starts <em>with good partnership.</em></h2></div><div className="value-grid"><article><span>01</span><h3>Stay close</h3><p>Direct collaboration keeps decisions clear and work grounded in your goals.</p></article><article><span>02</span><h3>Build with care</h3><p>Thoughtful engineering gives every product a dependable foundation.</p></article><article><span>03</span><h3>Keep growing</h3><p>We stay involved as your needs and opportunities change.</p></article></div></section>
        <section className="about-proof"><div><strong>500+</strong><span>Projects shipped</span></div><div><strong>50+</strong><span>Engineers and specialists</span></div><div><strong>98%</strong><span>On-time delivery</span></div><div><strong>24/7</strong><span>Support &amp; reliability</span></div></section>
      </main>
    </SiteLayout>
  );
}