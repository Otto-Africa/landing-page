import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import CodeBlock from "../../../components/CodeBlock";
import {
  WEBHOOK_FAILED_EXAMPLE,
  WEBHOOK_PAYLOAD_EXAMPLE,
} from "../../../data/fcl/endpoints";
import "../docs.css";

/**
 * Payment Gateway webhooks (STE).
 */
const GatewayWebhooks = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#url", label: "Which URL is used" },
    { href: "#payload", label: "Payload" },
    { href: "#status", label: "Status values" },
  ];

  return (
    <>
      <SEO
        noindex
        title="Payment Gateway Webhooks - Otto Africa Documentation"
        description="Register and handle FCL Payment Gateway callback notifications."
        keywords="FCL webhook, callbackUrl, payment status"
        url="https://ottoafrica.com/fcl/gateway-webhooks"
      />
      <DocsLayout
        currentPage="/fcl/gateway-webhooks"
        onThisPageItems={onThisPageItems}
        nutshell="Register a default callback URL or pass callbackUrl on create. Treat the webhook as the primary SUCCESS signal."
      >
        <div className="docs-content">
          <h1 id="overview">Payment Gateway webhooks</h1>

          <DocsOpener
            lead="Gateway posts JSON to a callback URL when a transaction reaches SUCCESS or FAILED. That callback is the primary success signal."
            when="Use this page when Otto must trust rail completion. Polls can stay PENDING while the webhook holds the real result."
            why="Create HTTP 200 is only accepted. Without the webhook, Otto cannot mark collect paid on the rail."
            how="Register a default callback or pass callbackUrl on create. Verify the post. Then poll status as backup."
          />

          <h2 id="url">Which URL is used</h2>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>
              Register a default once with PUT{" "}
              <code>/api/v1/merchants/callback-url</code>.
            </li>
            <li>
              Pass <code>callbackUrl</code> on one create to override the
              default for that transaction.
            </li>
          </ol>
          <p>
            The per-request URL wins. Clear the default with JSON{" "}
            <code>null</code>. An empty string is rejected. The URL must match{" "}
            <code>^https?://.+</code>.
          </p>

          <div className="docs-alert warning">
            <strong>CAUTION:</strong> Delivery is one attempt with no retry.
            Also poll status as a backup. Do not treat status alone as final
            when a callback URL is set.
          </div>

          <h2 id="payload">Payload</h2>
          <p>
            <code>network</code> is null for a card checkout session.{" "}
            <code>msisdn</code> is the customer wallet for collection or
            disbursement, a bank account number for bank transfer, and null for
            card checkout.
          </p>
          <p>
            <code>reason</code> is null on SUCCESS. On FAILED,{" "}
            <code>reason</code> is a human-readable explanation.
          </p>
          <CodeBlock language="json" code={WEBHOOK_PAYLOAD_EXAMPLE} />
          <h3>Failed example</h3>
          <CodeBlock language="json" code={WEBHOOK_FAILED_EXAMPLE} />

          <h2 id="status">Status values</h2>
          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>status</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>PENDING</code>
                </td>
                <td>The transaction is not final.</td>
              </tr>
              <tr>
                <td>
                  <code>SUCCESS</code>
                </td>
                <td>The transaction completed. Mark the order as paid.</td>
              </tr>
              <tr>
                <td>
                  <code>FAILED</code>
                </td>
                <td>The transaction failed. Do not mark the order as paid.</td>
              </tr>
            </tbody>
          </table>

          <p>
            Endpoint details:{" "}
            <Link to="/fcl/gateway/api/set-callback-url">
              set callback URL
            </Link>
            .
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default GatewayWebhooks;
