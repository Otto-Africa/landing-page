import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-otto-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using Otto to accept payments,
            manage gift cards, and build customer loyalty. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://merchant.otto.com/signup"
              className="bg-white text-otto-blue px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200 font-semibold text-lg"
            >
              Start Accepting Payments
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-200 font-semibold text-lg"
            >
              Contact Support
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white mb-1">14 Days</div>
              <div className="text-sm">Quick Setup</div>
            </div>
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white mb-1">No Setup</div>
              <div className="text-sm">Fees</div>
            </div>
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-500">
            <p className="text-blue-200 text-sm">
              Trusted by businesses of all sizes • PCI DSS Compliant • Bank-grade security
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
