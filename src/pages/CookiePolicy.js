import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import UserTypeToggle from "../components/UserTypeToggle";

const CookiePolicy = () => {
  const contentRef = useScrollAnimation({ threshold: 0.1 });
  const [userType, setUserType] = useState("merchant");

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Cookie Policy - Otto Africa"
        description="Otto Africa's Cookie Policy. Learn how we use cookies and similar tracking technologies on our website and services."
        keywords="cookie policy, cookies, tracking technologies, Otto Africa cookies"
        url="https://ottoafrica.com/cookie-policy"
      />
      <Header />

      <section ref={contentRef} className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <UserTypeToggle activeType={userType} onToggle={setUserType} />

          <div className="prose prose-lg max-w-none mt-12">
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This Cookie Policy explains how Otto ("we," "our," or "us") uses cookies and similar tracking technologies on our website, mobile applications, and related services.
              </p>
            </div>

            {userType === "merchant" ? (
              // MERCHANT COOKIES
              <div className="animate-fade-in">
                <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. Cookies for Business Users</h2>
                <p className="text-gray-700 mb-4">When you access the Otto Merchant Portal or use our business tools, we use specific cookies to:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li><strong>Maintain Session Security:</strong> Ensure that your business dashboard session remains secure and times out appropriately to protect financial data.</li>
                  <li><strong>Analytics:</strong> Understand which business tools (e.g., Reports, Team Management) are most used to improve our B2B offerings.</li>
                  <li><strong>Preferences:</strong> Remember your dashboard layout, default currency displays, and notification settings.</li>
                </ul>
              </div>
            ) : (
              // CUSTOMER COOKIES
              <div className="animate-fade-in">
                <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. Cookies for Personal Users</h2>
                <p className="text-gray-700 mb-4">When you use the Otto Customer App or website, we use cookies to:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li><strong>App Functionality:</strong> Keep you logged in (if selected) and remember your last used payment methods.</li>
                  <li><strong>Marketing:</strong> Show you relevant promotions or discounts based on your usage patterns (only with your consent).</li>
                  <li><strong>Device Linking:</strong> Help specifically identify your mobile device for security verification during login.</li>
                </ul>
              </div>
            )}

            {/* SHARED SECTIONS */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.1 Essential Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Strictly necessary for the website/app to function (e.g., logging in, processing payments). You cannot switch these off.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.2 Performance Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Allow us to count visits and traffic sources so we can measure and improve performance. All information is aggregated and anonymous.
              </p>

              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">4. Managing Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of the Services may become inaccessible or not function properly.
              </p>

              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">5. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us at <a href="mailto:privacy@ottoafrica.com" className="text-otto-blue hover:underline">privacy@ottoafrica.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;


