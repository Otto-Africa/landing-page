import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";

/**
 * Q R Code Changer.
 * UI helpers stay in lib/ and hooks/ so pages remain declarative and API shapes stay centralized in lib/api.ts.
 */
const QRCodeChanger = ({ size }) => {
	const qrDataList = [
		"ottoafrica.com",
		"Scan, Pay, Grow",
		"Share Love with a gift card",
		"Payments made easy"
	];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [qrData, setQRData] = useState(qrDataList[currentIndex]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % qrDataList.length); // Cycle through the array indexes
		}, 5000); // Change every 10 seconds

		return () => clearInterval(interval);
	}, [qrDataList.length]);

	useEffect(() => {
		setQRData(qrDataList[currentIndex]); // Update QR data based on the current index
	}, [currentIndex]);

	return (
		<QRCode
			value={qrData}
			size={size}
			bgColor={"#EEEEEE00"}
			fgColor={"#1b3359"}
		/>
	);
};

export default QRCodeChanger;
