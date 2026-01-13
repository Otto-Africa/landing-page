import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const CookiePolicy = () => {
  const contentRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Cookie Policy - Otto Africa"
        description="Otto Africa's Cookie Policy. Learn how we use cookies and similar tracking technologies on our website and services."
        keywords="cookie policy, cookies, tracking technologies, Otto Africa cookies"
        url="https://ottoafrica.com/cookie-policy"
      />
      <Header />

      <section ref={contentRef} className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="scroll-animate delay-100">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This Cookie Policy explains how Otto ("we," "our," or "us") uses cookies and similar tracking technologies on our website, mobile applications, and related services (collectively, the "Services"). This policy should be read in conjunction with our Privacy Policy.
              </p>
            </div>

            <div className="scroll-animate delay-200">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cookies allow a website to recognize your device and store some information about your preferences or past actions. They help us provide you with a better experience by remembering your preferences and enabling certain features.
              </p>
            </div>

            <div className="scroll-animate delay-300">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.1 Essential Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are necessary for the Services to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of essential cookies as they are required for the Services to work.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Authentication cookies to keep you logged in</li>
                <li>Security cookies to protect against fraud</li>
                <li>Session cookies to maintain your session</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.2 Performance and Analytics Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our Services by collecting and reporting information anonymously. They allow us to improve the performance and user experience of our Services.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Google Analytics cookies to track website usage</li>
                <li>Performance monitoring cookies</li>
                <li>Error tracking cookies</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.3 Functionality Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Language preference cookies</li>
                <li>User interface customization cookies</li>
                <li>Feature preference cookies</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.4 Targeting and Advertising Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                These cookies may be set through our Services by our advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.
              </p>
            </div>

            <div className="scroll-animate delay-400">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Services, deliver advertisements, and so on. These third parties may include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Payment processors for transaction security</li>
                <li>Customer support platforms</li>
                <li>Marketing and advertising platforms</li>
              </ul>
            </div>

            <div className="scroll-animate delay-500">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">5. How Long Do Cookies Last?</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.1 Session Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are temporary and are deleted when you close your browser. They are used to maintain your session while you navigate through the Services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.2 Persistent Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                These cookies remain on your device for a set period or until you delete them. They are used to remember your preferences and improve your experience across multiple visits.
              </p>
            </div>

            <div className="scroll-animate delay-600">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">6. Managing Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of the Services.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">6.1 Browser Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can impact your user experience and parts of our Services may no longer be fully accessible.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">6.2 Cookie Consent</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you first visit our Services, you may be presented with a cookie consent banner. You can choose to accept or reject non-essential cookies. You can also change your cookie preferences at any time through your account settings or by contacting us.
              </p>
            </div>

            <div className="scroll-animate delay-700">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">7. Mobile Applications</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our mobile applications may use similar technologies such as device identifiers, advertising IDs, and local storage. These technologies serve similar purposes to cookies and are used to provide, maintain, and improve our Services, as well as to deliver personalized content and advertisements.
              </p>
            </div>

            <div className="scroll-animate delay-800">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">8. Updates to This Cookie Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="scroll-animate delay-900">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default CookiePolicy;

