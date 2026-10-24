import React from "react";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import CodeBlock from "../../../components/CodeBlock";
import "../docs.css";

const AUTH_ERROR_EXAMPLE = `{
  "success": false,
  "code": "UNAUTHORIZED",
  "message": "Missing or invalid API key"
}`;

/**
 * Payment Gateway errors (STE).
 */
const GatewayErrors = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#auth", label: "Missing API key" },
    { href: "#statuses", label: "HTTP statuses" },
  ];

  return (
    <>
      <SEO
        noindex
        title="Payment Gateway Errors - Otto Africa Documentation"
        description="Observed HTTP statuses and error envelopes for the FCL Payment Gateway."
        keywords="FCL Payment Gateway errors, UNAUTHORIZED, ALL_PROVIDERS_FAILED"
        url="https://ottoafrica.com/fcl/gateway-errors"
      />
      <DocsLayout
        currentPage="/fcl/gateway-errors"
        onThisPageItems={onThisPageItems}
        nutshell="HTTP 200 on create means accepted, not paid. HTTP 401 means a missing or invalid X-Api-Key."
      >
        <div className="docs-content">
          <h1 id="overview">Payment Gateway errors</h1>

          <DocsOpener
            lead="Gateway HTTP 200 on create means accepted, not paid. HTTP 401 means a missing or invalid X-Api-Key."
            when="Use this page when you map Gateway failures in Otto adapters. Do not treat empty 404 or 502 ALL_PROVIDERS_FAILED as a successful collect."
            why="Recorded public-host patterns repeat. Adapters must branch on status and body, not only HTTP 200."
            how="If 401, fix the key. If 200, wait for webhook SUCCESS. If 404, the ref is unknown. If 502 ALL_PROVIDERS_FAILED, the create is bad."
          />

          <h2 id="auth">Missing or invalid API key</h2>
          <p>
            HTTP <code>401</code> with <code>Content-Type: application/json</code>
            . The same body appears for GET and POST under <code>/api/v1</code>.
          </p>
          <CodeBlock language="json" code={AUTH_ERROR_EXAMPLE} />

          <h2 id="statuses">HTTP statuses</h2>
          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>Code</th>
                <th>Where</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>200</code>
                </td>
                <td>Creates, key issue, most GETs</td>
                <td>
                  Request accepted or lookup succeeded. A 200 on create is not
                  payment success.
                </td>
              </tr>
              <tr>
                <td>
                  <code>401</code>
                </td>
                <td>
                  All <code>/api/v1</code> payment routes
                </td>
                <td>
                  Missing or invalid <code>X-Api-Key</code>. Code is{" "}
                  <code>UNAUTHORIZED</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>502</code>
                </td>
                <td>Failed collection or disbursement create</td>
                <td>
                  <code>ALL_PROVIDERS_FAILED</code>. Not a successful payout.
                </td>
              </tr>
              <tr>
                <td>
                  <code>500</code>
                </td>
                <td>
                  PUT callback-url with <code>{`""`}</code>
                </td>
                <td>
                  Pattern validation failure. Clear the URL with JSON{" "}
                  <code>null</code> instead.
                </td>
              </tr>
              <tr>
                <td>
                  <code>404</code>
                </td>
                <td>Unknown providerRef or dummy bank enquiry</td>
                <td>Empty body observed on some public-host checks.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsLayout>
    </>
  );
};

export default GatewayErrors;
