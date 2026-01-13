import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const PrivacyPolicy = () => {
  const contentRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy - Otto Africa"
        description="Otto Africa's Privacy Policy. Learn how we collect, use, disclose, and safeguard your information when you use our payment platform and services."
        keywords="privacy policy, data protection, user privacy, Otto Africa privacy"
        url="https://ottoafrica.com/privacy-policy"
      />
      <Header />

      <section ref={contentRef} className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="scroll-animate delay-100">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Otto ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our payment platform, mobile applications, and related services (collectively, the "Services"). Please read this Privacy Policy carefully. By accessing or using our Services, you agree to be bound by this Privacy Policy.
              </p>
            </div>

            <div className="scroll-animate delay-200">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Name, email address, phone number, and postal address</li>
                <li>Business information (business name, registration number, tax ID)</li>
                <li>Payment information (bank account details, payment card information)</li>
                <li>Government-issued identification documents for verification</li>
                <li>Profile information and preferences</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.2 Transaction Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information about transactions you conduct through our Services, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Transaction amounts, dates, and descriptions</li>
                <li>Merchant and customer information</li>
                <li>Payment method details</li>
                <li>Gift card purchases and redemptions</li>
                <li>Loyalty program activities</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.3 Technical Information</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We automatically collect certain technical information when you use our Services, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="scroll-animate delay-300">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and manage your account</li>
                <li>Verify your identity and comply with legal obligations</li>
                <li>Detect, prevent, and address fraud, security, or technical issues</li>
                <li>Send you service-related communications and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Personalize your experience and deliver relevant content</li>
                <li>Conduct research and analytics to improve our Services</li>
                <li>Comply with applicable laws, regulations, and legal processes</li>
              </ul>
            </div>

            <div className="scroll-animate delay-400">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.1 Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We share information with third-party service providers who perform services on our behalf, such as payment processing, data storage, analytics, and customer support.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.2 Business Partners</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share information with business partners, including financial institutions and payment processors, to facilitate transactions and provide our Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.3 Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose information if required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety, or that of our users or others.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.4 Business Transfers</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
              </p>
            </div>

            <div className="scroll-animate delay-500">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement industry-standard security measures to protect your information, including encryption, secure socket layer (SSL) technology, and access controls. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div className="scroll-animate delay-600">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to restrict or object to certain processing activities</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>

            <div className="scroll-animate delay-700">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </div>

            <div className="scroll-animate delay-800">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our Services, you consent to the transfer of your information to these countries.
              </p>
            </div>

            <div className="scroll-animate delay-900">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div className="scroll-animate delay-1000">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="scroll-animate delay-1100">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@ottoafrica.com"
                    className="text-otto-blue hover:text-black"
                  >
                    contact@ottoafrica.com
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

