import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ServiceAppDevelopment from "../ServiceAppDevelopment";
import ServiceWebdesignDeveop from "../ServiceWebdesignDeveop";
import ServiceDigitalmarketing from "../ServiceDigitalmarketing";
import ServicePublication from "../ServicePublication";
import ServiceDatamanagement from "../ServiceDatamanagement";
import ServiceCustomerSupport from "../ServiceCustomerSupport";

import _404 from "../_404";

import { api, ApiRequestError } from "../../lib/api";
import type { Service } from "../../types/api";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const normalizedSlug = slug?.toLowerCase().trim();

  /*
   * ============================================================
   * CUSTOM FIGMA SERVICE PAGES
   * ============================================================
   */

  const customServiceComponent = (() => {
    switch (normalizedSlug) {
      case "app-development":
      case "mobile-app-development":
        return <ServiceAppDevelopment />;

      case "web-design":
      case "web-development":
        return <ServiceWebdesignDeveop />;

      case "digital-marketing":
        return <ServiceDigitalmarketing />;

      case "publications":
      case "seo-content":
        return <ServicePublication />;

      case "data-management":
      case "business-software":
        return <ServiceDatamanagement />;

      case "customer-support":
      case "24x7-customer-support":
      case "customer-care":
        return <ServiceCustomerSupport />;

      default:
        return null;
    }
  })();

  /*
   * ============================================================
   * API FALLBACK
   * ============================================================
   */

  useEffect(() => {
    if (!normalizedSlug) {
      setLoading(false);
      setNotFound(true);
      return;
    }

    /*
     * Custom Figma pages don't need API fetching.
     */
    if (
      [
        "app-development",
        "mobile-app-development",
        "web-design",
        "web-development",
        "digital-marketing",
        "publications",
        "seo-content",
        "data-management",
        "business-software",
        "customer-support",
        "24x7-customer-support",
        "customer-care",
      ].includes(normalizedSlug)
    ) {
      setLoading(false);
      return;
    }

    let active = true;

    setLoading(true);
    setNotFound(false);

    api.services
      .get(normalizedSlug)
      .then((data) => {
        if (!active) return;

        setService(data);
      })
      .catch((error) => {
        if (!active) return;

        if (error instanceof ApiRequestError && error.status === 404) {
          setNotFound(true);
        } else {
          setNotFound(true);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [normalizedSlug]);

  /*
   * ============================================================
   * CUSTOM FIGMA SERVICE
   * ============================================================
   */

  if (customServiceComponent) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1">{customServiceComponent}</main>

        <Footer />
      </div>
    );
  }

  /*
   * ============================================================
   * LOADING
   * ============================================================
   */

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <main className="flex-1 flex items-center justify-center bg-[#F7F9FC]">
          <div className="w-9 h-9 rounded-full border-[3px] border-[#DDE7F4] border-t-[#1D5FA8] animate-spin" />
        </main>

        <Footer />
      </div>
    );
  }

  /*
   * ============================================================
   * NOT FOUND
   * ============================================================
   */

  if (notFound || !service) {
    return <_404 />;
  }

  /*
   * ============================================================
   * GENERIC API SERVICE FALLBACK
   * ============================================================
   */

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main
        className="flex-1 py-3 sm:py-5"
        style={{
          background: "linear-gradient(180deg, #E7EFF9 0%, #F8FAFD 100%)",
        }}
      >
        {/* HERO */}

        <section className="px-2 sm:px-5 lg:px-6">
          <div
            className="
              relative
              overflow-hidden
              max-w-[1420px]
              mx-auto
              rounded-[22px]
              sm:rounded-[32px]
              bg-[#0A1A3F]
              text-center
              px-5
              sm:px-12
              py-10
              sm:py-16
            "
            style={{
              background:
                "linear-gradient(135deg,#07142F 0%,#0A1A3F 50%,#245FA5 100%)",
            }}
          >
            <div className="relative z-10">
              <div className="text-[#9FB6E0] text-[9px] sm:text-xs mb-4">
                <Link to="/">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/services">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{service.title}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3FC3D3]" />

                <span className="text-[#DCE8F6] text-[9px] sm:text-xs uppercase tracking-wider">
                  Service details
                </span>
              </div>

              <h1
                className="
                  text-white
                  font-bold
                  text-[32px]
                  sm:text-5xl
                  lg:text-6xl
                  leading-tight
                  max-w-4xl
                  mx-auto
                "
              >
                {service.title}
              </h1>

              {service.shortDescription && (
                <p
                  className="
                    max-w-[650px]
                    mx-auto
                    mt-4
                    text-[#C9D7F2]
                    text-sm
                    sm:text-base
                    lg:text-lg
                    leading-relaxed
                  "
                >
                  {service.shortDescription}
                </p>
              )}

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  mt-6
                  px-5
                  py-2.5
                  rounded-full
                  bg-[#3FC3D3]
                  text-[#07142F]
                  font-bold
                  text-sm
                "
              >
                Enquire about {service.title}
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CONTENT */}

        <section className="max-w-[1100px] mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
          <div className="bg-white border border-[#E1E8F3] rounded-[24px] sm:rounded-[30px] shadow-[0_10px_35px_rgba(20,40,75,0.08)] p-5 sm:p-10">
            <h2 className="text-[#0A1A3F] font-bold text-xl sm:text-3xl mb-4">
              Overview
            </h2>

            <div className="text-[#52627C] text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {service.description}
            </div>

            {service.features && service.features.length > 0 && (
              <div className="mt-8 pt-7 border-t border-[#EDF1F6]">
                <h3 className="text-[#0A1A3F] font-bold text-lg sm:text-2xl mb-4">
                  Key Capabilities
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            bg-[#F7F9FC]
                            border
                            border-[#E4EAF2]
                            px-4
                            py-3
                          "
                    >
                      <span className="w-5 h-5 rounded-full bg-[#DCEAF7] text-[#1D5FA8] flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>

                      <span className="text-[#3F4D6B] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
