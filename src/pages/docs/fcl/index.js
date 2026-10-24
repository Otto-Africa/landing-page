import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import {
  CLIENT_ID,
  PUBLIC_BASE_URL,
} from "../../../data/fcl/constants";
import "../docs.css";

/**
 * FCL provider APIs overview (STE).
 */
const FclOverview = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#when-why-how", label: "When, why, and how" },
    { href: "#three-apis", label: "Three APIs" },
    { href: "#addresses", label: "API addresses" },
    { href: "#next", label: "Next steps" },
  ];

  return (
    <>
      <SEO
        noindex
        title="FCL Provider APIs - Otto Africa Documentation"
        description="Documentation for FCL Payment Gateway, Unified External Channels, and Core Banking APIs."
        keywords="FCL API, Payment Gateway, Unified External Channels, Core Banking, Otto documentation"
        url="https://ottoafrica.com/fcl"
      />
      <DocsLayout
        currentPage="/fcl"
        onThisPageItems={onThisPageItems}
        nutshell="FCL supplies three separate APIs for payments, customer PIN operations, and Core Banking enquiry."
      >
        <div className="docs-content">
          <h1 id="overview">FCL provider APIs</h1>

          <DocsOpener
            lead="FCL is the bank provider Otto calls. These pages are the provider contracts. They are not the Otto merchant API."
            when="Use this section only when you work on Otto adapters. Partners must not call FCL. Partners use https://api.ottoafrica.com with a Bearer key."
            why="Payment Gateway, Unified External Channels, and Core Banking own different steps. Success on one API is not proof of success on another."
            how="Read architecture. Then open Gateway, Unified, or Core Banking. Authenticate with X-Api-Key on the provider host. Do not send Otto sk_ keys here."
          />

          <div className="docs-alert warning">
            <strong>Internal:</strong> These pages document the provider
            contracts that Otto calls. They are not published on production.
            External developers use the{" "}
            <Link to="/docs/payments">Otto Payments API</Link>.
          </div>

          <h2 id="three-apis">Three APIs</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link to="/fcl/gateway" className="docs-card block">
              <h3 className="text-lg font-semibold mb-2">Payment Gateway</h3>
              <p className="text-gray-600">
                Collections, card checkout, disbursements, name enquiry, and
                payment webhooks.
              </p>
            </Link>
            <Link to="/fcl/unified" className="docs-card block">
              <h3 className="text-lg font-semibold mb-2">
                Unified External Channels
              </h3>
              <p className="text-gray-600">
                Products, customer operations, OTP, and PIN Management.
              </p>
            </Link>
            <Link to="/fcl/core-banking" className="docs-card block">
              <h3 className="text-lg font-semibold mb-2">Core Banking</h3>
              <p className="text-gray-600">
                Account enquiry, facilities, investments, and Field postings.
              </p>
            </Link>
          </div>

          <h2 id="addresses">API addresses</h2>
          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>API</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Payment Gateway (public)</td>
                <td>
                  <code>{PUBLIC_BASE_URL}</code>
                </td>
              </tr>
              <tr>
                <td>Payment Gateway (on-prem)</td>
                <td>
                  <code>http://10.11.12.84:33780</code>
                </td>
              </tr>
              <tr>
                <td>Unified External Channels</td>
                <td>
                  <code>
                    https://fclwebapp.formscapital.net:7235/api/ext/v1
                  </code>
                </td>
              </tr>
              <tr>
                <td>Core Banking</td>
                <td>
                  <code>https://fclapi.formscapital.net:7050/api/v1/</code>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="docs-alert warning">
            <strong>CAUTION:</strong> Keep each API key separate. Do not use a
            Payment Gateway key on Unified or Core Banking.
          </div>

          <p>
            The public Payment Gateway merchant code is{" "}
            <code>{CLIENT_ID}</code>. Treat that value as a secret.
          </p>

          <h2 id="next">Next steps</h2>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>
              Read the{" "}
              <Link to="/fcl/architecture">architecture overview</Link>.
            </li>
            <li>
              Start the{" "}
              <Link to="/fcl/gateway-quickstart">
                Payment Gateway quickstart
              </Link>
              .
            </li>
            <li>
              Read{" "}
              <Link to="/fcl/pin-management">PIN Management</Link> before
              you enable customer PIN flows.
            </li>
          </ol>
        </div>
      </DocsLayout>
    </>
  );
};

export default FclOverview;
