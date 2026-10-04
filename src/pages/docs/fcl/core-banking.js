import React from "react";
import { Link, useParams } from "react-router-dom";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import CodeBlock from "../../../components/CodeBlock";
import inventory from "../../../data/fcl/coreBanking.json";
import "../docs.css";

/**
 * Core Banking overview and endpoint detail (STE).
 */
const CoreBanking = () => {
  const { id } = useParams();
  const endpoint = inventory.endpoints.find((row) => row.id === id);
  const check = inventory.results.find((row) => row.path === endpoint?.path);

  if (id && !endpoint) {
    return (
      <DocsLayout currentPage="/fcl/core-banking">
        <div className="docs-content">
          <h1>Endpoint not found</h1>
          <p>
            Return to the{" "}
            <Link to="/fcl/core-banking">Core Banking overview</Link>.
          </p>
        </div>
      </DocsLayout>
    );
  }

  if (endpoint) {
    return (
      <>
        <SEO
          noindex
          title={`${endpoint.name} - Core Banking - Otto Africa Documentation`}
          description={`Core Banking ${endpoint.path}`}
          keywords={`FCL Core Banking ${endpoint.path}`}
          url={`https://ottoafrica.com/fcl/core-banking/${endpoint.id}`}
        />
        <DocsLayout
          currentPage={`/fcl/core-banking/${endpoint.id}`}
          nutshell={
            endpoint.mutates
              ? "This request changes banking records. It does not move external money."
              : "This request retrieves banking information."
          }
        >
          <div className="docs-content">
            <p className="text-sm text-gray-500 mb-2">
              <Link to="/fcl/core-banking">Core Banking</Link>
              {" / "}
              {endpoint.group}
            </p>
            <h1>{endpoint.name}</h1>
            <p>
              <code>
                POST {inventory.baseUrl}
                {endpoint.path}
              </code>
            </p>
            <h2>Request body</h2>
            <CodeBlock
              language="json"
              code={JSON.stringify(endpoint.body, null, 2)}
            />
            <p>
              Preserve field-name casing exactly. Identifiers are strings. Keep
              leading zeroes.
            </p>
            {endpoint.mutates ? (
              <div className="docs-alert warning">
                <strong>CAUTION:</strong> This request changes banking records.
                A successful Field posting does not mean an external payment
                completed.
              </div>
            ) : null}
            <h2>Recorded response</h2>
            {check?.httpStatus ? (
              <>
                <p>
                  HTTP {check.httpStatus} returned {check.responseFormat} with{" "}
                  <code>success: {String(check.businessSuccess)}</code>, code{" "}
                  <code>{check.responseCode}</code>, message{" "}
                  <code>{check.responseMessage}</code>
                  {check.correlationId ? (
                    <>
                      {" "}
                      and correlationId <code>{check.correlationId}</code>
                    </>
                  ) : null}
                  . This sample did not succeed.
                </p>
                {check.body ? (
                  <CodeBlock
                    language="json"
                    code={JSON.stringify(check.body, null, 2)}
                  />
                ) : null}
              </>
            ) : (
              <p>No response is recorded for this endpoint.</p>
            )}
          </div>
        </DocsLayout>
      </>
    );
  }

  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#auth", label: "Authentication" },
    { href: "#endpoints", label: "Endpoints" },
    { href: "#notes", label: "Contract notes" },
  ];

  return (
    <>
      <SEO
        noindex
        title="Core Banking API - Otto Africa Documentation"
        description="FCL Core Banking for account enquiry, facilities, investments, and Field postings."
        keywords="FCL Core Banking, Field Deposit, Field Withdrawal"
        url="https://ottoafrica.com/fcl/core-banking"
      />
      <DocsLayout
        currentPage="/fcl/core-banking"
        onThisPageItems={onThisPageItems}
        nutshell="Use the independent Core Banking key. Field postings record ledger changes. They do not execute Gateway payouts."
      >
        <div className="docs-content">
          <h1 id="overview">Core Banking API</h1>

          <DocsOpener
            lead="Core Banking supplies account, investment, and facility enquiry. It also supplies CBS Field postings for existing customers."
            when="Use Core Banking when Otto must read a ledger or post a Field entry. Do not use it to execute a Gateway payout."
            why="Field postings record ledger changes. They do not move external rails. Mixing this with Gateway causes double meaning for success."
            how="Use the independent Core Banking key. Call enquiry first. Post Fields only for existing customers. Treat this contract as separate from Gateway and Unified."
          />
          <p>
            Base URL: <code>{inventory.baseUrl}/</code>
          </p>

          <div className="docs-alert info">
            Latest verification date: {inventory.testedAt.slice(0, 10)}.{" "}
            {inventory.responseObservation}
          </div>

          <h2 id="auth">Authentication and routing</h2>
          <CodeBlock
            language="bash"
            code={
              "x-api-key: <your Core Banking API key>\nContent-Type: application/json"
            }
          />
          <p>
            Use the independent Core Banking key. Do not use the Payment Gateway
            API key.
          </p>
          <p>
            Ask FCL to approve access from your backend server. Route local
            requests through that server and use a secure connection.
          </p>

          <h2 id="endpoints">Endpoints</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {inventory.endpoints.map((row) => (
              <Link
                key={row.id}
                to={`/fcl/core-banking/${row.id}`}
                className="docs-card block"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {row.number}. {row.name}
                </h3>
                <p>
                  <code>POST {row.path}</code>
                </p>
                <p className="text-gray-600">
                  {row.mutates
                    ? "Updates banking records"
                    : "Retrieves banking information"}
                </p>
              </Link>
            ))}
          </div>

          <h2 id="notes">Contract notes</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Investment and facility customer lookup use{" "}
              <code>Customerid</code>.
            </li>
            <li>
              Account customer lookup uses <code>customerId</code>.
            </li>
            <li>
              Facilities by account uses lowercase <code>accountnumber</code>.
            </li>
            <li>
              Field Deposit uses <code>agentAccountNumber</code>.
            </li>
            <li>
              Field Withdrawal uses <code>contraAccountNumber</code>.
            </li>
          </ul>
          <p>
            Make sure that the customer has authority for the account before you
            submit a request. Preserve one operation ID through submission and
            reconciliation.
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default CoreBanking;
