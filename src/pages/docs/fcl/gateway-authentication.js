import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import CodeBlock from "../../../components/CodeBlock";
import {
  CLIENT_ID,
  INTEGRATION_CODE,
  MERCHANT_ID,
  PUBLIC_BASE_URL,
} from "../../../data/fcl/constants";
import "../docs.css";

/**
 * Payment Gateway authentication (STE).
 */
const GatewayAuthentication = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#header", label: "API key header" },
    { href: "#credentials", label: "Client ID and merchant" },
    { href: "#rotate", label: "Create or rotate a key" },
  ];

  const headerExample = `curl -X GET "${PUBLIC_BASE_URL}/api/v1/merchants/callback-url" \\
  -H "X-Api-Key: YOUR_API_KEY"`;

  const createKeyExample = `curl -X POST "${PUBLIC_BASE_URL}/api/v1/merchants/${CLIENT_ID}/api-keys" \\
  -H "Content-Type: application/json" \\
  -d '{}'`;

  return (
    <>
      <SEO
        noindex
        title="Payment Gateway Authentication - Otto Africa Documentation"
        description="Authenticate to the FCL Payment Gateway with the X-Api-Key header."
        keywords="FCL Payment Gateway authentication, X-Api-Key, fpk_"
        url="https://ottoafrica.com/fcl/gateway-authentication"
      />
      <DocsLayout
        currentPage="/fcl/gateway-authentication"
        onThisPageItems={onThisPageItems}
        nutshell="Almost every Payment Gateway request needs X-Api-Key. Key create uses only clientId in the path."
      >
        <div className="docs-content">
          <h1 id="overview">Payment Gateway authentication</h1>

          <DocsOpener
            lead="Almost every Payment Gateway request needs the X-Api-Key header. This is not Otto Bearer authentication."
            when="Use this page when a Gateway call returns 401 or when you wire a new Otto adapter. Partners never send fpk_ keys from an app."
            why="Otto sk_ keys and FCL fpk_ keys are different contracts. Mixing them fails auth on both hosts."
            how="Put X-Api-Key on each Gateway request. Do not send Authorization: Bearer. See Otto authentication for partner keys."
          />

          <p>
            See{" "}
            <Link to="/docs/authentication">Otto authentication</Link> for
            partner Bearer keys.
          </p>

          <h2 id="header">API key header</h2>
          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>Header</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>X-Api-Key</code>
                </td>
                <td>Merchant API key from FCL, or a rotated key</td>
              </tr>
              <tr>
                <td>
                  <code>Content-Type</code>
                </td>
                <td>
                  <code>application/json</code> on requests with a body
                </td>
              </tr>
            </tbody>
          </table>

          <CodeBlock language="bash" code={headerExample} />

          <h2 id="credentials">Client ID and merchant</h2>
          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>Credential</th>
                <th>Value</th>
                <th>Used for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Client ID</td>
                <td>
                  <code>{CLIENT_ID}</code>
                </td>
                <td>
                  <code>POST /api/v1/merchants/{CLIENT_ID}/api-keys</code> only.
                  Same value as the merchant code. Not{" "}
                  <code>{INTEGRATION_CODE}</code>.
                </td>
              </tr>
              <tr>
                <td>Merchant</td>
                <td>
                  <code>{MERCHANT_ID}</code>
                </td>
                <td>
                  Identifies this merchant with FCL. Not sent as a request
                  header on collections.
                </td>
              </tr>
            </tbody>
          </table>

          <div className="docs-alert warning">
            <strong>CAUTION:</strong> A person who has <code>clientId</code> can
            create a new live key and revoke the previous key. Protect{" "}
            <code>clientId</code> like a password.
          </div>

          <h2 id="rotate">Create or rotate a key</h2>
          <p>
            Send POST with an empty JSON body and no <code>X-Api-Key</code>. The
            live default lifetime is 30 minutes. The response shows{" "}
            <code>apiKey</code> one time.
          </p>
          <CodeBlock language="bash" code={createKeyExample} />
        </div>
      </DocsLayout>
    </>
  );
};

export default GatewayAuthentication;
