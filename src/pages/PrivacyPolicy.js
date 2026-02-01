import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import UserTypeToggle from "../components/UserTypeToggle";

const PrivacyPolicy = () => {
  const contentRef = useScrollAnimation({ threshold: 0.1 });
  const [searchParams] = useSearchParams();
  const viewParam = useMemo(() => searchParams.get("view"), [searchParams]);
  const initialView = viewParam === "customer" || viewParam === "merchant" ? viewParam : "merchant";
  const [userType, setUserType] = useState(initialView);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${userType === 'merchant' ? 'Merchant' : 'Customer'} Privacy Policy - Otto Africa`}
        description={`Otto Africa's ${userType} Privacy Policy. Learn how we collect, use, and protect your information.`}
        keywords="privacy policy, data protection, user privacy, merchant privacy, Otto Africa"
        url="https://ottoafrica.com/privacy-policy"
      />
      <Header />

      <section ref={contentRef} className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Privacy Policy
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
                Otto ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our payment platform, mobile applications, and related services (collectively, the "Services").
              </p>
            </div>

            {userType === "merchant" ? (
              // MERCHANT PRIVACY
              <div className="animate-fade-in">
                <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. Business Information We Collect</h2>

                <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.1 Business Verification (KYB)</h3>
                <p className="text-gray-700 mb-4">To comply with regulatory requirements, we collect:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Business registration documents (Certificate of Incorporation, etc.)</li>
                  <li>Tax Identification Numbers (TIN)</li>
                  <li>Ultimate Beneficial Owner (UBO) details</li>
                  <li>Director/Shareholder identification documents</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.2 Transactional Data</h3>
                <p className="text-gray-700 mb-4">We collect data related to your business activities:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Transaction volumes and values</li>
                  <li>Customer payment details (processed securely)</li>
                  <li>Refund and dispute history</li>
                  <li>Settlement bank account or mobile money wallet details</li>
                </ul>

                <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">3. How We Use Business Data</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>To verify your business identity and assess risk.</li>
                  <li>To process payments and settle funds to your accounts.</li>
                  <li>To detect and prevent fraud, money laundering, and other financial crimes.</li>
                  <li>To provide reporting and analytics tools for your business performance.</li>
                </ul>
              </div>
            ) : (
              // CUSTOMER PRIVACY
              <div className="animate-fade-in">
                <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. Personal Information We Collect</h2>

                <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.1 Identity and Contact</h3>
                <p className="text-gray-700 mb-4">When you create an account, we collect:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Full Name</li>
                  <li>Email address and Phone number</li>
                  <li>Date of birth</li>
                  <li>Government-issued ID (for KYC verification)</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.2 Financial Data</h3>
                <p className="text-gray-700 mb-4">To facilitate payments, we may collect or store tokens for:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Bank account numbers</li>
                  <li>Credit/Debit card details (stored securely via PCIDSS compliant partners)</li>
                  <li>Mobile money numbers</li>
                  <li>Transaction history and beneficiary details</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.3 Device and Usage</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Device ID, IP address, and location data (for fraud prevention)</li>
                  <li>App usage patterns and preferences</li>
                </ul>

                <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">3. How We Use Personal Data</h2>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>To facilitate payments, transfers, and gift card purchases.</li>
                  <li>To verify your identity and secure your account.</li>
                  <li>To communicate with you regarding your account or transactions.</li>
                  <li>To personalize offers and rewards (if opted in).</li>
                </ul>
              </div>
            )}

            {/* SHARED SECTIONS */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> Identity verification partners, cloud hosting providers, and payment processors.</li>
                <li><strong>Legal Authorities:</strong> When required by law, subpoena, or to protect our rights and safety.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or asset transfer.</li>
              </ul>

              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement industry-standard security measures, including encryption and strict access controls. However, no digital transmission is completely secure. We urge you to protect your credentials.
              </p>

              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data (subject to legal retention requirements).</li>
              </ul>

              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">7. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To exercise your rights or if you have questions about this Privacy Policy, please contact our Data Protection Officer at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:privacy@ottoafrica.com"
                    className="text-otto-blue hover:text-black"
                  >
                    privacy@ottoafrica.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;


