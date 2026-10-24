import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ApiShowcase from '../components/ApiShowcase';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

/**
 * Home.
 * Route-level components compose shared UI primitives so merchant workflows stay consistent across the portal.
 */
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <ApiShowcase />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
