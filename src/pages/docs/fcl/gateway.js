import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import {
  CLIENT_ID,
  COLLECTION_MIN_GHS,
  DISBURSEMENT_MIN_GHS,
  INTEGRATION_CODE,
  MERCHANT_ID,
  NETWORKS,
  PUBLIC_BASE_URL,
} from "../../../data/fcl/constants";
import "../docs.css";

/**
 * FCL Payment Gateway overview (STE).
 */
const FclGateway = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#base-urls", label: "Base URLs" },
    { href: "#merchant", label: "Merchant identity" },
    { href: "#limits", label: "Amount floors" },
  ];

  return (
    <>
      <SEO
        noindex
        title="FCL Payment Gateway - Otto Africa Documentation"
        description="FCL Payment Gateway for collections, disbursements, name enquiry, and webhooks."
        keywords="FCL Payment Gateway, mobile money, disbursement, GhIPSS, MojoPay"
        url="https://ottoafrica.com/fcl/gateway"
      />
      <DocsLayout
        currentPage="/fcl/gateway"
        onThisPageItems={onThisPageItems}
        nutshell="Use Payment Gateway to collect GHS and pay out GHS. Register a webhook. Keep providerRef for status checks."
      >
        <div className="docs-content">
          <h1 id="overview">FCL Payment Gateway API</h1>

          <DocsOpener
            lead="Payment Gateway collects GHS and pays out GHS for the merchant. Rails include mobile money, MojoPay card checkout, and bank transfer with GhIPSS name enquiry."
            when="Use Gateway when Otto must debit or credit an external rail. Use Unified for PIN and customer products. Use Core Banking for ledger posts."
            why="Gateway owns providerRef and webhook SUCCESS. That is the rail result. It is not a Core Banking booking."
            how="Send X-Api-Key. Create the collection or disbursement. Keep providerRef. Wait for the webhook. Poll status as a backup."
          />

          <h2 id="capabilities">Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="docs-card">
              <h3 className="text-lg font-semibold mb-2">Collections</h3>
              <p className="text-gray-600">
                Debit a customer wallet with a mobile-money request, or open a
                hosted card checkout session.
              </p>
            </div>
            <div className="docs-card">
              <h3 className="text-lg font-semibold mb-2">Disbursements</h3>
              <p className="text-gray-600">
                Pay out over mobile money or bank transfer. Both rails use one
                status path with <code>providerRef</code>.
              </p>
            </div>
            <div className="docs-card">
              <h3 className="text-lg font-semibold mb-2">Name enquiry</h3>
              <p className="text-gray-600">
                Confirm wallet names on {NETWORKS.join(", ")} and bank account
                names before you move money.
              </p>
            </div>
            <div className="docs-card">
              <h3 className="text-lg font-semibold mb-2">Webhooks</h3>
              <p className="text-gray-600">
                Register a callback URL. The gateway posts SUCCESS or FAILED to
                that URL.
              </p>
            </div>
          </div>

          <h2 id="base-urls">Base URLs</h2>
          <p>
            Set <code>baseUrl</code> to the host that your service can reach.
            All paths in this section are relative to that host.
          </p>
          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>Host</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Public</td>
                <td>
                  <code>{PUBLIC_BASE_URL}</code>
                </td>
              </tr>
              <tr>
                <td>On-prem</td>
                <td>
                  <code>http://10.11.12.84:33780</code>
                </td>
              </tr>
            </tbody>
          </table>

          <h2 id="merchant">Merchant identity</h2>
          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Client ID</td>
                <td>
                  <code>{CLIENT_ID}</code>
                </td>
                <td>
                  Path value for create API key. The integration label{" "}
                  <code>{INTEGRATION_CODE}</code> is not the path value.
                </td>
              </tr>
              <tr>
                <td>Merchant</td>
                <td>
                  <code>{MERCHANT_ID}</code>
                </td>
                <td>Identifies this merchant with FCL.</td>
              </tr>
            </tbody>
          </table>

          <h2 id="limits">Amount floors</h2>
          <div className="docs-alert warning">
            <strong>CAUTION:</strong> Collections and checkout must be at least{" "}
            <code>{COLLECTION_MIN_GHS}</code> GHS. Disbursements must be at least{" "}
            <code>{DISBURSEMENT_MIN_GHS}</code> GHS. Smaller amounts can fail.
          </div>

          <p>
            Continue with the{" "}
            <Link to="/fcl/gateway-quickstart">quickstart</Link>,{" "}
            <Link to="/fcl/gateway-authentication">authentication</Link>,
            or the{" "}
            <Link to="/fcl/gateway-reference">endpoint reference</Link>.
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default FclGateway;
