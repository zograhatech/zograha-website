import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import { api } from "../../lib/api";
import type { Industry } from "../../types/api";

export const ALL_INDUSTRIES = [
  {
    slug: "ecommerce",
    name: "E-commerce & Online Stores",
    description: "Grow online sales with digital marketing, conversion-focused storefronts, and automated inventory sync.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/lapmqd71_expires_30_days.png",
  },
  {
    slug: "real-estate",
    name: "Real Estate & Property",
    description: "High-conversion property showcase portals, interactive floorplans, and automated lead capture pipelines.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/vxrevdzn_expires_30_days.png",
  },
  {
    slug: "healthcare",
    name: "Healthcare & Hospitals",
    description: "HIPAA-compliant patient portals, doctor appointment scheduling systems, and telehealth integrations.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/mom7ltss_expires_30_days.png",
  },
  {
    slug: "education",
    name: "Education & E-Learning",
    description: "Learning management platforms, student portals, and video course delivery architecture.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/i9rgsgu4_expires_30_days.png",
  },
  {
    slug: "travel",
    name: "Travel & Tourism",
    description: "Dynamic booking engines, itinerary management, and integrated multi-currency payment workflows.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/f6haltkq_expires_30_days.png",
  },
  {
    slug: "hospitality",
    name: "Hotels & Hospitality",
    description: "Reservation engines, guest management systems, and location-based local search optimization.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/k1r3ht8x_expires_30_days.png",
  },
  {
    slug: "restaurants",
    name: "Restaurants & Food Businesses",
    description: "Online ordering systems, digital menus, table reservation portals, and local SEO campaigns.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/6d3p6anq_expires_30_days.png",
  },
  {
    slug: "fashion",
    name: "Fashion & Apparel",
    description: "Visual-rich catalog designs, lookbook experiences, and omnichannel social commerce integrations.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/0i3xvte9_expires_30_days.png",
  },
  {
    slug: "beauty",
    name: "Beauty & Wellness",
    description: "Appointment booking systems, client membership portals, and targeted influencer marketing workflows.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/zsm216yx_expires_30_days.png",
  },
  {
    slug: "automotive",
    name: "Automotive & Car Dealers",
    description: "Vehicle inventory filtering, digital test-drive booking, and geo-targeted PPC acquisition funnels.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/1fqnko39_expires_30_days.png",
  },
  {
    slug: "finance",
    name: "Finance & Insurance",
    description: "Secure customer self-service portals, interactive loan calculators, and audit-ready data pipelines.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/p1s29o28_expires_30_days.png",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    description: "Industrial IoT telemetry dashboards, supply chain visibility, and B2B distributor customer portals.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/bxm86tih_expires_30_days.png",
  },
  {
    slug: "technology",
    name: "IT & Technology",
    description: "Full-stack software engineering, developer API portals, and resilient cloud architecture.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/rpc0n6bw_expires_30_days.png",
  },
  {
    slug: "saas",
    name: "SaaS & Software",
    description: "High-converting product marketing sites, interactive product tour apps, and user retention funnels.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/0nt7ctep_expires_30_days.png",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    description: "Thought-leadership content publishing platforms, case study hubs, and automated consultation scheduling.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/281rt6cr_expires_30_days.png",
  },
  {
    slug: "legal",
    name: "Legal Services",
    description: "Secure client intake workflows, case inquiry forms, and authoritative search visibility strategies.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/1tdpnps0_expires_30_days.png",
  },
  {
    slug: "home-services",
    name: "Home Services",
    description: "Instant quote estimators, local service area landing pages, and automated SMS confirmation funnels.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/5xmeznec_expires_30_days.png",
  },
  {
    slug: "construction",
    name: "Construction & Interior Design",
    description: "High-resolution architectural portfolio galleries, milestone tracking portals, and procurement sync.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/xt1lg1mv_expires_30_days.png",
  },
  {
    slug: "retail",
    name: "Retail & Local Businesses",
    description: "Google Business optimization, local map rank dominance, and click-and-collect inventory systems.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/s2jm0jyp_expires_30_days.png",
  },
  {
    slug: "b2b",
    name: "B2B & Business Services",
    description: "Account-based inbound funnels, automated enterprise qualification, and CRM database synchronization.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/ojsfyswz_expires_30_days.png",
  },
  {
    slug: "startups",
    name: "Startups & Small Businesses",
    description: "Rapid MVP prototyping, modern responsive web applications, and agile product development sprints.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/dxo6dqpc_expires_30_days.png",
  },
  {
    slug: "fitness",
    name: "Fitness & Sports",
    description: "Membership subscription portals, online session scheduling, and workout video streaming systems.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/fa8veumy_expires_30_days.png",
  },
  {
    slug: "jewellery",
    name: "Jewellery & Luxury",
    description: "Exquisite visual showcase designs, custom commission inquiry forms, and high-security checkout flows.",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/0q9zh40b_expires_30_days.png",
  },
];

export default function IndustriesPage() {
  const [apiIndustries, setApiIndustries] = useState<Industry[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let active = true;
    api.industries.list()
      .then((res) => {
        if (active && res.items && res.items.length > 0) {
          setApiIndustries(res.items);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const combinedIndustries = [
    ...ALL_INDUSTRIES,
    ...apiIndustries
      .filter((ai) => !ALL_INDUSTRIES.some((ci) => ci.slug === ai.slug || ci.name.toLowerCase() === ai.name.toLowerCase()))
      .map((ai) => ({
        slug: ai.slug,
        name: ai.name,
        description: ai.description || "Tailored digital engineering and technology solutions.",
        icon: ai.icon || "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/lapmqd71_expires_30_days.png",
      })),
  ];

  const filtered = combinedIndustries.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

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
              <Link to="/" className="hover:underline">Home</Link> / Industries
            </span>

            <div className="inline-flex items-center py-2 px-4 gap-2 rounded-[999px] border border-[#FFFFFF47] bg-white/5 mb-6">
              <div className="bg-[#3FC3D3] w-[7px] h-[7px] rounded-[3px]"></div>
              <span className="text-[#DCE8F6] text-xs font-medium">Domain-Specific Engineering</span>
            </div>

            <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-2">
              Digital growth strategies
            </h1>
            <h2 className="text-[#7FD6E2] text-4xl sm:text-6xl lg:text-7xl font-newsreader italic font-normal leading-tight mb-6">
              built around your industry.
            </h2>

            <p className="text-[#C9D7F2] text-lg sm:text-[21px] max-w-[680px] leading-relaxed mb-8">
              Every vertical requires unique operational logic, regulatory standards, and customer journeys. We engineer software tailored specifically to how your industry operates.
            </p>

            {/* Search filter input */}
            <div className="w-full max-w-md pb-4">
              <input
                type="text"
                placeholder="Search your industry..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-full py-3 px-5 text-sm outline-none focus:border-[#3FC3D3] focus:bg-white/15 transition-all text-center"
              />
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 my-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((item, idx) => (
              <div
                key={item.slug}
                className="bg-white p-6 sm:p-8 rounded-[28px] border border-[#E1E8F3] card-hover reveal-on-scroll flex flex-col justify-between group"
                style={{
                  boxShadow: "0px 16px 36px rgba(10, 26, 63, 0.08)",
                  animationDelay: `${idx * 60}ms`,
                }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-12 h-12 rounded-2xl object-contain bg-[#EEF4FB] p-2 group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-[#0A1A3F] text-xl font-bold group-hover:text-[#1D5FA8] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-[#3F4D6B] text-[15px] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-[#13295C] group-hover:text-[#1D5FA8] font-bold text-sm transition-colors"
                  >
                    <span>Discuss solutions</span>
                    <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </Link>
                  <span className="text-xs text-[#5B6882] font-semibold">Custom engineering</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
