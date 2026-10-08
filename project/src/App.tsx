import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Carerrs = lazy(() => import("./pages/Carerrs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsCondition = lazy(() => import("./pages/TermsCondition"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const Projects = lazy(() => import("./pages/Projects"));
const Industries = lazy(() => import("./pages/Industries"));
const _404 = lazy(() => import("./pages/_404"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050D21]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-[#3FC3D3] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#C9D7F2] text-xs font-mono uppercase tracking-widest">Loading</p>
      </div>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-enter">
      <Suspense fallback={<LoadingFallback />}>
        <Routes location={location}>
          {/* Primary official routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/careers" element={<Carerrs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />
          <Route path="/404" element={<_404 />} />

          {/* Case-insensitive and alias redirects */}
          <Route path="/About" element={<Navigate to="/about" replace />} />
          <Route path="/AboutUs" element={<Navigate to="/about" replace />} />
          <Route path="/Services" element={<Navigate to="/services" replace />} />
          <Route path="/Industries" element={<Navigate to="/industries" replace />} />
          <Route path="/Projects" element={<Navigate to="/projects" replace />} />
          <Route path="/Blog" element={<Navigate to="/blog" replace />} />
          <Route path="/Careers" element={<Navigate to="/careers" replace />} />
          <Route path="/Carerrs" element={<Navigate to="/careers" replace />} />
          <Route path="/Contact" element={<Navigate to="/contact" replace />} />
          <Route path="/ContactUs" element={<Navigate to="/contact" replace />} />
          <Route path="/PrivacyPolicy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/TermsCondition" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="/_404" element={<Navigate to="/404" replace />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<_404 />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}