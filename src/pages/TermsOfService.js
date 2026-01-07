import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TermsOfService = () => {
  const contentRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section ref={contentRef} className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="scroll-animate delay-100">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By accessing or using Otto's payment platform, mobile applications, and related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services. These Terms constitute a legally binding agreement between you and Otto Africa ("Otto," "we," "our," or "us").
              </p>
            </div>

            <div className="scroll-animate delay-200">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use our Services, you must:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not be prohibited from using our Services under applicable law</li>
              </ul>
            </div>

            <div className="scroll-animate delay-300">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">3. Account Registration and Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                3.1 You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                3.2 You agree to immediately notify us of any unauthorized use of your account or any other breach of security.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                3.3 We reserve the right to suspend or terminate your account if we suspect fraudulent, illegal, or unauthorized activity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                3.4 You may not create multiple accounts or transfer your account to another party without our prior written consent.
              </p>
            </div>

            <div className="scroll-animate delay-400">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">4. Use of Services</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.1 Permitted Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use our Services only for lawful purposes and in accordance with these Terms. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Use the Services in compliance with all applicable laws and regulations</li>
                <li>Provide accurate and truthful information</li>
                <li>Protect the security and integrity of the Services</li>
                <li>Respect the rights of other users</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.2 Prohibited Activities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Engage in fraud, money laundering, or other illegal activities</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Attempt to gain unauthorized access to any part of the Services</li>
                <li>Use automated systems to access the Services without authorization</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Collect or harvest information about other users</li>
                <li>Use the Services for any purpose that is harmful, abusive, or objectionable</li>
              </ul>
            </div>

            <div className="scroll-animate delay-500">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">5. Payment Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                5.1 Our Services facilitate payment processing between merchants and customers. We act as a payment service provider and do not hold funds on your behalf except as necessary to process transactions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                5.2 All transactions are subject to verification and may be declined at our sole discretion for security, fraud prevention, or compliance reasons.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                5.3 You are responsible for all charges, fees, and taxes associated with your use of the Services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                5.4 Refunds and disputes are subject to our refund policy and applicable payment network rules.
              </p>
            </div>

            <div className="scroll-animate delay-600">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">6. Fees and Charges</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                6.1 We may charge fees for certain Services, which will be disclosed to you before you complete a transaction.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                6.2 Fees are non-refundable unless otherwise required by law or as specified in our refund policy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                6.3 We reserve the right to modify our fee structure with reasonable notice to you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                6.4 You are responsible for any taxes, duties, or other charges imposed by applicable authorities.
              </p>
            </div>

            <div className="scroll-animate delay-700">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                7.1 All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, images, and software, are owned by Otto or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                7.2 You are granted a limited, non-exclusive, non-transferable license to access and use the Services for your personal or business purposes in accordance with these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                7.3 You may not copy, modify, distribute, sell, or lease any part of the Services without our prior written consent.
              </p>
            </div>

            <div className="scroll-animate delay-800">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">8. Disclaimers and Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                8.1 THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                8.2 We do not warrant that the Services will be uninterrupted, error-free, or secure, or that defects will be corrected.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                8.3 TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICES.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                8.4 Our total liability for any claims arising from or related to the Services shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
              </p>
            </div>

            <div className="scroll-animate delay-900">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">9. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                You agree to indemnify, defend, and hold harmless Otto, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or relating to your use of the Services, violation of these Terms, or infringement of any rights of another party.
              </p>
            </div>

            <div className="scroll-animate delay-1000">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                10.1 We may suspend or terminate your access to the Services at any time, with or without cause or notice, for any reason, including if you breach these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                10.2 You may terminate your account at any time by contacting us or using the account deletion feature in the Services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                10.3 Upon termination, your right to use the Services will immediately cease, and we may delete your account and data in accordance with our Privacy Policy.
              </p>
            </div>

            <div className="scroll-animate delay-1100">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                11.1 These Terms shall be governed by and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                11.2 Any disputes arising out of or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the Ghana Arbitration Centre, or through the courts of Ghana if arbitration is not available.
              </p>
            </div>

            <div className="scroll-animate delay-1200">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of the Services after such changes constitutes your acceptance of the modified Terms.
              </p>
            </div>

            <div className="scroll-animate delay-1300">
              <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">13. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;

