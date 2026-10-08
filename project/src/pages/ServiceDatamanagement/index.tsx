import React from "react";
import { Link } from "react-router-dom";

export default function ServiceDatamanagement() {
  const servicePills = [
    { name: "Digital Marketing", path: "/services/digital-marketing", active: false },
    { name: "App Development", path: "/services/app-development", active: false },
    { name: "Web Design", path: "/services/web-design", active: false },
    { name: "Data Management", path: "/services/data-management", active: true },
    { name: "Customer Support", path: "/services/customer-support", active: false },
    { name: "Publications", path: "/services/publications", active: false },
  ];

  return (
    <div className="flex flex-col bg-white">
      <main 
        className="flex-1 w-full overflow-hidden" 
        style={{ background: "linear-gradient(180deg, #E3ECF9 0%, #F7F9FC 100%)" }}
      >
        {/* ============================================================ */}
        {/* HERO SECTION */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 mb-8 sm:mb-12">
          <div
            className="relative bg-[#0A1A3F] pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-8 md:px-12 lg:px-16 rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-2xl text-center"
            style={{
              background: "linear-gradient(135deg, #061129 0%, #0A1A3F 45%, #132E6B 100%)",
            }}
          >
            {/* Ambient Radial Highlights */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#3FC3D3]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#1D5FA8]/25 rounded-full blur-3xl pointer-events-none" />

            {/* Breadcrumb */}
            <div className="relative z-10 flex justify-center items-center mb-3 sm:mb-4">
              <span className="text-[#9FB6E0] text-xs sm:text-[13px] font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2 text-[#9FB6E0]/60">/</span>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <span className="mx-2 text-[#9FB6E0]/60">/</span>
                <span className="text-white">Data Management</span>
              </span>
            </div>

            {/* Pill badge */}
            <div className="relative z-10 inline-flex items-center py-1 sm:py-1.5 px-3.5 sm:px-4 gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6">
              <div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-pulse" />
              <span className="text-[#DCE8F6] text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                RUN · SERVICE
              </span>
            </div>

            {/* Main Title */}
            <div className="relative z-10 max-w-4xl mx-auto mb-4 sm:mb-6">
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Turn your data into{" "}
                <span className="text-[#7FD6E2] font-newsreader italic font-normal block sm:inline">
                  a business asset.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="relative z-10 max-w-2xl mx-auto mb-6 sm:mb-8">
              <p className="text-[#C9D7F2] text-sm sm:text-lg md:text-[20px] leading-relaxed">
                Turn your data into a powerful business asset with secure, scalable and reliable data management.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-between sm:justify-center bg-[#3FC3D3] hover:bg-[#34b0be] text-[#0A1A3F] font-bold text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-6 rounded-full transition-all group shadow-md w-full sm:w-auto"
              >
                <span className="mr-2 sm:mr-3">
                  <span className="hidden sm:inline">Enquire about Data Management</span>
                  <span className="sm:hidden">Enquire now</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-[#0A1A3F] text-white flex items-center justify-center font-bold text-sm group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base py-3 px-6 sm:px-7 rounded-full border border-white/40 transition-colors w-full sm:w-auto"
              >
                All services
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SERVICE NAVIGATION PILLS */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2.5 sm:gap-3 max-w-[920px] mx-auto">
            {servicePills.map((pill) => (
              <Link
                key={pill.name}
                to={pill.path}
                className={`py-2 sm:py-2.5 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-semibold border transition-all text-center ${
                  pill.active
                    ? "bg-[#0A1A3F] text-white border-[#0A1A3F] shadow-sm"
                    : "bg-white text-[#0A1A3F] border-[#C9D6EE] hover:bg-[#EEF4FB] hover:border-[#0A1A3F]/40"
                }`}
              >
                {pill.name}
              </Link>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* OVERVIEW SECTION */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-14 sm:mb-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
            {/* Left Headline */}
            <div className="w-full lg:max-w-[480px]">
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-2 h-2 rounded-full bg-[#3FC3D3]" />
                <span className="text-[#13295C] text-xs font-bold tracking-widest uppercase">
                  OVERVIEW
                </span>
              </div>
              <h2 className="text-[#0A1A3F] text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] font-bold leading-[1.15]">
                Turn your data into{" "}
                <span className="text-[#1D5FA8] font-newsreader italic font-normal block sm:inline">
                  a powerful business asset.
                </span>
              </h2>
            </div>

            {/* Right Content */}
            <div className="w-full lg:flex-1 flex flex-col justify-center">
              <p className="text-[#3F4D6B] text-sm sm:text-base md:text-[17px] leading-relaxed mb-4">
                Manage, organize, and utilize your business data with secure, scalable, and reliable data management solutions.
              </p>
              <p className="text-[#3F4D6B] text-sm sm:text-base md:text-[17px] leading-relaxed mb-6">
                We help businesses streamline data processing, build efficient ETL pipelines, manage databases, generate insightful analytics, and leverage cloud technologies for better performance and smarter decision-making.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {[
                  "Data Processing",
                  "ETL & Data Integration",
                  "Secure Cloud Storage",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="inline-flex items-center gap-2 py-2 px-3.5 sm:px-4 rounded-full bg-[#EEF4FB] border border-[#DCE8F6]"
                  >
                    <span className="text-[#1D5FA8] font-bold text-xs sm:text-sm">✓</span>
                    <span className="text-[#13295C] font-semibold text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* WHAT WE DELIVER SECTION */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#3FC3D3]" />
              <span className="text-[#13295C] text-xs font-bold tracking-widest uppercase">
                WHAT WE DELIVER
              </span>
            </div>
            <h2 className="text-[#0A1A3F] text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] font-bold leading-[1.15]">
              Our data{" "}
              <span className="text-[#1D5FA8] font-newsreader italic font-normal block sm:inline">
                management services.
              </span>
            </h2>
          </div>

          {/* Subheader with Line */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <h3 className="text-[#0A1A3F] text-xl sm:text-2xl md:text-[26px] font-bold shrink-0">
              Our Data Management Services
            </h3>
            <div className="hidden sm:block flex-1 h-[1px] bg-[#D9E1EE]" />
          </div>

          {/* Cards Grid: 3 cards in 1 row on desktop; 1 col on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-[#F7F9FC] hover:bg-[#EEF4FB] transition-all p-6 sm:p-7 rounded-[24px] sm:rounded-[28px] border border-[#E1E8F3] shadow-[0_10px_30px_rgba(10,26,63,0.06)] hover:shadow-[0_16px_36px_rgba(10,26,63,0.12)] flex flex-col justify-between min-h-[170px] group">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-[16px] bg-white border border-[#E1E8F3] shadow-sm flex items-center justify-center text-[#1D5FA8] group-hover:bg-[#1D5FA8] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <span className="text-[#5B6882] text-lg font-medium group-hover:text-[#1D5FA8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </div>
              <h4 className="text-[#0A1A3F] text-lg sm:text-[21px] font-bold leading-snug mt-8">
                Data Processing
              </h4>
            </div>

            {/* Card 2 */}
            <div className="bg-[#EEF4FB] hover:bg-[#E3ECF9] transition-all p-6 sm:p-7 rounded-[24px] sm:rounded-[28px] border border-[#E1E8F3] shadow-[0_10px_30px_rgba(10,26,63,0.06)] hover:shadow-[0_16px_36px_rgba(10,26,63,0.12)] flex flex-col justify-between min-h-[170px] group">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-[16px] bg-white border border-[#E1E8F3] shadow-sm flex items-center justify-center text-[#1D5FA8] group-hover:bg-[#1D5FA8] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <span className="text-[#5B6882] text-lg font-medium group-hover:text-[#1D5FA8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </div>
              <h4 className="text-[#0A1A3F] text-lg sm:text-[21px] font-bold leading-snug mt-8">
                ETL &amp; Data Integration
              </h4>
            </div>

            {/* Card 3 */}
            <div className="bg-[#E3F3F7] hover:bg-[#D4EEF4] transition-all p-6 sm:p-7 rounded-[24px] sm:rounded-[28px] border border-[#E1E8F3] shadow-[0_10px_30px_rgba(10,26,63,0.06)] hover:shadow-[0_16px_36px_rgba(10,26,63,0.12)] flex flex-col justify-between min-h-[170px] group">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-[16px] bg-white border border-[#E1E8F3] shadow-sm flex items-center justify-center text-[#1D5FA8] group-hover:bg-[#1D5FA8] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <circle cx="6" cy="6.5" r=".75" fill="currentColor" />
                    <circle cx="9" cy="6.5" r=".75" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-[#5B6882] text-lg font-medium group-hover:text-[#1D5FA8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </div>
              <h4 className="text-[#0A1A3F] text-lg sm:text-[21px] font-bold leading-snug mt-8">
                Secure Cloud Storage
              </h4>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FINAL CTA BANNER */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1240px] mx-auto px-3 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-24">
          <div className="bg-white p-2.5 sm:p-3.5 rounded-[32px] sm:rounded-[44px] border border-[#E1E8F3] shadow-[0_20px_50px_rgba(10,26,63,0.12)] overflow-hidden">
            <div className="relative bg-gradient-to-r from-[#13295C] to-[#1D5FA8] py-10 sm:py-14 md:py-16 px-6 sm:px-10 md:px-16 rounded-[24px] sm:rounded-[36px] overflow-hidden">
              {/* Concentric Decorative Rings on the Right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/10 pointer-events-none hidden md:flex items-center justify-center">
                <div className="w-[360px] h-[360px] rounded-full border border-white/5 flex items-center justify-center">
                  <div className="w-[240px] h-[240px] rounded-full border border-[#7FD6E2]/20 flex items-center justify-center">
                    <div className="w-[120px] h-[120px] rounded-full border border-white/10" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 max-w-[620px]">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center py-1 sm:py-1.5 px-3.5 gap-2 rounded-full border border-white/30 bg-white/10 mb-4 sm:mb-5">
                  <div className="bg-[#3FC3D3] w-2 h-2 rounded-full" />
                  <span className="text-[#DCE8F6] text-xs font-semibold uppercase tracking-wider">
                    Let’s talk
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Tell us what you need built,{" "}
                  <span className="text-[#7FD6E2] font-newsreader italic font-normal block sm:inline">
                    or what isn’t working.
                  </span>
                </h3>

                {/* Subtitle */}
                <p className="text-[#DCE8F6] text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed">
                  Share a few details. We’ll reply with next steps and questions, not a generic brochure.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-between sm:justify-center bg-[#3FC3D3] hover:bg-[#34b0be] text-[#0A1A3F] font-bold text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-6 rounded-full transition-all group shadow-md"
                  >
                    <span className="mr-3">Start a project</span>
                    <span className="w-8 h-8 rounded-full bg-[#0A1A3F] text-white flex items-center justify-center font-bold text-sm group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-between sm:justify-center bg-[#0A1A3F] hover:bg-[#13295c] text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-6 rounded-full border border-white/20 transition-all group"
                  >
                    <span className="mr-3">Browse services</span>
                    <span className="w-8 h-8 rounded-full bg-[#2B4A8C] text-white flex items-center justify-center font-bold text-sm group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
