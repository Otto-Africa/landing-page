import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/img/logos/Logo Black.png"
                alt="Otto"
                className="h-10 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Otto Africa is a leading fintech platform in Ghana offering payment API, digital gift cards, and loyalty programs. The complete payment suite for modern businesses in Ghana and across Africa.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ottoafrica" className="text-gray-600 hover:text-gray-900 transition-colors duration-200" aria-label="Follow us on Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/ottoafrica" className="text-gray-600 hover:text-gray-900 transition-colors duration-200" aria-label="Connect with us on LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="https://discord.gg/ottoafrica" className="text-gray-600 hover:text-gray-900 transition-colors duration-200" aria-label="Join our Discord community">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/business" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  For Businesses
                </Link>
              </li>
              <li>
                <Link to="/solutions/personal" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  For Individuals
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Developers</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/docs" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/docs/getting-started" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <a href="https://blog.ottoafrica.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://careers.ottoafrica.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Apps */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Mobile</h3>
            <p className="text-gray-600 text-sm mb-4">Download the Otto Mobile App</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.otto.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414C17.5097 15.6825 17.4373 16.0226 17.3069 16.3516C17.1319 16.8066 16.8724 17.2216 16.547 17.5656C16.2216 17.9096 15.8395 18.1726 15.4209 18.3406C14.8839 18.5586 14.3059 18.6736 13.7159 18.6786C13.2269 18.6786 12.6819 18.5476 12.0999 18.2916C11.5119 18.0326 10.9609 17.7206 10.4649 17.3556C9.96887 16.9906 9.55887 16.5926 9.24687 16.1646C8.93287 15.7366 8.73187 15.2806 8.65087 14.8106C8.65087 14.6736 8.65087 14.5486 8.65087 14.4336L8.65087 9.56659C8.65087 9.45159 8.65087 9.32659 8.65087 9.18959C8.73187 8.71959 8.93287 8.26359 9.24687 7.83559C9.55887 7.40759 9.96887 7.00959 10.4649 6.64459C10.9609 6.27959 11.5119 5.96759 12.0999 5.70859C12.6819 5.45259 13.2269 5.32159 13.7159 5.32159C14.3059 5.32659 14.8839 5.44159 15.4209 5.65959C15.8395 5.82759 16.2216 6.09059 16.547 6.43459C16.8724 6.77859 17.1319 7.19359 17.3069 7.64859C17.4373 7.97759 17.5097 8.31759 17.523 8.65859L17.341 8.65859C16.971 8.65859 16.616 8.73159 16.289 8.87559C15.962 9.01959 15.67 9.22959 15.427 9.48959C15.184 9.74959 14.995 10.0506 14.871 10.3706C14.747 10.6906 14.69 11.0206 14.693 11.3526V13.6476C14.69 13.9796 14.747 14.3096 14.871 14.6296C14.995 14.9496 15.184 15.2506 15.427 15.5106C15.67 15.7706 15.962 15.9806 16.289 16.1246C16.616 16.2686 16.971 16.3416 17.341 16.3416L17.523 16.3416V15.3414ZM15.113 7.08359C14.664 7.08359 14.229 7.18759 13.826 7.38759C13.423 7.58759 13.065 7.87559 12.772 8.22959C12.479 8.58359 12.258 8.99259 12.121 9.43759C12.002 9.88159 11.949 10.3476 11.964 10.8176V14.1826C11.949 14.6526 12.002 15.1186 12.121 15.5626C12.258 16.0076 12.479 16.4166 12.772 16.7706C13.065 17.1246 13.423 17.4126 13.826 17.6126C14.229 17.8126 14.664 17.9166 15.113 17.9166C15.446 17.9166 15.774 17.8606 16.083 17.7506C16.392 17.6406 16.678 17.4786 16.927 17.2706C17.176 17.0626 17.383 16.8126 17.542 16.5286C17.701 16.2446 17.809 15.9316 17.859 15.6046C17.909 15.2776 17.9 14.9426 17.833 14.6186C17.766 14.2946 17.643 13.9886 17.468 13.7136C17.293 13.4386 17.07 13.2006 16.808 13.0126C16.546 12.8246 16.251 12.6916 15.94 12.6206C15.629 12.5496 15.309 12.5426 14.993 12.6006C14.677 12.6586 14.372 12.7796 14.095 12.9566C13.818 13.1336 13.575 13.3626 13.377 13.6326C13.179 13.9026 13.03 14.2066 12.937 14.5266C12.844 14.8466 12.809 15.1766 12.833 15.5046C12.857 15.8326 12.94 16.1516 13.077 16.4496C13.214 16.7476 13.403 17.0176 13.633 17.2436C13.863 17.4696 14.129 17.6466 14.418 17.7636C14.707 17.8806 15.014 17.9356 15.324 17.9266C15.634 17.9176 15.941 17.8446 16.226 17.7106C16.511 17.5766 16.769 17.3846 16.986 17.1436C17.203 16.9026 17.375 16.6176 17.492 16.2996C17.609 15.9816 17.668 15.6376 17.666 15.2896V9.71059C17.668 9.36259 17.609 9.01859 17.492 8.70059C17.375 8.38259 17.203 8.09759 16.986 7.85659C16.769 7.61559 16.511 7.42359 16.226 7.28959C15.941 7.15559 15.634 7.08259 15.324 7.07359C15.014 7.06459 14.707 7.11959 14.418 7.23659C14.129 7.35359 13.863 7.53059 13.633 7.75659C13.403 7.98259 13.214 8.25259 13.077 8.55059C12.94 8.84859 12.857 9.16759 12.833 9.49559C12.809 9.82359 12.844 10.1536 12.937 10.4736C13.03 10.7936 13.179 11.0976 13.377 11.3676C13.575 11.6376 13.818 11.8666 14.095 12.0436C14.372 12.2206 14.677 12.3416 14.993 12.3996C15.309 12.4576 15.629 12.4506 15.94 12.3796C16.251 12.3086 16.546 12.1756 16.808 11.9876C17.07 11.7996 17.293 11.5616 17.468 11.2866C17.643 11.0116 17.766 10.7056 17.833 10.3816C17.9 10.0576 17.909 9.72259 17.859 9.39559C17.809 9.06859 17.701 8.75559 17.542 8.47159C17.383 8.18759 17.176 7.93759 16.927 7.72959C16.678 7.52159 16.392 7.35959 16.083 7.24959C15.774 7.13959 15.446 7.08359 15.113 7.08359Z"/>
                </svg>
                Google Play
              </a>
              <a
                href="https://apps.apple.com/app/otto-mobile/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-12 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 Otto. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link to="/security" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
