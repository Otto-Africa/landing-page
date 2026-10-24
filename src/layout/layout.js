import React from "react";
import Header from "./header";
import Footer from "./footer";

/**
 * Layout.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
const Layout = ({ body }) => {
	return (
		<div className="relative w-full items-center justify-center">
			{/* Header */}
			<Header />

			{/* Body */}
			<div className="">
				<div className="z-10 w-full">{body}</div>
			</div>

			{/* Footer */}
			<Footer />
			{/* Bg Lines */}
			<div className="absolute top-0 w-full h-full z-[-1]">
				{" "}
				<div className="absolute right-[4%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute left-[4%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute left-[50%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute left-[25%] h-full border-[1px] border-[#C9C9C9]/10" />
				<div className="absolute right-[25%] h-full border-[1px] border-[#C9C9C9]/10" />
			</div>
		</div>
	);
};

export default Layout;
