import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Page404(props?: any) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 self-stretch overflow-hidden bg-gradient-to-b from-[#E3ECF9] to-[#F7F9FC]">
        <div className="self-stretch bg-[#0A1A3F] pt-12 md:pt-16 pb-16 px-4 sm:px-8 md:px-16 my-4 md:my-6 mx-2 sm:mx-4 rounded-[28px] sm:rounded-[36px]">
          <div className="max-w-[960px] mx-auto flex flex-col items-center text-center">
            <span className="text-[#9FB6E0] text-[13px] mb-4">Home / Page not found</span>

            <div className="inline-flex items-center py-2 px-4 gap-2 rounded-[999px] border border-[#FFFFFF47] bg-white/5 mb-6">
              <div className="bg-[#3FC3D3] w-2 h-2 rounded-full"></div>
              <span className="text-[#DCE8F6] text-xs font-medium">Error 404</span>
            </div>

            {/* Signature Figma 404 Display */}
            <div className="flex justify-center items-center py-6">
              <span className="text-white text-7xl sm:text-9xl md:text-[180px] lg:text-[220px] font-bold leading-none select-none">
                4
              </span>
              <div className="p-4 sm:p-8 mx-2 sm:mx-4 rounded-3xl sm:rounded-[45px] border-[8px] sm:border-[16px] border-[#3FC3D3] flex items-center justify-center">
                <div className="p-3 sm:p-5 rounded-2xl border-[4px] sm:border-[8px] border-[#7FD6E28C] bg-[#7FD6E257]">
                  <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-md bg-[#3FC3D3]"></div>
                </div>
              </div>
              <span className="text-white text-7xl sm:text-9xl md:text-[180px] lg:text-[220px] font-bold leading-none select-none">
                4
              </span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
              This page doesn’t exist,
            </h1>
            <h2 className="text-[#7FD6E2] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
              or has moved.
            </h2>

            <p className="text-[#C9D7F2] text-base sm:text-xl max-w-[560px] leading-relaxed mb-8">
              The link may be broken or the page may have been removed. Head back home, or pick up from one of our main pages.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center bg-[#3FC3D3] hover:bg-[#2cb2c2] text-[#0A1A3F] font-bold text-base py-3 px-6 rounded-[999px] transition-colors shadow-md"
              >
                <span>Back to home</span>
                <span className="ml-3 font-bold text-lg">→</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-bold text-base py-3 px-6 rounded-[999px] transition-colors border border-white/40"
              >
                <span>Contact us</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}