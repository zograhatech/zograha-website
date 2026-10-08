import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { api, ApiRequestError } from "../../lib/api";
import type { Job } from "../../types/api";

const STATIC_JOBS: Job[] = [
  {
    id: "job-1",
    slug: "jr-digital-marketing-executive",
    title: "Jr. Digital Marketing Executive",
    department: "Marketing",
    summary: "Run campaigns, SEO and social channels and report on what they produce.",
    description: "Execute data-driven digital marketing campaigns across Google Ads, Meta, and LinkedIn. Manage search engine optimization and generate insightful performance reports.",
    location: "Madurai, Tamil Nadu",
    type: "Full-Time",
    experience: "0-2 years",
    responsibilities: [
      "Manage multi-channel campaigns",
      "Keyword research & on-page SEO",
      "Weekly performance reporting",
    ],
    requirements: [
      "Degree in Marketing or related field",
      "Basic understanding of Google Analytics & Ads",
      "Good communication skills",
    ],
    order: 0,
    published: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "job-2",
    slug: "jr-full-stack-developer",
    title: "Jr. Full Stack Developer",
    department: "Engineering",
    summary: "Build web and back-end features alongside designers, marketers and clients.",
    description: "Join our core engineering team building web applications using React, Node.js, and TypeScript. Collaborate with UI designers to deliver robust, high-performance features.",
    location: "Madurai, Tamil Nadu",
    type: "Full-Time",
    experience: "1-3 years",
    responsibilities: [
      "Develop responsive React interfaces",
      "Implement secure REST APIs",
      "Write maintainable unit & integration tests",
    ],
    requirements: [
      "Hands-on experience with JavaScript/TypeScript",
      "Knowledge of relational databases (PostgreSQL/MySQL)",
      "Familiarity with Git",
    ],
    order: 1,
    published: true,
    createdAt: "",
    updatedAt: "",
  },
  {
    id: "job-3",
    slug: "tele-caller-executive",
    title: "Tele Caller Executive",
    department: "Outreach",
    summary: "Handle customer calls, generate leads and follow up with prospective clients.",
    description: "Engage with enterprise prospects and inbound leads. Understand their business technology requirements and connect them with our technical solutions consultants.",
    location: "Madurai, Tamil Nadu",
    type: "Full-Time",
    experience: "0-1 year",
    responsibilities: [
      "Make outreach calls to qualified leads",
      "Maintain CRM records",
      "Coordinate client consultation appointments",
    ],
    requirements: [
      "Fluent in Tamil and English",
      "Clear verbal communication",
      "Customer-first mindset",
    ],
    order: 2,
    published: true,
    createdAt: "",
    updatedAt: "",
  },
];

export default function Careers(props?: any) {
  const [jobs, setJobs] = useState<Job[]>(STATIC_JOBS);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [detailsModalJob, setDetailsModalJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    let active = true;
    api.jobs.list()
      .then((res) => {
        if (active && res.items && res.items.length > 0) {
          setJobs(res.items);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setResumeFile(null);
      setResumeError("");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setResumeError("Resume must be 5 MB or smaller.");
      setResumeFile(null);
      e.target.value = "";
      return;
    }

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowed.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      setResumeError("Please upload a PDF, DOC, or DOCX file.");
      setResumeFile(null);
      e.target.value = "";
      return;
    }

    setResumeError("");
    setResumeFile(file);
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormStatus("error");
      setFeedback("Please fill out all required fields (Name, Email, Phone).");
      return;
    }

    if (resumeError) {
      setFormStatus("error");
      setFeedback(resumeError);
      return;
    }

    setFormStatus("submitting");
    setFeedback("");

    const formData = new FormData();
    formData.set("name", name.trim());
    formData.set("email", email.trim());
    formData.set("phone", phone.trim());
    if (selectedJob) {
      formData.set("jobId", selectedJob.id);
      formData.set("jobTitle", selectedJob.title);
    }
    if (experience.trim()) formData.set("experience", experience.trim());
    if (currentCompany.trim()) formData.set("currentCompany", currentCompany.trim());
    if (linkedinUrl.trim()) formData.set("linkedinUrl", linkedinUrl.trim());
    if (coverLetter.trim()) formData.set("coverLetter", coverLetter.trim());
    if (resumeFile) formData.set("resume", resumeFile);
    if (website) formData.set("website", website);

    try {
      await api.apply(formData);
      setFormStatus("success");
      setFeedback("Your application has been received! Our recruitment team will review your profile and reach out.");
      setName("");
      setEmail("");
      setPhone("");
      setExperience("");
      setCurrentCompany("");
      setLinkedinUrl("");
      setCoverLetter("");
      setResumeFile(null);
    } catch (err) {
      setFormStatus("error");
      if (err instanceof ApiRequestError) {
        if (err.status === 429) {
          setFeedback("Too many applications submitted from your connection. Please wait before trying again.");
        } else if (err.status === 503) {
          setFeedback("Server file storage is not configured. Your general application details were received or please email your CV to hr@zograha.com.");
        } else if (err.fieldErrors) {
          const detailStr = Object.entries(err.fieldErrors)
            .map(([f, msgs]) => `${f}: ${msgs.join(", ")}`)
            .join("; ");
          setFeedback(`${err.message} (${detailStr})`);
        } else {
          setFeedback(err.message || "Failed to submit application. Please try again.");
        }
      } else {
        setFeedback("Network error. Please try again or email hr@zograha.com directly.");
      }
    }
  };

  const openApplyForJob = (job: Job) => {
    setSelectedJob(job);
    setFormStatus("idle");
    setFeedback("");
    setIsApplyModalOpen(true);
  };

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
        <section className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 mb-8 sm:mb-12 reveal-on-scroll">
          <div
            className="relative bg-[#0A1A3F] pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-14 lg:pb-16 px-4 sm:px-8 md:px-12 lg:px-16 rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-2xl text-center"
            style={{
              background: "linear-gradient(135deg, #061129 0%, #0A1A3F 45%, #132E6B 100%)",
            }}
          >
            {/* Ambient Radial Highlights */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#3FC3D3]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#1D5FA8]/25 rounded-full blur-3xl pointer-events-none" />

            {/* Concentric Decorative Rings on the Right */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/10 pointer-events-none hidden md:flex items-center justify-center">
              <div className="w-[400px] h-[400px] rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-[280px] h-[280px] rounded-full border border-[#3FC3D3]/15 flex items-center justify-center">
                  <div className="w-[160px] h-[160px] rounded-full border border-white/5" />
                </div>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="relative z-10 flex justify-center items-center mb-3 sm:mb-4">
              <span className="text-[#9FB6E0] text-xs sm:text-[13px] font-medium">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2 text-[#9FB6E0]/60">/</span>
                <span className="text-white">Careers</span>
              </span>
            </div>

            {/* Pill badge */}
            <div className="relative z-10 inline-flex items-center py-1 sm:py-1.5 px-3.5 sm:px-4 gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-4 sm:mb-6">
              <div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
              <span className="text-[#DCE8F6] text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                CAREERS
              </span>
            </div>

            {/* Main Headline */}
            <div className="relative z-10 max-w-4xl mx-auto mb-4 sm:mb-6">
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Build and grow things{" "}
                <span className="text-[#7FD6E2] font-newsreader italic font-normal block sm:inline">
                  with people who do both.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-[#C9D7F2] text-sm sm:text-lg md:text-[20px] leading-relaxed">
                Zograha’s developers, designers and marketers work on the same projects and with clients directly. That’s the job.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. OPEN POSITIONS SECTION */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 mb-16 sm:mb-24 reveal-on-scroll">
          {/* Header Row */}
          <div className="flex justify-between items-baseline pb-4">
            <h2 className="text-[#0A1A3F] text-2xl sm:text-3xl font-bold tracking-tight">
              Open positions
            </h2>
            <span className="text-[#5B6882] text-xs sm:text-sm font-medium">
              {jobs.length} roles · Madurai, Tamil Nadu
            </span>
          </div>

          {/* Section Divider Line */}
          <div className="w-full h-[1px] bg-[#D9E1EE] mb-1" />

          {/* Job Rows */}
          <div className="divide-y divide-[#E1E8F3]">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="py-6 sm:py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 group"
              >
                {/* Left: Job Title & Summary */}
                <div className="w-full md:w-[45%] lg:w-[48%]">
                  <h3 className="text-[#0A1A3F] text-lg sm:text-[20px] font-bold leading-snug">
                    {job.title}
                  </h3>
                  <p className="text-[#5B6882] text-xs sm:text-sm leading-relaxed mt-1">
                    {job.summary}
                  </p>
                </div>

                {/* Middle: Badges */}
                <div className="flex flex-wrap items-center gap-2 w-full md:w-[32%] lg:w-[30%] md:justify-center">
                  {job.department && (
                    <span className="bg-[#EEF4FB] text-[#13295C] text-xs font-semibold py-1 px-3 rounded-full">
                      {job.department}
                    </span>
                  )}
                  <span className="bg-[#EEF4FB] text-[#13295C] text-xs font-semibold py-1 px-3 rounded-full">
                    {job.location || "Madurai, Tamil Nadu"}
                  </span>
                  <span className="bg-[#EEF4FB] text-[#13295C] text-xs font-semibold py-1 px-3 rounded-full">
                    {job.type || "Full-Time"}
                  </span>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 md:justify-end">
                  <button
                    type="button"
                    onClick={() => setDetailsModalJob(job)}
                    className="border border-[#13295C] hover:bg-[#EEF4FB] text-[#13295C] text-xs sm:text-sm font-bold py-2 px-5 sm:px-6 rounded-full transition-all cursor-pointer btn-hover"
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    onClick={() => openApplyForJob(job)}
                    className="bg-[#1D5FA8] hover:bg-[#15467e] text-white text-xs sm:text-sm font-bold py-2 px-5 sm:px-6 rounded-full transition-all shadow-sm cursor-pointer btn-hover"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. FINAL CTA BANNER */}
        {/* ============================================================ */}
        <section className="w-full max-w-[1240px] mx-auto px-3 sm:px-6 md:px-8 lg:px-12 mb-16 sm:mb-24 reveal-on-scroll">
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
                  <div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
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

      <Footer />

      {/* ============================================================ */}
      {/* 4. MODALS (DETAILS & APPLY) */}
      {/* ============================================================ */}

      {/* Job Details Modal */}
      {detailsModalJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-[#E1E8F3] shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-[#0A1A3F] text-2xl font-bold">{detailsModalJob.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-[#EEF4FB] text-[#13295C] text-xs font-semibold py-1 px-3 rounded-full">
                    {detailsModalJob.department}
                  </span>
                  <span className="bg-[#EEF4FB] text-[#13295C] text-xs font-semibold py-1 px-3 rounded-full">
                    {detailsModalJob.location || "Madurai, Tamil Nadu"}
                  </span>
                  <span className="bg-[#EEF4FB] text-[#13295C] text-xs font-semibold py-1 px-3 rounded-full">
                    {detailsModalJob.type || "Full-Time"}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDetailsModalJob(null)}
                className="text-gray-400 hover:text-gray-700 text-2xl font-bold leading-none p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="my-6 space-y-4 text-[#3F4D6B] text-sm sm:text-base leading-relaxed">
              <div>
                <h4 className="text-[#0A1A3F] font-bold text-base mb-1">About the Role</h4>
                <p>{detailsModalJob.description || detailsModalJob.summary}</p>
              </div>

              {detailsModalJob.responsibilities && detailsModalJob.responsibilities.length > 0 && (
                <div>
                  <h4 className="text-[#0A1A3F] font-bold text-base mb-2">Key Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {detailsModalJob.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              {detailsModalJob.requirements && detailsModalJob.requirements.length > 0 && (
                <div>
                  <h4 className="text-[#0A1A3F] font-bold text-base mb-2">Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {detailsModalJob.requirements.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setDetailsModalJob(null)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const jobToApply = detailsModalJob;
                  setDetailsModalJob(null);
                  openApplyForJob(jobToApply);
                }}
                className="bg-[#1D5FA8] hover:bg-[#15467e] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-sm cursor-pointer"
              >
                Apply for this role
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Apply Application Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-[#E1E8F3] shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[#1D5FA8] text-xs font-bold uppercase tracking-wider block mb-1">
                  Careers Application
                </span>
                <h3 className="text-[#0A1A3F] text-2xl font-bold">
                  {selectedJob ? `Apply for ${selectedJob.title}` : "Submit an Application"}
                </h3>
                {selectedJob && (
                  <p className="text-xs text-[#5B6882] mt-1">
                    {selectedJob.department} · {selectedJob.location || "Madurai, Tamil Nadu"} · {selectedJob.type || "Full-Time"}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsApplyModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 text-2xl font-bold leading-none p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {formStatus === "success" ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-3xl font-bold mx-auto">
                  ✓
                </div>
                <h4 className="text-[#0A1A3F] text-xl font-bold">Application Received!</h4>
                <p className="text-[#3F4D6B] text-sm max-w-md mx-auto leading-relaxed">
                  {feedback}
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsApplyModalOpen(false);
                      setFormStatus("idle");
                    }}
                    className="bg-[#1D5FA8] hover:bg-[#15467e] text-white font-bold py-2.5 px-6 rounded-full text-sm"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                {formStatus === "error" && (
                  <div className="p-4 rounded-2xl bg-[#FDEBD0] border border-[#F5B7B1] text-[#922B21]">
                    <p className="font-semibold text-sm">{feedback}</p>
                  </div>
                )}

                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0A1A3F] text-sm font-bold mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-[#0A1A3F] bg-[#F7F9FC] text-sm py-2.5 px-4 rounded-xl border border-[#D2DBEB] focus:outline-none focus:border-[#1D5FA8]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A1A3F] text-sm font-bold mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="anand@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-[#0A1A3F] bg-[#F7F9FC] text-sm py-2.5 px-4 rounded-xl border border-[#D2DBEB] focus:outline-none focus:border-[#1D5FA8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0A1A3F] text-sm font-bold mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-[#0A1A3F] bg-[#F7F9FC] text-sm py-2.5 px-4 rounded-xl border border-[#D2DBEB] focus:outline-none focus:border-[#1D5FA8]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A1A3F] text-sm font-bold mb-1">
                      Years of Experience <span className="text-[#5B6882] text-xs font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2 years / Fresher"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full text-[#0A1A3F] bg-[#F7F9FC] text-sm py-2.5 px-4 rounded-xl border border-[#D2DBEB] focus:outline-none focus:border-[#1D5FA8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0A1A3F] text-sm font-bold mb-1">
                      Current Company <span className="text-[#5B6882] text-xs font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Current Employer / College"
                      value={currentCompany}
                      onChange={(e) => setCurrentCompany(e.target.value)}
                      className="w-full text-[#0A1A3F] bg-[#F7F9FC] text-sm py-2.5 px-4 rounded-xl border border-[#D2DBEB] focus:outline-none focus:border-[#1D5FA8]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0A1A3F] text-sm font-bold mb-1">
                      LinkedIn URL <span className="text-[#5B6882] text-xs font-normal">(optional)</span>
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      className="w-full text-[#0A1A3F] bg-[#F7F9FC] text-sm py-2.5 px-4 rounded-xl border border-[#D2DBEB] focus:outline-none focus:border-[#1D5FA8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#0A1A3F] text-sm font-bold mb-1">
                    Upload Resume / CV <span className="text-[#5B6882] text-xs font-normal">(PDF, DOC, DOCX up to 5MB)</span>
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="w-full text-[#0A1A3F] bg-[#F7F9FC] text-xs py-2 px-3 rounded-xl border border-[#D2DBEB] file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#1D5FA8] file:text-white hover:file:bg-[#15467e]"
                  />
                  {resumeError && <p className="text-red-500 text-xs mt-1">{resumeError}</p>}
                </div>

                <div>
                  <label className="block text-[#0A1A3F] text-sm font-bold mb-1">
                    Cover Letter / Notes <span className="text-[#5B6882] text-xs font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly tell us why you are interested in this role..."
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    className="w-full text-[#0A1A3F] bg-[#F7F9FC] text-sm p-3 rounded-xl border border-[#D2DBEB] focus:outline-none focus:border-[#1D5FA8]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="bg-[#1D5FA8] hover:bg-[#15467e] disabled:opacity-60 text-white text-sm font-bold py-2.5 px-6 rounded-full transition-colors shadow-sm cursor-pointer"
                  >
                    {formStatus === "submitting" ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}