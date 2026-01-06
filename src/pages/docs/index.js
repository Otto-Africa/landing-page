import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import "./docs.css";

const DocsIndex = () => {
  const sidebarItems = [
    {
      title: "Getting Started",
      icon: "🚀",
      items: [
        { path: "/docs/getting-started", label: "Introduction" },
        { path: "/docs/authentication", label: "Authentication" },
        { path: "/docs/testing", label: "Testing" },
      ],
    },
    {
      title: "API Reference",
      icon: "📚",
      items: [
        { path: "/docs/gift-cards", label: "Gift Cards" },
        { path: "/docs/transactions", label: "Transactions" },
        { path: "/docs/loyalty", label: "Loyalty Programs" },
        { path: "/docs/qr-codes", label: "QR Codes" },
        { path: "/docs/settlements", label: "Settlements" },
        { path: "/docs/user-management", label: "User Management" },
      ],
    },
    {
      title: "Guides",
      icon: "📖",
      items: [
        { path: "/docs/webhooks", label: "Webhooks" },
        { path: "/docs/error-handling", label: "Error Handling" },
        { path: "/docs/rate-limits", label: "Rate Limits" },
      ],
    },
    {
      title: "Resources",
      icon: "🔧",
      items: [
        { path: "/docs/sdks", label: "SDKs & Libraries" },
        { path: "/docs/support", label: "Support" },
      ],
    },
  ];

  return (
    <DocsLayout currentPage="/docs" sidebarItems={sidebarItems}>
      <div className="docs-content">
        {/* Getting Started Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Getting Started
          </h2>
          <div className="space-y-6">
            <Link
              to="/docs/getting-started"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-otto-blue rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Introduction
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn the basics of Otto's API, understand authentication,
                    and make your first API call.
                  </p>
                  <span className="text-otto-blue font-medium text-sm">
                    Get started →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/docs/authentication"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-otto-blue rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Authentication
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Set up API keys, understand OAuth 2.0 authentication, and
                    learn about token scopes.
                  </p>
                  <span className="text-otto-blue font-medium text-sm">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* API Reference Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            API Reference
          </h2>
          <p className="text-gray-600 mb-8">
            Complete reference for all API endpoints organized by resource type.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/docs/gift-cards"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gift Cards
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Create gift card templates, manage instances, verify and redeem
                gift cards.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                View API Reference
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              to="/docs/transactions"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Transactions
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                List transactions, get transaction details, and access
                settlement information.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                View API Reference
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              to="/docs/loyalty"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Loyalty Programs
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Create and manage loyalty programs, rewards, and member points.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                View API Reference
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              to="/docs/qr-codes"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                QR Codes
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Generate QR codes for payments and manage static QR codes.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                View API Reference
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              to="/docs/settlements"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Settlements
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Access settlement history, balances, and upcoming settlements.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                View API Reference
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              to="/docs/user-management"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                User Management
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Manage staff users, roles, and permissions for your business.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                View API Reference
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </section>

        {/* Guides Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Guides</h2>
          <p className="text-gray-600 mb-8">
            Step-by-step guides to help you integrate Otto's API into your
            applications.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/docs/webhooks"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Webhooks
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Set up real-time notifications for payment events and updates.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                Read Guide
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              to="/docs/testing"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Testing
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Test your integration safely with test API keys.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                Read Guide
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              to="/docs/error-handling"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Error Handling
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn how to handle API errors and implement proper error
                handling.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                Read Guide
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              to="/docs/rate-limits"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Rate Limits
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Understand API rate limits and how to handle rate limit
                responses.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                Read Guide
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/docs/sdks"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                SDKs & Libraries
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Official SDKs and libraries for popular programming languages.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                View SDKs
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              to="/docs/support"
              className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-otto-blue transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Support
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Get help from our developer community and support team.
              </p>
              <div className="flex items-center text-otto-blue text-sm font-medium">
                Get Help
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
};

export default DocsIndex;
