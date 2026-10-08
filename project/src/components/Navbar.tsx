import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const LOGO_URL = "/figma/zograha-logo.png";
const FALLBACK_LOGO = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/zd7ddvf7_expires_30_days.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState(LOGO_URL);
  const location = useLocation();

  // Scroll detection for sticky navigation elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services", hasDropdown: true },
    { label: "Blog", path: "/blog" },
    { label: "Careers", path: "/careers" },
  ];

  const serviceSubmenu = [
    { label: "All Services", path: "/services" },
    { label: "App Development", path: "/services/app-development" },
    { label: "Web Design", path: "/services/web-design" },
    { label: "Digital Marketing", path: "/services/digital-marketing" },
    { label: "Publications", path: "/services/publications" },
    { label: "Data Management", path: "/services/data-management" },
    { label: "Customer Support", path: "/services/customer-support" },
    { label: "Industries", path: "/industries" },
    { label: "Selected Projects", path: "/projects" },
  ];

  return (
    <header
      className={`self-stretch sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(10,26,63,0.06)] border-b border-[#E1E8F3]"
          : "bg-white border-b border-[#E1E8F3]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-[60px]">
        <div className="flex justify-between items-center h-[80px]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img
              src={logoSrc}
              onError={() => setLogoSrc(FALLBACK_LOGO)}
              alt="Zograha Technologies"
              className="w-[150px] sm:w-[186px] h-[36px] sm:h-[42px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1.5 py-4 text-base font-medium link-underline transition-colors ${
                      isActive(item.path)
                        ? "text-[#1D5FA8] font-bold active"
                        : "text-[#0E1A33] hover:text-[#1D5FA8]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`text-[10px] text-[#0E1A33] transition-transform duration-250 ease-out ${
                        servicesDropdownOpen ? "rotate-180 text-[#1D5FA8]" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-60 bg-white py-2.5 rounded-2xl shadow-xl border border-[#E1E8F3] z-50 animate-scale-in">
                      {serviceSubmenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="flex items-center justify-between px-4 py-2 text-sm text-[#0E1A33] hover:bg-[#EEF4FB] hover:text-[#1D5FA8] transition-all group"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <span>{sub.label}</span>
                          <span className="text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#1D5FA8]">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`py-4 text-base font-medium link-underline transition-colors ${
                    isActive(item.path)
                      ? "text-[#1D5FA8] font-bold active"
                      : "text-[#0E1A33] hover:text-[#1D5FA8]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="flex items-center bg-[#1D5FA8] hover:bg-[#15467e] text-white py-[11px] px-5 rounded-[999px] text-[15px] font-bold transition-all btn-hover shadow-sm hover:shadow"
            >
              <span>Start a project</span>
              <span className="ml-2 font-bold text-sm btn-arrow">→</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/contact"
              className="bg-[#1D5FA8] text-white py-1.5 px-3 rounded-[999px] text-xs font-bold btn-hover"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#0A1A3F] hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#071222]/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="relative md:hidden bg-white border-t border-[#E1E8F3] px-4 py-5 shadow-2xl z-50 animate-slide-down">
          <div className="space-y-1">
            <Link
              to="/"
              className={`block px-4 py-2.5 rounded-xl text-base transition-colors ${
                isActive("/") ? "bg-[#EEF4FB] text-[#1D5FA8] font-bold" : "text-[#0E1A33] hover:bg-gray-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2.5 rounded-xl text-base transition-colors ${
                isActive("/about") ? "bg-[#EEF4FB] text-[#1D5FA8] font-bold" : "text-[#0E1A33] hover:bg-gray-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-4 py-2">
              <Link
                to="/services"
                className="font-bold text-base text-[#0E1A33] block py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <div className="pl-4 space-y-1.5 mt-2 border-l-2 border-[#1D5FA8]/40">
                {serviceSubmenu.slice(1).map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className="block py-1 text-sm text-[#3F4D6B] hover:text-[#1D5FA8] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/industries"
              className={`block px-4 py-2.5 rounded-xl text-base transition-colors ${
                isActive("/industries") ? "bg-[#EEF4FB] text-[#1D5FA8] font-bold" : "text-[#0E1A33] hover:bg-gray-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              to="/projects"
              className={`block px-4 py-2.5 rounded-xl text-base transition-colors ${
                isActive("/projects") ? "bg-[#EEF4FB] text-[#1D5FA8] font-bold" : "text-[#0E1A33] hover:bg-gray-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className={`block px-4 py-2.5 rounded-xl text-base transition-colors ${
                isActive("/blog") ? "bg-[#EEF4FB] text-[#1D5FA8] font-bold" : "text-[#0E1A33] hover:bg-gray-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className={`block px-4 py-2.5 rounded-xl text-base transition-colors ${
                isActive("/careers") ? "bg-[#EEF4FB] text-[#1D5FA8] font-bold" : "text-[#0E1A33] hover:bg-gray-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-2.5 rounded-xl text-base transition-colors ${
                isActive("/contact") ? "bg-[#EEF4FB] text-[#1D5FA8] font-bold" : "text-[#0E1A33] hover:bg-gray-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
          <div className="pt-4 px-2">
            <Link
              to="/contact"
              className="block text-center bg-[#1D5FA8] hover:bg-[#15467e] text-white py-3 px-5 rounded-full text-[15px] font-bold transition-all shadow-md btn-hover"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a project →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
