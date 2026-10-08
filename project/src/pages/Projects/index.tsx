import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import { api } from "../../lib/api";
import type { Project } from "../../types/api";

const SHOWCASE_PROJECTS: Array<{
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  techStack: string[];
  image: string;
  client?: string;
}> = [
  {
    id: "showcase-1",
    slug: "sample-ecommerce-platform",
    title: "Sample E-commerce Platform",
    category: "E-Commerce",
    summary:
      "A scalable, high-conversion e-commerce platform built with modern headless architecture, real-time inventory management, and fast checkout flows.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/mtwz5704_expires_30_days.png",
    client: "Global Retailer",
  },
  {
    id: "showcase-2",
    slug: "software-development",
    title: "Enterprise Cloud ERP Platform",
    category: "Software Engineering",
    summary:
      "A distributed enterprise resource planning system streamlining finance, supply chain, and operations with real-time analytics.",
    techStack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/352zxobe_expires_30_days.png",
    client: "Industrial Solutions Inc",
  },
  {
    id: "showcase-3",
    slug: "digital-marketing-campaigns",
    title: "Omnichannel Growth Marketing",
    category: "Digital Marketing",
    summary:
      "Data-driven performance campaigns delivering 240% qualified lead acceleration across paid search, programmatic display, and social channels.",
    techStack: ["Google Ads", "Meta Ads", "Analytics 4", "HubSpot", "Looker"],
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/ki51fhrz_expires_30_days.png",
    client: "FinTech Scaleup",
  },
  {
    id: "showcase-4",
    slug: "seo-search-visibility",
    title: "Technical SEO & Search Authority Engine",
    category: "Search Optimization",
    summary:
      "Comprehensive search architecture overhaul lifting organic search visibility and first-page keyword rankings by over 310%.",
    techStack: ["Technical SEO", "Schema.org", "Core Web Vitals", "Next.js SSG"],
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/hbzhn4xh_expires_30_days.png",
    client: "SaaS Enterprise",
  },
  {
    id: "showcase-5",
    slug: "branding-identity",
    title: "Comprehensive Brand Identity System",
    category: "Brand Strategy",
    summary:
      "Modern brand architecture, typography standards, design tokens, and digital guidelines establishing trusted presence in international markets.",
    techStack: ["Figma", "Design Tokens", "Design System", "Storybook"],
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/xsrlqhek_expires_30_days.png",
    client: "Healthcare Network",
  },
  {
    id: "showcase-6",
    slug: "lead-generation-campaigns",
    title: "Automated Lead Generation Engine",
    category: "Growth & Sales",
    summary:
      "High-intent inbound acquisition funnels with automated qualification, CRM synchronization, and multi-tier nurturing workflows.",
    techStack: ["React", "Node.js", "Zapier", "HubSpot", "PostgreSQL"],
    image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/4x2mt18n_expires_30_days.png",
    client: "B2B Logistics",
  },
];

const CATEGORIES = ["All", "E-Commerce", "Software Engineering", "Digital Marketing", "Search Optimization", "Brand Strategy"];

export default function Projects() {
  const [apiProjects, setApiProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    let active = true;
    setLoading(true);

    api.projects
      .list()
      .then((res) => {
        if (active && res.items) {
          setApiProjects(res.items);
        }
      })
      .catch(() => {
        // Fallback to static showcase projects
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  // Merge backend projects with showcase projects, deduplicating by slug
  const allProjects = [
    ...apiProjects.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      category: p.category || "Case Study",
      summary: p.summary,
      techStack: p.techStack || [],
      image: p.image || "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/mtwz5704_expires_30_days.png",
      client: p.client || undefined,
      liveUrl: p.liveUrl || undefined,
    })),
    ...SHOWCASE_PROJECTS.filter((s) => !apiProjects.some((ap) => ap.slug === s.slug)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 self-stretch overflow-hidden bg-gradient-to-b from-[#E3ECF9] to-[#F7F9FC]">
        {/* Hero Section */}
        <div
          className="relative self-stretch pt-8 md:pt-[72px] px-5 sm:px-10 lg:px-16 mb-8 lg:mb-[51px] mx-2 sm:mx-4 rounded-[28px] lg:rounded-[36px] overflow-hidden shadow-2xl reveal-on-scroll"
          style={{
            background: "linear-gradient(135deg, #061129 0%, #0A1A3F 45%, #132E6B 100%)",
          }}
        >
          {/* Ambient Radial Highlights */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3FC3D3]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1D5FA8]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Concentric Decorative Rings on the Right */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/10 pointer-events-none hidden md:flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full border border-white/5 flex items-center justify-center">
              <div className="w-[280px] h-[280px] rounded-full border border-[#3FC3D3]/15" />
            </div>
          </div>

          <div className="relative z-10 max-w-[960px] mx-auto flex flex-col items-center text-center">
            <span className="text-[#9FB6E0] text-[13px] mb-4">
              <Link to="/" className="hover:underline">Home</Link> / Projects
            </span>

            <div className="inline-flex items-center py-2 px-4 gap-2 rounded-[999px] border border-[#FFFFFF47] bg-white/5 mb-6">
              <div className="bg-[#3FC3D3] w-[7px] h-[7px] rounded-[3px]"></div>
              <span className="text-[#DCE8F6] text-xs font-medium">Selected Work &amp; Case Studies</span>
            </div>

            <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-2">
              Engineered for impact,
            </h1>
            <h2 className="text-[#7FD6E2] text-4xl sm:text-6xl lg:text-7xl font-newsreader italic font-normal leading-tight mb-6">
              built for enterprise scale.
            </h2>

            <p className="text-[#C9D7F2] text-lg sm:text-[21px] max-w-[680px] leading-relaxed">
              Explore how we collaborate with ambitious businesses to develop resilient web platforms, mission-critical software, and scalable digital solutions.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 mt-12 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`py-2 px-5 rounded-[999px] text-sm font-semibold transition-all border ${
                    active
                      ? "bg-[#1D5FA8] text-white border-[#1D5FA8] shadow-sm"
                      : "bg-white text-[#3F4D6B] border-[#E1E8F3] hover:border-[#1D5FA8] hover:text-[#1D5FA8] hover:shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 mb-20">
          {loading && allProjects.length === 0 ? (
            <div className="flex justify-center items-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1D5FA8]"></div>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[28px] border border-[#E1E8F3] p-8">
              <p className="text-[#3F4D6B] text-lg font-medium">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-[#1D5FA8] font-bold hover:underline"
              >
                View all projects →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="bg-white rounded-[28px] border border-[#E1E8F3] card-hover reveal-on-scroll flex flex-col justify-between overflow-hidden group"
                  style={{
                    boxShadow: "0px 16px 36px rgba(10, 26, 63, 0.08)",
                    animationDelay: `${idx * 80}ms`,
                  }}
                >
                  <div>
                    {/* Project Image */}
                    <div className="relative h-56 sm:h-64 overflow-hidden bg-[#EEF4FB]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#0A1A3F]/80 backdrop-blur-sm text-[#7FD6E2] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 sm:p-7">
                      {project.client && (
                        <span className="text-[#5B6882] text-xs font-semibold block mb-1">
                          Client: {project.client}
                        </span>
                      )}
                      <h3 className="text-[#0A1A3F] text-2xl font-bold mb-3 leading-snug group-hover:text-[#1D5FA8] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#3F4D6B] text-[15px] leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {project.techStack && project.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.techStack.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="bg-[#EEF4FB] text-[#13295C] text-xs font-medium py-1 px-2.5 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center text-[#13295C] group-hover:text-[#1D5FA8] font-bold text-base transition-colors"
                    >
                      <span>Explore case study</span>
                      <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </Link>
                    <span className="text-xs text-[#5B6882] font-semibold">View details</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

