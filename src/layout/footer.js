import React from "react";

/**
 * Footer.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
const Footer = () => {
	return (
		<div className="w-full flex px-[5%] lg:px-[17.5%] justify-center">
			<div className="w-full lg:min-w-[1330px] lg:max-w-[1920px] mx-auto justify-center items-center  flex flex-col py-12">
				<div className="flex w-full flex-col items-stretch mt-16 mb-12 max-md:max-w-full max-md:my-10">
					<div className="max-md:max-w-full">
						<div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
							<div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
								<div className="items-stretch flex flex-col ">
									<img
										loading="lazy"
										src="/img/logos/Logo Black.png"
										className="aspect-square object-contain object-left h-[56px] justify-center items-center overflow-hidden shrink-0 max-w-full"
										alt=""
									/>
									<div className="text-slate-500 text-lg mt-8 md:w-2/3">
										Payments and Loyalty management for your
										business
									</div>
								</div>
							</div>
							<div className="flex flex-col items-stretch w-[70%] ml-5 max-md:w-full max-md:ml-0">
								<div className="grow max-md:max-w-full max-md:mt-10 max-md:pr-5">
									<div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
										<div className="flex flex-col items-stretch w-1/3 max-md:w-full max-md:ml-0">
											<div className="items-stretch flex grow flex-col max-md:mt-10">
												<div className="text-gray-900 text-justify text-xl font-semibold leading-8 tracking-tight">
													Product
												</div>
												<div className="text-slate-500 text-justify text-base leading-6 tracking-tight mt-8">
													QR Payments
												</div>
												<div className="text-slate-500 text-justify text-base leading-6 tracking-tight mt-6">
													Gift Cards
												</div>
											</div>
										</div>
										<div className="flex flex-col items-stretch w-1/3 ml-5 max-md:w-full max-md:ml-0">
											<div className="items-stretch flex grow flex-col max-md:mt-10">
												<div className="text-gray-900 text-justify text-xl font-semibold leading-8 tracking-tight whitespace-nowrap">
													Company
												</div>
												<div className="text-slate-500 text-justify text-base leading-6 tracking-tight whitespace-nowrap mt-8">
													About Us
												</div>
												<div className="text-slate-500 text-justify text-base leading-6 tracking-tight whitespace-nowrap mt-6">
													Contact Us
												</div>

												<div className="text-slate-500 text-justify text-base leading-6 tracking-tight mt-8">
													Blog
												</div>
												<div className="text-slate-500 text-justify text-base leading-6 tracking-tight mt-6">
													FAQ
												</div>
											</div>
										</div>
										<div className="flex flex-col items-stretch w-1/3 ml-5 max-md:w-full max-md:ml-0">
											<div className="items-stretch flex grow flex-col max-md:mt-10">
												<div className="text-gray-900 text-justify text-xl font-semibold leading-8 tracking-tight whitespace-nowrap">
													Follow Us
												</div>
												<div className="text-slate-500 text-justify text-base leading-6 tracking-tight whitespace-nowrap mt-8">
													LinkedIn
												</div>
												<div className="text-slate-500 text-justify text-base leading-6 tracking-tight mt-6">
													Twitter
												</div>
												<div className="text-slate-500 text-justify text-base leading-6 tracking-tight whitespace-nowrap mt-6">
													Instagram
												</div>
												<div className="text-slate-500 text-justify text-base leading-6 tracking-tight whitespace-nowrap mt-6">
													Facebook
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/73f35a235ec30e4c431a5046d9002c2b04d53abd70cf8afe4e340c80253584cb?apiKey=4ae40828982748c8bbab102ae386bfd5&"
						className="aspect-[1200] object-contain object-center w-full stroke-[1px] stroke-violet-300 overflow-hidden mt-16 max-md:max-w-full max-md:mt-10"
						alt=""
					/>
					<div className="flex w-full items-stretch justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
						<div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
							<div className="text-gray-900 text-justify text-lg font-semibold leading-7 tracking-tight grow whitespace-nowrap">
								Privacy Policy
							</div>
							<div className="text-gray-900 text-justify text-lg leading-7 tracking-tight">
								|
							</div>
							<div className="text-gray-900 text-justify text-lg font-semibold leading-7 tracking-tight">
								Terms & Conditions
							</div>
						</div>
						<div className="text-slate-500 text-justify text-base font-medium leading-6 tracking-tight my-auto">
							© Otto Technologies 2023
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
