import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import {
  getOrganizationSchema,
  getWebsiteSchema,
  getSoftwareApplicationSchema,
  getLocalBusinessSchema,
  getFAQSchemaForLanding,
} from "../utils/structuredData";

const Landing = () => {
  const structuredData = [
    getOrganizationSchema(),
    getWebsiteSchema(),
    getSoftwareApplicationSchema(),
    getLocalBusinessSchema(),
    getFAQSchemaForLanding(),
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Otto Africa: Payment API, Gift Cards & Loyalty Programs | Fintech Ghana"
        description="Otto Africa is a leading fintech platform in Ghana offering payment API, digital gift cards, and loyalty programs. Accept payments, manage gift cards, and build customer loyalty with our all-in-one payment infrastructure for businesses in Ghana and across Africa."
        keywords="Otto, Otto Africa, Ghana fintech, payment API, gift cards Ghana, loyalty programs, fintech Ghana, payment infrastructure, QR payments, digital payments Ghana, payment solutions Africa, API payments, gift card API, loyalty API, fintech API, payment gateway Ghana"
        url="https://ottoafrica.com"
        structuredData={structuredData}
      />
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;
