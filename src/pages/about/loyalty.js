import React from "react";
import Layout from "../../layout/layout";
import SEO from "../../components/SEO";

/**
 * Loyalty.
 * Route-level components compose shared UI primitives so merchant workflows stay consistent across the portal.
 */
const Loyalty = () => {
	return (
		<>
			<SEO
				title="Loyalty Programs - Scan Africa"
				description="Build customer loyalty with Scan Africa's loyalty program solutions. Create points-based rewards, tiered memberships, and personalized offers."
				keywords="loyalty programs, customer loyalty, rewards programs, points system, Scan Africa loyalty"
				url="https://scanafrica.com/about/loyalty"
			/>
			<Layout />
		</>
	);
};

export default Loyalty;

