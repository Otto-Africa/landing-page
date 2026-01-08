import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const solutionsRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/img/logos/Logo Black.png"
                alt="Otto Africa Logo"
                loading="eager"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium flex items-center"
              >
                Solutions
                <svg className={`ml-1 h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isSolutionsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg py-2 z-50"
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
              href={getMerchantPortalUrl()}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Sign In
            </a>
            <a
              href={getMerchantPortalUrl()}
              className="bg-otto-blue text-white px-6 py-2 rounded-full hover:bg-black transition-colors duration-200 font-medium"
            >
              Get Started
            </a>
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
                    href={getMerchantPortalUrl()}
                    className="block text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </a>
                  <a
                    href={getMerchantPortalUrl()}
                    className="block bg-otto-blue text-white px-4 py-2 rounded-full text-center hover:bg-black transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </a>
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
