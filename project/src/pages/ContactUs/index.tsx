import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import { api, ApiRequestError } from "../../lib/api";
import type { CompanySettings, Service } from "../../types/api";

export default function ContactUs(props?: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [servicesList, setServicesList] = useState<string[]>([]);
  const [settings, setSettings] = useState<CompanySettings | null>(null);

  useEffect(() => {
    let active = true;
    api.services.list()
      .then((res) => {
        if (active && res.items) {
          setServicesList(res.items.map((s) => s.title));
        }
      })
      .catch(() => {});

    api.settings()
      .then((data) => {
        if (active) setSettings(data);
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setFeedback("Please fill out your name, email, and message.");
      return;
    }

    if (message.trim().length < 10) {
      setStatus("error");
      setFeedback("Please write at least 10 characters in your message.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      await api.sendContact({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        service: service || undefined,
        message: message.trim(),
        website: website || undefined,
      });

      setStatus("success");
      setFeedback("Thank you! Your message has been sent successfully. We'll be in touch soon.");
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      if (err instanceof ApiRequestError) {
        if (err.status === 429) {
          setFeedback("Too many enquiries sent from your connection. Please wait a moment and try again.");
        } else if (err.fieldErrors) {
          const detailStr = Object.entries(err.fieldErrors)
            .map(([f, msgs]) => `${f}: ${msgs.join(", ")}`)
            .join("; ");
          setFeedback(`${err.message} (${detailStr})`);
        } else {
          setFeedback(err.message || "Failed to send message. Please try again.");
        }
      } else {
        setFeedback("Network error. Please verify your connection and try again.");
      }
    }
  };

  const companyPhone = settings?.phone || "+91 93842 83323";
  const companyEmail = settings?.email || "info@zograha.com";
  const companyAddress = settings?.address || "Shanmuga Towers, 3rd Floor, 38 Krishnarayar Thepakulam Street, Simmakkal, Madurai – 625001, Tamil Nadu, India";
  const mapsUrl = settings?.googleMapsEmbedUrl || "https://maps.google.com/?q=Shanmuga+Towers+Simmakkal+Madurai";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 self-stretch overflow-hidden bg-[#F7F9FC]">
        {/* Hero Banner Section */}
        <section className="px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 mb-8 lg:mb-12">
          <div
            className="relative max-w-[1360px] mx-auto pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 px-5 sm:px-10 lg:px-16 rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden shadow-2xl reveal-on-scroll"
            style={{
              background: "linear-gradient(135deg, #071530 0%, #0D2254 45%, #183F7D 80%, #1A4B96 100%)",
            }}
          >
            {/* Ambient Lighting */}
            <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-[#3FC3D3]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1D5FA8]/25 rounded-full blur-3xl pointer-events-none" />

            {/* Concentric Decorative Rings on the Right */}
            <div className="absolute -right-28 top-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-white/10 pointer-events-none hidden md:flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-[300px] h-[300px] rounded-full border border-[#3FC3D3]/20 flex items-center justify-center">
                  <div className="w-[180px] h-[180px] rounded-full border border-white/10" />
                </div>
              </div>
            </div>

            <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center text-center">
              <span className="text-[#9FB6E0] text-xs sm:text-[13px] tracking-wide mb-4 inline-block font-normal">
                <Link to="/" className="hover:text-white transition-colors">Home</Link> / Contact
              </span>

              <div className="inline-flex items-center py-1.5 px-4 gap-2 rounded-full border border-white/20 bg-white/5 mb-6 backdrop-blur-sm">
                <div className="bg-[#3FC3D3] w-[7px] h-[7px] rounded-full animate-dot-pulse"></div>
                <span className="text-[#DCE8F6] text-xs font-mono font-medium tracking-wider uppercase">Contact us</span>
              </div>

              <h1 className="text-white text-4xl sm:text-6xl lg:text-[68px] font-bold leading-[1.08] tracking-tight mb-2">
                Tell us what
              </h1>
              <h2 className="text-[#7FD6E2] text-4xl sm:text-6xl lg:text-[68px] font-newsreader italic font-normal leading-[1.08] tracking-tight mb-6">
                you’re trying to do.
              </h2>

              <p className="text-[#C9D7F2] text-base sm:text-lg lg:text-[19px] max-w-[560px] leading-relaxed mx-auto font-normal">
                A few details are enough to start. We’ll reply with next steps.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-14 lg:my-16 reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#3FC3D3] animate-dot-pulse"></span>
                <span className="text-[#13295C] text-xs font-mono font-bold uppercase tracking-wider">Contact</span>
              </div>

              <h2 className="text-[#0A1A3F] text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.12] tracking-tight">
                A short message
              </h2>
              <h3 className="text-[#1D5FA8] text-3xl sm:text-4xl lg:text-[42px] font-newsreader italic font-normal leading-[1.12] tracking-tight mb-4">
                is enough.
              </h3>

              <p className="text-[#5B6882] text-sm sm:text-base leading-relaxed mb-8 max-w-[480px]">
                Tell us what you need and we’ll reply with practical next steps. Reach us directly any time.
              </p>

              {/* Row 1: Email and Phone 2-Col Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E1E8F3] card-hover flex items-center gap-3.5 shadow-[0_4px_16px_rgba(10,26,63,0.04)] group">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#1D5FA8] flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[#8492A6] text-[10px] font-bold tracking-wider uppercase block mb-0.5">EMAIL</span>
                    <a
                      href={`mailto:${companyEmail}`}
                      className="text-[#0A1A3F] text-xs sm:text-[13px] font-bold hover:text-[#1D5FA8] transition-colors truncate block"
                    >
                      {companyEmail}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E1E8F3] card-hover flex items-center gap-3.5 shadow-[0_4px_16px_rgba(10,26,63,0.04)] group">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#1D5FA8] flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[#8492A6] text-[10px] font-bold tracking-wider uppercase block mb-0.5">PHONE</span>
                    <a
                      href={`tel:${companyPhone.replace(/\s+/g, "")}`}
                      className="text-[#0A1A3F] text-xs sm:text-[13px] font-bold hover:text-[#1D5FA8] transition-colors truncate block"
                    >
                      {companyPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Row 2: Head Office Card */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E1E8F3] card-hover flex items-start gap-3.5 mb-3.5 shadow-[0_4px_16px_rgba(10,26,63,0.04)] group">
                <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#1D5FA8] flex items-center justify-center text-lg shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[#8492A6] text-[10px] font-bold tracking-wider uppercase block mb-0.5">OFFICE</span>
                  <p className="text-[#0A1A3F] text-xs sm:text-[13px] font-bold leading-snug">
                    {companyAddress}
                  </p>
                </div>
              </div>

              {/* Row 3: Working Hours Card */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E1E8F3] card-hover flex items-center gap-3.5 shadow-[0_4px_16px_rgba(10,26,63,0.04)] group">
                <div className="w-10 h-10 rounded-xl bg-[#EEF4FB] text-[#1D5FA8] flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                  <FiClock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[#8492A6] text-[10px] font-bold tracking-wider uppercase block mb-0.5">HOURS</span>
                  <span className="text-[#0A1A3F] text-xs sm:text-[13px] font-bold">
                    Mon – Sat, 9:00 AM – 6:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-[28px] sm:rounded-[32px] border border-[#E1E8F3] shadow-[0_12px_36px_rgba(10,26,63,0.06)]">
              <h3 className="text-[#0A1A3F] text-xl sm:text-2xl font-bold mb-6">Send us a message</h3>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-[#E8F8F5] border border-[#A2E2D6] text-[#0E6251]">
                  <p className="font-semibold text-sm sm:text-base">{feedback}</p>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-2xl bg-[#FDEBD0] border border-[#F5B7B1] text-[#922B21]">
                  <p className="font-semibold text-sm">{feedback}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot for spam bots */}
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label className="block text-[#0A1A3F] text-xs sm:text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-[#0A1A3F] bg-[#F7F9FC] text-sm sm:text-base py-3 px-4 rounded-xl border border-[#E1E8F3] focus:outline-none focus:border-[#1D5FA8] focus:ring-2 focus:ring-[#3FC3D3]/30 transition-all placeholder:text-[#94A3B8]"
                  />
                </div>

                <div>
                  <label className="block text-[#0A1A3F] text-xs sm:text-sm font-semibold mb-2">
                    Work email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-[#0A1A3F] bg-[#F7F9FC] text-sm sm:text-base py-3 px-4 rounded-xl border border-[#E1E8F3] focus:outline-none focus:border-[#1D5FA8] focus:ring-2 focus:ring-[#3FC3D3]/30 transition-all placeholder:text-[#94A3B8]"
                  />
                </div>

                <div>
                  <label className="block text-[#0A1A3F] text-xs sm:text-sm font-semibold mb-2">
                    What do you need?
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="A sentence or two is plenty"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-[#0A1A3F] bg-[#F7F9FC] text-sm sm:text-base p-4 rounded-xl border border-[#E1E8F3] focus:outline-none focus:border-[#1D5FA8] focus:ring-2 focus:ring-[#3FC3D3]/30 transition-all placeholder:text-[#94A3B8] resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-between bg-[#1D5FA8] hover:bg-[#15467e] disabled:opacity-60 text-white py-2.5 pl-6 pr-2.5 rounded-full font-bold text-sm shadow-md transition-all group btn-hover cursor-pointer"
                  >
                    <span className="mr-3">
                      {status === "submitting" ? "Sending..." : "Get a Enquiry"}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#0A1A3F] text-white flex items-center justify-center font-bold text-sm group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Visit Headquarters Map Section */}
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 my-14 sm:my-20 reveal-on-scroll">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center py-1 px-3.5 rounded-full border border-[#3FC3D3] bg-white text-[#13295C] text-xs font-bold mb-3 shadow-sm">
              Find us
            </div>
            <h2 className="text-[#0A1A3F] text-3xl sm:text-5xl font-bold leading-tight">
              Visit our
            </h2>
            <h3 className="text-[#1D5FA8] text-3xl sm:text-5xl font-newsreader italic font-normal leading-tight mb-3">
              head office.
            </h3>
            <p className="text-[#5B6882] text-sm sm:text-base max-w-[500px] mx-auto leading-relaxed">
              We welcome clients and partners to our modern tech facility in Madurai.
            </p>
          </div>

          <div className="bg-white rounded-[28px] sm:rounded-[32px] border border-[#E1E8F3] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_16px_40px_rgba(10,26,63,0.06)]">
            {/* Map View */}
            <div className="lg:col-span-7 xl:col-span-8 h-[320px] sm:h-[380px] lg:h-[430px] bg-[#EEF4FB] relative overflow-hidden">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#0A1A3F] font-bold text-xs py-2 px-3.5 rounded-full shadow-md border border-black/5 hover:bg-white hover:shadow-lg transition-all"
              >
                <span>Open in Maps</span>
                <span className="text-xs">↗</span>
              </a>

              <iframe
                title="Office Location"
                src={settings?.googleMapsEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.5450412865093!2d78.11530049999999!3d9.924779200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c588bddafc47%3A0x876946a574262ecd!2sSHANMUGA%20TOWER!5e1!3m2!1sen!2sin!4v1791348214151!5m2!1sen!2sin"}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Dark Navy Information Panel */}
            <div className="lg:col-span-5 xl:col-span-4 bg-[#0A1A3F] text-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-5 shrink-0">
                  <FiMapPin className="w-5 h-5 text-[#7FD6E2]" />
                </div>
                <span className="text-[#7FD6E2] text-xs font-mono font-medium tracking-wider uppercase block mb-3">
                  Madurai Headquarters
                </span>
                <p className="text-white text-base sm:text-lg font-medium leading-relaxed mb-8">
                  {companyAddress}
                </p>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-[#0A1A3F] font-bold text-sm sm:text-base py-3 px-6 rounded-full shadow-md transition-all group w-full sm:w-auto self-start"
              >
                <span>Get directions</span>
                <span className="ml-2 font-bold text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}