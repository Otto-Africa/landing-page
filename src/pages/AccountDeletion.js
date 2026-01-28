import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import UserTypeToggle from "../components/UserTypeToggle";

const AccountDeletion = () => {
  const contentRef = useScrollAnimation({ threshold: 0.1 });
  const [userType, setUserType] = useState("merchant"); // Default to merchant

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`How to Delete Your ${userType === 'merchant' ? 'Business' : 'Customer'} Account - Otto Africa`}
        description={`Learn how to delete your Otto Africa ${userType} account. Step-by-step instructions and important information.`}
        keywords={`delete account, account deletion, remove account, Otto Africa ${userType} deletion`}
        url="https://ottoafrica.com/account-deletion"
      />
      <Header />

      <section ref={contentRef} className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Delete Your Account
            </h1>
            <p className="text-gray-600">
              Select your account type below to see specific instructions
            </p>
          </div>

          <UserTypeToggle activeType={userType} onToggle={setUserType} />

          <div className="prose prose-lg max-w-none mt-8">
            <div className="scroll-animate delay-100">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98 1.723 2.98H11.83c-1.936 0-2.473-1.646-1.723-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Important:</strong> Your account will be deactivated immediately and permanently deleted after 30 days. You can cancel this request by logging back in within 30 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {userType === "merchant" ? (
              // MERCHANT CONTENT
              <div className="scroll-animate delay-200 animate-fade-in">
                <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">
                  For Business/Merchant Accounts
                </h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-4">
                  <li>
                    <strong>Open the Otto Merchant App</strong> on your mobile device
                  </li>
                  <li>
                    <strong>Navigate to Profile:</strong> Tap on your profile icon or menu, then select "Profile"
                  </li>
                  <li>
                    <strong>Go to Security Tab:</strong> Tap on the "Security" tab at the top of the profile screen
                  </li>
                  <li>
                    <strong>Find Account Termination:</strong> Scroll down to the "ACCOUNT TERMINATION" section
                  </li>
                  <li>
                    <strong>Select Close Account:</strong> Tap on "Close my account"
                  </li>
                  <li>
                    <strong>Provide a Reason:</strong> Select a reason for deletion from the list, or choose "Other" and provide a custom reason
                  </li>
                  <li>
                    <strong>Confirm Deletion:</strong> Review the warning message regarding your business data and settlements, then confirm deletion.
                  </li>
                  <li>
                    <strong>Complete:</strong> Your account will be scheduled for deletion.
                  </li>
                </ol>

                <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">
                  Important for Merchants
                </h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
                  <li>
                    <strong>Zero Balance Required:</strong> You must withdraw all funds from your business wallet before you can close your account.
                  </li>
                  <li>
                    <strong>Active Disputes:</strong> You cannot delete your account if there are pending chargebacks or disputes. These must be resolved first.
                  </li>
                  <li>
                    <strong>Team Access:</strong> Deleting the primary business owner account will revoke access for all team members associated with this business.
                  </li>
                  <li>
                    <strong>Transaction Records:</strong> While your account data is deleted, we are required by law to retain certain transaction records for financial audit and compliance purposes for a specific period (typically 5-7 years).
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">
                  Delete Specific Business Data
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you wish to remove specific data without closing your business account:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
                  <li>Go to <strong>Profile &gt; Security &gt; Data Management</strong></li>
                  <li>Tap on "Delete My Data"</li>
                  <li>Select items to remove:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Payment/Withdrawal Methods</li>
                      <li>Profile Picture</li>
                      <li>Notification Preferences</li>
                      <li>Secondary Business Locations</li>
                    </ul>
                  </li>
                  <li>Confirm selection. <strong>Note:</strong> This action is irreversible.</li>
                </ol>
              </div>
            ) : (
              // CUSTOMER CONTENT
              <div className="scroll-animate delay-200 animate-fade-in">
                <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">
                  For Personal/Customer Accounts
                </h2>
                <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-4">
                  <li>
                    <strong>Open the Otto Customer App</strong> on your mobile device
                  </li>
                  <li>
                    <strong>Navigate to Profile:</strong> Tap on your profile icon or menu, then select "Profile"
                  </li>
                  <li>
                    <strong>Go to Security Settings:</strong> Scroll down to find the "Security" section
                  </li>
                  <li>
                    <strong>Select Delete Account:</strong> Tap on "Delete Account" or "Close my account"
                  </li>
                  <li>
                    <strong>Provide a Reason:</strong> Select a reason for deletion.
                  </li>
                  <li>
                    <strong>Confirm Deletion:</strong> Review the warning message and confirm.
                  </li>
                  <li>
                    <strong>Complete:</strong> Your account will be scheduled for deletion.
                  </li>
                </ol>

                <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">
                  Important for Customers
                </h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
                  <li>
                    <strong>Unused Gift Cards:</strong> Please use or transfer any active gift card balances before deletion. Unused balances may be lost upon account deletion.
                  </li>
                  <li>
                    <strong>Loyalty Points:</strong> Any accumulated loyalty points will be permanently forfeited.
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">
                  Delete Specific Personal Data
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To remove specific data points without full account deletion:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
                  <li>Go to <strong>Profile &gt; Security &gt; Data Management</strong></li>
                  <li>Tap on "Delete My Data"</li>
                  <li>Select items to remove:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Saved Payment Cards/Mobile Money</li>
                      <li>Search History</li>
                      <li>Saved Beneficiaries</li>
                      <li>Profile Information</li>
                    </ul>
                  </li>
                  <li>Confirm deletion.</li>
                </ol>
              </div>
            )}

            <div className="scroll-animate delay-600 mt-12 bg-gray-50 border-t border-gray-100 pt-8 p-6 rounded-lg">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">
                Need Assistance?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you encounter issues during the deletion process, our specific support channels can help:
              </p>
              <ul className="list-none pl-0 mb-6 text-gray-700 space-y-2">
                <li className="flex items-center">
                  <span className="font-semibold w-24">Email:</span>
                  <a href="mailto:support@ottoafrica.com" className="text-otto-blue hover:underline">support@ottoafrica.com</a>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold w-24">In-App:</span>
                  <span>Profile &gt; Support &gt; Contact Us</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                Please allow up to 48 hours for manual deletion requests processed via email. Automated in-app deletion is instant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountDeletion;

