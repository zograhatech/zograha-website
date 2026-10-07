import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogContent, IndustriesContent, ProjectsContent, ServicesContent, TestimonialsContent } from "@/components/api-content";
import { SiteLayout, SectionEyebrow } from "@/components/site";
import { HomeContactSummary } from "@/components/site-contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Zograha Technologies | Digital Solutions & Technology",
    description: "Dependable technology delivery for ambitious teams.",
    url: "/",
  },
};

export default function Home() {
  return (
    <SiteLayout>
      <main className="site-main">
        <section className="home-hero">
          <Image className="home-hero-image" src="/figma/home-hero.png" alt="" fill priority sizes="100vw" />
          <div className="home-hero-shade" />
          <div className="home-hero-content">
            <div className="home-hero-top"><span>01 <i>/</i> 04 <b /> Enterprise Solutions</span><div><button aria-label="Previous slide">←</button><button aria-label="Next slide">→</button></div></div>
            <div className="home-hero-copy">
              <div>
                <SectionEyebrow>Enterprise Software &amp; AI</SectionEyebrow>
                <h1>Dependable technology delivery <em>for ambitious teams.</em></h1>
                <p>We combine practical engineering, thoughtful UX design, and scalable cloud architecture to turn your vision into mission-critical digital products.</p>
                <div className="hero-actions"><Link className="button-light" href="/services">Explore our solutions <span>→</span></Link><Link className="button-glass" href="/contact">Talk to an expert</Link></div>
                <div className="hero-topics"><span>Custom Web Apps</span><span>Enterprise AI</span><span>Product Architecture</span></div>
              </div>
              <div className="hero-aside"><article><strong>99.9%</strong><span>System reliability</span></article><article><span>Have a project?</span><h2>Build your next high-impact software system.</h2><Link href="/contact">Book free consultation →</Link></article></div>
            </div>
            <div className="hero-metrics"><article><span>01</span><strong>Strategize</strong></article><i>—</i><article><span>02</span><strong>Build</strong></article><i>—</i><article><span>03</span><strong>Grow</strong></article></div>
          </div>
        </section>

        <section className="home-intro site-section" id="about">
          <div className="section-heading centered"><SectionEyebrow>Who we are</SectionEyebrow><h2>Technology that moves your business forward, <em>built and grown as one team.</em></h2><p>Zograha is a premier software engineering and AI services company, built around long-term partnerships and dependable delivery.</p></div>
          <div className="home-stats"><article className="home-stat-lead"><span>Projects shipped</span><strong>500+</strong><p>From web and cloud to mobile and applied AI.</p></article><article><span>Team</span><strong>50+</strong><p>Engineers and specialists across Madurai and Chennai.</p></article><article><span>Delivery</span><strong>98%</strong><p>Delivered on time.</p></article><article><span>Support</span><strong>24/7</strong><p>Support &amp; reliability</p></article></div>
        </section>

        <section className="site-section home-services" id="services">
          <div className="section-heading"><div><SectionEyebrow>Services</SectionEyebrow><h2>Digital capabilities designed <em>for modern businesses.</em></h2></div><Link className="arrow-link" href="/services">Compare all services <span>→</span></Link></div>
          <ServicesContent />
        </section>

        <section className="home-process site-section"><div><SectionEyebrow>Built around your goals</SectionEyebrow><h2>One team from the first idea <em>through every next step.</em></h2></div><div className="process-steps"><span>01 <b>Strategize</b></span><span>02 <b>Build</b></span><span>03 <b>Grow</b></span></div></section>
          <section className="home-why site-section"><div className="section-heading"><div><SectionEyebrow>Why choose Zograha</SectionEyebrow><h2>Good technology, built <em>around your business.</em></h2></div><p>Work directly with one team from the first conversation through delivery and support.</p></div><div className="home-benefit-grid"><article><span>01</span><h3>Strategy with context</h3><p>Start from the outcomes your people and business need.</p></article><article><span>02</span><h3>One connected team</h3><p>Engineering, design and delivery collaborate on the same work.</p></article><article><span>03</span><h3>Built to keep growing</h3><p>Dependable foundations make the next step easier to take.</p></article></div></section>

          <section className="home-growth site-section"><div className="section-heading centered"><SectionEyebrow>Business growth solutions</SectionEyebrow><h2>Make technology work <em>toward your next goal.</em></h2><p>Bring customer experiences, daily operations and digital growth together with practical software and technology.</p></div><div className="growth-solutions-grid"><article><span>Build</span><h3>Digital products</h3><p>Websites and applications shaped around your customers and team.</p><Link href="/services">Explore services <span aria-hidden="true">→</span></Link></article><article><span>Grow</span><h3>Digital presence</h3><p>Technology and marketing capabilities that help customers find and choose you.</p><Link href="/services">Explore services <span aria-hidden="true">→</span></Link></article><article><span>Scale</span><h3>Business systems</h3><p>Software, cloud and automation that support your next stage.</p><Link href="/contact">Talk to our team <span aria-hidden="true">→</span></Link></article></div></section>

          <section className="home-industries site-section"><div className="section-heading"><div><SectionEyebrow>Industries</SectionEyebrow><h2>Built for the way <em>your business works.</em></h2></div><p>Explore the industries we support.</p></div><IndustriesContent /></section>

          <section className="home-projects site-section"><div className="section-heading"><div><SectionEyebrow>Portfolio</SectionEyebrow><h2>Selected work, <em>real outcomes.</em></h2></div></div><ProjectsContent /></section>

          <section className="home-testimonials site-section"><div className="section-heading"><div><SectionEyebrow>Client stories</SectionEyebrow><h2>Good work is <em>built together.</em></h2></div></div><TestimonialsContent /></section>

        <section className="site-section home-insights" id="insights"><div className="section-heading"><div><SectionEyebrow>Knowledge hub</SectionEyebrow><h2>Ideas for what <em>comes next.</em></h2></div><Link className="arrow-link" href="/blog">All insights <span>→</span></Link></div><BlogContent limit={3} /></section>

        <section className="home-cta"><div><SectionEyebrow>Have a project?</SectionEyebrow><h2>Build your next high-impact software system.</h2><Link className="button-light" href="/contact">Start a project <span>→</span></Link></div></section>

          <section className="home-contact site-section"><div><SectionEyebrow>Contact information</SectionEyebrow><h2>Let’s start <em>a conversation.</em></h2></div><HomeContactSummary /></section>
      </main>
    </SiteLayout>
  );
}
