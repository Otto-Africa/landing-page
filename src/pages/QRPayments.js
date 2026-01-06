import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const QRPayments = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              QR Code Payments
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Accept contactless payments instantly with QR codes. No cards, no hassle - just scan and pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://merchant.otto.com/signup"
                className="bg-otto-blue text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-200 font-semibold"
              >
                Start Accepting Payments
              </a>
              <a
                href="#demo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-otto-blue hover:text-otto-blue transition-colors duration-200 font-semibold"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-otto-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Payments processed in seconds, not minutes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bank-Grade Security</h3>
              <p className="text-gray-600">PCI DSS compliant with end-to-end encryption</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Transaction Fees</h3>
              <p className="text-gray-600">No hidden costs or monthly fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="demo" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How QR Payments Work</h2>
            <p className="text-xl text-gray-600">Simple, secure, and instant payments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-otto-blue rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Generate QR Code</h3>
              <p className="text-gray-600">Create a unique QR code for each transaction through your Otto dashboard</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-otto-blue rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Scans</h3>
              <p className="text-gray-600">Your customer opens their banking app and scans the QR code</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-otto-blue rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Complete</h3>
              <p className="text-gray-600">Funds are transferred instantly to your account</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-otto-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Accepting QR Payments Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using Otto for seamless payments
          </p>
          <a
            href="https://merchant.otto.com/signup"
            className="bg-white text-otto-blue px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200 font-semibold text-lg"
          >
            Get Started Free
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QRPayments;
