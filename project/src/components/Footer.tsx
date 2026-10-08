import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaThreads,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";
import { api } from "../lib/api";
import type { CompanySettings } from "../types/api";

const LOGO_SRC = "/logos/zograha-logo-full.png";
const FALLBACK_LOGO = "/figma/zograha-logo.png";

export default function Footer() {
  const [logoSrc, setLogoSrc] = useState(LOGO_SRC);
  const [settings, setSettings] = useState<CompanySettings | null>(null);

  useEffect(() => {
    let active = true;
    api
      .settings()
      .then((data) => {
        if (active) setSettings(data);
      })
      .catch(() => {
        // Fallback gracefully to default Figma static values
      });
    return () => {
      active = false;
    };
  }, []);

  const phone = settings?.phone || "+91 93842 83323";
  const email = settings?.email || "info@zograha.com";
  const address =
    settings?.address ||
    "Shanmuga Towers, 3rd Floor, 38 Krishnarayar Thepakulam Street, Simmakkal, Madurai – 625001, Tamil Nadu, India";

  // Exact social media brand icons matching Figma (including Facebook and Threads)
  const socialLinks = [
    {
      key: "linkedin",
      href: settings?.social?.linkedin || "https://www.linkedin.com/company/zograha-technologies",
      label: "LinkedIn",
      icon: <FaLinkedinIn className="w-3.5 h-3.5" />,
    },
    {
      key: "twitter",
      href: settings?.social?.twitter || "https://twitter.com/zograha",
      label: "X (Twitter)",
      icon: <FaXTwitter className="w-3.5 h-3.5" />,
    },
    {
      key: "instagram",
      href: settings?.social?.instagram || "https://www.instagram.com/zograhatechnologies",
      label: "Instagram",
      icon: <FaInstagram className="w-3.5 h-3.5" />,
    },
    {
      key: "youtube",
      href: settings?.social?.youtube || "https://youtube.com/@zograha",
      label: "YouTube",
      icon: <FaYoutube className="w-3.5 h-3.5" />,
    },
    {
      key: "facebook",
      href: (settings?.social as any)?.facebook || "https://facebook.com/zograhatechnologies",
      label: "Facebook",
      icon: <FaFacebookF className="w-3.5 h-3.5" />,
    },
    {
      key: "threads",
      href: (settings?.social as any)?.threads || "https://threads.net/@zograhatechnologies",
      label: "Threads",
      icon: <FaThreads className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <footer className="self-stretch bg-[#0A1A3F] text-white overflow-hidden pt-10 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[152px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-7 sm:pb-8">
          {/* Column 1: Company Logo in White Pill Container, Description, Social Icons */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl mb-4 shadow-sm hover:opacity-95 transition-opacity"
              aria-label="Zograha Technologies home"
            >
              <img
                src={logoSrc}
                onError={() => setLogoSrc(FALLBACK_LOGO)}
                alt="Zograha Technologies"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-[#A8B9D9] text-[13px] leading-relaxed mb-4 max-w-[300px]">
              Empowering the future with resilient software, web systems, and
              practical digital transformation solutions.
            </p>

            {/* Social Media Vector Icon Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {socialLinks.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="w-8 h-8 rounded-lg bg-[#FFFFFF0D] hover:bg-[#1D5FA8] hover:text-white border border-[#FFFFFF26] text-[#A8B9D9] flex items-center justify-center transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Exact Figma Order & Wording) */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-[14px] font-bold mb-3 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[13px]">
              <li>
                <Link
                  to="/"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Our Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Our Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Terms &amp; Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Capabilities (Exact Figma Order & Wording) */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-[14px] font-bold mb-3 tracking-wide">
              Services &amp; Capabilities
            </h3>
            <ul className="space-y-2 text-[13px]">
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-development"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-design"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/publications"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  to="/services/customer-support"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  24x7 Customer Support
                </Link>
              </li>
              <li>
                <Link
                  to="/services/data-management"
                  className="text-[#A8B9D9] hover:text-[#3FC3D3] transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Data Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Headquarters / Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-[14px] font-bold mb-3 tracking-wide">
              Headquarters
            </h3>
            <div className="space-y-3 text-[13px] text-[#A8B9D9]">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#FFFFFF0D] border border-[#FFFFFF1A] flex items-center justify-center text-[#3FC3D3] shrink-0 mt-0.5">
                  <FaLocationDot className="w-3 h-3" />
                </div>
                <span className="leading-snug">{address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#FFFFFF0D] border border-[#FFFFFF1A] flex items-center justify-center text-[#3FC3D3] shrink-0">
                  <FaPhone className="w-3 h-3" />
                </div>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#FFFFFF0D] border border-[#FFFFFF1A] flex items-center justify-center text-[#3FC3D3] shrink-0">
                  <FaEnvelope className="w-3 h-3" />
                </div>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#FFFFFF0D] border border-[#FFFFFF1A] flex items-center justify-center text-[#3FC3D3] shrink-0">
                  <FaClock className="w-3 h-3" />
                </div>
                <span>Mon – Sat, 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-[#FFFFFF14] my-4 sm:my-5" />

        {/* Bottom Row: Copyright on Left, Legal Links on Right (Exact Figma Wording) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#7A8EA8]">
          <p>© {new Date().getFullYear()} Zograha Technologies. All rights reserved.</p>
          <div className="flex items-center gap-5 sm:gap-6">
            <Link
              to="/privacy-policy"
              className="text-[#A8B9D9] hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-[#A8B9D9] hover:text-white transition-colors"
            >
              Terms &amp; Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
