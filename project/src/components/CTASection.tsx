import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="self-stretch px-4 sm:px-8 md:px-16 lg:px-20 my-16 reveal-on-scroll">
      <div
        className="max-w-[1440px] mx-auto bg-white p-3 sm:p-4 rounded-[36px] sm:rounded-[44px] border border-[#E1E8F3] overflow-hidden"
        style={{ boxShadow: "0px 40px 80px rgba(10, 26, 63, 0.44)" }}
      >
        <div
          className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-16 rounded-[28px] sm:rounded-[34px]"
          style={{ background: "linear-gradient(180deg, #13295C, #1D5FA8)" }}
        >
          {/* Concentric layered rings matching Figma */}
          <div className="flex flex-1 flex-col items-start bg-[#FFFFFF0D] absolute top-0 bottom-0 right-0 pl-20 rounded-[380px] pointer-events-none">
            <div className="flex flex-col items-start bg-[#FFFFFF0D] py-[1px] pl-[75px] rounded-[300px]">
              <div className="flex flex-col items-start bg-[#7FD6E21A] py-[70px] pl-[70px] rounded-[225px]">
                <div className="items-start bg-[#FFFFFF1A] py-[65px] pl-[65px] rounded-[155px]">
                  <div className="bg-[#FFFFFF26] w-[90px] h-[180px] rounded-[90px]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[700px] relative z-10">
            <div className="inline-flex items-center py-1.5 px-4 gap-2 rounded-[999px] border border-[#FFFFFF4D] bg-white/5 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#3FC3D3] animate-dot-pulse"></span>
              <span className="text-[#DCE8F6] text-xs font-medium">Let’s talk</span>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2">
              Tell us what you need built,
            </h2>
            <h3 className="text-[#7FD6E2] text-3xl sm:text-4xl lg:text-5xl font-newsreader italic font-normal leading-tight mb-5">
              or what isn’t working.
            </h3>

            <p className="text-[#DCE8F6] text-base sm:text-lg max-w-[540px] mb-8 leading-relaxed">
              Share a few details. We’ll reply with next steps and questions, not a generic brochure.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-[#3FC3D3] hover:bg-[#34b0be] text-[#0A1A3F] font-bold text-base py-3 px-6 rounded-[999px] transition-all btn-hover shadow-md group"
              >
                <span>Start a project</span>
                <span className="ml-3 font-bold text-lg btn-arrow group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center bg-[#0A1A3F] hover:bg-[#07132e] text-white font-bold text-base py-3 px-6 rounded-[999px] transition-all btn-hover border border-white/20 group"
              >
                <span>Browse services</span>
                <span className="ml-3 font-bold text-lg btn-arrow group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
