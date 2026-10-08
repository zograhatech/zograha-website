import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import _404 from "../_404";
import { api, ApiRequestError } from "../../lib/api";
import type { Project } from "../../types/api";

export default function ProjectDetailPage(props?: any) {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

const FALLBACK_PROJECTS: Record<string, Partial<Project>> = {
  "sample-ecommerce-platform": {
    id: "sample-ecommerce-platform",
    slug: "sample-ecommerce-platform",
    title: "Sample E-commerce Platform",
    client: "Global Retailer",
    category: "E-Commerce",
    summary: "A scalable, high-conversion e-commerce platform built with modern headless architecture, real-time inventory management, and fast checkout flows.",
    description: "Designed and engineered to handle high transaction throughput, this modern e-commerce solution provides lightning-fast search, dynamic catalog navigation, multi-currency support, and seamless payment gateway integration.\n\nKey achievements include sub-second page loads, a 45% uplift in mobile conversion, and seamless automated inventory synchronization across global fulfillment centers.",
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/mtwz5704_expires_30_days.png",
    gallery: [
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/mtwz5704_expires_30_days.png",
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/352zxobe_expires_30_days.png",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://zograha.com",
    featured: true,
    published: true,
    order: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  "website-development": {
    id: "website-development",
    slug: "website-development",
    title: "Website Development Projects",
    client: "Enterprise Corporate Clients",
    category: "Web Development",
    summary: "Bespoke web applications engineered for optimal Core Web Vitals, speed, and corporate conversion.",
    description: "Our web development engagements transform outdated digital footprints into lightning-fast, secure, and intuitive web platforms. We integrate modern headless CMS architectures, responsive design systems, and robust cloud hosting.",
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/mtwz5704_expires_30_days.png",
    gallery: [],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    featured: true,
    published: true,
    order: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  "software-development": {
    id: "software-development",
    slug: "software-development",
    title: "Enterprise Cloud ERP Platform",
    client: "Industrial Solutions Inc",
    category: "Software Engineering",
    summary: "A distributed enterprise resource planning system streamlining finance, supply chain, and operations with real-time analytics.",
    description: "Built to replace fragmented legacy workflows, this centralized platform aggregates telemetry from manufacturing plants, tracks inventory across multiple regional hubs, and delivers actionable financial reporting to executive stakeholders in real time.",
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/352zxobe_expires_30_days.png",
    gallery: [],
    techStack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    featured: true,
    published: true,
    order: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  "digital-marketing-campaigns": {
    id: "digital-marketing-campaigns",
    slug: "digital-marketing-campaigns",
    title: "Omnichannel Growth Marketing",
    client: "FinTech Scaleup",
    category: "Digital Marketing",
    summary: "Data-driven performance campaigns delivering 240% qualified lead acceleration across paid search, programmatic display, and social channels.",
    description: "Comprehensive multi-touch attribution campaigns, A/B tested landing page variations, and automated retargeting funnels designed to minimize customer acquisition costs while scaling qualified pipeline.",
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/ki51fhrz_expires_30_days.png",
    gallery: [],
    techStack: ["Google Ads", "Meta Ads", "Analytics 4", "HubSpot", "Looker"],
    featured: true,
    published: true,
    order: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  "seo-search-visibility": {
    id: "seo-search-visibility",
    slug: "seo-search-visibility",
    title: "Technical SEO & Search Authority Engine",
    client: "SaaS Enterprise",
    category: "Search Optimization",
    summary: "Comprehensive search architecture overhaul lifting organic search visibility and first-page keyword rankings by over 310%.",
    description: "A complete technical audit and remediation campaign addressing site structure, semantic HTML, structured data markup, internal link graphing, and high-authority technical content publishing.",
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/hbzhn4xh_expires_30_days.png",
    gallery: [],
    techStack: ["Technical SEO", "Schema.org", "Core Web Vitals", "Next.js SSG"],
    featured: true,
    published: true,
    order: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  "branding-identity": {
    id: "branding-identity",
    slug: "branding-identity",
    title: "Comprehensive Brand Identity System",
    client: "Healthcare Network",
    category: "Brand Strategy",
    summary: "Modern brand architecture, typography standards, design tokens, and digital guidelines establishing trusted presence in international markets.",
    description: "An end-to-end design rebrand delivering unified design tokens, typography scales, iconography sets, responsive UI components, and corporate collateral guidelines.",
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/xsrlqhek_expires_30_days.png",
    gallery: [],
    techStack: ["Figma", "Design Tokens", "Design System", "Storybook"],
    featured: true,
    published: true,
    order: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  "social-media-marketing": {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Brand Expansion",
    client: "Consumer Tech Brand",
    category: "Social Media",
    summary: "Engaging social content calendars, community growth management, and influencer partnership programs.",
    description: "Organic and paid social media programs that cultivate engaged digital communities, drive brand advocacy, and amplify brand narratives across LinkedIn, X, and Instagram.",
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/jiggey30_expires_30_days.png",
    gallery: [],
    techStack: ["Social Strategy", "Content Production", "Community Management"],
    featured: true,
    published: true,
    order: 7,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  "lead-generation-campaigns": {
    id: "lead-generation-campaigns",
    slug: "lead-generation-campaigns",
    title: "Automated Lead Generation Engine",
    client: "B2B Logistics",
    category: "Growth & Sales",
    summary: "High-intent inbound acquisition funnels with automated qualification, CRM synchronization, and multi-tier nurturing workflows.",
    description: "Full-funnel lead generation framework capturing verified enterprise prospects through interactive ROI calculators, personalized whitepapers, and real-time CRM routing.",
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/4x2mt18n_expires_30_days.png",
    gallery: [],
    techStack: ["React", "Node.js", "Zapier", "HubSpot", "PostgreSQL"],
    featured: true,
    published: true,
    order: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  "content-video-creation": {
    id: "content-video-creation",
    slug: "content-video-creation",
    title: "High-Impact Content & Media Production",
    client: "EdTech Corporation",
    category: "Media Production",
    summary: "Engaging multimedia, product demo walkthroughs, motion graphics, and technical documentation.",
    description: "End-to-end multimedia production delivering product walkthrough videos, animated explainers, interactive product tours, and technical articles designed to educate and convert complex enterprise buyers.",
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/04nrqw85_expires_30_days.png",
    gallery: [],
    techStack: ["Motion Graphics", "Video Production", "Copywriting"],
    featured: true,
    published: true,
    order: 9,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
};

  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    let active = true;
    setLoading(true);
    setNotFound(false);

    api.projects.get(slug)
      .then((data) => {
        if (active) setProject(data);
      })
      .catch((err) => {
        if (active) {
          const fallback = FALLBACK_PROJECTS[slug.toLowerCase()];
          if (fallback) {
            setProject(fallback as Project);
          } else {
            setNotFound(true);
          }
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  if (notFound) {
    return <_404 />;
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center py-32">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D5FA8]"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return <_404 />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 self-stretch overflow-hidden bg-gradient-to-b from-[#E3ECF9] to-[#F7F9FC]">
        {/* Hero Section */}
        <div className="self-stretch bg-[#0A1A3F] pt-12 md:pt-16 pb-12 px-4 sm:px-8 md:px-16 my-4 md:my-6 mx-2 sm:mx-4 rounded-[28px] sm:rounded-[36px]">
          <div className="max-w-[960px] mx-auto flex flex-col items-center text-center">
            <span className="text-[#9FB6E0] text-[13px] mb-4">
              <Link to="/" className="hover:underline">Home</Link> / Projects / {project.title}
            </span>

            <div className="inline-flex items-center py-2 px-4 gap-2 rounded-[999px] border border-[#FFFFFF47] bg-white/5 mb-6">
              <div className="bg-[#3FC3D3] w-2 h-2 rounded-full"></div>
              <span className="text-[#DCE8F6] text-xs font-medium">{project.category || "Case Study"}</span>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-[#C9D7F2] text-lg sm:text-[21px] max-w-[680px] leading-relaxed mb-8">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center bg-[#3FC3D3] hover:bg-[#2cb2c2] text-[#0A1A3F] font-bold text-base py-3 px-6 rounded-[999px] transition-colors shadow-md"
                >
                  <span>Visit live project</span>
                  <span className="ml-2 font-bold text-base">↗</span>
                </a>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-bold text-base py-3 px-6 rounded-[999px] transition-colors border border-white/40"
              >
                <span>Discuss a similar project</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 my-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Content */}
            <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-[32px] border border-[#E1E8F3] shadow-md">
              <h2 className="text-[#0A1A3F] text-2xl font-bold mb-4">Project Overview</h2>
              <div className="text-[#3F4D6B] text-base sm:text-lg leading-relaxed whitespace-pre-line mb-8">
                {project.description || project.summary}
              </div>

              {project.image && (
                <div className="mb-8 rounded-2xl overflow-hidden border border-[#E1E8F3]">
                  <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                </div>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h3 className="text-[#0A1A3F] text-xl font-bold mb-4">Project Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((imgUrl, i) => (
                      <img key={i} src={imgUrl} alt={`${project.title} screenshot ${i + 1}`} className="rounded-xl border border-gray-100 object-cover w-full h-48" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Meta */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-[32px] border border-[#E1E8F3] shadow-md space-y-6">
              <div>
                <span className="text-[#5B6882] text-xs font-semibold uppercase tracking-wider block mb-1">
                  Client
                </span>
                <span className="text-[#0A1A3F] text-lg font-bold">
                  {project.client || "Confidential Enterprise"}
                </span>
              </div>

              <div>
                <span className="text-[#5B6882] text-xs font-semibold uppercase tracking-wider block mb-1">
                  Category
                </span>
                <span className="text-[#0A1A3F] text-lg font-bold">
                  {project.category || "Full-Stack Development"}
                </span>
              </div>

              {project.techStack && project.techStack.length > 0 && (
                <div>
                  <span className="text-[#5B6882] text-xs font-semibold uppercase tracking-wider block mb-2">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="bg-[#EEF4FB] text-[#13295C] text-xs font-bold py-1.5 px-3 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center bg-[#1D5FA8] hover:bg-[#15467e] text-white text-sm font-bold py-3 px-5 rounded-[999px] transition-colors"
                >
                  Start a project like this
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

