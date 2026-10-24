import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import DocsOpener from "../../components/DocsOpener";
import "./docs.css";

/**
 * Otto transaction PIN API.
 */
const PinDocs = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#when-why-how", label: "When, why, and how" },
    { href: "#rules", label: "PIN rules" },
    { href: "#customer", label: "Customer paths" },
    { href: "#merchant", label: "Merchant paths" },
  ];

  const createExample = `{
  "pin": "147258",
  "confirm_pin": "147258",
  "security_question_id": "<question-id>",
  "security_answer": "<answer>"
}`;

  const verifyExample = `{
  "pin": "147258"
}`;

  return (
    <>
      <SEO
        title="Transaction PIN API - Otto Africa Documentation"
        description="Create, verify, update, and recover a six-digit Otto transaction PIN."
        keywords="Otto PIN, transaction PIN, security questions"
        url="https://ottoafrica.com/docs/pin"
      />
      <DocsLayout
        currentPage="/docs/pin"
        onThisPageItems={onThisPageItems}
        nutshell="Call Otto PIN paths. Use a six-digit PIN and one security question. Do not retry a failed verify automatically."
      >
        <div className="docs-content">
          <h1 id="overview">Transaction PIN</h1>

          <DocsOpener
            lead="A transaction PIN is a six-digit code that authorizes payouts and some funding flows. Setup also stores one security question for recovery."
            when="Use PIN paths when a user has no PIN yet, must change a PIN, forgot a PIN, or must verify a PIN before a money-out call. Login can return pin_setup_required. Complete setup before payouts."
            why="Otto must confirm the actor for money-out. The PIN stays at Otto. Your app never stores the PIN table. Failed verify must not auto-retry. Three failures lock verify for 30 minutes."
            how="GET security questions. POST /pin/create with pin, confirm_pin, security_question_id, and security_answer. Verify with POST .../check_transaction_pin. Customer and merchant paths are the same after /api/customer or /api/merchant."
          />

          <p>
            Call Otto with a user session or a Bearer API key that has the
            correct scope.
          </p>

          <h2 id="rules">PIN rules</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>The PIN must have exactly six digits.</li>
            <li>
              Do not use a number sequence that increases by one each digit.
            </li>
            <li>
              Do not use a number sequence that decreases by one each digit.
            </li>
            <li>Do not use six identical digits.</li>
            <li>Do not use more than three identical digits in a row.</li>
            <li>
              Three consecutive verify failures lock verify for 30 minutes.
            </li>
            <li>Do not retry a failed PIN verify automatically.</li>
          </ul>

          <h2 id="customer">Customer paths</h2>
          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>Method</th>
                <th>Path</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/customer/profile/pin/security-questions</code>
                </td>
                <td>List active questions</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/customer/profile/pin/create</code>
                </td>
                <td>Create PIN and security answer</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/customer/profile/check_transaction_pin</code>
                </td>
                <td>Verify PIN</td>
              </tr>
              <tr>
                <td>
                  <code>PUT</code>
                </td>
                <td>
                  <code>/api/customer/profile/pin/update</code>
                </td>
                <td>Change PIN after the security answer</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/customer/profile/pin/forgot</code>
                </td>
                <td>Start recovery</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/customer/profile/pin/reset</code>
                </td>
                <td>Reset PIN with OTP</td>
              </tr>
            </tbody>
          </table>
          <h3>Create example</h3>
          <CodeBlock language="json" code={createExample} />
          <h3>Verify example</h3>
          <CodeBlock language="json" code={verifyExample} />

          <h2 id="merchant">Merchant paths</h2>
          <p>
            Merchant PIN paths use the same bodies. Replace{" "}
            <code>/api/customer</code> with <code>/api/merchant</code>.
          </p>
          <p>
            Payouts on <Link to="/docs/payments">payments</Link> and{" "}
            <Link to="/docs/funding-flows">funding flows</Link> need this PIN.
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default PinDocs;
