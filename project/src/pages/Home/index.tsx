import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { api } from "../../lib/api";
import { ALL_INDUSTRIES } from "../Industries";

export default function Home(props?: any) {
	const navigate = useNavigate();
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [homeMessage, setHomeMessage] = useState('');
	const [contactSent, setContactSent] = useState(false);
	const [industryIdx, setIndustryIdx] = useState(0);

	const handleHomeEnquiry = async () => {
		if (!input1.trim() || !input2.trim()) {
			navigate('/contact');
			return;
		}
		try {
			await api.sendContact({
				name: input1.trim(),
				email: input2.trim(),
				message: homeMessage.trim() || "Enquiry from website home page.",
			});
			setContactSent(true);
			onChangeInput1('');
			onChangeInput2('');
			setHomeMessage('');
		} catch {
			navigate('/contact');
		}
	};

	return (
		<div className="flex flex-col bg-white overflow-x-hidden min-h-screen">
			<Navbar />

			{/* ============================================================ */}
			{/* MAIN BODY BACKGROUND WRAPPER */}
			{/* ============================================================ */}
			<div 
				className="w-full overflow-hidden" 
				style={{ background: "linear-gradient(180deg, #E3ECF9 0%, #F7F9FC 100%)" }}
			>
				{/* ============================================================ */}
				{/* 1. HERO SECTION */}
				{/* ============================================================ */}
				<section className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 mb-10 sm:mb-14 reveal-on-scroll">
					<div 
						className="relative bg-[#0A1A3F] pt-8 sm:pt-12 lg:pt-[64px] pb-8 sm:pb-12 px-4 sm:px-8 md:px-12 lg:px-16 rounded-[24px] sm:rounded-[36px] overflow-hidden"
						style={{
							backgroundImage: "linear-gradient(90deg, #0A1A3F 0%, rgba(10, 26, 63, 0.94) 40%, rgba(10, 26, 63, 0.65) 100%), radial-gradient(ellipse 650px 450px at 100% 0%, rgba(42, 107, 184, 0.65), transparent), url('/figma/home-hero.png')",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundColor: "#0A1A3F",
						}}
					>
						{/* Top bar inside hero: Slide indicator & navigation arrows */}
						<div className="flex justify-between items-center w-full mb-8 sm:mb-12">
							<div className="flex items-center bg-[#0A1A3F80] py-2 px-4 sm:px-5 gap-3 sm:gap-6 rounded-full border border-solid border-white/20 backdrop-blur-sm">
								<span className="text-[#7FD6E2] text-xs sm:text-[13px] font-mono font-semibold">
									01 / 04
								</span>
								<span className="text-white text-xs sm:text-sm font-bold">
									Enterprise Solutions
								</span>
							</div>
							<div className="flex items-center gap-2">
								<button 
									type="button"
									className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 transition-colors"
									aria-label="Previous slide"
								>
									<span className="text-base sm:text-lg font-bold">←</span>
								</button>
								<button 
									type="button"
									className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 transition-colors"
									aria-label="Next slide"
								>
									<span className="text-base sm:text-lg font-bold">→</span>
								</button>
							</div>
						</div>

						{/* Hero Body: Left Copy & Right Cards */}
						<div className="flex flex-col lg:flex-row items-start justify-between w-full gap-8 lg:gap-12">
							{/* Left Column: Heading, Subtitle, CTAs & Features */}
							<div className="flex-1 w-full lg:max-w-[760px]">
								{/* Eyebrow badge */}
								<div className="inline-flex items-center bg-[#3FC3D31A] py-1.5 px-4 gap-2 rounded-full border border-[#7FD6E270] mb-5 sm:mb-6">
									<div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
									<span className="text-[#7FD6E2] text-xs font-semibold tracking-wide uppercase">
										Enterprise Software &amp; AI
									</span>
								</div>

								{/* Main Heading */}
								<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.08] tracking-tight">
									Dependable technology delivery{" "}
									<span className="text-[#7FD6E2] font-newsreader italic font-normal block sm:inline">
										for ambitious teams.
									</span>
								</h1>

								{/* Description */}
								<p className="text-[#DCE8F6] text-base sm:text-lg lg:text-[20px] max-w-[620px] leading-relaxed mt-5 sm:mt-6">
									We combine practical engineering, thoughtful UX design, and scalable cloud architecture to turn your vision into mission-critical digital products.
								</p>

								{/* CTAs */}
								<div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7 sm:mt-8">
									<Link 
										to="/services" 
										className="flex items-center bg-white hover:bg-slate-100 text-[#0A1A3F] font-bold py-2 sm:py-2.5 pl-6 pr-2 rounded-full shadow-lg transition-all group"
									>
										<span className="text-sm sm:text-base mr-3 font-bold">
											Explore our solutions
										</span>
										<span className="flex items-center justify-center bg-[#1D5FA8] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full group-hover:translate-x-0.5 transition-transform font-bold text-base">
											→
										</span>
									</Link>
									<Link 
										to="/contact" 
										className="flex items-center bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 gap-2.5 rounded-full border border-white/30 transition-all text-sm sm:text-base"
									>
										<img
											src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/l74bq092_expires_30_days.png" 
											className="w-[18px] h-[18px] rounded-full object-contain"
											alt="chat"
										/>
										<span>Talk to an expert</span>
									</Link>
								</div>

								{/* Feature Checkpoints */}
								<div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-7 sm:mt-8">
									<div className="flex items-center gap-2">
										<div className="bg-[#3FC3D3] w-1.5 h-1.5 rounded-full" />
										<span className="text-[#C9D7F2] text-xs sm:text-sm font-medium">
											Custom Web Apps
										</span>
									</div>
									<div className="flex items-center gap-2">
										<div className="bg-[#3FC3D3] w-1.5 h-1.5 rounded-full" />
										<span className="text-[#C9D7F2] text-xs sm:text-sm font-medium">
											Enterprise AI
										</span>
									</div>
									<div className="flex items-center gap-2">
										<div className="bg-[#3FC3D3] w-1.5 h-1.5 rounded-full" />
										<span className="text-[#C9D7F2] text-xs sm:text-sm font-medium">
											Product Architecture
										</span>
									</div>
								</div>
							</div>

							{/* Right Column: Hero Floating Cards */}
							<div className="w-full lg:w-[340px] xl:w-[370px] lg:mt-8 xl:mt-16 flex flex-col gap-4">
								{/* 99.9% Reliability Card */}
								<div 
									className="flex items-center bg-[#0F2250] p-5 sm:p-6 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-sm"
								>
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/7scdvdab_expires_30_days.png" 
										className="w-12 h-12 rounded-2xl object-contain mr-4 shrink-0 bg-[#1A336F] p-2"
										alt="server"
									/>
									<div>
										<div className="text-white text-2xl sm:text-[28px] font-bold leading-none">
											99.9%
										</div>
										<div className="text-[#C9D7F2] text-xs sm:text-sm mt-1.5">
											System reliability
										</div>
									</div>
								</div>

								{/* Have a project Consultation Card */}
								<div 
									className="bg-white p-5 sm:p-6 rounded-3xl shadow-2xl"
								>
									<div className="flex justify-between items-center mb-2.5">
										<span className="text-[#1D5FA8] text-xs font-bold uppercase tracking-wider">
											Have a project?
										</span>
										<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
									</div>
									<p className="text-[#0A1A3F] text-base sm:text-[18px] font-bold leading-snug">
										Build your next high-impact software system.
									</p>
									<Link 
										to="/contact" 
										className="inline-block text-[#1D5FA8] hover:text-[#0A1A3F] text-sm sm:text-[15px] font-bold mt-3 transition-colors"
									>
										Book free consultation →
									</Link>
								</div>
							</div>
						</div>

						{/* Hero Bottom: 4 Horizontal Category Cards */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch w-full pt-10 sm:pt-12 gap-3">
							<div className="bg-[#3FC3D324] p-5 rounded-[20px] border border-[#7FD6E2] flex flex-col justify-between">
								<div className="flex justify-between items-center mb-3">
									<span className="text-[#7FD6E2] text-xs font-mono font-bold">01</span>
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/9oux826y_expires_30_days.png" 
										className="w-5 h-5 object-contain"
										alt=""
									/>
								</div>
								<div>
									<h4 className="text-white text-base sm:text-[17px] font-bold">
										Enterprise Solutions
									</h4>
									<p className="text-[#B7C6E6] text-xs sm:text-[13px] mt-1">
										Enterprise Software &amp; AI
									</p>
								</div>
							</div>

							<div className="bg-[#0A1A3F8C] p-5 rounded-[20px] border border-white/15 flex flex-col justify-between">
								<div className="flex justify-between items-center mb-3">
									<span className="text-[#7FD6E2] text-xs font-mono font-bold">02</span>
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/4ffwq0m7_expires_30_days.png" 
										className="w-5 h-5 object-contain"
										alt=""
									/>
								</div>
								<div>
									<h4 className="text-white text-base sm:text-[17px] font-bold">
										Data &amp; Intelligence
									</h4>
									<p className="text-[#B7C6E6] text-xs sm:text-[13px] mt-1">
										Data &amp; AI Systems
									</p>
								</div>
							</div>

							<div className="bg-[#0A1A3F8C] p-5 rounded-[20px] border border-white/15 flex flex-col justify-between">
								<div className="flex justify-between items-center mb-3">
									<span className="text-[#7FD6E2] text-xs font-mono font-bold">03</span>
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/rsfh7wy0_expires_30_days.png" 
										className="w-5 h-5 object-contain"
										alt=""
									/>
								</div>
								<div>
									<h4 className="text-white text-base sm:text-[17px] font-bold">
										Web &amp; Platforms
									</h4>
									<p className="text-[#B7C6E6] text-xs sm:text-[13px] mt-1">
										Modern Web Architecture
									</p>
								</div>
							</div>

							<div className="bg-[#0A1A3F8C] p-5 rounded-[20px] border border-white/15 flex flex-col justify-between">
								<div className="flex justify-between items-center mb-3">
									<span className="text-[#7FD6E2] text-xs font-mono font-bold">04</span>
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/1va0em8p_expires_30_days.png" 
										className="w-5 h-5 object-contain"
										alt=""
									/>
								</div>
								<div>
									<h4 className="text-white text-base sm:text-[17px] font-bold">
										Cloud &amp; DevOps
									</h4>
									<p className="text-[#B7C6E6] text-xs sm:text-[13px] mt-1">
										Cloud &amp; Infrastructure
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ============================================================ */}
				{/* 2. "WHO WE ARE" & STATS BANNER */}
				{/* ============================================================ */}
				<section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-14 sm:mb-20 reveal-on-scroll">
					{/* Header */}
					<div className="text-center max-w-3xl mx-auto pb-8 sm:pb-12">
						<div className="inline-flex items-center gap-2 mb-3">
							<div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
							<span className="text-[#13295C] text-xs font-bold uppercase tracking-wider">
								Who we are
							</span>
						</div>
						
						<h2 className="text-[#0A1A3F] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight">
							Technology that moves your business forward,
						</h2>

						{/* Inline badges */}
						<div className="flex flex-wrap justify-center items-center gap-2.5 mt-2 sm:mt-3">
							<span className="inline-flex items-center justify-center bg-[#3FC3D3] text-[#0A1A3F] w-8 h-8 rounded-full font-bold text-lg">
								✧
							</span>
							<span className="text-[#1D5FA8] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-newsreader italic font-normal">
								built and grown
							</span>
							<span className="inline-flex items-center justify-center bg-[#DCE8F6] text-[#0A1A3F] w-8 h-8 rounded-full font-bold text-base">
								↗
							</span>
							<span className="text-[#1D5FA8] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-newsreader italic font-normal">
								as one team.
							</span>
						</div>

						{/* Quick Direct Connect Pills */}
						<div className="flex flex-wrap justify-center items-center gap-3 pt-5 pb-2">
							<a
								href="tel:+919962131433"
								className="inline-flex items-center gap-2 bg-[#3FC3D31A] text-[#0A1A3F] hover:bg-[#3FC3D333] border border-[#3FC3D3] px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm"
							>
								<FaPhone className="text-[#1D5FA8] text-xs" />
								<span>+91 9962 131 433</span>
							</a>
							<a
								href="mailto:info@zograha.com"
								className="inline-flex items-center gap-2 bg-[#DCE8F680] text-[#0A1A3F] hover:bg-[#DCE8F6] border border-[#C9D6EE] px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm"
							>
								<FaEnvelope className="text-[#1D5FA8] text-xs" />
								<span>info@zograha.com</span>
							</a>
						</div>

						<p className="text-[#3F4D6B] text-sm sm:text-base md:text-[17px] leading-relaxed mt-4 max-w-2xl mx-auto">
							Zograha is a premier software engineering and AI solutions company delivering dependable digital execution for forward-thinking businesses, with the marketing and support to help what we build keep growing.
						</p>
					</div>

					{/* Stats Cards Cluster */}
					<div className="flex flex-col xl:flex-row items-stretch w-full gap-4 sm:gap-5">
						{/* Card 1: 500+ Projects shipped */}
						<div 
							className="flex flex-col bg-[#13295C] w-full xl:w-[410px] p-5 sm:p-6 rounded-[28px] shadow-xl justify-between card-hover"
						>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/pshe5cqo_expires_30_days.png" 
								className="w-full h-44 sm:h-52 rounded-[20px] object-cover"
								alt="projects"
							/>
							<div className="pt-6">
								<span className="text-[#7FD6E2] text-xs font-semibold uppercase tracking-wider block mb-1">
									Projects shipped
								</span>
								<div className="text-white text-5xl sm:text-6xl lg:text-[76px] font-bold leading-none mb-3">
									500+
								</div>
								<p className="text-[#DCE8F6] text-sm sm:text-base">
									From web and cloud to mobile and applied AI.
								</p>
							</div>
						</div>

						{/* Right Cluster: 50+ Team & 98% Delivery + 24/7 Monitoring */}
						<div className="flex flex-1 flex-col gap-4 sm:gap-5 w-full">
							{/* Top Row: 50+ Team and 98% Delivery */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full">
								{/* Team Card */}
								<div 
									className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#E1E8F3] shadow-xl flex flex-col justify-between"
								>
									<div>
										<div className="flex items-center gap-2 mb-4">
											<span className="w-3 h-3 rounded-full bg-[#13295C]" />
											<span className="text-[#5B6882] text-xs font-bold uppercase tracking-wider">
												Team
											</span>
										</div>
										<div className="text-[#0A1A3F] text-4xl sm:text-5xl font-bold leading-none mb-3">
											50+
										</div>
										<p className="text-[#3F4D6B] text-sm sm:text-[15px] leading-relaxed">
											Engineers and specialists across Madurai, Chennai and Coimbatore.
										</p>
									</div>

									{/* Avatar Row */}
									<div className="flex items-center -space-x-2 pt-6">
										<img
											src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/m14aprp3_expires_30_days.png" 
											className="w-9 h-9 rounded-full border-2 border-white object-cover"
											alt="team member"
										/>
										<img
											src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/orbw46gy_expires_30_days.png" 
											className="w-9 h-9 rounded-full border-2 border-white object-cover"
											alt="team member"
										/>
										<img
											src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/3lepjxzl_expires_30_days.png" 
											className="w-9 h-9 rounded-full border-2 border-white object-cover"
											alt="team member"
										/>
										<img
											src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/pdqakkys_expires_30_days.png" 
											className="w-9 h-9 rounded-full border-2 border-white object-cover"
											alt="team member"
										/>
										<img
											src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/uvy7vvnp_expires_30_days.png" 
											className="w-9 h-9 rounded-full border-2 border-white object-cover"
											alt="team member"
										/>
									</div>
								</div>

								{/* Delivery Card */}
								<div 
									className="bg-[#CFEFF4] p-6 sm:p-7 rounded-[28px] border border-[#B7E3EA] shadow-xl flex flex-col justify-between"
								>
									<div>
										<div className="flex items-center gap-2 mb-4">
											<span className="w-5 h-5 rounded-full bg-[#0A1A3F] text-[#7FD6E2] text-xs font-bold flex items-center justify-center">
												✓
											</span>
											<span className="text-[#0A3B47] text-xs font-bold uppercase tracking-wider">
												Delivery
											</span>
										</div>
										<div className="text-[#0A1A3F] text-4xl sm:text-5xl font-bold leading-none mb-3">
											98%
										</div>
										<p className="text-[#0A3B47] text-sm sm:text-[15px] font-medium leading-relaxed">
											Delivered on time and within agreed budget.
										</p>
									</div>

									{/* Progress Indicator */}
									<div className="w-full bg-[#0A1A3F1C] h-2.5 rounded-full mt-6 overflow-hidden">
										<div className="bg-[#0A1A3F] h-full rounded-full w-[98%]" />
									</div>
								</div>
							</div>

							{/* Bottom Row: 24/7 Support Banner */}
							<div 
								className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#0A1A3F] p-6 sm:p-7 rounded-[28px] shadow-xl gap-6"
							>
								<div className="flex items-center gap-4">
									<div className="bg-[#13295C] text-[#7FD6E2] w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold">
										▷
									</div>
									<div>
										<div className="text-white text-3xl sm:text-4xl font-bold leading-none">
											24/7
										</div>
										<div className="text-[#7FD6E2] text-xs font-semibold uppercase tracking-wider mt-1">
											Support &amp; reliability
										</div>
									</div>
								</div>

								{/* 3 Step Flow */}
								<div className="flex flex-wrap items-center gap-2">
									<div className="flex items-center bg-transparent py-2 px-3.5 gap-2 rounded-full border border-[#2B4A8C]">
										<span className="text-[#7FD6E2] text-xs font-mono">01</span>
										<span className="text-white text-xs sm:text-sm font-medium">Strategize</span>
									</div>
									<span className="text-[#2B4A8C] text-sm hidden sm:inline">—</span>
									<div className="flex items-center bg-transparent py-2 px-3.5 gap-2 rounded-full border border-[#2B4A8C]">
										<span className="text-[#7FD6E2] text-xs font-mono">02</span>
										<span className="text-white text-xs sm:text-sm font-medium">Build</span>
									</div>
									<span className="text-[#2B4A8C] text-sm hidden sm:inline">—</span>
									<div className="flex items-center bg-[#3FC3D3] py-2 px-4 gap-2 rounded-full shadow-sm">
										<span className="text-[#0A1A3F] text-xs font-mono font-bold">03</span>
										<span className="text-[#0A1A3F] text-xs sm:text-sm font-bold">Grow</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ============================================================ */}
				{/* 3. SERVICES SECTION: BUILD, GROW, RUN */}
				{/* ============================================================ */}
				<section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-16 sm:mb-24 reveal-on-scroll">
					{/* Header */}
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full pb-8 sm:pb-12 gap-4">
						<div>
							<div className="inline-flex items-center gap-2 mb-3">
								<div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
								<span className="text-[#13295C] text-xs font-bold uppercase tracking-wider">
									Services
								</span>
							</div>
							<h2 className="text-[#0A1A3F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
								Digital capabilities designed{" "}
								<span className="text-[#1D5FA8] font-newsreader italic font-normal block sm:inline">
									for modern businesses.
								</span>
							</h2>
						</div>
						<Link 
							to="/services" 
							className="text-[#1D5FA8] hover:text-[#0A1A3F] text-sm sm:text-base font-bold transition-colors shrink-0"
						>
							Compare all services →
						</Link>
					</div>

					{/* 3 Cards */}
					<div className="flex flex-col gap-6 sm:gap-8 w-full">
						{/* Service 01: BUILD */}
						<div className="flex flex-col lg:flex-row items-center bg-[#DCE8F6] p-6 sm:p-8 lg:p-10 gap-6 lg:gap-10 rounded-[32px] shadow-sm">
							<div className="flex-1 w-full">
								<span className="text-[#13295C] text-xl sm:text-2xl font-bold block mb-2">
									Build
								</span>
								<h3 className="text-[#0A1A3F] text-2xl sm:text-3xl font-bold leading-snug mb-3">
									Websites and apps made for how you work.
								</h3>
								<p className="text-[#3F4D6B] text-sm sm:text-base leading-relaxed mb-6">
									End-to-end application development and design-first websites, built responsive and high-performance.
								</p>

								{/* Scope & Focus */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
									<div className="bg-white/60 p-3.5 rounded-2xl">
										<span className="text-[#5B6882] text-xs block mb-1">Scope</span>
										<span className="text-[#0A1A3F] text-base font-bold">Web · Mobile · Cloud</span>
									</div>
									<div className="bg-white/60 p-3.5 rounded-2xl">
										<span className="text-[#5B6882] text-xs block mb-1">Focus</span>
										<span className="text-[#0A1A3F] text-base font-bold">Performance &amp; usability</span>
									</div>
								</div>

								{/* Sub-services links */}
								<div className="bg-white p-2 rounded-2xl space-y-1">
									<Link 
										to="/services/app-development" 
										className="flex justify-between items-center p-3 rounded-xl hover:bg-[#EEF4FB] transition-colors group"
									>
										<div>
											<div className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold">
												App Development
											</div>
											<div className="text-[#5B6882] text-xs sm:text-sm">
												Mobile &amp; web apps built to scale
											</div>
										</div>
										<span className="bg-[#13295C] group-hover:bg-[#1D5FA8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors">
											→
										</span>
									</Link>
									<Link 
										to="/services/web-design" 
										className="flex justify-between items-center p-3 rounded-xl hover:bg-[#EEF4FB] transition-colors group"
									>
										<div>
											<div className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold">
												Web Design
											</div>
											<div className="text-[#5B6882] text-xs sm:text-sm">
												Beautiful, conversion-focused websites
											</div>
										</div>
										<span className="bg-[#13295C] group-hover:bg-[#1D5FA8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors">
											→
										</span>
									</Link>
								</div>
							</div>

							<div className="w-full lg:flex-1 h-64 sm:h-80 lg:h-[400px]">
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/zdk0kuec_expires_30_days.png" 
									className="w-full h-full rounded-2xl sm:rounded-3xl object-cover shadow-md"
									alt="Build preview"
								/>
							</div>
						</div>

						{/* Service 02: GROW */}
						<div className="flex flex-col lg:flex-row items-center bg-[#CFEFF4] p-6 sm:p-8 lg:p-10 gap-6 lg:gap-10 rounded-[32px] shadow-sm">
							<div className="flex-1 w-full">
								<span className="text-[#13295C] text-xl sm:text-2xl font-bold block mb-2">
									Grow
								</span>
								<h3 className="text-[#0A1A3F] text-2xl sm:text-3xl font-bold leading-snug mb-3">
									Reach and authority you can measure.
								</h3>
								<p className="text-[#3F4D6B] text-sm sm:text-base leading-relaxed mb-6">
									Data-driven marketing and publications that build visibility, conversions and credibility.
								</p>

								{/* Scope & Focus */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
									<div className="bg-white/60 p-3.5 rounded-2xl">
										<span className="text-[#5B6882] text-xs block mb-1">Scope</span>
										<span className="text-[#0A1A3F] text-base font-bold">SEO · PPC · Social · Content</span>
									</div>
									<div className="bg-white/60 p-3.5 rounded-2xl">
										<span className="text-[#5B6882] text-xs block mb-1">Focus</span>
										<span className="text-[#0A1A3F] text-base font-bold">Reach &amp; conversions</span>
									</div>
								</div>

								{/* Sub-services links */}
								<div className="bg-white p-2 rounded-2xl space-y-1">
									<Link 
										to="/services/digital-marketing" 
										className="flex justify-between items-center p-3 rounded-xl hover:bg-[#EEF4FB] transition-colors group"
									>
										<div>
											<div className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold">
												Digital Marketing
											</div>
											<div className="text-[#5B6882] text-xs sm:text-sm">
												Grow your brand online
											</div>
										</div>
										<span className="bg-[#13295C] group-hover:bg-[#1D5FA8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors">
											→
										</span>
									</Link>
									<Link 
										to="/services/publications" 
										className="flex justify-between items-center p-3 rounded-xl hover:bg-[#EEF4FB] transition-colors group"
									>
										<div>
											<div className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold">
												Publications
											</div>
											<div className="text-[#5B6882] text-xs sm:text-sm">
												Research &amp; content authority
											</div>
										</div>
										<span className="bg-[#13295C] group-hover:bg-[#1D5FA8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors">
											→
										</span>
									</Link>
								</div>
							</div>

							<div className="w-full lg:flex-1 h-64 sm:h-80 lg:h-[400px]">
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/8f84tnoo_expires_30_days.png" 
									className="w-full h-full rounded-2xl sm:rounded-3xl object-cover shadow-md"
									alt="Grow preview"
								/>
							</div>
						</div>

						{/* Service 03: RUN */}
						<div className="flex flex-col lg:flex-row items-center bg-[#E4EAF8] p-6 sm:p-8 lg:p-10 gap-6 lg:gap-10 rounded-[32px] shadow-sm">
							<div className="flex-1 w-full">
								<span className="text-[#13295C] text-xl sm:text-2xl font-bold block mb-2">
									Run
								</span>
								<h3 className="text-[#0A1A3F] text-2xl sm:text-3xl font-bold leading-snug mb-3">
									Insight and support that keep you running.
								</h3>
								<p className="text-[#3F4D6B] text-sm sm:text-base leading-relaxed mb-6">
									Data you can act on and customer support that stays on, day and night.
								</p>

								{/* Scope & Focus */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
									<div className="bg-white/60 p-3.5 rounded-2xl">
										<span className="text-[#5B6882] text-xs block mb-1">Scope</span>
										<span className="text-[#0A1A3F] text-base font-bold">BI · Data pipelines · Helpdesk</span>
									</div>
									<div className="bg-white/60 p-3.5 rounded-2xl">
										<span className="text-[#5B6882] text-xs block mb-1">Focus</span>
										<span className="text-[#0A1A3F] text-base font-bold">Decisions &amp; availability</span>
									</div>
								</div>

								{/* Sub-services links */}
								<div className="bg-white p-2 rounded-2xl space-y-1">
									<Link 
										to="/services/data-management" 
										className="flex justify-between items-center p-3 rounded-xl hover:bg-[#EEF4FB] transition-colors group"
									>
										<div>
											<div className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold">
												Data Management
											</div>
											<div className="text-[#5B6882] text-xs sm:text-sm">
												Insights that drive decisions
											</div>
										</div>
										<span className="bg-[#13295C] group-hover:bg-[#1D5FA8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors">
											→
										</span>
									</Link>
									<Link 
										to="/contact" 
										className="flex justify-between items-center p-3 rounded-xl hover:bg-[#EEF4FB] transition-colors group"
									>
										<div>
											<div className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold">
												Customer Support
											</div>
											<div className="text-[#5B6882] text-xs sm:text-sm">
												Always-on, always helpful
											</div>
										</div>
										<span className="bg-[#13295C] group-hover:bg-[#1D5FA8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors">
											→
										</span>
									</Link>
								</div>
							</div>

							<div className="w-full lg:flex-1 h-64 sm:h-80 lg:h-[400px]">
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/ixld3q99_expires_30_days.png" 
									className="w-full h-full rounded-2xl sm:rounded-3xl object-cover shadow-md"
									alt="Run preview"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* ============================================================ */}
				{/* 4. WHY ZOGRAHA / PROCESS & ARCHITECTURE */}
				{/* ============================================================ */}
				<section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-16 sm:mb-24 reveal-on-scroll">
					{/* Heading */}
					<div className="text-center max-w-2xl mx-auto pb-8 sm:pb-12">
						<div className="inline-flex items-center gap-2 mb-3">
							<div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
							<span className="text-[#13295C] text-xs font-bold uppercase tracking-wider">
								Why Zograha
							</span>
						</div>
						<h2 className="text-[#0A1A3F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
							Built to perform,{" "}
							<span className="text-[#1D5FA8] font-newsreader italic font-normal block sm:inline">
								backed to last.
							</span>
						</h2>
					</div>

					{/* Top Row: 2 Cards (Idea to Growth & Result Driven) */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
						{/* Card 1: From idea to measurable growth */}
						<div 
							className="p-6 sm:p-8 rounded-[28px] flex flex-col justify-between"
							style={{ background: "linear-gradient(180deg, #E6EEFE 0%, #D3E3FB 100%)" }}
						>
							<div>
								<h3 className="text-[#0A1A3F] text-xl sm:text-2xl font-bold mb-3">
									From idea to measurable growth
								</h3>
								<p className="text-[#3F4D6B] text-sm sm:text-base leading-relaxed mb-6">
									Strategize, Build, Grow: one practical path from first plan to ongoing improvement.
								</p>

								{/* 3 Step Pill Row */}
								<div className="flex flex-wrap items-center gap-2 mb-6">
									<span className="bg-[#13295C] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl">
										Strategize
									</span>
									<span className="bg-white/80 text-[#13295C] text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl border border-[#C9D6EE]">
										Build
									</span>
									<span className="bg-white/80 text-[#13295C] text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl border border-[#C9D6EE]">
										Grow
									</span>
								</div>
							</div>

							{/* Bottom inner white breakdown */}
							<div className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
								<div className="flex items-center gap-3">
									<span className="bg-[#13295C] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
										01
									</span>
									<div className="flex-1 min-w-0">
										<div className="text-[#0A1A3F] text-sm font-bold">Strategize</div>
										<div className="text-[#5B6882] text-xs truncate">
											A practical technology and digital strategy aligned with your goals.
										</div>
									</div>
									<span className="bg-[#DCE8F6] text-[#13295C] text-[10px] font-bold px-2 py-0.5 rounded">
										PLAN
									</span>
								</div>

								<div className="flex items-center gap-3">
									<span className="bg-[#13295C] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
										02
									</span>
									<div className="flex-1 min-w-0">
										<div className="text-[#0A1A3F] text-sm font-bold">Build</div>
										<div className="text-[#5B6882] text-xs truncate">
											Designed, developed and launched for performance and usability.
										</div>
									</div>
									<span className="bg-[#DCE8F6] text-[#13295C] text-[10px] font-bold px-2 py-0.5 rounded">
										DELIVER
									</span>
								</div>

								<div className="flex items-center gap-3">
									<span className="bg-[#13295C] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
										03
									</span>
									<div className="flex-1 min-w-0">
										<div className="text-[#0A1A3F] text-sm font-bold">Grow</div>
										<div className="text-[#5B6882] text-xs truncate">
											Optimized, supported and improved for sustainable growth.
										</div>
									</div>
									<span className="bg-[#DCE8F6] text-[#13295C] text-[10px] font-bold px-2 py-0.5 rounded">
										IMPROVE
									</span>
								</div>
							</div>
						</div>

						{/* Card 2: Result-Driven Approach */}
						<div 
							className="p-6 sm:p-8 rounded-[28px] flex flex-col justify-between"
							style={{ background: "linear-gradient(180deg, #DDF3F8 0%, #C8E4F6 100%)" }}
						>
							<div className="mb-6">
								<h3 className="text-[#0A1A3F] text-xl sm:text-2xl font-bold mb-3">
									Result-Driven Approach
								</h3>
								<p className="text-[#3F4D6B] text-sm sm:text-base leading-relaxed">
									Work is judged by what it produces for you, with clear milestones and regular reporting.
								</p>
							</div>

							{/* Dark navy live simulation feed */}
							<div className="bg-[#0E1A33] p-5 sm:p-6 rounded-2xl shadow-xl">
								<div className="flex justify-between items-center pb-4 border-b border-white/10">
									<span className="text-white text-sm font-bold">
										# Project updates
									</span>
									<span className="text-[#9FB6E0] text-[10px] tracking-wider uppercase font-semibold">
										ILLUSTRATIVE
									</span>
								</div>

								<div className="space-y-3 pt-4">
									<div className="flex items-center gap-3">
										<span className="bg-[#7FD6E2] text-[#0A1A3F] text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
											ST
										</span>
										<div>
											<div className="text-white text-xs sm:text-sm font-bold">
												Zograha · Strategy
											</div>
											<div className="text-[#C9D7F2] text-xs">
												Scope and goals agreed.
											</div>
										</div>
									</div>

									<div className="flex items-center gap-3">
										<span className="bg-[#DCE8F6] text-[#0A1A3F] text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
											BD
										</span>
										<div>
											<div className="text-white text-xs sm:text-sm font-bold">
												Zograha · Build
											</div>
											<div className="text-[#C9D7F2] text-xs">
												First release ready for review.
											</div>
										</div>
									</div>

									<div className="flex items-center gap-3">
										<span className="bg-[#3FC3D3] text-[#0A1A3F] text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
											GR
										</span>
										<div>
											<div className="text-white text-xs sm:text-sm font-bold">
												Zograha · Grow
											</div>
											<div className="text-[#C9D7F2] text-xs">
												Monthly performance report shared.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Row: Long Term Partnership & Capabilities Orbit */}
					<div className="flex flex-col lg:flex-row items-stretch gap-5 w-full pt-5">
						{/* Long Term Partnership Card */}
						<div 
							className="w-full lg:w-[380px] xl:w-[410px] p-6 sm:p-8 rounded-[28px] flex flex-col justify-between"
							style={{ background: "linear-gradient(180deg, #1D5FA8 0%, #13295C 100%)" }}
						>
							<div>
								<h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
									Long-Term Partnership
								</h3>
								<p className="text-[#DCE8F6] text-sm sm:text-base leading-relaxed mb-6">
									We stay on to optimize, support and improve your digital ecosystem.
								</p>
							</div>

							<div className="space-y-2.5">
								<div className="flex items-center bg-[#1B2744] py-3 px-4 rounded-xl border border-[#2B3A5E]">
									<span className="text-[#7FD6E2] text-base mr-3 font-bold">✓</span>
									<span className="text-white text-sm font-medium">Ongoing optimization</span>
								</div>
								<div className="flex items-center bg-[#1B2744] py-3 px-4 rounded-xl border border-[#2B3A5E]">
									<span className="text-[#7FD6E2] text-base mr-3 font-bold">✓</span>
									<span className="text-white text-sm font-medium">Priority response</span>
								</div>
								<div className="flex items-center bg-[#1B2744] py-3 px-4 rounded-xl border border-[#2B3A5E]">
									<span className="text-[#7FD6E2] text-base mr-3 font-bold">✓</span>
									<span className="text-white text-sm font-medium">24/7 dedicated support</span>
								</div>
							</div>
						</div>

						{/* Capabilities & One-Team Orbit Card */}
						<div 
							className="flex-1 w-full p-6 sm:p-8 rounded-[28px] flex flex-col md:flex-row items-center gap-6 overflow-hidden"
							style={{ background: "linear-gradient(180deg, #E6EEFE 0%, #CFE0FA 100%)" }}
						>
							{/* Left: Capabilities List */}
							<div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xl w-full md:w-[280px] shrink-0">
								<h4 className="text-[#0A1A3F] text-base font-bold mb-4 pb-2 border-b border-slate-100">
									Capabilities
								</h4>
								<div className="space-y-3">
									<div>
										<div className="text-[#0A1A3F] text-xs font-bold">Digital Marketing</div>
										<div className="flex gap-1 mt-1">
											<span className="bg-[#E4EDFB] text-[#13295C] text-[10px] px-1.5 py-0.5 rounded">SEO</span>
											<span className="bg-[#E4EDFB] text-[#13295C] text-[10px] px-1.5 py-0.5 rounded">PPC Advertising</span>
										</div>
									</div>
									<div>
										<div className="text-[#0A1A3F] text-xs font-bold">App Development</div>
										<div className="flex gap-1 mt-1">
											<span className="bg-[#E4EDFB] text-[#13295C] text-[10px] px-1.5 py-0.5 rounded">React Native</span>
											<span className="bg-[#E4EDFB] text-[#13295C] text-[10px] px-1.5 py-0.5 rounded">Flutter</span>
										</div>
									</div>
									<div>
										<div className="text-[#0A1A3F] text-xs font-bold">Web Design</div>
										<div className="flex gap-1 mt-1">
											<span className="bg-[#E4EDFB] text-[#13295C] text-[10px] px-1.5 py-0.5 rounded">UI/UX</span>
											<span className="bg-[#E4EDFB] text-[#13295C] text-[10px] px-1.5 py-0.5 rounded">Tailwind CSS</span>
										</div>
									</div>
									<div>
										<div className="text-[#0A1A3F] text-xs font-bold">Data Management</div>
										<div className="flex gap-1 mt-1">
											<span className="bg-[#E4EDFB] text-[#13295C] text-[10px] px-1.5 py-0.5 rounded">Database Opt</span>
											<span className="bg-[#E4EDFB] text-[#13295C] text-[10px] px-1.5 py-0.5 rounded">BI Dashboards</span>
										</div>
									</div>
								</div>
							</div>

							{/* Right: Orbit Illustration */}
							<div className="flex-1 w-full flex flex-col justify-center items-center text-center">
								<h3 className="text-[#0A1A3F] text-lg sm:text-xl font-bold mb-2">
									Innovative solutions, reliable technology
								</h3>
								<p className="text-[#3F4D6B] text-xs sm:text-sm max-w-sm mb-6">
									Six disciplines in one team, from apps and websites to data, support and publications.
								</p>

								{/* Center "One team" badge with surrounded badges */}
								<div className="relative w-full max-w-[280px] h-[180px] flex items-center justify-center">
									{/* Center badge */}
									<div className="bg-[#13295C] text-white text-xs font-bold py-2.5 px-4 rounded-full shadow-lg z-10">
										One team
									</div>

									{/* Surrounding floating badges */}
									<Link to="/services/digital-marketing" className="absolute top-0 text-[#13295C] bg-white text-[11px] font-bold py-1 px-3 rounded-full border border-[#C9D6EE] shadow-sm hover:border-[#1D5FA8] transition-all">
										Digital Marketing
									</Link>
									<Link to="/services/web-design" className="absolute bottom-0 text-[#13295C] bg-white text-[11px] font-bold py-1 px-3 rounded-full border border-[#C9D6EE] shadow-sm hover:border-[#1D5FA8] transition-all">
										Web Design
									</Link>
									<Link to="/services/app-development" className="absolute right-0 text-[#13295C] bg-white text-[11px] font-bold py-1 px-3 rounded-full border border-[#C9D6EE] shadow-sm hover:border-[#1D5FA8] transition-all">
										App Development
									</Link>
									<Link to="/services/data-management" className="absolute left-0 text-[#13295C] bg-white text-[11px] font-bold py-1 px-3 rounded-full border border-[#C9D6EE] shadow-sm hover:border-[#1D5FA8] transition-all">
										Data Management
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ============================================================ */}
				{/* 5. EMPOWERING CUSTOMERS GRID */}
				{/* ============================================================ */}
				<section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-16 sm:mb-24 reveal-on-scroll">
					<div className="flex flex-col xl:flex-row items-start gap-8 xl:gap-12 w-full">
						{/* Left Column */}
						<div className="w-full xl:w-[420px] shrink-0">
							<div className="inline-flex items-center gap-2 mb-3">
								<div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
								<span className="text-[#13295C] text-xs font-bold uppercase tracking-wider">
									Business growth solutions
								</span>
							</div>
							<h2 className="text-[#0A1A3F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
								Empowering customers{" "}
								<span className="text-[#1D5FA8] font-newsreader italic font-normal block">
									to grow their business.
								</span>
							</h2>
							<p className="text-[#3F4D6B] text-sm sm:text-base leading-relaxed mt-5 mb-8">
								At Zograha Technologies, we help businesses turn digital opportunities into meaningful growth. Our approach goes beyond simply promoting your business. We focus on helping you reach the right customers, improve your digital presence, generate quality leads, and build stronger customer relationships.
							</p>

							<Link 
								to="/contact" 
								className="inline-flex items-center bg-[#1D5FA8] hover:bg-[#15467e] text-white py-2 pl-6 pr-2 rounded-full transition-all group shadow-md"
							>
								<span className="text-sm sm:text-base font-bold mr-3">
									Start a project
								</span>
								<span className="bg-[#0A1A3F] text-white w-9 h-9 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform text-sm font-bold">
									→
								</span>
							</Link>
						</div>

						{/* Right Column: 6 Cards in Responsive Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full flex-1">
							{/* Card 1: Reach More Customers */}
							<div className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#E1E8F3] shadow-lg flex flex-col justify-between">
								<div className="flex justify-between items-center mb-4">
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/o5rai496_expires_30_days.png" 
										className="w-10 h-10 rounded-xl object-contain"
										alt=""
									/>
									<span className="text-[#1D5FA8] font-bold text-lg">↗</span>
								</div>
								<div>
									<h4 className="text-[#0A1A3F] text-lg sm:text-[20px] font-bold mb-2">
										Reach More Customers
									</h4>
									<p className="text-[#3F4D6B] text-xs sm:text-sm leading-relaxed">
										Expand your online visibility and connect with the audiences most relevant to your business through SEO, digital marketing, and targeted advertising.
									</p>
								</div>
							</div>

							{/* Card 2: Generate More Opportunities */}
							<div className="bg-[#EEF4FB] p-6 sm:p-7 rounded-[28px] border border-[#E1E8F3] shadow-lg flex flex-col justify-between">
								<div className="flex justify-between items-center mb-4">
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/rifs0o2g_expires_30_days.png" 
										className="w-10 h-10 rounded-xl object-contain"
										alt=""
									/>
									<span className="text-[#1D5FA8] font-bold text-lg">↗</span>
								</div>
								<div>
									<h4 className="text-[#0A1A3F] text-lg sm:text-[20px] font-bold mb-2">
										Generate More Opportunities
									</h4>
									<p className="text-[#3F4D6B] text-xs sm:text-sm leading-relaxed">
										Build effective lead generation strategies that attract potential customers and turn interest into valuable business opportunities.
									</p>
								</div>
							</div>

							{/* Card 3: Strengthen Customer Relationships */}
							<div className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#E1E8F3] shadow-lg flex flex-col justify-between">
								<div className="flex justify-between items-center mb-4">
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/sbtzphsg_expires_30_days.png" 
										className="w-10 h-10 rounded-xl object-contain"
										alt=""
									/>
									<span className="text-[#1D5FA8] font-bold text-lg">↗</span>
								</div>
								<div>
									<h4 className="text-[#0A1A3F] text-lg sm:text-[20px] font-bold mb-2">
										Strengthen Customer Relationships
									</h4>
									<p className="text-[#3F4D6B] text-xs sm:text-sm leading-relaxed">
										Create better customer experiences with engaging content, effective communication, and reliable customer support that encourages long-term relationships.
									</p>
								</div>
							</div>

							{/* Card 4: Improve Business Efficiency */}
							<div className="bg-[#EEF4FB] p-6 sm:p-7 rounded-[28px] border border-[#E1E8F3] shadow-lg flex flex-col justify-between">
								<div className="flex justify-between items-center mb-4">
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/n066abmn_expires_30_days.png" 
										className="w-10 h-10 rounded-xl object-contain"
										alt=""
									/>
									<span className="text-[#1D5FA8] font-bold text-lg">↗</span>
								</div>
								<div>
									<h4 className="text-[#0A1A3F] text-lg sm:text-[20px] font-bold mb-2">
										Improve Business Efficiency
									</h4>
									<p className="text-[#3F4D6B] text-xs sm:text-sm leading-relaxed">
										Use websites, software, automation, analytics, and digital tools to simplify everyday processes and help your business operate more efficiently.
									</p>
								</div>
							</div>

							{/* Card 5: Make Smarter Decisions */}
							<div className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#E1E8F3] shadow-lg flex flex-col justify-between">
								<div className="flex justify-between items-center mb-4">
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/4qwtkjf7_expires_30_days.png" 
										className="w-10 h-10 rounded-xl object-contain"
										alt=""
									/>
									<span className="text-[#1D5FA8] font-bold text-lg">↗</span>
								</div>
								<div>
									<h4 className="text-[#0A1A3F] text-lg sm:text-[20px] font-bold mb-2">
										Make Smarter Decisions
									</h4>
									<p className="text-[#3F4D6B] text-xs sm:text-sm leading-relaxed">
										Use data and performance insights to understand what is working, identify opportunities, and make better marketing and business decisions.
									</p>
								</div>
							</div>

							{/* Card 6: Build Sustainable Growth */}
							<div 
								className="p-6 sm:p-7 rounded-[28px] shadow-xl flex flex-col justify-between"
								style={{ background: "linear-gradient(180deg, #1D5FA8 0%, #13295C 100%)" }}
							>
								<div className="flex justify-between items-center mb-4">
									<img
										src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/80bhtcnv_expires_30_days.png" 
										className="w-10 h-10 rounded-xl object-contain"
										alt=""
									/>
									<span className="text-[#7FD6E2] font-bold text-lg">↗</span>
								</div>
								<div>
									<h4 className="text-white text-lg sm:text-[20px] font-bold mb-2">
										Build Sustainable Growth
									</h4>
									<p className="text-[#DCE8F6] text-xs sm:text-sm leading-relaxed">
										From startups and small businesses to established companies, we create practical digital strategies designed to support long-term visibility, efficiency, and growth.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ============================================================ */}
				{/* 6. INDUSTRIES SECTION */}
				{/* ============================================================ */}
				<section className="w-full bg-[#0A1A3F] py-14 sm:py-20 lg:py-24 mb-16 sm:mb-24 reveal-on-scroll">
					<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
						<div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
							{/* Left: Heading & Category Selector Buttons */}
							<div className="flex-1 w-full">
								<div className="inline-flex items-center gap-2 mb-3">
									<div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
									<span className="text-[#7FD6E2] text-xs font-semibold uppercase tracking-wider">
										Industries
									</span>
								</div>
								<h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2">
									Digital growth strategies
								</h2>
								<div className="text-[#7FD6E2] text-3xl sm:text-4xl lg:text-5xl font-newsreader italic mb-8">
									built around your industry.
								</div>

								{/* Pills */}
								<div className="flex flex-wrap items-center gap-2.5">
									{ALL_INDUSTRIES.map((ind, idx) => (
										<button
											key={ind.slug}
											type="button"
											onClick={() => setIndustryIdx(idx)}
											className={`flex items-center py-2.5 px-4 gap-2.5 rounded-full border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
												idx === industryIdx
													? "bg-[#3FC3D3] border-[#3FC3D3] text-[#0A1A3F] shadow-lg scale-105"
													: "bg-transparent border-[#2B4A8C] text-[#DCE8F6] hover:border-[#3FC3D3]"
											}`}
										>
											<img
												src={ind.icon}
												alt=""
												className="w-4 h-4 rounded-full object-contain"
											/>
											<span>{ind.name}</span>
										</button>
									))}
								</div>
							</div>

							{/* Right: Active Showcase Card */}
							<div 
								className="bg-white p-7 sm:p-9 rounded-[32px] w-full lg:w-[460px] xl:w-[480px] shrink-0 shadow-2xl flex flex-col justify-between"
							>
								<div>
									<div className="flex justify-between items-center mb-6">
										<span className="text-[#1D5FA8] text-xs font-mono font-bold">
											{String(industryIdx + 1).padStart(2, '0')} / {ALL_INDUSTRIES.length}
										</span>
										<span className="text-[#5B6882] text-xs font-bold uppercase tracking-wider">
											Industry
										</span>
									</div>

									<img
										src={ALL_INDUSTRIES[industryIdx]?.icon || "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/w8fggfc0_expires_30_days.png"} 
										alt={ALL_INDUSTRIES[industryIdx]?.name || "Industry"}
										className="w-16 h-16 rounded-2xl object-contain bg-[#EEF4FB] p-2.5 mb-5"
									/>

									<h3 className="text-[#0A1A3F] text-2xl sm:text-3xl font-bold leading-tight mb-2">
										{ALL_INDUSTRIES[industryIdx]?.name || "E-commerce & Online Stores"}
									</h3>
									<div className="w-12 h-1 bg-[#3FC3D3] rounded-full mb-4" />

									<p className="text-[#3F4D6B] text-sm sm:text-base leading-relaxed mb-8">
										{ALL_INDUSTRIES[industryIdx]?.description || "Grow online sales with digital marketing, SEO, and conversion-focused strategies."}
									</p>
								</div>

								<div className="flex flex-wrap justify-between items-center gap-3 pt-4 border-t border-slate-100">
									<Link 
										to="/contact" 
										className="inline-flex items-center bg-[#1D5FA8] hover:bg-[#15467e] text-white py-2 pl-5 pr-2 rounded-full transition-all group"
									>
										<span className="text-xs sm:text-sm font-bold mr-2">
											Discuss your industry
										</span>
										<span className="bg-[#0A1A3F] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold group-hover:translate-x-0.5 transition-transform">
											→
										</span>
									</Link>

									<div className="flex items-center gap-2">
										<button 
											type="button"
											onClick={() => setIndustryIdx(prev => (prev - 1 + ALL_INDUSTRIES.length) % ALL_INDUSTRIES.length)}
											className="w-9 h-9 rounded-full border border-[#13295C] text-[#13295C] hover:bg-slate-100 flex items-center justify-center font-bold text-sm transition-colors"
											aria-label="Previous Industry"
										>
											←
										</button>
										<button 
											type="button"
											onClick={() => setIndustryIdx(prev => (prev + 1) % ALL_INDUSTRIES.length)}
											className="w-9 h-9 rounded-full border border-[#13295C] text-[#13295C] hover:bg-slate-100 flex items-center justify-center font-bold text-sm transition-colors"
											aria-label="Next Industry"
										>
											→
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ============================================================ */}
				{/* 7. PORTFOLIO / OUR WORK */}
				{/* ============================================================ */}
				<section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-16 sm:mb-24 reveal-on-scroll">
					{/* Header */}
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full pb-8 sm:pb-12 gap-4">
						<div>
							<div className="inline-flex items-center gap-2 mb-3">
								<div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
								<span className="text-[#13295C] text-xs font-bold uppercase tracking-wider">
									Our work
								</span>
							</div>
							<h2 className="text-[#0A1A3F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
								Digital solutions that{" "}
								<span className="text-[#1D5FA8] font-newsreader italic font-normal block sm:inline">
									drive business growth.
								</span>
							</h2>
						</div>
						<Link 
							to="/projects" 
							className="text-[#1D5FA8] hover:text-[#0A1A3F] text-sm sm:text-base font-bold transition-colors shrink-0"
						>
							View all work →
						</Link>
					</div>

					{/* Row 1: Featured Project + 4 smaller cards */}
					<div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5 w-full mb-4 sm:mb-5">
						{/* Featured Large Card: Website Development Projects */}
						<Link 
							to="/projects/sample-ecommerce-platform" 
							className="flex flex-col justify-between w-full lg:w-[50%] xl:w-[560px] p-6 sm:p-7 rounded-[28px] border border-[#13295C] group hover:border-[#3FC3D3] transition-all cursor-pointer shadow-lg"
							style={{ background: "linear-gradient(180deg, #1D5FA8 0%, #13295C 100%)" }}
						>
							<div className="flex justify-between items-center mb-4">
								<span className="text-[#DCE8F6] text-xs font-mono font-bold">01</span>
								<span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white text-sm group-hover:bg-white/20 transition-colors">
									↗
								</span>
							</div>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/mtwz5704_expires_30_days.png" 
								className="w-full h-56 sm:h-72 lg:h-[340px] rounded-2xl object-cover mb-4 group-hover:opacity-95 transition-opacity"
								alt="Website Development"
							/>
							<div>
								<h3 className="text-white group-hover:text-[#7FD6E2] text-xl sm:text-2xl font-bold transition-colors">
									Website Development Projects
								</h3>
								<span className="text-[#DCE8F6] text-xs sm:text-sm mt-1 block">
									View project →
								</span>
							</div>
						</Link>

						{/* Middle Column: 2 Cards */}
						<div className="flex flex-col w-full lg:w-[25%] xl:w-[272px] gap-4 sm:gap-5">
							{/* Card 02 */}
							<Link 
								to="/projects/software-development" 
								className="flex-1 flex flex-col justify-between bg-[#EEF4FB] p-5 sm:p-6 rounded-[28px] border border-[#E1E8F3] hover:border-[#1D5FA8] transition-all group shadow-sm"
							>
								<div className="flex justify-between items-center mb-3">
									<span className="text-[#3F4D6B] text-xs font-mono font-bold">02</span>
									<span className="w-7 h-7 rounded-full border border-[#C9D3E6] flex items-center justify-center text-[#0A1A3F] text-xs group-hover:bg-[#1D5FA8] group-hover:text-white transition-colors">
										↗
									</span>
								</div>
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/352zxobe_expires_30_days.png" 
									className="w-full h-28 rounded-xl object-cover mb-3"
									alt=""
								/>
								<div>
									<h4 className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold transition-colors">
										Software Development
									</h4>
									<span className="text-[#3F4D6B] text-xs block mt-0.5">View project →</span>
								</div>
							</Link>

							{/* Card 04 */}
							<Link 
								to="/projects/seo-search-visibility" 
								className="flex-1 flex flex-col justify-between bg-white p-5 sm:p-6 rounded-[28px] border border-[#E1E8F3] hover:border-[#1D5FA8] transition-all group shadow-sm"
							>
								<div className="flex justify-between items-center mb-3">
									<span className="text-[#3F4D6B] text-xs font-mono font-bold">04</span>
									<span className="w-7 h-7 rounded-full border border-[#C9D3E6] flex items-center justify-center text-[#0A1A3F] text-xs group-hover:bg-[#1D5FA8] group-hover:text-white transition-colors">
										↗
									</span>
								</div>
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/hbzhn4xh_expires_30_days.png" 
									className="w-full h-28 rounded-xl object-cover mb-3"
									alt=""
								/>
								<div>
									<h4 className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold transition-colors">
										SEO &amp; Search Visibility
									</h4>
									<span className="text-[#3F4D6B] text-xs block mt-0.5">View project →</span>
								</div>
							</Link>
						</div>

						{/* Right Column: 2 Cards */}
						<div className="flex flex-col w-full lg:w-[25%] xl:w-[272px] gap-4 sm:gap-5">
							{/* Card 03 */}
							<Link 
								to="/projects/digital-marketing-campaigns" 
								className="flex-1 flex flex-col justify-between bg-[#CFEFF4] p-5 sm:p-6 rounded-[28px] border border-[#B7E3EA] hover:border-[#1D5FA8] transition-all group shadow-sm"
							>
								<div className="flex justify-between items-center mb-3">
									<span className="text-[#0A3B47] text-xs font-mono font-bold">03</span>
									<span className="w-7 h-7 rounded-full border border-[#C9D3E6] flex items-center justify-center text-[#0A1A3F] text-xs group-hover:bg-[#1D5FA8] group-hover:text-white transition-colors">
										↗
									</span>
								</div>
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/ki51fhrz_expires_30_days.png" 
									className="w-full h-28 rounded-xl object-cover mb-3"
									alt=""
								/>
								<div>
									<h4 className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold transition-colors">
										Digital Marketing Campaigns
									</h4>
									<span className="text-[#0A3B47] text-xs block mt-0.5">View project →</span>
								</div>
							</Link>

							{/* Card 05 */}
							<Link 
								to="/projects/branding-identity" 
								className="flex-1 flex flex-col justify-between bg-[#EEF4FB] p-5 sm:p-6 rounded-[28px] border border-[#E1E8F3] hover:border-[#1D5FA8] transition-all group shadow-sm"
							>
								<div className="flex justify-between items-center mb-3">
									<span className="text-[#3F4D6B] text-xs font-mono font-bold">05</span>
									<span className="w-7 h-7 rounded-full border border-[#C9D3E6] flex items-center justify-center text-[#0A1A3F] text-xs group-hover:bg-[#1D5FA8] group-hover:text-white transition-colors">
										↗
									</span>
								</div>
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/xsrlqhek_expires_30_days.png" 
									className="w-full h-28 rounded-xl object-cover mb-3"
									alt=""
								/>
								<div>
									<h4 className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold transition-colors">
										Branding &amp; Brand Identity
									</h4>
									<span className="text-[#3F4D6B] text-xs block mt-0.5">View project →</span>
								</div>
							</Link>
						</div>
					</div>

					{/* Row 2: Card 06, Card 07, Card 08 */}
					<div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5 w-full">
						{/* Card 06 */}
						<Link 
							to="/projects/social-media-marketing" 
							className="w-full lg:w-[25%] xl:w-[272px] bg-[#CFEFF4] p-5 sm:p-6 rounded-[28px] border border-[#B7E3EA] hover:border-[#1D5FA8] transition-all group shadow-sm flex flex-col justify-between"
						>
							<div className="flex justify-between items-center mb-3">
								<span className="text-[#0A3B47] text-xs font-mono font-bold">06</span>
								<span className="w-7 h-7 rounded-full border border-[#C9D3E6] flex items-center justify-center text-[#0A1A3F] text-xs group-hover:bg-[#1D5FA8] group-hover:text-white transition-colors">
									↗
								</span>
							</div>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/jiggey30_expires_30_days.png" 
								className="w-full h-32 rounded-xl object-cover mb-3"
								alt=""
							/>
							<div>
								<h4 className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold transition-colors">
									Social Media Marketing
								</h4>
								<span className="text-[#0A3B47] text-xs block mt-0.5">View project →</span>
							</div>
						</Link>

						{/* Card 07 */}
						<Link 
							to="/projects/lead-generation-campaigns" 
							className="w-full lg:w-[25%] xl:w-[272px] bg-white p-5 sm:p-6 rounded-[28px] border border-[#E1E8F3] hover:border-[#1D5FA8] transition-all group shadow-sm flex flex-col justify-between"
						>
							<div className="flex justify-between items-center mb-3">
								<span className="text-[#3F4D6B] text-xs font-mono font-bold">07</span>
								<span className="w-7 h-7 rounded-full border border-[#C9D3E6] flex items-center justify-center text-[#0A1A3F] text-xs group-hover:bg-[#1D5FA8] group-hover:text-white transition-colors">
									↗
								</span>
							</div>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/4x2mt18n_expires_30_days.png" 
								className="w-full h-32 rounded-xl object-cover mb-3"
								alt=""
							/>
							<div>
								<h4 className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base font-bold transition-colors">
									Lead Generation Campaigns
								</h4>
								<span className="text-[#3F4D6B] text-xs block mt-0.5">View project →</span>
							</div>
						</Link>

						{/* Card 08 */}
						<Link 
							to="/projects/content-video-creation" 
							className="w-full lg:w-[50%] xl:w-[560px] bg-[#EEF4FB] p-5 sm:p-6 rounded-[28px] border border-[#E1E8F3] hover:border-[#1D5FA8] transition-all group shadow-sm flex flex-col justify-between"
						>
							<div className="flex justify-between items-center mb-3">
								<span className="text-[#3F4D6B] text-xs font-mono font-bold">08</span>
								<span className="w-7 h-7 rounded-full border border-[#C9D3E6] flex items-center justify-center text-[#0A1A3F] text-xs group-hover:bg-[#1D5FA8] group-hover:text-white transition-colors">
									↗
								</span>
							</div>
							<img
								src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/04nrqw85_expires_30_days.png" 
								className="w-full h-32 sm:h-36 rounded-xl object-cover mb-3"
								alt=""
							/>
							<div>
								<h4 className="text-[#0A1A3F] group-hover:text-[#1D5FA8] text-base sm:text-lg font-bold transition-colors">
									Content &amp; Video Creation
								</h4>
								<span className="text-[#3F4D6B] text-xs block mt-0.5">View project →</span>
							</div>
						</Link>
					</div>
				</section>

				{/* ============================================================ */}
				{/* 8. TESTIMONIALS */}
				{/* ============================================================ */}
				<section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-16 sm:mb-24 reveal-on-scroll">
					<div className="text-center max-w-2xl mx-auto pb-8 sm:pb-12">
						<div className="inline-flex items-center bg-white py-1.5 px-4 rounded-full border border-[#3FC3D3] mb-3">
							<span className="text-[#13295C] text-xs font-bold uppercase tracking-wider">
								Client voices
							</span>
						</div>
						<h2 className="text-[#0A1A3F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
							Trusted by people,{" "}
							<span className="text-[#1D5FA8] font-newsreader italic font-normal block sm:inline">
								chosen by businesses.
							</span>
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
						{/* Testimonial 1 */}
						<div className="bg-white p-7 rounded-[28px] border border-[#E1E8F3] shadow-lg flex flex-col justify-between">
							<div className="text-[#0A1A3F] text-5xl font-serif font-bold leading-none mb-3">“</div>
							<p className="text-[#2B3858] text-sm sm:text-base leading-relaxed mb-6">
								Our enquiries became easier to track once the campaigns and monthly reports were in one place. We finally knew which channels were worth the spend.
							</p>
							<div className="flex items-center gap-3 pt-4 border-t border-slate-100">
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/ky1twkcj_expires_30_days.png" 
									className="w-11 h-11 rounded-full object-cover shrink-0"
									alt="Meera"
								/>
								<div className="flex-1 min-w-0">
									<div className="text-[#0A1A3F] text-sm sm:text-base font-bold truncate">Meera Subramani</div>
									<div className="text-[#5B6882] text-xs truncate">Marketing Head @ Kovil Foods</div>
								</div>
								<span className="bg-white text-[#13295C] text-[10px] font-bold py-1 px-2.5 rounded-full border border-[#D9E1EE] shrink-0">
									Digital Mkt
								</span>
							</div>
						</div>

						{/* Testimonial 2 */}
						<div className="bg-[#F1F5FB] p-7 rounded-[28px] border border-[#E1E8F3] flex flex-col justify-between">
							<div className="text-[#0A1A3F] text-5xl font-serif font-bold leading-none mb-3">“</div>
							<p className="text-[#2B3858] text-sm sm:text-base leading-relaxed mb-6">
								The team took our idea from wireframes to a working mobile app and kept us informed at every release. Deployment was smooth and support has been quick.
							</p>
							<div className="flex items-center gap-3 pt-4 border-t border-slate-200">
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/2c4sf0sb_expires_30_days.png" 
									className="w-11 h-11 rounded-full object-cover shrink-0"
									alt="Arjun"
								/>
								<div className="flex-1 min-w-0">
									<div className="text-[#0A1A3F] text-sm sm:text-base font-bold truncate">Arjun Natarajan</div>
									<div className="text-[#5B6882] text-xs truncate">Founder @ Vaigai Logistics</div>
								</div>
								<span className="bg-white text-[#13295C] text-[10px] font-bold py-1 px-2.5 rounded-full border border-[#D9E1EE] shrink-0">
									App Dev
								</span>
							</div>
						</div>

						{/* Testimonial 3 */}
						<div className="bg-[#F1F5FB] p-7 rounded-[28px] border border-[#E1E8F3] flex flex-col justify-between">
							<div className="text-[#0A1A3F] text-5xl font-serif font-bold leading-none mb-3">“</div>
							<p className="text-[#2B3858] text-sm sm:text-base leading-relaxed mb-6">
								Our new website loads fast, reads clearly on a phone and brings in real enquiries. The design-first approach showed in the details.
							</p>
							<div className="flex items-center gap-3 pt-4 border-t border-slate-200">
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/ti82ibq9_expires_30_days.png" 
									className="w-11 h-11 rounded-full object-cover shrink-0"
									alt="Divya"
								/>
								<div className="flex-1 min-w-0">
									<div className="text-[#0A1A3F] text-sm sm:text-base font-bold truncate">Divya Chandran</div>
									<div className="text-[#5B6882] text-xs truncate">Director @ Sellam Interiors</div>
								</div>
								<span className="bg-white text-[#13295C] text-[10px] font-bold py-1 px-2.5 rounded-full border border-[#D9E1EE] shrink-0">
									Web Design
								</span>
							</div>
						</div>

						{/* Testimonial 4 */}
						<div className="bg-[#F1F5FB] p-7 rounded-[28px] border border-[#E1E8F3] flex flex-col justify-between">
							<div className="text-[#0A1A3F] text-5xl font-serif font-bold leading-none mb-3">“</div>
							<p className="text-[#2B3858] text-sm sm:text-base leading-relaxed mb-6">
								Scattered spreadsheets turned into one dashboard we check every morning. Reporting that took days now takes minutes.
							</p>
							<div className="flex items-center gap-3 pt-4 border-t border-slate-200">
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/egdcag98_expires_30_days.png" 
									className="w-11 h-11 rounded-full object-cover shrink-0"
									alt="Karthik"
								/>
								<div className="flex-1 min-w-0">
									<div className="text-[#0A1A3F] text-sm sm:text-base font-bold truncate">Karthik Raman</div>
									<div className="text-[#5B6882] text-xs truncate">Operations Lead @ Thenral Textiles</div>
								</div>
								<span className="bg-white text-[#13295C] text-[10px] font-bold py-1 px-2.5 rounded-full border border-[#D9E1EE] shrink-0">
									Data Mgmt
								</span>
							</div>
						</div>

						{/* Testimonial 5 */}
						<div className="bg-[#F1F5FB] p-7 rounded-[28px] border border-[#E1E8F3] flex flex-col justify-between">
							<div className="text-[#0A1A3F] text-5xl font-serif font-bold leading-none mb-3">“</div>
							<p className="text-[#2B3858] text-sm sm:text-base leading-relaxed mb-6">
								Customers get an answer at any hour now, and our team can see every ticket in one place. Complaints have dropped noticeably.
							</p>
							<div className="flex items-center gap-3 pt-4 border-t border-slate-200">
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/psov9pwx_expires_30_days.png" 
									className="w-11 h-11 rounded-full object-cover shrink-0"
									alt="Lakshmi"
								/>
								<div className="flex-1 min-w-0">
									<div className="text-[#0A1A3F] text-sm sm:text-base font-bold truncate">Lakshmi Priya</div>
									<div className="text-[#5B6882] text-xs truncate">Care Manager @ Arasu Mobiles</div>
								</div>
								<span className="bg-white text-[#13295C] text-[10px] font-bold py-1 px-2.5 rounded-full border border-[#D9E1EE] shrink-0">
									Support
								</span>
							</div>
						</div>

						{/* Testimonial 6 */}
						<div className="bg-[#F1F5FB] p-7 rounded-[28px] border border-[#E1E8F3] flex flex-col justify-between">
							<div className="text-[#0A1A3F] text-5xl font-serif font-bold leading-none mb-3">“</div>
							<p className="text-[#2B3858] text-sm sm:text-base leading-relaxed mb-6">
								They turned our technical notes into clear documentation and a polished whitepaper. Editorial review was thorough and on schedule.
							</p>
							<div className="flex items-center gap-3 pt-4 border-t border-slate-200">
								<img
									src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/l3p3iaml_expires_30_days.png" 
									className="w-11 h-11 rounded-full object-cover shrink-0"
									alt="Senthil"
								/>
								<div className="flex-1 min-w-0">
									<div className="text-[#0A1A3F] text-sm sm:text-base font-bold truncate">Senthil Kumar</div>
									<div className="text-[#5B6882] text-xs truncate">Research Lead @ Pandian Biotech</div>
								</div>
								<span className="bg-white text-[#13295C] text-[10px] font-bold py-1 px-2.5 rounded-full border border-[#D9E1EE] shrink-0">
									Publications
								</span>
							</div>
						</div>
					</div>
				</section>

				{/* ============================================================ */}
				{/* 9. BLOG / INSIGHTS */}
				{/* ============================================================ */}
				<section className="w-full bg-white py-14 sm:py-20 mb-16 sm:mb-24 border-y border-[#E1E8F3] reveal-on-scroll">
					<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
						<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full pb-8 sm:pb-10 gap-4">
							<div>
								<h2 className="text-[#0A1A3F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
									Insights for{" "}
									<span className="text-[#1D5FA8] font-newsreader italic font-normal block sm:inline">
										growing businesses.
									</span>
								</h2>
							</div>
							<Link 
								to="/blog" 
								className="text-[#1D5FA8] hover:text-[#0A1A3F] text-sm sm:text-base font-bold transition-colors shrink-0"
							>
								All articles →
							</Link>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
							{/* Blog 1 */}
							<Link to="/blog/how-ai-is-transforming-businesses" className="flex flex-col group cursor-pointer">
								<img
									src="/figma/blog-ai.png" 
									onError={(e) => { (e.target as HTMLImageElement).src = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/aw697in7_expires_30_days.png"; }}
									className="w-full h-52 sm:h-56 rounded-2xl object-cover group-hover:opacity-95 transition-opacity shadow-sm"
									alt="AI article"
								/>
								<div className="pt-4">
									<span className="text-[#1D5FA8] text-xs font-semibold uppercase tracking-wider block mb-1">
										Technology · Sep 30, 2026
									</span>
									<h3 className="text-[#0E1A33] group-hover:text-[#1D5FA8] text-lg sm:text-xl font-bold leading-snug transition-colors">
										How Artificial Intelligence Is Transforming Modern Businesses
									</h3>
								</div>
							</Link>

							{/* Blog 2 */}
							<Link to="/blog/why-your-business-needs-a-fast-website" className="flex flex-col group cursor-pointer">
								<img
									src="/figma/blog-growth.png" 
									onError={(e) => { (e.target as HTMLImageElement).src = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/t5y2w3sv_expires_30_days.png"; }}
									className="w-full h-52 sm:h-56 rounded-2xl object-cover group-hover:opacity-95 transition-opacity shadow-sm"
									alt="Website article"
								/>
								<div className="pt-4">
									<span className="text-[#1D5FA8] text-xs font-semibold uppercase tracking-wider block mb-1">
										Business · Sep 28, 2026
									</span>
									<h3 className="text-[#0E1A33] group-hover:text-[#1D5FA8] text-lg sm:text-xl font-bold leading-snug transition-colors">
										Why a Modern Website Is Essential for Business Growth
									</h3>
								</div>
							</Link>

							{/* Blog 3 */}
							<Link to="/blog/digital-transformation-guide" className="flex flex-col group cursor-pointer">
								<img
									src="/figma/blog-digital.png" 
									onError={(e) => { (e.target as HTMLImageElement).src = "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/3l6msECPkp/do685qz5_expires_30_days.png"; }}
									className="w-full h-52 sm:h-56 rounded-2xl object-cover group-hover:opacity-95 transition-opacity shadow-sm"
									alt="Transformation article"
								/>
								<div className="pt-4">
									<span className="text-[#1D5FA8] text-xs font-semibold uppercase tracking-wider block mb-1">
										Digital Transformation · Sep 25, 2026
									</span>
									<h3 className="text-[#0E1A33] group-hover:text-[#1D5FA8] text-lg sm:text-xl font-bold leading-snug transition-colors">
										Digital Transformation: Helping Businesses Move Forward
									</h3>
								</div>
							</Link>
						</div>
					</div>
				</section>

				{/* ============================================================ */}
				{/* 10. CONTACT SECTION */}
				{/* ============================================================ */}
				<section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-16 sm:mb-24 reveal-on-scroll">
					<div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14 w-full">
						{/* Left: Contact Info */}
						<div className="w-full lg:w-[480px] shrink-0">
							<div className="inline-flex items-center gap-2 mb-3">
								<div className="bg-[#3FC3D3] w-2 h-2 rounded-full animate-dot-pulse" />
								<span className="text-[#13295C] text-xs font-bold uppercase tracking-wider">
									Contact
								</span>
							</div>
							<h2 className="text-[#0A1A3F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-1">
								A short message
							</h2>
							<div className="text-[#1D5FA8] text-3xl sm:text-4xl md:text-5xl font-newsreader italic mb-4">
								is enough.
							</div>
							<p className="text-[#3F4D6B] text-sm sm:text-base leading-relaxed mb-8">
								Tell us what you need and we’ll reply with next steps. Reach us directly any time.
							</p>

							{/* Contact details cards */}
							<div className="space-y-3.5">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
									<a 
										href="mailto:info@zograha.com"
										className="flex items-center bg-white p-4 sm:p-5 gap-3.5 rounded-2xl border border-[#E1E8F3] shadow-sm hover:border-[#1D5FA8] transition-colors"
									>
										<div className="w-10 h-10 rounded-xl bg-[#EEF4FB] flex items-center justify-center text-[#1D5FA8]">
											<FaEnvelope />
										</div>
										<div className="min-w-0">
											<div className="text-[#5B6882] text-xs">Email</div>
											<div className="text-[#0A1A3F] text-sm font-bold truncate">info@zograha.com</div>
										</div>
									</a>

									<a 
										href="tel:+919962131433"
										className="flex items-center bg-white p-4 sm:p-5 gap-3.5 rounded-2xl border border-[#E1E8F3] shadow-sm hover:border-[#1D5FA8] transition-colors"
									>
										<div className="w-10 h-10 rounded-xl bg-[#EEF4FB] flex items-center justify-center text-[#1D5FA8]">
											<FaPhone />
										</div>
										<div className="min-w-0">
											<div className="text-[#5B6882] text-xs">Phone</div>
											<div className="text-[#0A1A3F] text-sm font-bold truncate">+91 9962 131 433</div>
										</div>
									</a>
								</div>

								<div className="flex items-start bg-white p-4 sm:p-5 gap-3.5 rounded-2xl border border-[#E1E8F3] shadow-sm">
									<div className="w-10 h-10 rounded-xl bg-[#EEF4FB] flex items-center justify-center text-[#1D5FA8] shrink-0 mt-0.5">
										📍
									</div>
									<div>
										<div className="text-[#5B6882] text-xs">Office</div>
										<div className="text-[#0A1A3F] text-xs sm:text-sm font-bold leading-snug mt-0.5">
											Shanmuga Towers, 3rd Floor, 38 Krishnarayar Thepakulam Street, Simmakkal, Madurai – 625001
										</div>
									</div>
								</div>

								<div className="flex items-center bg-white p-4 sm:p-5 gap-3.5 rounded-2xl border border-[#E1E8F3] shadow-sm">
									<div className="w-10 h-10 rounded-xl bg-[#EEF4FB] flex items-center justify-center text-[#1D5FA8] shrink-0">
										🕒
									</div>
									<div>
										<div className="text-[#5B6882] text-xs">Hours</div>
										<div className="text-[#0A1A3F] text-xs sm:text-sm font-bold mt-0.5">
											Mon – Sat, 9:00 AM – 6:00 PM IST
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right: Enquiry Form */}
						<div className="bg-white p-6 sm:p-8 lg:p-9 rounded-[32px] border border-[#E1E8F3] shadow-xl w-full lg:flex-1">
							<h3 className="text-[#0A1A3F] text-xl sm:text-2xl font-bold mb-6">
								Send us a message
							</h3>

							{contactSent ? (
								<div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center my-4">
									<div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
										✓
									</div>
									<h4 className="text-emerald-900 font-bold text-lg mb-1">
										Message Sent Successfully!
									</h4>
									<p className="text-emerald-700 text-sm mb-4">
										Thank you for contacting Zograha. Our engineering team will review your message and reply within 24 hours.
									</p>
									<button
										type="button"
										onClick={() => setContactSent(false)}
										className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-5 rounded-full transition-colors"
									>
										Send another message
									</button>
								</div>
							) : (
								<form 
									onSubmit={(e) => {
										e.preventDefault();
										handleHomeEnquiry();
									}}
									className="space-y-4"
								>
									<div>
										<label className="text-[#0A1A3F] text-xs sm:text-sm font-bold block mb-1.5">
											Name
										</label>
										<input
											type="text"
											placeholder="Your name"
											value={input1}
											onChange={(e) => onChangeInput1(e.target.value)}
											required
											className="w-full text-[#0A1A3F] placeholder-[#757575] bg-[#F7F9FC] text-sm sm:text-base py-3 px-4 rounded-xl border border-[#D2DBEB] outline-none focus:border-[#1D5FA8] focus:bg-white transition-all"
										/>
									</div>

									<div>
										<label className="text-[#0A1A3F] text-xs sm:text-sm font-bold block mb-1.5">
											Work email
										</label>
										<input
											type="email"
											placeholder="name@company.com"
											value={input2}
											onChange={(e) => onChangeInput2(e.target.value)}
											required
											className="w-full text-[#0A1A3F] placeholder-[#757575] bg-[#F7F9FC] text-sm sm:text-base py-3 px-4 rounded-xl border border-[#D2DBEB] outline-none focus:border-[#1D5FA8] focus:bg-white transition-all"
										/>
									</div>

									<div>
										<label className="text-[#0A1A3F] text-xs sm:text-sm font-bold block mb-1.5">
											What do you need?
										</label>
										<textarea
											rows={3}
											placeholder="A sentence or two is plenty"
											value={homeMessage}
											onChange={(e) => setHomeMessage(e.target.value)}
											className="w-full text-[#0A1A3F] placeholder-[#757575] bg-[#F7F9FC] text-sm sm:text-base py-3 px-4 rounded-xl border border-[#D2DBEB] resize-none outline-none focus:border-[#1D5FA8] focus:bg-white transition-all"
										/>
									</div>

									<button 
										type="submit"
										className="inline-flex items-center bg-[#1D5FA8] hover:bg-[#15467e] text-white py-2 pl-6 pr-2 rounded-full transition-all group shadow-md cursor-pointer mt-2"
									>
										<span className="text-sm sm:text-base font-bold mr-3">
											Continue to full enquiry
										</span>
										<span className="bg-[#0A1A3F] text-white w-9 h-9 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform text-sm font-bold">
											→
										</span>
									</button>
								</form>
							)}
						</div>
					</div>
				</section>

				{/* ============================================================ */}
				{/* 11. FINAL CTA BANNER */}
				{/* ============================================================ */}
				<section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-16 sm:mb-24 reveal-on-scroll">
					<div 
						className="bg-white p-2.5 sm:p-3.5 rounded-[32px] sm:rounded-[44px] border border-[#E1E8F3] shadow-2xl overflow-hidden"
					>
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
			</div>

			<Footer />
		</div>
	);
}
