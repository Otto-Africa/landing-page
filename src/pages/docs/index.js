import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import DocsOpener from "../../components/DocsOpener";
import "./docs.css";

/**
 * Docs Index.
 * Route-level components compose shared UI primitives so merchant workflows stay consistent across the portal.
 */
const DocsIndex = () => {
  return (
    <>
      <SEO
        title="API Documentation - Otto Africa"
        description="Complete API documentation for Otto Africa. Learn how to integrate payments, gift cards, loyalty programs, and QR codes into your application."
        keywords="Otto API documentation, payment API, gift card API, loyalty program API, QR code API, Africa payments API"
        url="https://ottoafrica.com/docs"
      />
      <DocsLayout currentPage="/docs">
        <div className="docs-content">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            API Platform
          </h1>

          <DocsOpener
            lead="Otto is the public partner API at https://api.ottoafrica.com. These docs cover Payments, Identity, Loyalty, LLM Conversations, and Accounting."
            when="Start here when you join as a partner. Open Getting started for the first request. Open a module page when you already know the product."
            why="Partners call Otto, not provider hosts. One Bearer key and one host keep collect, PIN, loyalty, and books on the same contract."
            how="Create an API key. Send Authorization: Bearer sk_test_.... Read When to use, Why, and How at the top of each page, then follow the paths on that page."
          />

          {/* Quickstart Block (OpenAI Style) */}
          <div className="bg-[#F7F7F8] rounded-2xl p-8 mb-12 flex flex-col lg:flex-row gap-8 items-center border border-gray-100">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Developer quickstart
              </h2>
              <p className="text-gray-600 mb-6 text-base">
                Make your first API request in minutes. Learn the basics of the
                Otto platform.
              </p>
              <Link
                to="/docs/getting-started"
                className="bg-black text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors inline-block text-sm"
              >
                Get started
              </Link>
            </div>
            <div className="flex-1 bg-white rounded-xl p-5 shadow-sm border border-gray-200 w-full font-mono text-sm overflow-x-auto">
              <div className="flex items-center justify-between mb-3">
                <div className="text-gray-400 text-xs">javascript</div>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-pink-600">
                import{" "}
                <span className="text-gray-800">
                  &#123; OttoCustomerSdk &#125;
                </span>{" "}
                from{" "}
                <span className="text-green-600">
                  "@ottoafrica/customer-sdk-js"
                </span>
                ;
              </div>
              <div className="text-blue-600 mt-2">
                const{" "}
                <span className="text-gray-800">
                  sdk = new OttoCustomerSdk(&#123;
                </span>
              </div>
              <div className="text-gray-800 ml-4">
                baseUrl:{" "}
                <span className="text-green-600">
                  "https://api.ottoafrica.com"
                </span>
                ,
              </div>
              <div className="text-gray-800 ml-4">
                clientToken:{" "}
                <span className="text-green-600">
                  "&lt;from your server&gt;"
                </span>
                ,
              </div>
              <div className="text-gray-800">&#125;);</div>
              <div className="text-blue-600 mt-2">
                const{" "}
                <span className="text-gray-800">
                  res = await sdk.lookupMember(
                </span>
                <span className="text-green-600">"MEMBER-CODE"</span>
                <span className="text-gray-800">);</span>
              </div>
              <div className="text-gray-500 mt-2 text-xs">
                <Link
                  to="/docs/sdks"
                  className="text-gray-500 hover:text-black underline-offset-2 hover:underline"
                >
                  npm @ottoafrica/*
                </Link>
                <span className="text-gray-400"> — loyalty SDKs</span>
              </div>
            </div>
          </div>

          {/* Platform modules */}
          <div className="mb-12 border border-gray-200 rounded-2xl p-6 bg-white">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Platform modules
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Partners call Otto at <code>https://api.ottoafrica.com</code>.
              Each module page states what it does and lists the Otto paths.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>
                <Link
                  to="/docs/payments"
                  className="text-[#00B4D8] hover:underline"
                >
                  Payments
                </Link>{" "}
                — collect, payout, transfers, funding flows, webhooks
              </li>
              <li>
                <Link
                  to="/docs/identity"
                  className="text-[#00B4D8] hover:underline"
                >
                  Identity
                </Link>{" "}
                — login, API keys, transaction PIN, sessions
              </li>
              <li>
                <Link
                  to="/docs/loyalty"
                  className="text-[#00B4D8] hover:underline"
                >
                  Loyalty Management
                </Link>{" "}
                — programs, members, rewards
              </li>
              <li>
                <Link
                  to="/docs/llm"
                  className="text-[#00B4D8] hover:underline"
                >
                  LLM Conversations
                </Link>{" "}
                — CosmoLLM chat, cases, documents, actions
              </li>
              <li>
                <Link
                  to="/docs/accounting"
                  className="text-[#00B4D8] hover:underline"
                >
                  Accounting
                </Link>{" "}
                — sales, bills, tax, reconcile, period close
              </li>
            </ul>
          </div>

          {/* What's new */}
          <div className="mb-12 border border-gray-200 rounded-2xl p-6 bg-white">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Collect &amp; Pay updates
            </h2>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>
                <Link
                  to="/demo-bank"
                  className="text-[#00B4D8] hover:underline"
                >
                  Demo Bank
                </Link>{" "}
                — simulate NUBAN and MoMo credits into Otto Cash wallets (local /
                test / staging)
              </li>
              <li>
                <Link
                  to="/docs/webhooks"
                  className="text-[#00B4D8] hover:underline"
                >
                  Webhooks
                </Link>{" "}
                — <code>collect.paid</code> fires on every settlement; three
                retries with HTTP status logging
              </li>
              <li>
                Paid invoices hide QR rails; wallet balance reflects{" "}
                <code>MB_CASH</code> settlements
              </li>
              <li>
                Otto-to-Otto transfers support lookup by phone, email, name, or{" "}
                <code>@tag</code>
              </li>
            </ul>
          </div>

          {/* Features Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Core capabilities
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <Link to="/docs/payments" className="docs-card block">
                <h3 className="text-lg font-semibold mb-2">Payments</h3>
                <p className="text-gray-600 text-sm">
                  Collect money and send payouts through Otto.
                </p>
              </Link>
              <Link to="/docs/identity" className="docs-card block">
                <h3 className="text-lg font-semibold mb-2">Identity</h3>
                <p className="text-gray-600 text-sm">
                  Login, API keys, PIN, and session security.
                </p>
              </Link>
              <Link to="/docs/loyalty" className="docs-card block">
                <h3 className="text-lg font-semibold mb-2">
                  Loyalty Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Programs, members, and rewards.
                </p>
              </Link>
              <Link to="/docs/llm" className="docs-card block">
                <h3 className="text-lg font-semibold mb-2">
                  LLM Conversations
                </h3>
                <p className="text-gray-600 text-sm">
                  CosmoLLM chat, cases, and actions.
                </p>
              </Link>
              <Link to="/docs/accounting" className="docs-card block">
                <h3 className="text-lg font-semibold mb-2">Accounting</h3>
                <p className="text-gray-600 text-sm">
                  Sales, bills, tax, and reconcile.
                </p>
              </Link>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 border-t border-gray-100 pt-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/docs/testing#demo-bank"
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    Demo Bank (sandbox payments)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/docs/sdks"
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    SDKs & Libraries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/docs/webhooks"
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    Webhooks Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/docs/error-handling"
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    Error Handling
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/docs/support"
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <a
                    href="https://api.ottoafrica.com/api/health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    API Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default DocsIndex;
