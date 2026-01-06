import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GiftCards = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Gift Cards
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create, sell, and manage digital gift cards with custom designs and instant delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://merchant.otto.com/signup"
                className="bg-otto-blue text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-200 font-semibold"
              >
                Create Your First Gift Card
              </a>
              <a
                href="#features"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-otto-blue hover:text-otto-blue transition-colors duration-200 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Designs</h3>
              <p className="text-gray-600">Create gift cards that match your brand</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-otto-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Delivery</h3>
              <p className="text-gray-600">Email delivery in seconds</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">Track sales and redemption patterns</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Pricing</h3>
              <p className="text-gray-600">Set any denomination you want</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For Every Business</h2>
            <p className="text-xl text-gray-600">From small shops to large enterprises</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail Stores</h3>
              <p className="text-gray-600 mb-6">Boost sales with gift cards that customers can buy online and redeem in-store</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Holiday promotions</li>
                <li>• Customer referrals</li>
                <li>• Birthday specials</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Businesses</h3>
              <p className="text-gray-600 mb-6">Increase average order value with gift card upsells and cross-sells</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cart abandonment recovery</li>
                <li>• Gift registries</li>
                <li>• Corporate gifting</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Providers</h3>
              <p className="text-gray-600 mb-6">Offer prepaid services and build customer loyalty</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Salon packages</li>
                <li>• Fitness memberships</li>
                <li>• Consulting sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default GiftCards;
