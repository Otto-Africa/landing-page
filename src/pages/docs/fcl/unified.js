import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import CodeBlock from "../../../components/CodeBlock";
import inventory from "../../../data/fcl/unifiedApi.json";
import "../docs.css";

/**
 * Unified External Channels overview (STE).
 */
const UnifiedOverview = () => {
  const groups = [...new Set(inventory.endpoints.map((e) => e.group))];
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#access", label: "Access" },
    { href: "#groups", label: "Endpoint groups" },
    { href: "#pin", label: "PIN Management" },
  ];

  const headerExample = `X-API-KEY: <partner key>
X-Request-Id: <traceable request id>
Content-Type: application/json`;

  return (
    <>
      <SEO
        noindex
        title="Unified External Channels - Otto Africa Documentation"
        description="FCL Unified External Channels API for products, customers, OTP, and PIN Management."
        keywords="FCL Unified API, External Channels, PIN Management"
        url="https://ottoafrica.com/fcl/unified"
      />
      <DocsLayout
        currentPage="/fcl/unified"
        onThisPageItems={onThisPageItems}
        nutshell="Unified uses /api/ext/v1. Keep its partner key separate from the Payment Gateway key."
      >
        <div className="docs-content">
          <h1 id="overview">Unified External Channels</h1>

          <DocsOpener
            lead="Unified External Channels covers products, customer onboarding, investments, loans, OTP, refunds, and PIN Management."
            when="Use Unified when Otto must create a customer, manage a product, send OTP, or run PIN. Do not use Gateway results to certify these paths."
            why="This contract is separate from Payment Gateway. Historical Gateway traffic does not prove Unified availability."
            how="Call the Unified base URL with that API's key. Start with products and PIN. See the catalog below for method-path pairs."
          />
          <p>
            Base URL: <code>{inventory.verification.baseUrl}</code>
          </p>

          <div className="docs-alert info">
            Source: {inventory.source}. Review date: {inventory.reviewDate}. The
            catalog has {inventory.requestCount} request variants and{" "}
            {inventory.uniqueEndpointCount} unique method-path pairs.
          </div>

          <h2 id="access">Access</h2>
          <p>
            Use a server-held partner <code>X-API-KEY</code>. Add a traceable{" "}
            <code>X-Request-Id</code>. Do not reuse or rotate Payment Gateway
            merchant keys for Unified access.
          </p>
          <CodeBlock language="bash" code={headerExample} />
          <p>
            Make sure that the caller is authorized to act for the customer
            before you submit a request.
          </p>
          <p>
            Authenticated product reads returned HTTP 200 when the channel
            header was omitted. Creation, transfers, OTP delivery, and PIN
            changes need approved sandbox fixtures.
          </p>

          <h2 id="groups">Endpoint groups</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            {groups.map((group) => (
              <li key={group}>{group}</li>
            ))}
          </ul>
          <p>
            Open the{" "}
            <Link to="/fcl/unified-reference">
              Unified endpoint reference
            </Link>{" "}
            for fields and saved examples.
          </p>

          <h2 id="pin">PIN Management</h2>
          <p>
            PIN Management creates, verifies, updates, and recovers a six-digit
            customer PIN with security questions.
          </p>
          <p>
            Otto routes customer PIN operations to these Unified endpoints. Otto
            does not store the local transaction PIN table.
          </p>
          <p>
            Read the{" "}
            <Link to="/fcl/pin-management">PIN Management guide</Link>.
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default UnifiedOverview;
