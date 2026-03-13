import React from "react";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import "./docs.css";

const Support = () => {
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
        { path: "/docs/investment-certificates", label: "Investment Certificates" },
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

  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#channels", label: "Support Channels" },
    { href: "#common-issues", label: "Common Issues" },
    { href: "#response-times", label: "Response Times" },
    { href: "#report-issue", label: "Report an Issue" },
    { href: "#contact", label: "Contact Information" },
  ];

  return (
    <>
      <SEO
        title="Support - Otto Africa API Documentation"
        description="Get help integrating Otto's API. Contact our support team via email or GitHub issues for technical questions and assistance."
        keywords="Otto API support, developer support, API help, technical support, API documentation support"
        url="https://ottoafrica.com/docs/support"
      />
      <DocsLayout
        currentPage="/docs/support"
        sidebarItems={sidebarItems}
        onThisPageItems={onThisPageItems}
      >
        <div className="docs-content">
          <h1 id="overview">Support</h1>

          <div className="docs-alert info">
            <strong>In a nutshell:</strong> Get help from our support team
            through email and GitHub issues.
          </div>

          <p>
            Get help from our support team. We're here to help you integrate
            Otto's API successfully.
          </p>

          <h2 id="channels">Support Channels</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Email Support
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Send us an email for technical questions and support.
              </p>
              <a
                href="mailto:contact@ottoafrica.com"
                className="text-otto-blue hover:text-black font-medium text-sm"
              >
                contact@ottoafrica.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                GitHub Issues
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Report bugs and request features on GitHub.
              </p>
              <a
                href="https://github.com/ottoafrica/api-issues"
                className="text-otto-blue hover:text-black font-medium text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Issues →
              </a>
            </div>
          </div>

          <h2 id="common-issues">Common Issues</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">
                API Authentication Errors
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                If you're getting authentication errors, check that you're using
                the correct API keys and that they're properly formatted in the
                Authorization header.
              </p>
              <div className="bg-gray-50 p-4 rounded text-sm">
                <strong>Solution:</strong> Ensure your API key starts with{" "}
                <code>sk_live_</code> for production or <code>sk_test_</code>{" "}
                for test environment. Both use the same endpoint (
                <code>https://api.ottoafrica.com</code>).
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">
                Webhook Signature Verification
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Webhook payloads include a signature for verification. Make sure
                you're verifying signatures to ensure request authenticity.
              </p>
              <div className="bg-gray-50 p-4 rounded text-sm">
                <strong>Help:</strong> Check our{" "}
                <a
                  href="/docs/webhooks"
                  className="text-otto-blue hover:text-black"
                >
                  webhooks guide
                </a>{" "}
                for implementation details.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">
                Rate Limiting
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                API requests are rate limited to prevent abuse. If you're
                hitting limits, implement proper error handling and retry logic.
              </p>
              <div className="bg-gray-50 p-4 rounded text-sm">
                <strong>Limit:</strong> 60 requests per minute per API key.
                Upgrade plans available for higher limits.
              </div>
            </div>
          </div>

          <h2 id="response-times">Response Times</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12h</div>
              <div className="text-gray-900 font-medium mb-1">Email</div>
              <div className="text-gray-600 text-sm">
                Business hours response
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">2h</div>
              <div className="text-gray-900 font-medium mb-1">
                Critical Issues
              </div>
              <div className="text-gray-600 text-sm">Emergency response</div>
            </div>
          </div>

          <h2 id="report-issue">Report an Issue</h2>

          <p>
            Found a bug or need to report an issue? Use our issue tracker to
            submit detailed bug reports.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-900 mb-4">
              Before Submitting
            </h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Include your API request/response details</li>
              <li>• Mention your programming language and framework</li>
              <li>• Include timestamps and error messages</li>
              <li>• Check if the issue is reproducible with test API keys</li>
            </ul>
          </div>

          <a
            href="https://github.com/ottoafrica/api-issues/issues/new"
            className="inline-flex items-center bg-otto-blue text-white px-6 py-3 rounded-full hover:bg-black transition-colors duration-200 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Report Issue
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          <h2 id="contact">Contact Information</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Technical Support
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  📧{" "}
                  <a
                    href="mailto:contact@ottoafrica.com"
                    className="text-otto-blue hover:text-black"
                  >
                    contact@ottoafrica.com
                  </a>
                </p>
                <p>
                  📖{" "}
                  <a
                    href="https://github.com/ottoafrica/api-issues"
                    className="text-otto-blue hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Issues
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🕒 Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
                <p>🌐 Time Zone: Greenwich Mean Time (GMT)</p>
              </div>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default Support;
