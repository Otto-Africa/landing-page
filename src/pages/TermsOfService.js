import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import UserTypeToggle from "../components/UserTypeToggle";

const TermsOfService = () => {
  const contentRef = useScrollAnimation({ threshold: 0.1 });
  const [searchParams] = useSearchParams();
  const viewParam = useMemo(() => searchParams.get("view"), [searchParams]);
  const initialView = viewParam === "customer" || viewParam === "merchant" ? viewParam : "merchant";
  const [userType, setUserType] = useState(initialView);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${userType === 'merchant' ? 'Merchant' : 'Customer'} Terms of Service - Otto Africa`}
        description={`Otto Africa's ${userType === 'merchant' ? 'Merchant Service Agreement' : 'User Agreement'}. Read our terms and conditions for using our payment platform.`}
        keywords="terms of service, terms and conditions, user agreement, merchant agreement, Otto Africa terms"
        url="https://ottoafrica.com/terms-of-service"
      />
      <Header />

      <section ref={contentRef} className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <UserTypeToggle activeType={userType} onToggle={setUserType} />

          <div className="prose prose-lg max-w-none mt-12">
            {userType === "merchant" ? (
              // MERCHANT TERMS
              <div className="animate-fade-in">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Merchant Service Agreement</h2>
                <p className="text-gray-700 mb-6">
                  This Merchant Service Agreement ("Agreement") is a legal contract between you ("Merchant", "you", or "your") and Otto Africa ("Otto", "we", "us", or "our"). By registering for a Business Account or using our services to accept payments, you agree to be bound by this Agreement.
                </p>

                <h3 className="text-2xl font-medium text-gray-900 mt-8 mb-4">1. Merchant Obligations</h3>
                <p className="text-gray-700 mb-4">
                  1.1 <strong>Compliance:</strong> You agree to comply with all applicable laws, regulations, and payment network rules (e.g., Visa, Mastercard) in connection with your use of the Services.
                </p>
                <p className="text-gray-700 mb-4">
                  1.2 <strong>Prohibited Businesses:</strong> You represent and warrant that you are not engaged in any business or activity prohibited by Otto, including but not limited to: illegal drugs, gambling, adult content, weapons, counterfeit goods, or shell banks.
                </p>
                <p className="text-gray-700 mb-4">
                  1.3 <strong>KYC/KYB:</strong> You must provide accurate business information and documentation for Know Your Customer/Business (KYC/KYB) verification. We reserve the right to suspend settlements until verification is complete.
                </p>

                <h3 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. Payments and Settlements</h3>
                <p className="text-gray-700 mb-4">
                  2.1 <strong>Settlements:</strong> Funds will be settled to your designated bank account or mobile money wallet according to the schedule configured in your account (typically T+1), subject to minimum withdrawal limits and banking delays.
                </p>
                <p className="text-gray-700 mb-4">
                  2.2 <strong>Reserves:</strong> We may establish a reserve on your account to cover potential chargebacks, refunds, or other liabilities. We may hold funds in this reserve for up to 180 days.
                </p>
                <p className="text-gray-700 mb-4">
                  2.3 <strong>Taxes:</strong> You are solely responsible for determining, collecting, reporting, and remitting all applicable taxes related to your transactions.
                </p>

                <h3 className="text-2xl font-medium text-gray-900 mt-8 mb-4">3. Chargebacks and Refunds</h3>
                <p className="text-gray-700 mb-4">
                  3.1 <strong>Liability:</strong> You are fully liable for all chargebacks, disputes, and refunds arising from your transactions. We will deduct the amount of any chargeback and associated fees directly from your settled funds or reserve.
                </p>
                <p className="text-gray-700 mb-4">
                  3.2 <strong>Refund Policy:</strong> You must maintain a clear refund and return policy for your customers.
                </p>

                <h3 className="text-2xl font-medium text-gray-900 mt-8 mb-4">4. Indemnification and Limitation of Liability</h3>
                <p className="text-gray-700 mb-4">
                  4.1 <strong>Indemnification:</strong> You agree to indemnify, defend, and hold harmless Otto, its directors, officers, employees, and agents from any claims, losses, damages, liabilities, costs, and expenses (including legal fees) arising out of or related to: (a) your use of the Services; (b) your violation of this Agreement; (c) your violation of any applicable law or third-party right; (d) the goods or services you sell; or (e) any fines or penalties imposed by payment networks.
                </p>
                <p className="text-gray-700 mb-4">
                  4.2 <strong>No Warranty:</strong> THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED.
                </p>
                <p className="text-gray-700 mb-4">
                  4.3 <strong>Limitation:</strong> IN NO EVENT SHALL OTTO BE LIABLE FOR LOST PROFITS, DATA, OR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE FEES PAID BY YOU TO US IN THE PRECEDING THREE (3) MONTHS.
                </p>

                <h3 className="text-2xl font-medium text-gray-900 mt-8 mb-4">5. API Usage and Data Security</h3>
                <p className="text-gray-700 mb-4">
                  5.1 <strong>Credentials:</strong> You are responsible for maintaining the security of your API keys and merchant portal credentials. You are liable for all activities conducted using your credentials.
                </p>
                <p className="text-gray-700 mb-4">
                  5.2 <strong>Data Protection:</strong> You must comply with all applicable data protection laws regarding the collection and storage of customer data. You may not store sensitive cardholder data (like CVV) on your own systems.
                </p>

              </div>
            ) : (
              // CUSTOMER TERMS
              <div className="animate-fade-in">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">User Terms of Service</h2>
                <p className="text-gray-700 mb-6">
                  These User Terms of Service ("Terms") govern your access to and use of the Otto Africa mobile application and services as a consumer ("Customer", "you", or "User"). By creating an account, you agree to these Terms.
                </p>

                <h3 className="text-2xl font-medium text-gray-900 mt-8 mb-4">1. Account Use</h3>
                <p className="text-gray-700 mb-4">
                  1.1 <strong>Personal Use:</strong> Your account is for your personal use only. You may not use it for commercial purposes or on behalf of others without our consent.
                </p>
                <p className="text-gray-700 mb-4">
                  1.2 <strong>Security:</strong> You are responsible for safeguarding your password, PIN, and OTPs. We are not liable for any loss arising from unauthorized access to your account due to your failure to secure your credentials.
                </p>

                <h3 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. Wallet and Payments</h3>
                <p className="text-gray-700 mb-4">
                  2.1 <strong>Funding:</strong> You may fund your wallet using approved methods (e.g., Mobile Money, Card). We reserve the right to impose limits on funding amounts.
                </p>
                <p className="text-gray-700 mb-4">
                  2.2 <strong>Transactions:</strong> Transactions are final once authorized. We are not responsible for goods or services purchased from third-party merchants using Otto. Disputes regarding quality or delivery must be resolved directly with the merchant.
                </p>

                <h3 className="text-2xl font-medium text-gray-900 mt-8 mb-4">3. Gift Cards and Rewards</h3>
                <p className="text-gray-700 mb-4">
                  3.1 <strong>Gift Cards:</strong> Gift cards purchased or received via Otto are subject to the specific terms displayed at purchase. Unless required by law, gift cards are non-refundable and cannot be redeemed for cash.
                </p>
                <p className="text-gray-700 mb-4">
                  3.2 <strong>Loyalty Points:</strong> Loyalty points have no cash value and may expire or be revoked if your account is inactive or if we suspect abuse of the program.
                </p>

                <h3 className="text-2xl font-medium text-gray-900 mt-8 mb-4">4. Prohibited Conduct</h3>
                <p className="text-gray-700 mb-4">
                  You agree not to use the App to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Violate any laws or third-party rights.</li>
                  <li>Engage in fraudulent activities or abuse promo codes/referrals.</li>
                  <li>Attempt to bypass security measures or reverse engineer the App.</li>
                </ul>

                <h3 className="text-2xl font-medium text-gray-900 mt-8 mb-4">5. Indemnification and Liability</h3>
                <p className="text-gray-700 mb-4">
                  5.1 <strong>Indemnification:</strong> You agree to indemnify and hold harmless Otto against all claims related to your misuse of the App or violation of these Terms.
                </p>
                <p className="text-gray-700 mb-4">
                  5.2 <strong>Limitation:</strong> We are not liable for service interruptions, data loss, or third-party actions. Our liability is limited to the amount of fees you paid us in the last 12 months.
                </p>
              </div>
            )}

            {/* SHARED TERMS (Bottom) */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">General Provisions</h2>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">Termination</h3>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">Governing Law</h3>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions. Any disputes shall be resolved by arbitration in Accra, Ghana.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">Changes</h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. We will notify you of material changes via email or app notification.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us at <a href="mailto:legal@ottoafrica.com" className="text-otto-blue hover:underline">legal@ottoafrica.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;


