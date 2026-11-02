import React from "react";
import Layout from "../../layout/layout";
import SEO from "../../components/SEO";

/**
 * Q R Payments.
 * Route-level components compose shared UI primitives so merchant workflows stay consistent across the portal.
 */
const QRPayments = () => {
	return (
		<>
			<SEO
				title="QR Payments - Scan Africa"
				description="Learn about Scan Africa's QR code payment solutions. Accept payments quickly and securely using QR codes for your business."
				keywords="QR payments, QR code payments, QR code, payment solutions, Scan Africa QR"
				url="https://scanafrica.com/about/qr-payments"
			/>
			<Layout />
		</>
	);
};

export default QRPayments;
