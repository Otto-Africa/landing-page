import { Drawer } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaCaretDown, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const aboutRef = useRef(null);
	const whyRef = useRef(null);
	const [aboutIsOpen, setAboutIsOpen] = useState(false);
	const [whyIsOpen, setWhyIsOpen] = useState(false);
	const [mobileWhyOpen, setMobileWhyOpen] = useState(false);
	const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
	const [openNavBar, setOpenNavBar] = useState(false);

	const setOpenAbout = () => {
		setAboutIsOpen(!aboutIsOpen);
	};
	const setOpenWhy = () => {
		setWhyIsOpen(!whyIsOpen);
	};

	const aboutList = [
		{
			title: "QR Payments",
			subtitle: "Text Here for QR ",
			icon: "/img/logos/Favicon - White@4x-8.png",
			route: "/qr-payments",
		},
		{
			title: "Gift Cards",
			subtitle: "Text Here for Gift Cards ",
			icon: "/img/logos/Favicon - White@4x-8.png",
			route: "/gift-cards",
		},
	];

	const whyList = [
		{
			title: "Business",
			subtitle: "Text Here for QR ",
			icon: "/img/logos/Favicon - White@4x-8.png",
			route: "/why-choose-otto-business",
		},
		{
			title: "Personal",
			subtitle: "Text Here for QR ",
			icon: "/img/logos/Favicon - White@4x-8.png",
			route: "/why-choose-otto-personal",
		},
	];
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (aboutRef.current && !aboutRef.current.contains(event.target)) {
				setAboutIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (whyRef.current && !whyRef.current.contains(event.target)) {
				setWhyIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="fixed flex justify-center w-full bg-white z-50 border-b border-[#C9C9C9]/30">
			<div className="bg-white w-full max-w-[1920px] mx-auto flex items-center h-[72px] lg:h-[88px] space-x-8 px-[5%]">
				{/* < className="flex items-center space-x-8"> */}
				{/* Logo */}
				<img
					src="/img/logos/Logo Black.png"
					alt=""
					className="h-[32px] cursor-pointer"
					onClick={() => {
						navigate("/");
					}}
				/>
				<div className="border-r h-8"></div>

				{/* Body */}
				{/* Responsive Menu */}
				<div
					className="lg:hidden w-full place-content-end flex"
					onClick={() => {
						setOpenNavBar(true);
					}}>
					<FaBars />
				</div>
				{openNavBar && (
					<Drawer
						open={openNavBar}
						placement="right"
						onClose={() => setOpenNavBar(false)}>
						{
							<>
								<div className="justify-between flex flex-col h-full p-4">
									<ul className="flex flex-col gap-8">
										<li
											onClick={() => {
												setMobileWhyOpen(
													!mobileWhyOpen
												);
											}}>
											<p className="font-semibold text-base">
												Why Otto
											</p>
											{mobileWhyOpen && (
												<div className="pl-2 space-y-6 font-semibold my-6">
													{whyList.map((items) => {
														return (
															<div
																className="cursor-pointer"
																onClick={() => {
																	navigate(
																		items.route
																	);
																}}>
																<p className="font-medium">
																	{
																		items.title
																	}
																</p>
															</div>
														);
													})}
												</div>
											)}
										</li>
										<li
											onClick={() => {
												setMobileAboutOpen(
													!mobileAboutOpen
												);
											}}>
											<p className="font-semibold text-base">
												About
											</p>
											{mobileAboutOpen && (
												<div className="pl-2 space-y-6 font-semibold my-6">
													{aboutList.map((items) => {
														return (
															<div
																className="cursor-pointer"
																onClick={() => {
																	navigate(
																		items.route
																	);
																}}>
																<p className="font-medium">
																	{
																		items.title
																	}
																</p>
															</div>
														);
													})}
												</div>
											)}
										</li>

										<li
											className="font-semibold text-base"
											onClick={() => {
												navigate("/blog");
											}}>
											Blog
										</li>

										<li
											className="font-semibold text-base"
											onClick={() => {
												navigate("/docs");
											}}>
											Developers
										</li>
									</ul>
									<div className="flex flex-col space-y-6">
										<div className="flex gap-3 items-center">
											<div className="bg-[#1b3359] text-white h-[28px] w-[28px] flex items-center justify-center rounded-full">
												<FaPhone size={12} />{" "}
											</div>
											<p className="text-slate-500 font-semibold">
												Support
											</p>
										</div>

										{/* <p className="text-slate-500">Login</p> */}
										<div className="text-white w-fit text-[14px] border bg-[#1b3359] rounded-lg px-6 py-3">
											Join the Waitlist
										</div>
										<div>
											<img
												src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703958592/Ghana-Flag_xtapmg.png"
												alt=""
												className="h-[24px] rounded-md object-contain"
											/>
										</div>
									</div>
								</div>
							</>
						}
					</Drawer>
				)}

				{/* Desktop Nav Bar */}
				<div className="hidden lg:flex w-full justify-between items-center">
					{/* Why Otto */}
					<ul className="flex space-x-8">
						<li
							ref={whyRef}
							className="relative"
							onClick={setOpenWhy}>
							<div className="cursor-pointer flex items-center space-x-2">
								<p className="text-slate-500">Why Otto</p>{" "}
								<FaCaretDown className="-mt-1 text-slate-500" />
							</div>
							{whyIsOpen && (
								<div className="bg-white border rounded-2xl overflow-hidden top-8 absolute z-50 w-[40vh]">
									<div className="flex ">
										<div className="pl-8 py-8 space-y-8">
											{whyList.map((items) => {
												return (
													<div
														className="flex items-center space-x-4 cursor-pointer"
														onClick={() => {
															navigate(
																items.route
															);
														}}>
														<div className="rounded-full w-[56px] h-[56px] flex items-center justify-center bg-[#1b3359]">
															<img
																src={items.icon}
																alt=""
																className="h-[24px] object-contain"
															/>
														</div>
														<div>
															<p className="font-medium">
																{items.title}
															</p>
															<p className="text-slate-500 text-sm">
																{items.subtitle}
															</p>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							)}
						</li>

						{/* About */}
						<li
							ref={aboutRef}
							className="relative"
							onClick={setOpenAbout}>
							<div className="cursor-pointer flex items-center space-x-2">
								<p className="text-slate-500">About</p>{" "}
								<FaCaretDown className="-mt-1 text-slate-500" />
							</div>
							{aboutIsOpen && (
								<div className="bg-gray-50 border rounded-2xl overflow-hidden top-8 absolute z-50 w-[60vh]">
									<div className="flex ">
										<div className="bg-white pl-8 py-8 w-2/3 space-y-8">
											{aboutList.map((items) => {
												return (
													<div
														className="flex items-center space-x-4 cursor-pointer"
														onClick={() => {
															navigate(
																items.route
															);
														}}>
														<div className="rounded-full w-[56px] h-[56px] flex items-center justify-center bg-[#1b3359]">
															<img
																src={items.icon}
																alt=""
																className="h-[24px] object-contain"
															/>
														</div>
														<div>
															<p className="font-medium">
																{items.title}
															</p>
															<p className="text-slate-500 text-sm">
																{items.subtitle}
															</p>
														</div>
													</div>
												);
											})}
										</div>
										<div className="p-8">
											<li className="space-y-4">
												<ul className="cursor-pointer">
													About Otto
												</ul>
												<ul className="cursor-pointer">
													Otto Team
												</ul>
												<ul
													className="cursor-pointer"
													onClick={() =>
														navigate(
															"/otto-data-deletion"
														)
													}>
													Account Deletion
												</ul>
											</li>
											<div className="flex space-x-2 mt-12">
												<img
													src="/img/twitter.png"
													alt=""
													className="w-[24px] object-contain"
													onClick={() => {}}
												/>
												<img
													src="/img/linkedin.png"
													alt=""
													className="w-[24px] object-contain"
													onClick={() => {}}
												/>
												<img
													src="/img/instagram.png"
													alt=""
													className="w-[24px] object-contain"
													onClick={() => {}}
												/>
												<img
													src="/img/facebook.png"
													alt=""
													className="w-[24px] object-contain"
													onClick={() => {}}
												/>
											</div>
										</div>
									</div>
								</div>
							)}
						</li>

						{/* Blog */}
						<li
							className="cursor-pointer text-slate-500"
							onClick={() => {
								navigate("/blog");
							}}>
							Blog
						</li>

						{/* Developers */}
						<li
							className="cursor-pointer text-slate-500"
							onClick={() => {
								navigate("/docs");
							}}>
							Developers
						</li>
					</ul>

					<div className="flex items-center space-x-8">
						<p className="text-slate-500">Support</p>
						{/* <p className="text-slate-500">Login</p> */}
						<div className="text-white text-[14px] border bg-[#1b3359] rounded-lg px-6 py-3">
							Join the Waitlist
						</div>
						<img
							src="https://res.cloudinary.com/dqicwto8t/image/upload/v1703958592/Ghana-Flag_xtapmg.png"
							alt=""
							className="h-[24px] rounded-md"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
