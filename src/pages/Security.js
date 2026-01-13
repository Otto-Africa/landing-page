import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Security = () => {
  const contentRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Security - Otto Africa"
        description="Learn about Otto Africa's security measures, PCI DSS compliance, encryption, and fraud protection to keep your data and transactions safe."
        keywords="security, data protection, PCI DSS, encryption, fraud protection, Otto Africa security"
        url="https://ottoafrica.com/security"
      />
      <Header />

      <section ref={contentRef} className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Security
            </h1>
            <p className="text-gray-600 mb-8">
              At Otto, security is our top priority. We are committed to protecting your data and ensuring the safety of all transactions.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="scroll-animate delay-100">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">1. Our Security Commitment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Otto is committed to maintaining the highest standards of security to protect your personal information, financial data, and transactions. We employ industry-leading security measures and continuously monitor and improve our security practices to stay ahead of emerging threats.
              </p>
            </div>

            <div className="scroll-animate delay-200">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. Data Encryption</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use strong encryption to protect your data both in transit and at rest:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Transport Layer Security (TLS):</strong> All data transmitted between your device and our servers is encrypted using TLS 1.2 or higher</li>
                <li><strong>End-to-End Encryption:</strong> Sensitive payment information is encrypted end-to-end</li>
                <li><strong>Data at Rest:</strong> All stored data is encrypted using industry-standard encryption algorithms</li>
                <li><strong>Key Management:</strong> Encryption keys are managed using secure key management systems</li>
              </ul>
            </div>

            <div className="scroll-animate delay-300">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">3. Payment Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement multiple layers of security to protect payment transactions:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>PCI DSS Compliance:</strong> We are compliant with the Payment Card Industry Data Security Standard (PCI DSS) Level 1, the highest level of certification</li>
                <li><strong>Tokenization:</strong> Payment card information is tokenized to prevent exposure of sensitive data</li>
                <li><strong>3D Secure:</strong> Additional authentication for online transactions</li>
                <li><strong>Fraud Detection:</strong> Advanced fraud detection systems monitor transactions in real-time</li>
                <li><strong>Transaction Monitoring:</strong> All transactions are monitored for suspicious activity</li>
              </ul>
            </div>

            <div className="scroll-animate delay-400">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">4. Infrastructure Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our infrastructure is designed with security in mind:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Secure Data Centers:</strong> Our servers are hosted in secure, certified data centers with physical security controls</li>
                <li><strong>Network Security:</strong> Firewalls, intrusion detection systems, and DDoS protection</li>
                <li><strong>Access Controls:</strong> Strict access controls and multi-factor authentication for all system access</li>
                <li><strong>Regular Updates:</strong> Systems are regularly updated with security patches</li>
                <li><strong>Backup and Recovery:</strong> Regular backups and disaster recovery procedures</li>
              </ul>
            </div>

            <div className="scroll-animate delay-500">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">5. Authentication and Access Control</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use multiple authentication methods to protect your account:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Strong Passwords:</strong> Enforced password complexity requirements</li>
                <li><strong>Multi-Factor Authentication (MFA):</strong> Optional MFA for additional account security</li>
                <li><strong>Biometric Authentication:</strong> Support for fingerprint and face recognition on mobile devices</li>
                <li><strong>Session Management:</strong> Secure session handling with automatic timeout</li>
                <li><strong>Device Recognition:</strong> Recognition of trusted devices for enhanced security</li>
              </ul>
            </div>

            <div className="scroll-animate delay-600">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">6. Security Monitoring and Incident Response</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We continuously monitor our systems for security threats:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>24/7 Monitoring:</strong> Continuous monitoring of systems and networks</li>
                <li><strong>Threat Detection:</strong> Advanced threat detection and prevention systems</li>
                <li><strong>Security Audits:</strong> Regular security audits and penetration testing</li>
                <li><strong>Incident Response:</strong> Established incident response procedures</li>
                <li><strong>Vulnerability Management:</strong> Regular vulnerability assessments and remediation</li>
              </ul>
            </div>

            <div className="scroll-animate delay-700">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">7. Compliance and Certifications</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain compliance with industry standards and regulations:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>PCI DSS:</strong> Payment Card Industry Data Security Standard Level 1</li>
                <li><strong>ISO 27001:</strong> Information Security Management System certification (where applicable)</li>
                <li><strong>GDPR:</strong> Compliance with General Data Protection Regulation requirements</li>
                <li><strong>Local Regulations:</strong> Compliance with applicable local data protection and financial regulations</li>
              </ul>
            </div>

            <div className="scroll-animate delay-800">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">8. Your Role in Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Security is a shared responsibility. Here's how you can help protect your account:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Use a strong, unique password for your account</li>
                <li>Enable multi-factor authentication when available</li>
                <li>Keep your device and apps updated</li>
                <li>Never share your account credentials with anyone</li>
                <li>Be cautious of phishing attempts and suspicious emails</li>
                <li>Log out of your account when using shared devices</li>
                <li>Report any suspicious activity immediately</li>
              </ul>
            </div>

            <div className="scroll-animate delay-900">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">9. Reporting Security Issues</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you discover a security vulnerability or have concerns about security, please report it to us immediately:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@ottoafrica.com"
                    className="text-otto-blue hover:text-black"
                  >
                    contact@ottoafrica.com
                  </a>
                </p>
                <p className="text-gray-700 text-sm">
                  Please include as much detail as possible about the security issue. We take all security reports seriously and will investigate promptly.
                </p>
              </div>
            </div>

            <div className="scroll-animate delay-1000">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">10. Updates to Security Practices</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We continuously improve our security practices and may update this Security page from time to time to reflect changes in our security measures. We encourage you to review this page periodically to stay informed about how we protect your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;

