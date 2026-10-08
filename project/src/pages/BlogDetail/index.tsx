import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowsRotate,
  FaChartColumn,
  FaHeadset,
  FaCircleUser,
} from "react-icons/fa6";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import _404 from "../_404";

import { api, ApiRequestError } from "../../lib/api";
import type { BlogPost } from "../../types/api";
import MarkdownContent, { extractHeadings, HeadingItem } from "../../components/MarkdownContent";

/* =========================================================
   FIGMA BLOG ARTICLE DEFINITIONS
   Exact copy, headings, and structure matching Figma design
========================================================= */

const FIGMA_AI_SLUG = "how-artificial-intelligence-is-transforming-modern-businesses";

const FIGMA_AI_ARTICLE = {
  slug: FIGMA_AI_SLUG,
  title: "How Artificial Intelligence Is Transforming Modern Businesses",
  category: "Technology",
  publishedAt: "Sep 30, 2026",
  author: "Zograha Team",
  readingTime: 4,
  coverImage: "/figma/blog-ai.png",
  excerpt:
    "Artificial Intelligence (AI) is rapidly changing the way businesses operate, communicate, and serve their customers.",
  intro:
    "Artificial Intelligence (AI) is rapidly changing the way businesses operate, communicate, and serve their customers. From automating repetitive tasks to delivering personalized experiences, AI has become an important part of modern digital transformation.",
};

const figmaSections = [
  {
    number: "01",
    id: "what-is-artificial-intelligence",
    label: "What Is Artificial Intelligence?",
  },
  {
    number: "02",
    id: "how-businesses-can-benefit",
    label: "How Businesses Can Benefit From AI",
  },
  {
    number: "03",
    id: "why-ai-adoption-matters",
    label: "Why AI Adoption Matters",
  },
  {
    number: "04",
    id: "conclusion",
    label: "Conclusion",
  },
];

const benefits = [
  {
    icon: <FaArrowsRotate className="w-4 h-4 text-[#1D5FA8]" />,
    title: "Automating Repetitive Tasks",
    text: "AI can automate time-consuming tasks such as data entry, document handling, customer support, and routine administrative activities. This allows employees to focus on more important and creative work.",
  },
  {
    icon: <FaChartColumn className="w-4 h-4 text-[#1D5FA8]" />,
    title: "Better Data Analysis",
    text: "Modern businesses generate large amounts of data every day. AI can analyze this information quickly and help businesses identify patterns, trends, and useful insights.",
  },
  {
    icon: <FaHeadset className="w-4 h-4 text-[#1D5FA8]" />,
    title: "Improved Customer Experience",
    text: "AI-powered chatbots and intelligent systems can provide faster responses to customers and support them throughout their journey.",
  },
  {
    icon: <FaCircleUser className="w-4 h-4 text-[#1D5FA8]" />,
    title: "Personalized Experiences",
    text: "AI can analyze customer behavior and preferences to provide more relevant recommendations, content, and services.",
  },
];

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = slug || FIGMA_AI_SLUG;
  const isFigmaAIArticle = activeSlug === FIGMA_AI_SLUG;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  /* =======================================================
     API FOR DYNAMIC BACKEND ARTICLES
  ======================================================= */
  useEffect(() => {
    if (isFigmaAIArticle) {
      setPost(null);
      setLoading(false);
      setNotFound(false);
      return;
    }

    let active = true;
    setLoading(true);
    setNotFound(false);

    api.blog
      .get(activeSlug)
      .then((data) => {
        if (active) setPost(data);
      })
      .catch((err) => {
        if (!active) return;
        if (err instanceof ApiRequestError && err.status === 404) {
          setNotFound(true);
        } else {
          setNotFound(true);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [activeSlug, isFigmaAIArticle]);

  if (notFound) {
    return <_404 />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 flex items-center justify-center bg-[#F4F7FB]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full border-4 border-[#3FC3D3] border-t-transparent animate-spin" />
            <p className="text-[#0A1A3F] text-sm font-medium">Loading article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  /* =======================================================
     EXACT FIGMA AI ARTICLE RENDERER
  ======================================================= */
  if (isFigmaAIArticle) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-[#0A1A3F]">
        <Navbar />

        <main className="flex-1 overflow-hidden">
          {/* =================================================
              1. HERO SECTION (EXACT FIGMA TYPOGRAPHY & LAYOUT)
          ================================================= */}
          <section className="mx-2 sm:mx-4 md:mx-6 mt-4 sm:mt-6 rounded-[24px] sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#061129] via-[#0A1A3F] to-[#1D4A85] shadow-2xl relative">
            {/* Ambient Radial Glows */}
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#3FC3D3]/15 blur-3xl pointer-events-none" />
            <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#1D5FA8]/25 blur-3xl pointer-events-none" />

            {/* Concentric Decorative Rings */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/10 pointer-events-none hidden md:flex items-center justify-center">
              <div className="w-[400px] h-[400px] rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-[280px] h-[280px] rounded-full border border-[#3FC3D3]/15" />
              </div>
            </div>

            <div className="relative z-10 max-w-[960px] mx-auto px-5 sm:px-8 py-10 sm:py-14 md:py-16 text-center">
              {/* Breadcrumb */}
              <div className="text-xs sm:text-sm text-[#8EA8D4] mb-4">
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
                <span className="mx-2">/</span>
                <span>Technology</span>
              </div>

              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 mb-5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3FC3D3]" />
                <span className="text-xs tracking-wider uppercase text-[#DCE8F6] font-medium">
                  Technology
                </span>
              </div>

              {/* Exact Figma Heading Lines */}
              <h1 className="text-white font-bold leading-[1.08] text-3xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight">
                <span className="block">How Artificial Intelligence Is</span>
                <span className="block my-1 sm:my-2">Transforming</span>
                <span className="block font-newsreader italic font-normal text-[#7FD6E2]">
                  Modern Businesses
                </span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-[620px] mx-auto mt-6 text-[#C9D7F2] text-sm sm:text-base md:text-lg leading-relaxed">
                Artificial Intelligence (AI) is rapidly changing the way businesses operate, communicate, and serve their customers.
              </p>

              {/* Metadata */}
              <div className="flex items-center justify-center gap-3 mt-6 text-xs sm:text-sm text-[#D2DDF0] font-medium">
                <span>By Zograha Team</span>
                <span className="text-[#3FC3D3]">●</span>
                <span>Sep 30, 2026</span>
              </div>

              {/* Back to blogs Button */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 mt-7 px-5 py-2 rounded-full border border-white/30 bg-white/10 text-white text-xs sm:text-sm font-semibold hover:bg-white/20 transition-all shadow-sm"
              >
                <span>← Back to blogs</span>
              </Link>
            </div>
          </section>

          {/* =================================================
              2. FEATURED IMAGE (EXACT FIGMA ASSET)
          ================================================= */}
          <section className="max-w-[1140px] mx-auto px-4 sm:px-6 mt-8 sm:mt-10 mb-12 sm:mb-16">
            <img
              src={FIGMA_AI_ARTICLE.coverImage}
              alt={FIGMA_AI_ARTICLE.title}
              className="w-full h-auto max-h-[520px] rounded-[24px] sm:rounded-[32px] object-cover shadow-[0_20px_50px_rgba(10,26,63,0.14)] border border-[#E1E8F3]"
            />
          </section>

          {/* =================================================
              3. EDITORIAL ARTICLE AREA (2 COLUMNS)
          ================================================= */}
          <section className="max-w-[1140px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-14">
              {/* =================================================
                  LEFT: STICKY TOC SIDEBAR
              ================================================= */}
              <aside className="w-full lg:w-[260px] shrink-0 lg:sticky lg:top-28">
                <div
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 border border-[#E1E8F3]"
                  style={{ boxShadow: "0_12px_32px_rgba(10,26,63,0.06)" }}
                >
                  <div className="flex items-center gap-2 pb-3.5 border-b border-[#E1E8F3] mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3FC3D3]" />
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#5B6882]">
                      In this article
                    </span>
                  </div>

                  <nav className="space-y-3.5">
                    {figmaSections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-start gap-2 text-xs sm:text-[13px] leading-snug text-[#27395D] hover:text-[#1D5FA8] transition-colors group font-medium"
                      >
                        <span className="text-[#1D5FA8] font-bold shrink-0">
                          {section.number}
                        </span>
                        <span className="group-hover:underline">{section.label}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* =================================================
                  RIGHT: ARTICLE CONTENT
              ================================================= */}
              <article className="flex-1 min-w-0 max-w-[800px] flex flex-col gap-10 sm:gap-12">
                {/* LEAD INTRO PARAGRAPH */}
                <p className="text-[#162A50] text-base sm:text-[19px] leading-[1.65] font-normal">
                  {FIGMA_AI_ARTICLE.intro}
                </p>

                {/* SECTION 01: WHAT IS ARTIFICIAL INTELLIGENCE? */}
                <section id="what-is-artificial-intelligence" className="scroll-mt-28">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#3FC3D3] mb-2">
                    01 · Basics
                  </div>

                  <h2 className="text-2xl sm:text-[34px] font-bold text-[#0A1A3F] leading-tight mb-4">
                    What Is Artificial Intelligence?
                  </h2>

                  <p className="text-[#3F4D6B] text-sm sm:text-base leading-[1.7] mb-5">
                    Artificial Intelligence refers to technologies that enable computers and software systems to perform tasks that typically require human intelligence. These tasks include understanding natural language, recognizing patterns, learning from data, analyzing data, and making predictions.
                  </p>

                  {/* Callout Box */}
                  <div className="rounded-2xl bg-[#EEF5FC] border border-[#D8E6F5] p-5 sm:p-6 text-[#173361] text-sm sm:text-[15px] font-medium leading-relaxed shadow-sm">
                    Businesses across different industries are increasingly adopting AI to improve productivity and create better customer experiences.
                  </div>
                </section>

                {/* SECTION 02: HOW BUSINESSES CAN BENEFIT FROM AI */}
                <section id="how-businesses-can-benefit" className="scroll-mt-28">
                  <div className="text-xs font-bold tracking-wider uppercase text-[#3FC3D3] mb-2">
                    02 · Benefits
                  </div>

                  <h2 className="text-2xl sm:text-[34px] font-bold text-[#0A1A3F] leading-tight mb-6">
                    How Businesses Can Benefit From AI
                  </h2>

                  {/* 4 Benefit Cards Grid (2x2) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit.title}
                        className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E1E8F3] shadow-[0_8px_24px_rgba(10,26,63,0.06)] flex flex-col justify-between hover:border-[#3FC3D3] transition-colors"
                      >
                        <div>
                          <div className="w-9 h-9 rounded-full bg-[#EBF5FB] flex items-center justify-center mb-3.5">
                            {benefit.icon}
                          </div>

                          <h3 className="text-base sm:text-[17px] font-bold text-[#0A1A3F] mb-2">
                            {benefit.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-[#4B5B78] leading-relaxed">
                            {benefit.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SECTION 03: WHY AI ADOPTION MATTERS */}
                <section
                  id="why-ai-adoption-matters"
                  className="scroll-mt-28 rounded-[24px] sm:rounded-[28px] bg-gradient-to-br from-[#0A1A3F] via-[#10275B] to-[#163878] p-6 sm:p-10 shadow-[0_16px_36px_rgba(10,26,63,0.18)] text-white"
                >
                  <div className="text-xs font-bold tracking-wider uppercase text-[#3FC3D3] mb-2">
                    03 · Why it matters
                  </div>

                  <h2 className="text-2xl sm:text-[32px] font-bold text-white leading-tight mb-4">
                    Why AI Adoption Matters
                  </h2>

                  <p className="text-sm sm:text-base text-[#E2EDF9] leading-relaxed mb-4">
                    AI is not only about automation. It can help organizations build smarter processes, improve efficiency, reduce manual effort, and develop innovative digital solutions.
                  </p>

                  <p className="text-xs sm:text-sm text-[#9FB6E0] leading-relaxed">
                    Businesses that understand how to use AI effectively can create new opportunities while improving their existing operations.
                  </p>
                </section>

                {/* SECTION 04: CONCLUSION */}
                <section
                  id="conclusion"
                  className="scroll-mt-28 rounded-[24px] sm:rounded-[28px] bg-[#D7F3F6] p-6 sm:p-10 border border-[#BCE8EE] shadow-sm"
                >
                  <div className="text-xs font-bold tracking-wider uppercase text-[#177E8F] mb-2">
                    04 · Conclusion
                  </div>

                  <h2 className="text-2xl sm:text-[32px] font-bold text-[#0A1A3F] leading-tight mb-4">
                    Conclusion
                  </h2>

                  <p className="text-sm sm:text-base text-[#2C4A68] leading-relaxed mb-6">
                    Artificial Intelligence is becoming an important part of the modern business ecosystem. Whether it is automation, data analysis, customer support, or personalization, AI can help businesses work smarter and deliver better digital experiences.
                  </p>

                  <p className="text-base sm:text-lg font-newsreader italic text-[#13295C] leading-snug font-medium pt-4 border-t border-[#BCE8EE]/80">
                    The key is to identify the right business problems and implement AI solutions that provide meaningful value.
                  </p>
                </section>
              </article>
            </div>
          </section>

          {/* =================================================
              4. BOTTOM CTA SECTION
          ================================================= */}
          <CTASection />
        </main>

        <Footer />
      </div>
    );
  }

  /* =========================================================
     OTHER DYNAMIC ARTICLES (FALLBACK HANDLER)
  ========================================================= */
  const title = post?.title || "Blog Article";
  const category = post?.category || "Technology";
  const publishedAt = post?.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Recent";

  const author = post?.author || "Zograha Team";
  const readingTime = post?.readingTime || 3;
  const coverImage = post?.coverImage || "/figma/blog-ai.png";
  const content = post?.content || "";
  const excerpt = post?.excerpt || "";

  const headings: HeadingItem[] = extractHeadings(content);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC]">
      <Navbar />

      <main className="flex-1 overflow-hidden">
        {/* Dynamic Hero */}
        <section className="mx-2 sm:mx-4 md:mx-6 mt-4 sm:mt-6 rounded-[24px] sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#061129] via-[#0A1A3F] to-[#1D4A85] shadow-2xl relative">
          <div className="max-w-[960px] mx-auto px-5 sm:px-8 py-10 sm:py-14 md:py-16 text-center relative z-10">
            <div className="text-xs sm:text-sm text-[#8EA8D4] mb-4">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span>{category}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3FC3D3]" />
              <span className="text-xs tracking-wider uppercase text-[#DCE8F6] font-medium">
                {category}
              </span>
            </div>

            <h1 className="text-white font-bold leading-tight text-3xl sm:text-5xl md:text-6xl">
              {title}
            </h1>

            {excerpt && (
              <p className="max-w-[620px] mx-auto mt-6 text-[#C9D7F2] text-sm sm:text-base leading-relaxed">
                {excerpt}
              </p>
            )}

            <div className="flex items-center justify-center gap-3 mt-6 text-xs sm:text-sm text-[#D2DDF0]">
              <span>By {author}</span>
              <span className="text-[#3FC3D3]">●</span>
              <span>{publishedAt}</span>
              <span className="text-[#3FC3D3]">●</span>
              <span>{readingTime} min read</span>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 mt-7 px-5 py-2 rounded-full border border-white/30 bg-white/10 text-white text-xs sm:text-sm font-semibold hover:bg-white/20 transition-all shadow-sm"
            >
              <span>← Back to blogs</span>
            </Link>
          </div>
        </section>

        {/* Dynamic Cover Image */}
        {coverImage && (
          <section className="max-w-[1140px] mx-auto px-4 sm:px-6 mt-8 sm:mt-10 mb-12 sm:mb-16">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-auto max-h-[520px] rounded-[24px] sm:rounded-[32px] object-cover shadow-[0_20px_50px_rgba(10,26,63,0.14)] border border-[#E1E8F3]"
            />
          </section>
        )}

        {/* Dynamic Body Area */}
        <section className="max-w-[1140px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-14">
            {headings.length > 0 && (
              <aside className="w-full lg:w-[260px] shrink-0 lg:sticky lg:top-28">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 border border-[#E1E8F3] shadow-[0_12px_32px_rgba(10,26,63,0.06)]">
                  <div className="flex items-center gap-2 pb-3.5 border-b border-[#E1E8F3] mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3FC3D3]" />
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#5B6882]">
                      In this article
                    </span>
                  </div>

                  <nav className="space-y-3.5">
                    {headings.map((h, idx) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        className="flex items-start gap-2 text-xs sm:text-[13px] leading-snug text-[#27395D] hover:text-[#1D5FA8] transition-colors group font-medium"
                      >
                        <span className="text-[#1D5FA8] font-bold shrink-0">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="group-hover:underline">{h.text}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            <article className="flex-1 min-w-0 max-w-[800px] bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-[#E1E8F3] shadow-[0_20px_40px_rgba(10,26,63,0.06)]">
              <MarkdownContent content={content} />

              <div className="mt-10 pt-6 border-t border-[#E1E8F3]">
                <Link to="/blog" className="text-[#1D5FA8] font-bold text-sm hover:underline">
                  ← Back to all articles
                </Link>
              </div>
            </article>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
