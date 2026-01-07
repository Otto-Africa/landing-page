import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getOrganizationSchema, getWebsiteSchema, getSoftwareApplicationSchema } from '../utils/structuredData';

const Landing = () => {
  const structuredData = [
    getOrganizationSchema(),
    getWebsiteSchema(),
    getSoftwareApplicationSchema()
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Otto Africa - Scale without limits. Payment Infrastructure for Africa"
        description="The all-in-one payment infrastructure built for Africa's most ambitious businesses. Accept payments, manage gift cards, and launch loyalty programs with ease."
        keywords="payment infrastructure, QR payments, digital gift cards, loyalty programs, Africa payments, Ghana payments, fintech, payment solutions, business payments"
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
