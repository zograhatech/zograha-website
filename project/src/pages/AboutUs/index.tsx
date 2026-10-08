import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutUs(props?: any) {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main 
        className="flex-1 w-full overflow-hidden" 
        style={{ background: "linear-gradient(180deg, #E3ECF9 0%, #F7F9FC 100%)" }}
      >
        {/* ============================================================ */}
        {/* 1. HERO SECTION */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 mb-10 sm:mb-16 reveal-on-scroll">
          <div
            className="relative bg-[#0A1A3F] pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-8 md:px-12 lg:px-16 rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-2xl text-center"
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
                <div className="w-[280px] h-[280px] rounded-full border border-[#3FC3D3]/15 flex items-center justify-center">
                  <div className="w-[160px] h-[160px] rounded-full border border-white/5" />
                </div>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="relative z-10 flex justify-center items-center mb-4 sm:mb-5">
              <span className="text-[#9FB6E0] text-xs sm:text-[13px] font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2 text-[#9FB6E0]/60">/</span>
                <span className="text-white">About Us</span>
              </span>
            </div>

            {/* Label badge */}
            <div className="relative z-10 inline-flex items-center py-1.5 px-4 gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-5 sm:mb-6">
              <div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
              <span className="text-[#DCE8F6] text-xs font-semibold tracking-wide uppercase">
                About Zograha Technologies
              </span>
            </div>

            {/* Headline */}
            <div className="relative z-10 max-w-4xl mx-auto mb-5 sm:mb-6">
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Technology that moves{" "}
                <span className="text-[#7FD6E2] font-newsreader italic font-normal block sm:inline">
                  your business forward.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="relative z-10 max-w-2xl mx-auto mb-8 sm:mb-10">
              <p className="text-[#C9D7F2] text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed">
                A digital solutions and technology company helping businesses build a strong online presence and grow through innovative, reliable and result-driven solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="relative z-10 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-[#3FC3D3] hover:bg-[#34b0be] text-[#0A1A3F] font-bold py-2 sm:py-2.5 pl-6 pr-2 rounded-full transition-all group shadow-lg"
              >
                <span className="text-sm sm:text-base mr-3 font-bold">
                  Start a project
                </span>
                <span className="bg-[#0A1A3F] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform text-sm font-bold">
                  →
                </span>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-full border border-white/30 transition-all text-sm sm:text-base shadow-sm"
              >
                <span>Our services</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. COMPANY INTRODUCTION / STORY & IDENTITY SECTION */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-14 sm:mb-20 reveal-on-scroll">
          {/* Main Story: Photo + Paragraphs */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 w-full mb-12 sm:mb-16">
            <div className="w-full lg:w-[48%] xl:w-[520px] shrink-0">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/7wrknins_expires_30_days.png"
                onError={(e) => { (e.target as HTMLImageElement).src = "/figma/home-hero.png"; }}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[410px] rounded-[24px] sm:rounded-[28px] object-cover shadow-xl"
                alt="Zograha Technologies Team"
              />
            </div>

            <div className="flex-1 w-full space-y-4 sm:space-y-5">
              <p className="text-[#3F4D6B] text-sm sm:text-base md:text-[17px] leading-relaxed">
                Zograha Technologies is a premier software engineering and AI solutions company delivering dependable digital execution for forward-thinking businesses. We specialize in strategic technology initiatives that help organizations move faster, modernize operations, apply AI, and delight their customers.
              </p>
              <p className="text-[#3F4D6B] text-sm sm:text-base md:text-[17px] leading-relaxed">
                Our team believes in delivering the highest standard of digital products tailored to business requirements. With proven expertise across cloud platforms, modern web architecture, mobile applications, applied AI, and automated testing, we turn ambitious ideas into scalable, reliable software.
              </p>
              <p className="text-[#3F4D6B] text-sm sm:text-base md:text-[17px] leading-relaxed">
                We combine senior technical leadership with pragmatic execution so every engagement delivers measurable business value and lasting competitive advantage.
              </p>

              {/* 3 Check Badges */}
              <div className="flex flex-col gap-2.5 pt-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center bg-[#EEF4FB] py-2 px-4 gap-2 rounded-full border border-[#DCE8F6]">
                    <span className="text-[#1D5FA8] text-sm font-bold">✓</span>
                    <span className="text-[#13295C] text-xs sm:text-sm font-bold">Clear, accountable delivery</span>
                  </div>
                  <div className="inline-flex items-center bg-[#EEF4FB] py-2 px-4 gap-2 rounded-full border border-[#DCE8F6]">
                    <span className="text-[#1D5FA8] text-sm font-bold">✓</span>
                    <span className="text-[#13295C] text-xs sm:text-sm font-bold">Senior technical expertise</span>
                  </div>
                </div>
                <div className="inline-flex items-center bg-[#EEF4FB] py-2 px-4 gap-2 rounded-full border border-[#DCE8F6] w-fit">
                  <span className="text-[#1D5FA8] text-sm font-bold">✓</span>
                  <span className="text-[#13295C] text-xs sm:text-sm font-bold">Support that lasts beyond launch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Official Company Identity: 2x2 Grid / 1 Col Mobile */}
          <div className="w-full pt-4">
            <div className="mb-3.5">
              <span className="text-[#5B6882] text-xs font-bold uppercase tracking-wider">
                Official company identity
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              {/* Card 1: Legal Name */}
              <div className="bg-white p-5 rounded-[20px] border border-[#D9E1EE] shadow-sm hover:border-[#1D5FA8] transition-colors">
                <span className="text-[#5B6882] text-xs block mb-1">Legal name</span>
                <span className="text-[#0A1A3F] text-base sm:text-[17px] font-bold">Zograha Technologies</span>
              </div>

              {/* Card 2: Official Website */}
              <a 
                href="https://www.zograha.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-5 rounded-[20px] border border-[#D9E1EE] shadow-sm hover:border-[#1D5FA8] transition-colors block"
              >
                <span className="text-[#5B6882] text-xs block mb-1">Official website</span>
                <span className="text-[#0A1A3F] hover:text-[#1D5FA8] text-base sm:text-[17px] font-bold transition-colors">www.zograha.com</span>
              </a>

              {/* Card 3: Official LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/zograha-technologies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-5 rounded-[20px] border border-[#D9E1EE] shadow-sm hover:border-[#1D5FA8] transition-colors block"
              >
                <span className="text-[#5B6882] text-xs block mb-1">Official LinkedIn</span>
                <span className="text-[#0A1A3F] hover:text-[#1D5FA8] text-base sm:text-[17px] font-bold transition-colors">Zograha Technologies on LinkedIn</span>
              </a>

              {/* Card 4: Company Email */}
              <a 
                href="mailto:info@zograha.com" 
                className="bg-white p-5 rounded-[20px] border border-[#D9E1EE] shadow-sm hover:border-[#1D5FA8] transition-colors block"
              >
                <span className="text-[#5B6882] text-xs block mb-1">Company email</span>
                <span className="text-[#0A1A3F] hover:text-[#1D5FA8] text-base sm:text-[17px] font-bold transition-colors">info@zograha.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. "ZOGRAHA IN NUMBERS" SECTION */}
        {/* ============================================================ */}
        <section className="w-full bg-[#0A1A3F] py-14 sm:py-20 lg:py-24 mb-16 sm:mb-24 relative overflow-hidden reveal-on-scroll">
          {/* Ambient glows matching Figma */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D5FA8]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3FC3D3]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Zograha
              </h2>
              <div className="text-[#7FD6E2] text-3xl sm:text-4xl lg:text-5xl font-newsreader italic">
                in numbers.
              </div>
            </div>

            {/* Bordered numbers container */}
            <div className="flex flex-col sm:flex-row items-stretch w-full bg-[#0A1A3F] rounded-3xl border border-[#2B4A8C] overflow-hidden shadow-2xl">
              <div className="flex-1 py-7 sm:py-9 px-6 sm:px-8 border-b sm:border-b-0 sm:border-r border-[#2B4A8C]">
                <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-3">
                  98%
                </div>
                <div className="text-[#C9D7F2] text-sm sm:text-base font-medium">
                  Delivered on time
                </div>
              </div>

              <div className="flex-1 py-7 sm:py-9 px-6 sm:px-8 border-b sm:border-b-0 sm:border-r border-[#2B4A8C]">
                <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-3">
                  500+
                </div>
                <div className="text-[#C9D7F2] text-sm sm:text-base font-medium">
                  Projects shipped
                </div>
              </div>

              <div className="flex-1 py-7 sm:py-9 px-6 sm:px-8 border-b sm:border-b-0 sm:border-r border-[#2B4A8C]">
                <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-3">
                  50+
                </div>
                <div className="text-[#C9D7F2] text-sm sm:text-base font-medium">
                  Engineers &amp; specialists
                </div>
              </div>

              <div className="flex-1 py-7 sm:py-9 px-6 sm:px-8">
                <div className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-3">
                  24/7
                </div>
                <div className="text-[#C9D7F2] text-sm sm:text-base font-medium">
                  Support &amp; reliability
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. "STRENGTHS AND PRINCIPLES" SECTION */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-16 sm:mb-24 reveal-on-scroll">
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
              <span className="text-[#13295C] text-xs font-bold uppercase tracking-wider">
                Our core
              </span>
            </div>
            <h2 className="text-[#0A1A3F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Strengths{" "}
              <span className="text-[#1D5FA8] font-newsreader italic font-normal block sm:inline">
                and principles.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
            {/* Mission */}
            <div className="bg-white p-3.5 sm:p-4 rounded-[28px] border border-[#D9E1EE] shadow-md flex flex-col justify-between card-hover">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/srtm7nch_expires_30_days.png"
                className="w-full h-48 sm:h-52 rounded-[20px] object-cover mb-5"
                alt="Our Mission"
              />
              <div className="px-2 pb-3">
                <h3 className="text-[#0A1A3F] text-xl sm:text-2xl font-bold mb-2.5">
                  Our Mission
                </h3>
                <p className="text-[#3F4D6B] text-sm sm:text-[15px] leading-relaxed">
                  Zograha Technologies’ mission is to lead with practical, high-impact technology solutions. We focus on making our clients successful by providing dependable software, applied AI, and engineering delivery that stays close to real business needs.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-3.5 sm:p-4 rounded-[28px] border border-[#D9E1EE] shadow-md flex flex-col justify-between card-hover">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/hizbs175_expires_30_days.png"
                className="w-full h-48 sm:h-52 rounded-[20px] object-cover mb-5"
                alt="Our Vision"
              />
              <div className="px-2 pb-3">
                <h3 className="text-[#0A1A3F] text-xl sm:text-2xl font-bold mb-2.5">
                  Our Vision
                </h3>
                <p className="text-[#3F4D6B] text-sm sm:text-[15px] leading-relaxed">
                  We envision being a trusted digital engineering partner for growing businesses worldwide. Our goal is to leverage modern cloud architecture, machine learning, and scalable platforms to unlock sustainable, long-term growth.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white p-3.5 sm:p-4 rounded-[28px] border border-[#D9E1EE] shadow-md flex flex-col justify-between card-hover">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/ue5rkojd_expires_30_days.png"
                className="w-full h-48 sm:h-52 rounded-[20px] object-cover mb-5"
                alt="Our Values"
              />
              <div className="px-2 pb-3">
                <h3 className="text-[#0A1A3F] text-xl sm:text-2xl font-bold mb-2.5">
                  Our Values
                </h3>
                <p className="text-[#3F4D6B] text-sm sm:text-[15px] leading-relaxed">
                  We value engineering integrity, transparent accountability, continuous learning, and client trust. We build lasting partnerships and deliver software with precision, quality, and measurable value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. "OUR LOCATIONS, ACROSS TAMIL NADU" SECTION */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-16 sm:mb-24 reveal-on-scroll">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-[#0A1A3F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Our locations,{" "}
              <span className="text-[#1D5FA8] font-newsreader italic font-normal block sm:inline">
                across Tamil Nadu.
              </span>
            </h2>
            <div className="text-[#1D5FA8] text-base sm:text-lg font-semibold mt-2">
              Presence &amp; delivery centers
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
            {/* Madurai Registered Office */}
            <div className="bg-[#F7F9FC] p-6 sm:p-7 rounded-[28px] border border-[#D9E1EE] shadow-sm flex flex-col justify-between card-hover">
              <div>
                <span className="text-[#1D5FA8] text-xs font-bold uppercase tracking-wider block mb-2">
                  Registered office
                </span>
                <h3 className="text-[#0A1A3F] text-xl sm:text-2xl font-bold mb-3">
                  Madurai Registered Office
                </h3>
                <p className="text-[#3F4D6B] text-sm sm:text-[15px] leading-relaxed mb-6">
                  Shanmuga Towers, 3rd Floor, 38 Krishnarayar Thepakulam Street, Simmakkal, Madurai – 625001, Tamil Nadu
                </p>
              </div>
              <div className="space-y-2 pt-4 border-t border-[#E1E8F3]">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F4D6B]">
                  <span className="text-[#3FC3D3] text-sm">●</span>
                  <span>Registered corporate headquarters</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F4D6B]">
                  <span className="text-[#3FC3D3] text-sm">●</span>
                  <span>Leadership &amp; operations</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F4D6B]">
                  <span className="text-[#3FC3D3] text-sm">●</span>
                  <span>Client delivery coordination</span>
                </div>
              </div>
            </div>

            {/* Chennai Technology Hub */}
            <div className="bg-[#F7F9FC] p-6 sm:p-7 rounded-[28px] border border-[#D9E1EE] shadow-sm flex flex-col justify-between card-hover">
              <div>
                <span className="text-[#1D5FA8] text-xs font-bold uppercase tracking-wider block mb-2">
                  Technology hub
                </span>
                <h3 className="text-[#0A1A3F] text-xl sm:text-2xl font-bold mb-3">
                  Chennai Technology Hub
                </h3>
                <p className="text-[#3F4D6B] text-sm sm:text-[15px] leading-relaxed mb-6">
                  Olympia Cyberspace, Alandur Road, Guindy, Chennai, Tamil Nadu 600032
                </p>
              </div>
              <div className="space-y-2 pt-4 border-t border-[#E1E8F3]">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F4D6B]">
                  <span className="text-[#3FC3D3] text-sm">●</span>
                  <span>Digital delivery team</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F4D6B]">
                  <span className="text-[#3FC3D3] text-sm">●</span>
                  <span>Web, cloud &amp; mobile solutions</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F4D6B]">
                  <span className="text-[#3FC3D3] text-sm">●</span>
                  <span>Applied AI &amp; analytics labs</span>
                </div>
              </div>
            </div>

            {/* Coimbatore Engineering Center */}
            <div className="bg-[#F7F9FC] p-6 sm:p-7 rounded-[28px] border border-[#D9E1EE] shadow-sm flex flex-col justify-between card-hover">
              <div>
                <span className="text-[#1D5FA8] text-xs font-bold uppercase tracking-wider block mb-2">
                  Engineering center
                </span>
                <h3 className="text-[#0A1A3F] text-xl sm:text-2xl font-bold mb-3">
                  Coimbatore Engineering Center
                </h3>
                <p className="text-[#3F4D6B] text-sm sm:text-[15px] leading-relaxed mb-6">
                  Tech Park, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004
                </p>
              </div>
              <div className="space-y-2 pt-4 border-t border-[#E1E8F3]">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F4D6B]">
                  <span className="text-[#3FC3D3] text-sm">●</span>
                  <span>Software development squads</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F4D6B]">
                  <span className="text-[#3FC3D3] text-sm">●</span>
                  <span>Quality assurance &amp; DevOps</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F4D6B]">
                  <span className="text-[#3FC3D3] text-sm">●</span>
                  <span>Ongoing enterprise support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. FINAL CTA BANNER */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-16 sm:mb-24 reveal-on-scroll">
          <div className="bg-white p-2.5 sm:p-3.5 rounded-[32px] sm:rounded-[44px] border border-[#E1E8F3] shadow-2xl overflow-hidden">
            <div 
              className="relative py-10 sm:py-16 lg:py-20 px-6 sm:px-12 md:px-16 rounded-[24px] sm:rounded-[36px] overflow-hidden"
              style={{ background: "linear-gradient(180deg, #13295C 0%, #1D5FA8 100%)" }}
            >
              {/* Concentric circles decorative background */}
              <div className="absolute top-0 bottom-0 right-0 w-[450px] pointer-events-none opacity-20 overflow-hidden hidden md:block">
                <div className="w-[600px] h-[600px] rounded-full border border-white -mr-40 -mt-20 flex items-center justify-center">
                  <div className="w-[450px] h-[450px] rounded-full border border-white flex items-center justify-center">
                    <div className="w-[300px] h-[300px] rounded-full border border-white" />
                  </div>
                </div>
              </div>

              {/* Banner Content */}
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full border border-white/30 mb-4 bg-white/5">
                  <div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
                  <span className="text-[#DCE8F6] text-xs font-bold uppercase tracking-wider">
                    Let’s talk
                  </span>
                </div>

                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-1">
                  Tell us what you need built,
                </h2>
                <div className="text-[#7FD6E2] text-3xl sm:text-4xl md:text-5xl font-newsreader italic mb-4">
                  or what isn’t working.
                </div>

                <p className="text-[#DCE8F6] text-sm sm:text-base md:text-[17px] leading-relaxed mb-8 max-w-lg">
                  Share a few details. We’ll reply with next steps and questions, not a generic brochure.
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center bg-[#3FC3D3] hover:bg-[#34b0be] text-[#0A1A3F] font-bold py-2 pl-6 pr-2 rounded-full transition-all group shadow-md"
                  >
                    <span className="text-sm sm:text-base mr-3 font-bold">
                      Start a project
                    </span>
                    <span className="bg-[#0A1A3F] text-white w-9 h-9 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform text-sm font-bold">
                      →
                    </span>
                  </Link>

                  <Link 
                    to="/services" 
                    className="inline-flex items-center bg-[#0A1A3F] hover:bg-[#07132f] text-white font-bold py-2 pl-6 pr-2 rounded-full transition-all group shadow-md"
                  >
                    <span className="text-sm sm:text-base mr-3 font-bold">
                      Browse services
                    </span>
                    <span className="bg-[#2B4A8C] text-white w-9 h-9 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform text-sm font-bold">
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