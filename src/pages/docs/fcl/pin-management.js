import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../../layout/DocsLayout";
import SEO from "../../../components/SEO";
import DocsOpener from "../../../components/DocsOpener";
import CodeBlock from "../../../components/CodeBlock";
import inventory from "../../../data/fcl/unifiedApi.json";
import "../docs.css";

const PIN_CREATE_EXAMPLE = `{
  "customerId": "<cbs-customer-id>",
  "pin": "147258",
  "confirmPin": "147258",
  "securityQuestionId": "<question-id>",
  "securityAnswer": "<answer>"
}`;

const PIN_VERIFY_EXAMPLE = `{
  "customerId": "<cbs-customer-id>",
  "pin": "147258"
}`;

/**
 * FCL PIN Management (STE). Updated for current Unified /pin/* contract.
 */
const PinManagement = () => {
  const pinEndpoints = inventory.endpoints.filter(
    (endpoint) => endpoint.group === "PIN Management",
  );
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#rules", label: "PIN rules" },
    { href: "#flow", label: "Setup flow" },
    { href: "#endpoints", label: "Endpoints" },
    { href: "#otto", label: "Otto usage" },
  ];

  return (
    <>
      <SEO
        noindex
        title="PIN Management - Otto Africa Documentation"
        description="FCL Unified External Channels PIN Management: create, verify, update, and recover a six-digit customer PIN."
        keywords="FCL PIN Management, security questions, transaction PIN"
        url="https://ottoafrica.com/fcl/pin-management"
      />
      <DocsLayout
        currentPage="/fcl/pin-management"
        onThisPageItems={onThisPageItems}
        nutshell="Use Unified /pin/* for a six-digit PIN plus security question. Do not retry a failed PIN verify automatically."
      >
        <div className="docs-content">
          <h1 id="overview">PIN Management</h1>

          <DocsOpener
            lead="PIN Management belongs to Unified External Channels. The PIN has six digits. Setup stores one security question and one answer."
            when="Use /pin when Otto must create, change, recover, or verify a customer PIN at FCL. Partners call Otto PIN paths, not this host."
            why="FCL is the PIN store Otto uses. Failed verify must not auto-retry. Three failures lock verify for 30 minutes."
            how="GET questions. POST create with pin, confirm, question, and answer. Verify with the check path. Otto maps these calls behind /profile/pin."
          />

          <h2 id="rules">PIN rules</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              The PIN must match the pattern of exactly six digits.
            </li>
            <li>Do not use a number sequence that increases by one each digit.</li>
            <li>Do not use a number sequence that decreases by one each digit.</li>
            <li>Do not use six identical digits.</li>
            <li>Do not use more than three identical digits in a row.</li>
            <li>
              Three consecutive verify failures lock verification for 30 minutes.
            </li>
            <li>Do not retry a failed PIN verify automatically.</li>
          </ul>

          <h2 id="flow">Setup flow</h2>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>
              Get active questions with GET <code>/pin/security-questions</code>.
            </li>
            <li>
              Show the question text to the customer. Keep the{" "}
              <code>questionId</code>.
            </li>
            <li>
              Send POST <code>/pin/create</code> with customer ID, PIN,
              confirm PIN, question ID, and answer.
            </li>
            <li>
              For later payments, send POST <code>/pin/verify</code> with
              customer ID and PIN.
            </li>
          </ol>

          <h3>Create example</h3>
          <CodeBlock language="json" code={PIN_CREATE_EXAMPLE} />
          <h3>Verify example</h3>
          <CodeBlock language="json" code={PIN_VERIFY_EXAMPLE} />

          <h2 id="endpoints">Endpoints</h2>
          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>Method</th>
                <th>Path</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {pinEndpoints.map((endpoint) => (
                <tr key={endpoint.id}>
                  <td>
                    <code>{endpoint.method}</code>
                  </td>
                  <td>
                    <code>{endpoint.path}</code>
                  </td>
                  <td>{endpoint.name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>
            Recovery uses POST <code>/pin/forgot</code> and then POST{" "}
            <code>/pin/reset</code> with the returned <code>referenceId</code>{" "}
            and a six-digit OTP code.
          </p>
          <p>
            Update uses PUT <code>/pin/update</code> after the security answer
            is valid. The new PIN must not match any of the last five PINs.
          </p>

          <h2 id="otto">Otto usage</h2>
          <p>
            External developers call the public Otto PIN API. See{" "}
            <Link to="/docs/pin">transaction PIN</Link>.
          </p>
          <p>
            Otto maps those public paths onto these Unified PIN endpoints. Otto
            does not keep a local PIN table.
          </p>
          <p>
            See also the{" "}
            <Link to="/fcl/unified-reference">
              Unified endpoint reference
            </Link>
            .
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default PinManagement;
