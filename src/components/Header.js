import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/img/logos/Logo Black.png"
                alt="Otto"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium flex items-center"
              >
                Products
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link to="/products/qr-payments" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                    <div className="font-medium">QR Payments</div>
                    <div className="text-sm text-gray-500">Contactless payment solutions</div>
                  </Link>
                  <Link to="/products/gift-cards" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                    <div className="font-medium">Gift Cards</div>
                    <div className="text-sm text-gray-500">Digital gift card management</div>
                  </Link>
                  <Link to="/products/loyalty" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                    <div className="font-medium">Loyalty Programs</div>
                    <div className="text-sm text-gray-500">Customer retention solutions</div>
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium flex items-center"
              >
                Solutions
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isSolutionsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <Link to="/solutions/business" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                    <div className="font-medium">For Businesses</div>
                    <div className="text-sm text-gray-500">Enterprise payment solutions</div>
                  </Link>
                  <Link to="/solutions/personal" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                    <div className="font-medium">For Individuals</div>
                    <div className="text-sm text-gray-500">Personal finance management</div>
                  </Link>
                </div>
              )}
            </div>

            <Link to="/docs" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
              Developers
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
              Support
            </Link>
            <a
              href={process.env.NODE_ENV === 'production' ? 'https://business.ottoafrica.com' : 'http://localhost:3001'}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Sign In
            </a>
            <Link
              to="/contact"
              className="bg-otto-blue text-white px-6 py-2 rounded-full hover:bg-black transition-colors duration-200 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <div>
                <div className="font-medium text-gray-900 mb-2">Products</div>
                <div className="pl-4 space-y-2">
                  <Link to="/products/qr-payments" className="block text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                    QR Payments
                  </Link>
                  <Link to="/products/gift-cards" className="block text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                    Gift Cards
                  </Link>
                  <Link to="/products/loyalty" className="block text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                    Loyalty Programs
                  </Link>
                </div>
              </div>

              <div>
                <div className="font-medium text-gray-900 mb-2">Solutions</div>
                <div className="pl-4 space-y-2">
                  <Link to="/solutions/business" className="block text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                    For Businesses
                  </Link>
                  <Link to="/solutions/personal" className="block text-gray-600 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
                    For Individuals
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-4">
                <Link to="/docs" className="block text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Developers
                </Link>
                <Link to="/about" className="block text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <Link to="/contact" className="block text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Support
                </Link>
                <div className="pt-2 space-y-2">
                  <a
                    href={process.env.NODE_ENV === 'production' ? 'https://business.ottoafrica.com' : 'http://localhost:3001'}
                    className="block text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </a>
                  <Link
                    to="/contact"
                    className="block bg-otto-blue text-white px-4 py-2 rounded-full text-center hover:bg-black transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
