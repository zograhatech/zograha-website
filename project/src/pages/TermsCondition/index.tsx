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
<div className="self-stretch bg-[#0A1A3F] pt-[72px] px-16 mb-[51px] mx-4 rounded-[36px]">
					<div className="flex flex-col items-center self-stretch">
						<span className="text-[#9FB6E0] text-[13px]" >
							Home / Terms &amp; Conditions
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
									Our service terms,
								</span>
							</div>
							<div className="flex flex-col items-center self-stretch">
								<span className="text-[#7FD6E2] text-7xl" >
									clearly stated.
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center self-stretch pt-6">
						<span className="text-[#C9D7F2] text-[21px] text-center w-[620px]" >
							How our services, revisions, refunds, delivery and communication work, stated plainly.
						</span>
					</div>
					<div className="self-stretch h-[41px] pt-6 mb-[38px]">
					</div>
				</div>
				<div className="flex flex-col lg:flex-row items-start self-stretch mb-[45px] mx-4 md:mx-12 lg:mx-24 xl:mx-48">
					<div className="bg-white w-[260px] p-[21px] mr-20 rounded-3xl border border-solid border-[#E1E8F3]" 
						style={{
							boxShadow: "0px 20px 40px #0A1A3F4D"
						}}>
						<div className="flex flex-col items-start self-stretch pb-2 pl-2">
							<span className="text-[#5B6882] text-[11px]" >
								On this page
							</span>
						</div>
						<div className="flex items-center self-stretch py-[9px] px-2 gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-0.5">
								<span className="text-[#1D5FA8] text-[11px]" >
									01
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Revision Policy
							</span>
						</div>
						<div className="flex items-center self-stretch py-[9px] px-2 mb-[1px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									02
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Refund Policy
							</span>
						</div>
						<div className="flex items-center self-stretch py-[9px] px-2 mb-[1px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px] mb-5" >
									03
								</span>
							</div>
							<div className="flex flex-1 flex-col">
								<span className="text-[#3F4D6B] text-sm" >
									My Account / Client Communication Area
								</span>
							</div>
						</div>
						<div className="flex items-center self-stretch py-[9px] px-2 mb-[1px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									04
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start">
								<span className="text-[#3F4D6B] text-sm" >
									Quality Assurance Policy
								</span>
							</div>
						</div>
						<div className="flex items-center self-stretch py-[9px] px-2 mb-[1px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center pt-0.5">
								<span className="text-[#1D5FA8] text-[11px] mb-5" >
									05
								</span>
							</div>
							<div className="flex flex-1 flex-col">
								<span className="text-[#3F4D6B] text-sm" >
									Customer Satisfaction Policy
								</span>
							</div>
						</div>
						<div className="flex items-center self-stretch py-[9px] px-2 mb-[1px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									06
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Domain and Hosting
							</span>
						</div>
						<div className="flex items-center self-stretch py-[9px] px-2 mb-[1px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									07
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Delivery Policy
							</span>
						</div>
						<div className="flex items-center self-stretch py-[9px] px-2 gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									08
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Record Maintenance
							</span>
						</div>
						<div className="flex items-center self-stretch py-[9px] px-2 mb-[1px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									09
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Customer Support
							</span>
						</div>
						<div className="flex items-center self-stretch py-[9px] px-2 mb-[1px] gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									10
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start">
								<span className="text-[#3F4D6B] text-sm" >
									Correspondence Policy
								</span>
							</div>
						</div>
						<div className="flex items-center self-stretch py-[9px] px-2 gap-2.5 rounded-xl">
							<div className="flex flex-col shrink-0 items-center py-[1px]">
								<span className="text-[#1D5FA8] text-[11px]" >
									11
								</span>
							</div>
							<span className="text-[#3F4D6B] text-sm" >
								Contact Information
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
									Revision Policy
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									The number and scope of revisions available to a client depend on the package selected at the time of purchase. Clients may request revisions within the limits of their selected package without additional charges, provided that the original design concept, direction, and approved requirements remain unchanged.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Any request that involves creating a completely new concept, changing the approved design direction, or substantially altering the original brief may be treated as a new project or may incur additional charges.
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
									Refund Policy
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<div className="flex flex-col items-start self-stretch">
									<span className="text-[#3F4D6B] text-[17px]" >
										Zograha Technologies may not provide a refund in the following circumstances:
									</span>
								</div>
								<div className="flex flex-col self-stretch gap-2.5">
									<div className="flex items-center self-stretch bg-[#F7F9FC] py-[13px] rounded-2xl border border-solid border-[#E6EAF4]">
										<div className="flex flex-col shrink-0 items-center pt-[3px] ml-[17px] mr-3">
											<div className="flex flex-col items-start bg-[#DCE8F6] py-[1px] px-[5px] rounded-[10px]">
												<span className="text-[#13295C] text-[11px]" >
													✓
												</span>
											</div>
										</div>
										<span className="text-[#3F4D6B] text-base" >
											The client purchased a promotional or specially priced service package.
										</span>
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
											placeholder="The client has approved the initial design concept."
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
											placeholder="The client has already requested or received revisions."
											value={input2}
											onChange={(event)=>onChangeInput2(event.target.value)}
											className="flex-1 self-stretch text-[#3F4D6B] bg-transparent text-base py-[13px] mr-1 border-0"
										/>
									</div>
									<div className="flex items-start self-stretch bg-[#F7F9FC] py-[13px] px-[17px] gap-3 rounded-2xl border border-solid border-[#E6EAF4]">
										<div className="flex flex-col shrink-0 items-center pt-[3px]">
											<div className="flex flex-col items-start bg-[#DCE8F6] py-[1px] px-[5px] rounded-[10px]">
												<span className="text-[#13295C] text-[11px]" >
													✓
												</span>
											</div>
										</div>
										<span className="flex-1 text-[#3F4D6B] text-base" >
											The client cancels the project for reasons unrelated to Zograha Technologies or its policies.
										</span>
									</div>
									<div className="flex items-start self-stretch bg-[#F7F9FC] py-[13px] px-[17px] gap-3 rounded-2xl border border-solid border-[#E6EAF4]">
										<div className="flex flex-col shrink-0 items-center pt-[3px]">
											<div className="flex flex-col items-start bg-[#DCE8F6] py-[1px] px-[5px] rounded-[10px]">
												<span className="text-[#13295C] text-[11px]" >
													✓
												</span>
											</div>
										</div>
										<span className="flex-1 text-[#3F4D6B] text-base" >
											The client has breached Zograha Technologies&#39; Terms &amp; Conditions or Privacy Policy.
										</span>
									</div>
									<div className="flex items-start self-stretch bg-[#F7F9FC] py-[13px] px-[17px] gap-3 rounded-2xl border border-solid border-[#E6EAF4]">
										<div className="flex flex-col shrink-0 items-center pt-[3px]">
											<div className="flex flex-col items-start bg-[#DCE8F6] py-[1px] px-[5px] rounded-[10px]">
												<span className="text-[#13295C] text-[11px]" >
													✓
												</span>
											</div>
										</div>
										<span className="flex-1 text-[#3F4D6B] text-base" >
											The client requests a fundamentally different design concept after the project has commenced.
										</span>
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
											placeholder="The client has approved the final deliverables."
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
											placeholder="The client has accepted multiple rounds of revisions for the service."
											value={input4}
											onChange={(event)=>onChangeInput4(event.target.value)}
											className="flex-1 self-stretch text-[#3F4D6B] bg-transparent text-base py-[13px] mr-1 border-0"
										/>
									</div>
									<div className="flex items-start self-stretch bg-[#F7F9FC] py-[13px] px-[17px] gap-3 rounded-2xl border border-solid border-[#E6EAF4]">
										<div className="flex flex-col shrink-0 items-center pt-[3px]">
											<div className="flex flex-col items-start bg-[#DCE8F6] py-[1px] px-[5px] rounded-[10px]">
												<span className="text-[#13295C] text-[11px]" >
													✓
												</span>
											</div>
										</div>
										<span className="flex-1 text-[#3F4D6B] text-base" >
											For bundled services, dissatisfaction with one individual service will only be considered against that particular service and will not automatically qualify the client for a refund of the complete bundle.
										</span>
									</div>
								</div>
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
								<div className="flex flex-1 flex-col items-start">
									<span className="text-[#0A1A3F] text-[28px] font-bold" >
										My Account / Client Communication Area
									</span>
								</div>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									The My Account section, client portal, or designated communication area is provided as a convenient method for sharing project updates, instructions, questions, feedback, and information with the client.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Clients are responsible for regularly checking their account or project communication area for messages, design submissions, instructions, deadlines, and other important updates.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Failure to monitor the account or communication area may affect project timelines and may also impact the client&#39;s ability to raise certain revision or refund requests within the applicable time period.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									If the client requires assistance using the account or communication system, they may contact Zograha Technologies customer support.
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
									Quality Assurance Policy
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Zograha Technologies aims to develop designs and digital solutions in accordance with the requirements and specifications provided by the client in the approved project brief.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Our team makes reasonable efforts to conduct appropriate research and quality checks to deliver professional, relevant, and original work that aligns with the agreed requirements.
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
									Customer Satisfaction Policy
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									We aim to provide a high level of customer satisfaction by making reasonable revisions within the limits of the selected package and agreed project scope.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Where revisions are included in the selected package, we will work with the client to refine the deliverable according to the original approved concept and project requirements.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Requests that require a completely new concept, a significant change in direction, or work outside the agreed scope may be treated as additional work and may involve additional charges.
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
									Domain and Hosting
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Where specifically included in the selected package, domain registration and hosting services may be provided at no additional cost for the applicable period.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Where website packages include email accounts, those accounts may be configured with compatible third-party email applications such as Microsoft Outlook or other supported email clients.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									If a client chooses not to host their website through Zograha Technologies, email services or other hosting-related benefits included with the package may no longer be available.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Specific domain, hosting, renewal, storage, bandwidth, and email conditions will depend on the package selected and the applicable service agreement.
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
									Delivery Policy
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Project files and deliverables will be provided through the agreed communication method or client account according to the estimated delivery schedule stated in the order confirmation or service agreement.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Where applicable, the client may also receive an email notification when a deliverable is made available through the client account or designated delivery channel.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									The date and time at which a design or deliverable is made available to the client may be used when determining applicable revision and refund periods.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Standard delivery timelines for customized design projects will depend on the type, scope, complexity, and requirements of the project. Unless otherwise agreed, clients will be informed of the estimated delivery schedule after the project requirements are received.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Where rush delivery is available, an additional fee may apply. Rush delivery timelines and charges will be communicated and agreed upon before the service is initiated.
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
									Record Maintenance
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Zograha Technologies may retain an archive of final project files and approved deliverables for record-keeping and service-support purposes.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									If a client requires previously delivered final files again, they may contact customer support. Availability of archived files may depend on the type of project and the period for which the records have been retained.
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
								<span className="text-[#0A1A3F] text-[28px] font-bold" >
									Customer Support
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Zograha Technologies provides customer support to assist clients with project-related questions, service information, technical concerns, and other relevant queries.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Clients may contact us through the official communication channels published on the Zograha Technologies website. We aim to respond to customer enquiries as promptly as reasonably possible.
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
									Correspondence Policy
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									Clients should communicate with Zograha Technologies only through official communication channels published on our website or provided directly by our authorized representatives.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Zograha Technologies will not be responsible for communications, instructions, payment requests, or representations received from unauthorized email addresses, telephone numbers, social media accounts, or third parties claiming to represent the company.
								</span>
								<span className="text-[#3F4D6B] text-[17px]" >
									Clients should verify the authenticity of any communication before sharing confidential information, making payments, or approving project instructions.
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
									Contact Information
								</span>
							</div>
							<div className="flex flex-col self-stretch pt-[18px] gap-3.5">
								<span className="text-[#3F4D6B] text-[17px]" >
									For questions regarding these Terms &amp; Conditions, revisions, refunds, delivery, or other services, please contact Zograha Technologies through the official contact details published on our website.
								</span>
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
