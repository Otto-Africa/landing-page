import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Features = () => {
  const featuresRef = useScrollAnimation({ threshold: 0.1 });
  const [selectedFeature, setSelectedFeature] = useState(null);

  const merchantPortalUrl =
    process.env.NODE_ENV === "production"
      ? "https://business.ottoafrica.com"
      : "http://localhost:3001";

  const features = [
    {
      title: "QR Code Payments",
      description:
        "Enable instant, contactless payments with QR codes. No physical cards needed—customers simply scan and pay. Ideal for retail stores, restaurants, and service businesses looking to streamline checkout.",
      detailedDescription:
        "Transform your checkout experience with QR code payments. Our system supports both static and dynamic QR codes, allowing you to accept payments instantly. Perfect for retail stores, restaurants, cafes, and service businesses. Customers can pay using their mobile wallets or banking apps by simply scanning the QR code. No additional hardware required—just display the code and start accepting payments. Real-time transaction notifications keep you informed, and our analytics dashboard helps you track sales patterns and customer behavior.",
      image: "/img/qrcode.png",
      color: "otto-blue",
    },
    {
      title: "Digital Gift Cards",
      description:
        "Create, sell, and manage digital gift cards with custom designs and instant delivery. Increase sales and attract new customers with flexible gift card options that work for any business.",
      detailedDescription:
        "Launch your own digital gift card program with complete customization. Design gift cards that match your brand identity, set custom denominations, and create promotional campaigns. Gift cards are delivered instantly via email or SMS, making them perfect for last-minute gifts. Our platform handles everything from creation to redemption, with built-in fraud protection and analytics. Increase customer acquisition, boost cash flow, and reduce cart abandonment with flexible gift card options that work for any business size.",
      image: "/img/giftcard.png",
      color: "green-600",
    },
    {
      title: "Loyalty Programs",
      description:
        "Build lasting customer relationships with points, rewards, and personalized experiences. Drive repeat business and increase customer lifetime value through engaging loyalty programs.",
      detailedDescription:
        "Create powerful loyalty programs that keep customers coming back. Set up points-based rewards, tiered membership levels, and personalized offers that drive engagement. Our platform includes automated reward distribution, customer segmentation, and detailed analytics to help you understand what motivates your customers. Send targeted promotions, track redemption rates, and measure program ROI. Whether you're running a points system, cashback program, or VIP tiers, our flexible platform adapts to your business needs and helps you build lasting customer relationships.",
      image: "/img/loyalty.png",
      color: "purple-600",
    },
  ];

  return (
    <section ref={featuresRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Question on left, description on right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 leading-tight">
              How would you like to grow?
            </h2>
          </div>
          <div className="flex flex-col items-end lg:items-start lg:pl-8">
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-lg scroll-animate delay-100">
              All your payment tools in one platform. Accept payments, manage
              gift cards, and build customer loyalty—all from a single
              dashboard.
            </p>
            <a
              href={merchantPortalUrl}
              className="inline-flex items-center gap-2 bg-otto-blue text-white px-6 py-3 rounded-full hover:bg-black transition-all duration-300 font-medium text-base scroll-animate delay-200"
            >
              Start now
            </a>
          </div>
        </div>

        {/* Product Cards - Horizontal Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setSelectedFeature(feature)}
              className="group relative rounded-2xl overflow-hidden h-96 border border-gray-200 bg-gray-50 hover:border-gray-300 hover:shadow-lg transition-all duration-300 scroll-animate flex flex-col cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Title Container - Top */}
              <div className="relative z-20 px-6 pt-6 pb-4">
                <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-otto-blue transition-colors">
                  {feature.title}
                </h3>
              </div>

              {/* Image - Right Side, Fills Height with Offset */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Background Pattern - Behind Images */}
                {/* <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                  style={{
                    backgroundImage: `url('/img/pattern.png')`,
                  }}
                ></div> */}

                {/* Image Container */}
                <div className="absolute right-0 top-10 bottom-10 w-3/4">
                  <img
                    src={feature.image}
                    alt={`${feature.title} - ${feature.description.substring(
                      0,
                      50
                    )}...`}
                    loading="lazy"
                    className="w-full h-full object-contain transform translate-x-8 translate-y-4 rotate-12 group-hover:rotate-3 transition-transform duration-300 opacity-70"
                    // style={{ backgroundColor: "transparent" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />

                  {/* Overlay on Image - Fills the Box */}
                  {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div> */}
                </div>
              </div>

              {/* Description Box - Bottom with Shadow and Spacing */}
              <div className="relative z-20 mx-4 mb-4 mt-auto bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  {/* Description Text */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFeature && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedFeature(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-medium text-gray-900">
                {selectedFeature.title}
              </h3>
              <button
                onClick={() => setSelectedFeature(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-6">
              <img
                src={selectedFeature.image}
                alt={`${selectedFeature.title} - Detailed view`}
                loading="lazy"
                className="w-full h-64 object-contain rounded-lg"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {selectedFeature.detailedDescription}
            </p>
            <a
              href={merchantPortalUrl}
              className="inline-flex items-center gap-2 bg-otto-blue text-white px-8 py-4 rounded-full hover:bg-black transition-all duration-300 font-semibold text-lg"
            >
              Get Started
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
