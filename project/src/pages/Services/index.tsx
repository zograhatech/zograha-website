import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const SERVICES = [
  {
    slug: "digital-marketing",
    category: "GROW",
    title: "Digital Marketing",
    subtitle: "GROW YOUR BRAND ONLINE",

    description:
      "Data-driven digital marketing strategies that drive real results. From SEO and PPC to social media.",

    desktopFeatures: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Social Media Marketing",
      "Content & Email Campaigns",
    ],

    mobileFeatures: ["Google & Meta Ads", "Social Media Growth", "SEO & SEM"],

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[20px] h-[20px]"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },

  {
    slug: "app-development",
    category: "BUILD",
    title: "App Development",
    subtitle: "MOBILE & WEB APPS BUILT TO SCALE",

    description:
      "End-to-end application development using modern frameworks. We build responsive, high-performance apps.",

    desktopFeatures: [
      "React / React Native",
      "Flutter Cross-Platform",
      "Node.js & Java Backend",
      "Cloud Deployment",
    ],

    mobileFeatures: [
      "React / React Native",
      "Flutter Cross-Platform",
      "Node.js & Java Backend",
      "Cloud Deployment",
    ],

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[20px] h-[20px]"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },

  {
    slug: "web-design",
    category: "BUILD",
    title: "Web Design",
    subtitle: "BEAUTIFUL, CONVERSION-FOCUSED WEBSITES",

    description:
      "Stunning, responsive websites that convert visitors into customers. Our design-first approach ensures every pixel serves a purpose.",

    desktopFeatures: [
      "UI/UX Design",
      "Responsive Web Development",
      "E-Commerce Integration",
      "CMS Setup",
    ],

    mobileFeatures: [
      "UI/UX Design",
      "Responsive Web Development",
      "E-Commerce Integration",
      "CMS Setup",
    ],

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[20px] h-[20px]"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },

  {
    slug: "data-management",
    category: "RUN",
    title: "Data Management",
    subtitle: "INSIGHTS THAT DRIVE DECISIONS",

    description:
      "Transform raw data into actionable business intelligence. We design, implement, and manage data pipelines.",

    desktopFeatures: [
      "Database Optimization",
      "BI Dashboards",
      "ETL Pipelines",
      "Data Warehousing",
    ],

    mobileFeatures: [
      "Data Processing",
      "ETL & Data Integration",
      "Secure Cloud Storage",
    ],

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[20px] h-[20px]"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },

  {
    slug: "customer-support",
    category: "RUN",
    title: "Customer Support",
    subtitle: "ALWAYS-ON, ALWAYS HELPFUL",

    description:
      "Professional customer support solutions that keep your customers happy 24/7. From live chat to ticketing systems.",

    desktopFeatures: [
      "24/7 Live Chat",
      "Help Desk Setup",
      "CRM Integration",
      "Support Analytics",
    ],

    mobileFeatures: [
      "24/7 Voice & Chat",
      "Help Desk & Ticketing",
      "Customer Experience",
      "24/7 SLA",
    ],

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[20px] h-[20px]"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },

  {
    slug: "publications",
    category: "GROW",
    title: "Publications",
    subtitle: "RESEARCH & CONTENT AUTHORITY",

    description:
      "Professional publication services including technical writing, research papers, whitepapers, and corporate content.",

    desktopFeatures: [
      "Technical Documentation",
      "Research Papers",
      "Whitepapers",
      "Editorial Review",
    ],

    mobileFeatures: [
      "Digital Publishing",
      "Research & Editorial",
      "E-books & Journals",
    ],

    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[20px] h-[20px]"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

const COMPARISON_ROWS = [
  {
    service: "Digital Marketing",
    chooseWhen:
      "You want more reach and enquiries from search, ads and social.",
    youGet: "Strategy, campaigns and reporting across channels.",
  },
  {
    service: "App Development",
    chooseWhen: "You need a mobile or web application built and deployed.",
    youGet: "A designed, built and cloud-deployed application.",
  },
  {
    service: "Web Design",
    chooseWhen:
      "You need a new site, or the current one isn't bringing enquiries.",
    youGet: "A designed, built and launched responsive website.",
  },
  {
    service: "Data Management",
    chooseWhen: "Your data is scattered and hard to use for decisions.",
    youGet: "Pipelines, storage and dashboards you can act on.",
  },
  {
    service: "Customer Support",
    chooseWhen: "Customers need answers outside office hours.",
    youGet: "Support channels, tooling and reporting.",
  },
  {
    service: "Publications",
    chooseWhen: "You need credible written content for your product or field.",
    youGet: "Researched, edited and publication-ready documents.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />

      <main
        className="flex-1"
        style={{
          background:
            "linear-gradient(180deg, #E7EFF9 0%, #F8FAFD 72%, #F7F9FC 100%)",
        }}
      >
        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="px-[8px] sm:px-4 lg:px-6 pt-[10px] sm:pt-4 reveal-on-scroll">
          <div
            className="
              relative
              overflow-hidden
              text-center
              mx-auto
              max-w-[1420px]
              rounded-[22px]
              sm:rounded-[30px]
              lg:rounded-[32px]
              px-5
              sm:px-10
              lg:px-16
              pt-[31px]
              sm:pt-12
              lg:pt-[62px]
              pb-[30px]
              sm:pb-12
              lg:pb-[45px]
            "
            style={{
              background:
                "linear-gradient(135deg, #07142F 0%, #0A1A3F 48%, #225DA0 100%)",
            }}
          >
            <div
              className="
                absolute
                -right-[120px]
                -top-[160px]
                w-[390px]
                h-[390px]
                rounded-full
                blur-[80px]
                opacity-30
                pointer-events-none
              "
              style={{ background: "#3479C7" }}
            />

            <div
              className="
                absolute
                -left-[150px]
                -bottom-[190px]
                w-[400px]
                h-[400px]
                rounded-full
                blur-[100px]
                opacity-20
                pointer-events-none
              "
              style={{ background: "#2872C3" }}
            />

            {/* Desktop decorative rings */}
            <div className="hidden lg:flex absolute right-[-155px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/[0.08] items-center justify-center">
              <div className="w-[405px] h-[405px] rounded-full border border-white/[0.06] flex items-center justify-center">
                <div className="w-[290px] h-[290px] rounded-full border border-[#62C8E1]/[0.15] flex items-center justify-center">
                  <div className="w-[175px] h-[175px] rounded-full border border-white/[0.06]" />
                </div>
              </div>
            </div>

            {/* Breadcrumb */}

            <div className="relative z-10 mb-3 sm:mb-4">
              <span className="text-[#8FA7D1] text-xs sm:text-[13px]">
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>

                <span className="mx-2">/</span>

                <span>Services</span>
              </span>
            </div>

            {/* Badge */}

            <div
              className="
                relative
                z-10
                inline-flex
                items-center
                gap-1.5
                px-3
                sm:px-3.5
                py-1
                sm:py-1.5
                rounded-full
                border
                border-white/20
                bg-white/[0.04]
                mb-3.5
                sm:mb-5
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3FC3D3] animate-dot-pulse" />

              <span className="text-[#D8E5F5] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em]">
                What we offer
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                relative
                z-10
                text-white
                font-bold
                tracking-[-0.035em]
                leading-[0.96]
                text-[30px]
                sm:text-[48px]
                md:text-[60px]
                lg:text-[66px]
                max-w-[850px]
                mx-auto
              "
            >
              Digital capabilities
              <span className="block sm:inline"> designed for</span>{" "}
              <span className="block sm:inline text-[#7FD6E2] font-newsreader italic font-normal">
                modern businesses.
              </span>
            </h1>

            {/* Subtitle */}

            <p
              className="
                relative
                z-10
                max-w-[640px]
                mx-auto
                mt-4
                sm:mt-5
                text-[#C7D5EB]
                text-xs
                sm:text-base
                lg:text-[17px]
                leading-relaxed
              "
            >
              From concept to execution, we provide the technical expertise and
              strategic thinking you need to scale.
            </p>
          </div>
        </section>

        {/* =========================================================
            SERVICE CARDS
        ========================================================= */}

        <section
          className="reveal-on-scroll 
            max-w-[1310px]
            mx-auto
            px-4
            sm:px-6
            lg:px-0
            mt-6
            sm:mt-8
            lg:mt-8
            mb-8
            sm:mb-12
            lg:mb-10
          "
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-4
              sm:gap-5
              lg:gap-6
            "
          >
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                className="
                  group
                  bg-white
                  border
                  border-[#E1E7F0]
                  rounded-[20px]
                  sm:rounded-[24px]
                  shadow-[0_8px_25px_rgba(25,45,80,0.08)]
                  hover:shadow-[0_16px_36px_rgba(25,45,80,0.14)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  flex
                  flex-col
                  p-5
                  sm:p-6
                  lg:p-6
                "
              >
                {/* Card top */}

                <div className="flex items-center justify-between mb-3.5 sm:mb-4 lg:mb-4">
                  <div
                    className="
                      w-9
                      h-9
                      sm:w-11
                      sm:h-11
                      lg:w-10
                      lg:h-10
                      rounded-[10px]
                      sm:rounded-[12px]
                      bg-[#EEF4FB]
                      text-[#1D5FA8]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {service.icon}
                  </div>

                  <span
                    className="
                      text-[#1D5FA8]
                      text-[10px]
                      sm:text-xs
                      lg:text-xs
                      font-bold
                      tracking-[0.16em]
                      font-mono
                    "
                  >
                    {service.category}
                  </span>
                </div>

                {/* Card title */}

                <h2
                  className="
                    text-[#0A1A3F]
                    text-[18px]
                    sm:text-[22px]
                    lg:text-[23px]
                    font-bold
                    leading-snug
                    mb-1.5
                    sm:mb-2
                  "
                >
                  {service.title}
                </h2>

                {/* Card subtitle */}

                <p
                  className="
                    text-[#8793A8]
                    text-[9.5px]
                    sm:text-[11px]
                    lg:text-[11.5px]
                    font-bold
                    tracking-[0.12em]
                    uppercase
                    mb-2.5
                    sm:mb-3.5
                  "
                >
                  {service.subtitle}
                </p>

                {/* Description */}

                <p
                  className="
                    text-[#52627C]
                    text-[12px]
                    sm:text-[14px]
                    lg:text-[14.5px]
                    leading-relaxed
                    mb-3.5
                    sm:mb-5
                  "
                >
                  {service.description}
                </p>

                {/* Mobile features */}

                <div className="sm:hidden space-y-1.5 mb-3.5">
                  {service.mobileFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#E1ECF7] text-[#1D5FA8] flex items-center justify-center text-[8px] font-bold shrink-0">
                        ✓
                      </span>

                      <span className="text-[#55657D] text-[11.5px] leading-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Desktop features */}

                <div className="hidden sm:block space-y-2 lg:space-y-2 mb-5">
                  {service.desktopFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#E1ECF7] text-[#1D5FA8] flex items-center justify-center text-[10px] font-bold shrink-0">
                        ✓
                      </span>

                      <span className="text-[#52627C] text-[13px] lg:text-[13.5px] leading-normal font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn more */}

                <div className="mt-auto pt-3 sm:pt-3.5 border-t border-[#EDF1F6]">
                  <Link
                    to={`/services/${service.slug}`}
                    className="
                      inline-flex
                      items-center
                      text-[#0A1A3F]
                      hover:text-[#1D5FA8]
                      font-bold
                      text-[12px]
                      sm:text-[14px]
                      lg:text-[14px]
                      group-hover:text-[#1D5FA8]
                      transition-colors
                    "
                  >
                    Learn more
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
            COMPARE
        ========================================================= */}

        <section
          className="reveal-on-scroll 
            max-w-[1310px]
            mx-auto
            px-4
            sm:px-6
            lg:px-0
            mb-8
            sm:mb-12
            lg:mb-12
          "
        >
          <h2
            className="
              text-[#0A1A3F]
              font-bold
              text-xl
              sm:text-2xl
              lg:text-[26px]
              mb-3
              sm:mb-5
            "
          >
            Compare
          </h2>

          <div className="bg-white border border-[#DDE5EF] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-sm">
            <table className="w-full table-fixed border-collapse text-left">
              <thead>
                <tr className="bg-[#EFF4FA]">
                  <th className="w-[25%] px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 text-[#14285A] text-xs sm:text-[13px] lg:text-[13px] font-bold">
                    Service
                  </th>

                  <th className="w-[37%] px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 text-[#14285A] text-xs sm:text-[13px] lg:text-[13px] font-bold">
                    Choose it when
                  </th>

                  <th className="w-[38%] px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 text-[#14285A] text-xs sm:text-[13px] lg:text-[13px] font-bold">
                    You get
                  </th>
                </tr>
              </thead>

              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.service} className="border-t border-[#E4E9F1]">
                    <td className="px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 text-[#15264D] text-xs sm:text-[13.5px] lg:text-[13.5px] font-bold align-top leading-snug">
                      {row.service}
                    </td>

                    <td className="px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 text-[#52627C] text-xs sm:text-[13.5px] lg:text-[13.5px] align-top leading-relaxed">
                      {row.chooseWhen}
                    </td>

                    <td className="px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 text-[#52627C] text-xs sm:text-[13.5px] lg:text-[13.5px] align-top leading-relaxed">
                      {row.youGet}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}

        <section
          className="reveal-on-scroll 
            max-w-[1310px]
            mx-auto
            px-3
            sm:px-6
            lg:px-0
            pb-10
            sm:pb-16
            lg:pb-16
          "
        >
          <div
            className="
              bg-white
              p-2
              sm:p-2.5
              rounded-[28px]
              sm:rounded-[36px]
              shadow-[0_16px_40px_rgba(10,26,63,0.14)]
              border
              border-[#E0E7F0]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[22px]
                sm:rounded-[30px]
                bg-gradient-to-r
                from-[#17356E]
                to-[#2873BB]
                px-5
                sm:px-10
                lg:px-[55px]
                py-8
                sm:py-12
                lg:py-[46px]
              "
            >
              {/* Decorative rings */}

              <div className="absolute right-[-105px] top-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/10 flex items-center justify-center pointer-events-none">
                <div className="w-[185px] h-[185px] sm:w-[330px] sm:h-[330px] rounded-full border border-white/[0.08] flex items-center justify-center">
                  <div className="w-[120px] h-[120px] sm:w-[235px] sm:h-[235px] rounded-full border border-[#7FD6E2]/20 flex items-center justify-center">
                    <div className="w-[55px] h-[55px] sm:w-[115px] sm:h-[115px] rounded-full bg-white/[0.05]" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 max-w-[620px]">
                {/* CTA badge */}

                <div
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    px-3
                    sm:px-3.5
                    py-1
                    sm:py-1.5
                    rounded-full
                    border
                    border-white/25
                    bg-white/10
                    mb-3
                    sm:mb-4
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3FC3D3] animate-dot-pulse" />

                  <span className="text-[#DCE8F6] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.13em]">
                    Let's talk
                  </span>
                </div>

                {/* CTA title */}

                <h2
                  className="
                    text-white
                    font-bold
                    text-2xl
                    sm:text-[34px]
                    lg:text-[38px]
                    leading-tight
                  "
                >
                  Tell us what you need built,
                  <span className="block text-[#7FD6E2] font-newsreader italic font-normal">
                    or what isn't working.
                  </span>
                </h2>

                {/* CTA description */}

                <p
                  className="
                    text-[#DCE8F6]
                    text-xs
                    sm:text-[15px]
                    lg:text-[16px]
                    leading-relaxed
                    mt-2.5
                    sm:mt-3
                    max-w-[500px]
                  "
                >
                  Share a few details. We’ll reply with next steps and
                  questions, not a generic brochure.
                </p>

                {/* CTA buttons */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-2.5
                    sm:gap-3.5
                    mt-5
                    sm:mt-7
                  "
                >
                  <Link
                    to="/contact"
                    className="
                      inline-flex
                      items-center
                      justify-between
                      sm:justify-center
                      bg-[#48C4D2]
                      hover:bg-[#3db0bd]
                      text-[#081A3D]
                      font-bold
                      text-xs
                      sm:text-[14.5px]
                      px-4
                      sm:px-5
                      py-2.5
                      sm:py-2.5
                      rounded-full
                      transition-all
                      shadow-md
                      group
                    "
                  >
                    <span>Start a project</span>

                    <span className="ml-3 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#0A1A3F] text-white flex items-center justify-center text-[10px] sm:text-xs group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </Link>

                  <Link
                    to="/services"
                    className="
                      inline-flex
                      items-center
                      justify-between
                      sm:justify-center
                      bg-[#0A1A3F]
                      hover:bg-[#06122c]
                      text-white
                      font-bold
                      text-xs
                      sm:text-[14.5px]
                      px-4
                      sm:px-5
                      py-2.5
                      sm:py-2.5
                      rounded-full
                      border
                      border-white/15
                      transition-all
                      group
                    "
                  >
                    <span>Browse services</span>

                    <span className="ml-3 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#31518D] text-white flex items-center justify-center text-[10px] sm:text-xs group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
