import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import DocsOpener from "../../components/DocsOpener";
import "./docs.css";

/**
 * Identity module. Covers login, API keys, PIN, and session security.
 */
const Identity = () => {
  const onThisPageItems = [
    { href: "#purpose", label: "Overview" },
    { href: "#when-why-how", label: "When, why, and how" },
    { href: "#auth", label: "Login and register" },
    { href: "#api-keys", label: "API keys" },
    { href: "#pin", label: "Transaction PIN" },
    { href: "#sessions", label: "Sessions and MFA" },
  ];

  const loginExample = `{
  "identifier": "merchant@example.com",
  "password": "<password>"
}`;

  return (
    <>
      <SEO
        title="Identity API - Otto Africa Documentation"
        description="Otto Identity: register, login, API keys, transaction PIN, biometric flags, and MFA."
        keywords="Otto identity, login, register, API key, transaction PIN, MFA"
        url="https://ottoafrica.com/docs/identity"
      />
      <DocsLayout
        currentPage="/docs/identity"
        onThisPageItems={onThisPageItems}
        nutshell="Identity proves who the caller is. Use login for users. Use a Bearer API key for partner apps."
      >
        <div className="docs-content">
          <h1 id="purpose">Identity</h1>

          <DocsOpener
            lead="Identity proves who the caller is before Otto opens money or data paths. Users log in. Partner apps use a Bearer API key."
            when="Use Identity when you register a merchant or customer, log in, mint or revoke API keys, set a transaction PIN, or manage sessions and MFA."
            why="Otto must know the actor and the business. Without Identity, collect, payout, and loyalty calls have no owner. API keys keep partner servers off user passwords."
            how="Users POST login or the customer flow. Partners create a key in the Merchant Portal or POST /api/merchant/api-keys, then send Authorization: Bearer sk_test_... or sk_live_.... PIN paths sit under /profile/pin."
          />

          <p>
            Base URL: <code>https://api.ottoafrica.com</code>
          </p>

          <h2 id="auth">Login and register</h2>
          <p>
            Merchant apps use the auth paths below. Customer apps use the
            customer flow paths.
          </p>
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
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/auth/merchant/register</code>
                </td>
                <td>Create a merchant account</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/auth/merchant/login</code>
                </td>
                <td>Log in and receive tokens</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/auth/merchant/otp/verify</code>
                </td>
                <td>Confirm a login OTP</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/auth/merchant/refresh</code>
                </td>
                <td>Refresh an access token</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/auth/customer/flow/initiate</code>
                </td>
                <td>Start customer signup or login</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/auth/customer/flow/verify</code>
                </td>
                <td>Verify the customer OTP</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/auth/customer/flow/complete</code>
                </td>
                <td>Complete customer signup</td>
              </tr>
            </tbody>
          </table>
          <CodeBlock language="json" code={loginExample} />
          <p>
            Full header and scope details are on{" "}
            <Link to="/docs/authentication">authentication</Link>.
          </p>

          <h2 id="api-keys">API keys</h2>
          <p>
            Partner integrations use a long-lived API key. Create the key in the
            Merchant Portal or with these paths.
          </p>
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
                  <code>/api/merchant/api-keys</code>
                </td>
                <td>List keys for the business</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/api-keys</code>
                </td>
                <td>Create a key. Copy it one time.</td>
              </tr>
              <tr>
                <td>
                  <code>DELETE</code>
                </td>
                <td>
                  <code>/api/merchant/api-keys/:keyId</code>
                </td>
                <td>Revoke a key</td>
              </tr>
            </tbody>
          </table>
          <p>
            Send the key as{" "}
            <code>Authorization: Bearer sk_test_...</code> or{" "}
            <code>sk_live_...</code>.
          </p>

          <h2 id="pin">Transaction PIN</h2>
          <p>
            A six-digit PIN authorizes payouts and some funding flows. Setup
            also stores one security question.
          </p>
          <p>
            Paths live under{" "}
            <code>/api/customer/profile/pin/*</code> and{" "}
            <code>/api/merchant/profile/pin/*</code>.
          </p>
          <p>
            Read the full contract on{" "}
            <Link to="/docs/pin">transaction PIN</Link>.
          </p>

          <h2 id="sessions">Sessions and MFA</h2>
          <p>
            Customers can list and revoke sessions. MFA paths enroll and verify
            a second factor for login.
          </p>
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
                  <code>/api/customer/security/sessions</code>
                </td>
                <td>List active sessions</td>
              </tr>
              <tr>
                <td>
                  <code>DELETE</code>
                </td>
                <td>
                  <code>/api/customer/security/sessions/:id</code>
                </td>
                <td>Revoke one session</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/customer/profile/check_biometric</code>
                </td>
                <td>Read biometric login flag</td>
              </tr>
              <tr>
                <td>
                  <code>PUT</code>
                </td>
                <td>
                  <code>/api/customer/profile/update_biometric</code>
                </td>
                <td>Set biometric login flag</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocsLayout>
    </>
  );
};

export default Identity;
