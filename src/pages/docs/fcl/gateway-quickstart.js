import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import CodeBlock from "../../../components/CodeBlock";
import {
  CLIENT_ID,
  COLLECTION_MIN_GHS,
  MERCHANT_ID,
  PUBLIC_BASE_URL,
} from "../../../data/fcl/constants";
import "../docs.css";

/**
 * Payment Gateway quickstart (STE).
 */
const GatewayQuickstart = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#need", label: "What you need" },
    { href: "#steps", label: "Steps" },
    { href: "#example", label: "Example" },
  ];

  const createExample = `curl -X POST "${PUBLIC_BASE_URL}/api/v1/collections" \\
  -H "X-Api-Key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "network": "MTN",
    "msisdn": "233241234567",
    "amount": "${COLLECTION_MIN_GHS}",
    "currency": "GHS",
    "reference": "ORDER-1001",
    "callbackUrl": "https://example.com/webhooks/payment-status"
  }'`;

  return (
    <>
      <SEO
        noindex
        title="Payment Gateway Quickstart - Otto Africa Documentation"
        description="Collect GHS with the FCL Payment Gateway: create an API key, register a webhook, then create a collection."
        keywords="FCL Payment Gateway quickstart, mobile money collection"
        url="https://ottoafrica.com/fcl/gateway-quickstart"
      />
      <DocsLayout
        currentPage="/fcl/gateway-quickstart"
        onThisPageItems={onThisPageItems}
        nutshell="Create an API key, register a webhook, create a collection, save providerRef, then wait for the callback."
      >
        <div className="docs-content">
          <h1 id="overview">Payment Gateway quickstart</h1>

          <DocsOpener
            lead="This procedure collects GHS from a mobile-money wallet. Card checkout and disbursements use the same pattern."
            when="Use this page for the first Gateway collect in a lab. Do not use it as the Otto partner quickstart."
            why="Create, providerRef, webhook, then poll is the order that avoids treating HTTP 200 as paid."
            how="Send X-Api-Key. Create the request. Keep providerRef. Wait for the webhook. Poll status as a backup."
          />

          <h2 id="need">What you need</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Client ID <code>{CLIENT_ID}</code>
            </li>
            <li>
              Merchant <code>{MERCHANT_ID}</code>
            </li>
            <li>An API key from FCL, or a new key from the create-key path</li>
            <li>FCL approval for backend access to the Payment Gateway</li>
          </ul>

          <h2 id="steps">Steps</h2>
          <ol className="list-decimal list-inside space-y-3 mb-6">
            <li>
              Get an API key. Send POST{" "}
              <code>/api/v1/merchants/{CLIENT_ID}/api-keys</code> with body{" "}
              <code>{`{}`}</code> and no <code>X-Api-Key</code>. Store{" "}
              <code>apiKey</code> immediately. The key starts with{" "}
              <code>fpk_</code>.
            </li>
            <li>
              Register a webhook. Send PUT{" "}
              <Link to="/fcl/gateway-webhooks">
                /api/v1/merchants/callback-url
              </Link>{" "}
              to a public HTTPS URL, or pass <code>callbackUrl</code> on each
              create.
            </li>
            <li>
              Create a collection. Send POST <code>/api/v1/collections</code>{" "}
              with network, MSISDN, amount at least{" "}
              <code>{COLLECTION_MIN_GHS}</code> GHS, and a unique reference.
            </li>
            <li>
              Save <code>providerRef</code> from the create response. Do not mark
              the order as paid yet.
            </li>
            <li>
              Poll GET{" "}
              <code>/api/v1/collections/{"{providerRef}"}/status</code>. Settle
              the order on the callback SUCCESS or FAILED status.
            </li>
          </ol>

          <div className="docs-alert warning">
            <strong>CAUTION:</strong> The callback is the primary success signal.
            Status polls can stay PENDING or FAILED while the webhook holds the
            real result. The gateway sends one callback attempt with no retry.
          </div>

          <h2 id="example">Example collection create</h2>
          <CodeBlock language="bash" code={createExample} />

          <p>
            Next:{" "}
            <Link to="/fcl/gateway-authentication">authentication</Link>,{" "}
            <Link to="/fcl/gateway-webhooks">webhooks</Link>, or the{" "}
            <Link to="/fcl/gateway-reference">endpoint reference</Link>.
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default GatewayQuickstart;
