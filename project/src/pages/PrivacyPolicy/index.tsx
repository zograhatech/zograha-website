import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Page(props?: any) {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	return (
		<div className="flex flex-col bg-white overflow-x-hidden min-h-screen">
			<Navbar />
			<div className="self-stretch overflow-hidden" 
				style={{
					background: "linear-gradient(180deg, #E3ECF9, #F7F9FC)"
				}}>
<div className="self-stretch bg-[#0A1A3F] pt-[72px] px-16 mb-[55px] mx-4 rounded-[36px]">
					<div className="flex flex-col items-center self-stretch">
						<span className="text-[#9FB6E0] text-[13px]" >
							Home / Privacy Policy
						</span>
					</div>
					<div className="flex flex-col items-center self-stretch pt-[21px]">
						<div className="flex items-center py-2 px-[17px] gap-2 rounded-[999px] border border-solid border-[#FFFFFF47]">
							<div className="bg-[#3FC3D3] w-[7px] h-[7px] rounded-[3px]">
							</div>
							<span className="text-[#DCE8F6] text-xs" >
								Legal
							</span>
						</div>
					</div>
					<div className="flex flex-col items-center self-stretch pt-6">
						<div className="w-[900px]">
							<div className="flex flex-col items-center self-stretch">
								<span className="text-white text-7xl font-bold" >
									How we handle
								</span>
							</div>
							<div className="flex flex-col items-center self-stretch">
								<span className="text-[#7FD6E2] text-7xl" >
									your information.
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center self-stretch pt-6">
						<span className="text-[#C9D7F2] text-[21px] text-center w-[620px]" >
							Protecting our customers&#39; data and information is our top priority. We do not rent or sell the information you provide.
						</span>
					</div>
					<div className="self-stretch h-[41px] pt-6 mb-[38px]">
					</div>
				</div>
				<div className="flex flex-col lg:flex-row items-start self-stretch mb-[45px] mx-4 md:mx-12 lg:mx-24 xl:mx-48">
					<div className="flex flex-col items-start bg-white w-[260px] pt-[21px] px-[29px] mr-20 rounded-3xl border border-solid border-[#E1E8F3]" 
						style={{
							boxShadow: "0px 20px 40px #0A1A3F4D"
						}}>
						<span className="text-[#5B6882] text-[11px] mb-[17px]" >
							On this page
						</span>
						<div className="flex items-center mb-[18px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-0.5">
								<span className="text-[#1D5FA8] text-[11px]" >
									01
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								The Policy
							</span>
						</div>
						<div className="flex items-center self-stretch mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px] mb-5" >
									02
								</span>
							</div>
							<div className="flex flex-1 flex-col">
								<span className="text-[#3F4D6B] text-sm" >
									Personal Information Collected
								</span>
							</div>
						</div>
						<div className="flex items-center mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									03
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Use of Collected Data
							</span>
						</div>
						<div className="flex items-center self-stretch mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px] mb-5" >
									04
								</span>
							</div>
							<div className="flex flex-1 flex-col">
								<span className="text-[#3F4D6B] text-sm" >
									Social Media Features and Widgets
								</span>
							</div>
						</div>
						<div className="flex items-center mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									05
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								3rd Party Sharing
							</span>
						</div>
						<div className="flex items-center self-stretch mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px] mb-5" >
									06
								</span>
							</div>
							<div className="flex flex-1 flex-col">
								<span className="text-[#3F4D6B] text-sm" >
									Security of Personal Information
								</span>
							</div>
						</div>
						<div className="flex items-center mb-[18px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									07
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Email Accounts
							</span>
						</div>
						<div className="flex items-center self-stretch mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px] mb-5" >
									08
								</span>
							</div>
							<div className="flex flex-1 flex-col">
								<span className="text-[#3F4D6B] text-sm" >
									Access to Registered Accounts
								</span>
							</div>
						</div>
						<div className="flex items-center self-stretch mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px] mb-5" >
									09
								</span>
							</div>
							<div className="flex flex-1 flex-col">
								<span className="text-[#3F4D6B] text-sm" >
									Changing and Deleting / Unsubscribing Accounts
								</span>
							</div>
						</div>
						<div className="flex items-center mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									10
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Cookies and Their Use
							</span>
						</div>
						<div className="flex items-center self-stretch mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px] mb-5" >
									11
								</span>
							</div>
							<div className="flex flex-1 flex-col">
								<span className="text-[#3F4D6B] text-sm" >
									IP Addresses and Website Usage
								</span>
							</div>
						</div>
						<div className="flex items-center self-stretch mb-[18px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px] mb-5" >
									12
								</span>
							</div>
							<div className="flex flex-1 flex-col">
								<span className="text-[#3F4D6B] text-sm" >
									Official Zograha Communications
								</span>
							</div>
						</div>
						<div className="flex items-center mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									13
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Third-Party Cookies
							</span>
						</div>
						<div className="flex items-center self-stretch mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px] mb-5" >
									14
								</span>
							</div>
							<div className="flex flex-1 flex-col">
								<span className="text-[#3F4D6B] text-sm" >
									Meta Ads &amp; Google Ads Account Access
								</span>
							</div>
						</div>
						<div className="flex items-center self-stretch mb-[19px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px] mb-5" >
									15
								</span>
							</div>
							<div className="flex flex-1 flex-col">
								<span className="text-[#3F4D6B] text-sm" >
									Notice of Changes to Privacy Policy
								</span>
							</div>
						</div>
						<div className="flex items-center mb-[1px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px]" >
									16
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Questions
							</span>
						</div>
					</div>
					<div className="flex flex-1 flex-col gap-4">
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										01
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									The Policy
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									At Zograha Technologies, the protection of our customers&#39; data and information is our top priority on www.zograha.com, and we regard it as our responsibility. Although we collect information from our customers, it is used to improve our services and customer experience. We recognize that maintaining and using our customers&#39; information responsibly is our responsibility. We DO NOT rent or sell the information provided by our customers online.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									This Privacy Policy describes how the personal information of our customers is collected, why we collect it, and how we use it. It also outlines the choices you can make regarding how we collect and use your information.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										02
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Personal Information Collected
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									The information gathered by Zograha Technologies may include the customer&#39;s name, email address, postal/address information, and telephone number. This information may be provided by the customer while requesting information, contacting us, or submitting information through our website.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									We may also use email addresses or contact information received through our communication systems, such as our Contact Us form, to respond to comments, questions, enquiries, and service requests.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Our organization may also maintain records of the services or products that have previously interested our customers, as well as relevant purchases or enquiries made through our website.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										03
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Use of Collected Data
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									The data collected is used in various ways to improve our services. Zograha Technologies may use the information provided by customers to process enquiries and service requests.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									We may also send emails to confirm enquiries or provide requested information. Our customer service team may contact customers by telephone, email, or other provided contact details if we have additional questions regarding an enquiry or service request.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Customers may also receive updates regarding our website and services, which may include newsletters, service updates, offers, and promotional information.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									We may use information about customer interests and interactions with our website to improve our website, services, communication, and overall customer experience.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										04
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Social Media Features and Widgets
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Our website may include social media features, such as Facebook, Instagram, LinkedIn, YouTube, sharing buttons, or other interactive features.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									These features may collect your IP address, the page you are visiting on our website, and may set cookies to enable the feature to function properly.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Social media features and widgets may be hosted by third parties or directly on our website. Your interactions with these features are governed by the privacy policy of the organization providing them.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										05
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									3rd Party Sharing
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Personal information will not be disclosed to third parties except where necessary to provide our services, where authorized by the customer, or where required or permitted by applicable law.
								</span>
								<div className="flex flex-col items-start self-stretch">
									<span className="text-[#3F4D6B] text-[17px]" >
										We do not sell, rent, or trade customers&#39; personal information.
									</span>
								</div>
								<span className="text-[#3F4D6B] text-[17px]" >
									We follow generally accepted industry practices to protect personal information submitted to us, both during transmission and after we receive it. However, no method of transmission over the Internet or electronic storage is completely secure. Therefore, while we strive to use commercially reasonable methods to protect your personal information, we cannot guarantee its absolute security.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									If you have any questions concerning privacy on our website, you can contact us at: info@zograha.com
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										06
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Security of Personal Information
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									The personal information of our customers is protected using reasonable security measures. Where applicable, information transmitted through our website may be protected using Secure Sockets Layer (SSL) or similar encryption technologies.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									We take reasonable steps to protect customer information against unauthorized access, alteration, disclosure, or destruction.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										07
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Email Accounts
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Where email accounts are provided as part of a website or hosting service offered by Zograha Technologies, they may be configured using third-party email software such as Microsoft Outlook or other compatible email applications.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									If a customer chooses to discontinue website hosting or related services with us, email accounts associated with those services may no longer be provided.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										08
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Access to Registered Accounts
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Where our website provides registered customer accounts, customers may access their accounts by signing in through the website.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Once signed in, customers may have access to information and records they have previously submitted to the website.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Where available, customers may update their information through their account settings.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										09
									</span>
								</div>
								<span className="flex-1 text-[#0A1A3F] text-[28px] font-bold" >
									Changing and Deleting / Unsubscribing Accounts
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Customers may send an email request to Zograha Technologies to request cancellation of an account, deletion of personal information, or removal from promotional communications.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									We will take reasonable steps to process such requests, subject to applicable legal and business requirements.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									We will retain your information for as long as your account remains active or as necessary to provide our services.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									If you wish to close your account or request that we no longer use your information to provide services, please contact us.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									We may retain and use certain information as necessary to comply with legal obligations, resolve disputes, enforce agreements, and protect our legitimate business interests.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										10
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Cookies and Their Use
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Cookies are small alphanumeric identifiers that are transferred to your device through your web browser. Cookies enable our systems to recognize your browser and remember certain information during your visits to our website.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									You can use your browser settings to control whether cookies are accepted. Most browsers provide options to:
								</span>
								<div className="flex flex-col self-stretch gap-2.5">
									<div className="flex items-center self-stretch bg-[#F7F9FC] rounded-2xl border border-solid border-[#E6EAF4]">
										<div className="flex flex-col shrink-0 items-center pt-[3px] ml-[17px] mr-3">
											<div className="flex flex-col items-start bg-[#DCE8F6] py-[1px] px-[5px] rounded-[10px]">
												<span className="text-[#13295C] text-[11px]" >
													✓
												</span>
											</div>
										</div>
										<input
											placeholder="Block new cookies"
											value={input1}
											onChange={(event)=>onChangeInput1(event.target.value)}
											className="flex-1 self-stretch text-[#3F4D6B] bg-transparent text-base py-[13px] mr-1 border-0"
										/>
									</div>
									<div className="flex items-center self-stretch bg-[#F7F9FC] rounded-2xl border border-solid border-[#E6EAF4]">
										<div className="flex flex-col shrink-0 items-center pt-[3px] ml-[17px] mr-3">
											<div className="flex flex-col items-start bg-[#DCE8F6] py-[1px] px-[5px] rounded-[10px]">
												<span className="text-[#13295C] text-[11px]" >
													✓
												</span>
											</div>
										</div>
										<input
											placeholder="Notify you when a new cookie is received"
											value={input2}
											onChange={(event)=>onChangeInput2(event.target.value)}
											className="flex-1 self-stretch text-[#3F4D6B] bg-transparent text-base py-[13px] mr-1 border-0"
										/>
									</div>
									<div className="flex items-center self-stretch bg-[#F7F9FC] rounded-2xl border border-solid border-[#E6EAF4]">
										<div className="flex flex-col shrink-0 items-center pt-[3px] ml-[17px] mr-3">
											<div className="flex flex-col items-start bg-[#DCE8F6] py-[1px] px-[5px] rounded-[10px]">
												<span className="text-[#13295C] text-[11px]" >
													✓
												</span>
											</div>
										</div>
										<input
											placeholder="Disable cookies completely"
											value={input3}
											onChange={(event)=>onChangeInput3(event.target.value)}
											className="flex-1 self-stretch text-[#3F4D6B] bg-transparent text-base py-[13px] mr-1 border-0"
										/>
									</div>
									<div className="flex items-center self-stretch bg-[#F7F9FC] rounded-2xl border border-solid border-[#E6EAF4]">
										<div className="flex flex-col shrink-0 items-center pt-[3px] ml-[17px] mr-3">
											<div className="flex flex-col items-start bg-[#DCE8F6] py-[1px] px-[5px] rounded-[10px]">
												<span className="text-[#13295C] text-[11px]" >
													✓
												</span>
											</div>
										</div>
										<input
											placeholder="Delete existing cookies"
											value={input4}
											onChange={(event)=>onChangeInput4(event.target.value)}
											className="flex-1 self-stretch text-[#3F4D6B] bg-transparent text-base py-[13px] mr-1 border-0"
										/>
									</div>
								</div>
								<span className="text-[#3F4D6B] text-[17px]" >
									However, disabling cookies may affect certain features and functionality of our website.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										11
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									IP Addresses and Website Usage
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									We may monitor your IP address to identify technical issues with our servers and to administer our website.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Your IP address may also be used to collect general demographic information, such as your approximate location and Internet service provider.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									We may collect aggregated information about how visitors use our website. This may include information regarding browsing patterns, website activity, and search queries.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									IP address and log information may be used for website administration, security, analytics, and performance purposes.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										12
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Official Zograha Communications
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									You agree that Zograha Technologies is not responsible for communications received from email addresses or telephone numbers that are not officially published by us on our website or other official communication channels.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Customers should verify that communications claiming to represent Zograha Technologies originate from our official domain or officially published contact details.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Zograha Technologies will only assume responsibility for communications sent through our official company communication channels.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										13
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Third-Party Cookies
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									The use of cookies by our partners, affiliates, tracking service organizations, analytics providers, and other service providers may not be covered by this Privacy Policy.
								</span>
								<div className="flex flex-col items-start self-stretch">
									<span className="text-[#3F4D6B] text-[17px]" >
										We may not have access to or control over these cookies.
									</span>
								</div>
								<span className="text-[#3F4D6B] text-[17px]" >
									These third-party providers may use session or other cookies to make it easier for you to navigate our website, analyze website usage, measure advertising performance, or provide other services.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										14
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Meta Ads &amp; Google Ads Account Access
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch pt-[18px]">
								<span className="text-[#3F4D6B] text-[17px] w-[585px]" >
									When providing digital advertising services, Zograha Technologies may receive login credentials or authorized account access from clients to manage their Meta Ads, Google Ads, and related advertising accounts. Such credentials and account information will be kept confidential and used only for providing the requested advertising services. We will not share or disclose them to unauthorized third parties.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										15
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Notice of Changes to Privacy Policy
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									If we decide to change this Privacy Policy, we will publish the changes on this page, our homepage, or other appropriate locations so that you are aware of what information we collect, how we use it, and under what circumstances we may disclose it.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									We reserve the right to modify this Privacy Policy at any time. We encourage you to review this Privacy Policy periodically.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									If we make material changes to this policy, we may notify you through our website, email, or another appropriate method before the changes take effect.
								</span>
							</div>
						</div>
						<div className="self-stretch bg-white py-[37px] px-[41px] rounded-[28px] border border-solid border-[#E1E8F3]" 
							style={{
								boxShadow: "0px 20px 40px #0A1A3F4D"
							}}>
							<div className="flex items-center self-stretch gap-3.5">
								<div className="flex flex-col shrink-0 items-center bg-[#EEF4FB] text-left py-[13px] px-3.5 rounded-[14px] border-0">
									<span className="text-[#13295C] text-[13px]" >
										16
									</span>
								</div>
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Questions
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									If you have any questions regarding this Privacy Policy or our use of your information, please contact:
								</span>
								<div className="flex flex-col items-start self-stretch">
									<span className="text-[#3F4D6B] text-[17px]" >
										Zograha Technologies
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch">
									<span className="text-[#3F4D6B] text-[17px]" >
										Website: www.zograha.com
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch">
									<span className="text-[#3F4D6B] text-[17px]" >
										Email: info@zograha.com
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="self-stretch bg-white p-2 sm:p-[13px] mb-11 mx-2 sm:mx-6 md:mx-16 lg:mx-[152px] rounded-[32px] sm:rounded-[44px] border border-solid border-[#E1E8F3] overflow-hidden" 
					style={{
						boxShadow: "0px 40px 80px #0A1A3F70"
					}}>
					<div className="flex flex-col items-start self-stretch relative py-10 sm:py-[71px] px-6 sm:pl-16 rounded-[26px] sm:rounded-[34px] overflow-hidden" 
						style={{
							background: "linear-gradient(180deg, #13295C, #1D5FA8)"
						}}>
						<div className="flex flex-1 flex-col items-start bg-[#FFFFFF0D] absolute top-0 bottom-0 right-0 pl-20 rounded-[380px] pointer-events-none">
							<div className="flex flex-col items-start bg-[#FFFFFF0D] py-[1px] pl-[75px] rounded-[300px]">
								<div className="flex flex-col items-start bg-[#7FD6E21A] py-[70px] pl-[70px] rounded-[225px]">
									<div className="items-start bg-[#FFFFFF1A] py-[65px] pl-[65px] rounded-[155px]">
										<div className="bg-[#FFFFFF26] w-[90px] h-[180px] rounded-[90px]">
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-start w-full max-w-[700px] pt-0.5 relative z-10">
							<div className="flex items-center py-[7px] px-[15px] gap-2 rounded-[999px] border border-solid border-[#FFFFFF4D]">
								<div className="bg-[#3FC3D3] w-[7px] h-[7px] rounded-[3px]">
								</div>
								<span className="text-[#DCE8F6] text-[11px]" >
									Let’s talk
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch pt-5">
								<span className="text-white text-[44px] font-bold" >
									Tell us what you need built,
								</span>
								<span className="text-[#7FD6E2] text-[44px]" >
									or what isn’t working.
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch">
								<div className="flex flex-col items-center pt-[18px]">
									<span className="text-[#DCE8F6] text-[17px] max-w-[520px]" >
										Share a few details. We’ll reply with next steps and questions, not a generic brochure.
									</span>
								</div>
								<div className="flex flex-wrap items-start self-stretch pt-8 gap-3">
									<Link to="/contact" className="flex shrink-0 items-center bg-[#3FC3D3] hover:bg-[#34b0be] py-2 rounded-[999px] transition-colors">
										<span className="text-[#0A1A3F] text-base font-bold ml-[26px] mr-[18px]">
											Start a project
										</span>
										<span className="flex flex-col shrink-0 items-start bg-[#0A1A3F] text-left py-2.5 px-[15px] mr-2 rounded-[22px]" style={{ boxShadow: "0px 1px 0px #FFFFFF57" }}>
											<span className="text-white text-lg font-bold">
												→
											</span>
										</span>
									</Link>
									<Link to="/services" className="flex shrink-0 items-center bg-[#0A1A3F] hover:bg-[#13295c] py-2 rounded-[999px] transition-colors">
										<span className="text-white text-base font-bold ml-[26px] mr-[19px]" >
											Browse services
										</span>
										<span className="flex flex-col shrink-0 items-start bg-[#2B4A8C] text-left py-2.5 px-[15px] mr-2 rounded-[22px]">
											<span className="text-white text-lg font-bold" >
												→
											</span>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
