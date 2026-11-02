import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import DocsOpener from "../../components/DocsOpener";
import "./docs.css";

/**
 * Scan Payments API. Partners call Scan. Scan talks to providers.
 */
const Payments = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#when-why-how", label: "When, why, and how" },
    { href: "#collect", label: "Collect" },
    { href: "#pay", label: "Pay and payout" },
    { href: "#status", label: "Status" },
  ];

  const collectExample = `{
  "amount_minor": 1000,
  "currency": "GHS",
  "description": "Invoice 1042",
  "recipient_name": "Ama Mensah",
  "issue_invoice": true
}`;

  const payExample = `{
  "amount_minor": 5000,
  "currency": "GHS",
  "channel": "mobile_money",
  "network": "MTN",
  "account_number": "233241234567",
  "transaction_pin": "147258",
  "idempotency_key": "pay-order-1042"
}`;

  return (
    <>
      <SEO
        title="Payments API - Scan Africa Documentation"
        description="Collect and pay through the Scan API. Authenticate with a Bearer API key on api.scanafrica.com."
        keywords="Scan payments API, collect, transfer, payout, merchant API"
        url="https://scanafrica.com/docs/payments"
      />
      <DocsLayout
        currentPage="/docs/payments"
        onThisPageItems={onThisPageItems}
        nutshell="Call the Scan API at api.scanafrica.com. Use a Bearer API key. Scan collects and pays on your behalf."
      >
        <div className="docs-content">
          <h1 id="overview">Payments</h1>

          <DocsOpener
            lead="Payments is the Scan module that moves money into and out of wallets. Your app calls Scan. Scan talks to rails and providers for you."
            when="Use Payments when you collect an invoice, accept a QR or link payment, or send a payout to mobile money or a bank. Use Transfers for Scan-to-Scan wallet sends. Use Funding flows for product deposits."
            why="Partners need one public API for money movement. Scan authenticates the caller, records the movement, and returns status. You do not send provider keys from your app."
            how="Authenticate with a Bearer API key. POST /api/merchant/collect to receive money. POST /api/merchant/transfer to pay out. Read the resource by ID and listen for webhooks. Amounts use pesewas."
          />

          <p>
            Related pages: <Link to="/docs/transfers">transfers</Link>,{" "}
            <Link to="/docs/funding-flows">funding flows</Link>, and{" "}
            <Link to="/docs/webhooks">webhooks</Link>. Base URL:{" "}
            <code>https://api.scanafrica.com</code>.
          </p>
          <p>
            Header: <code>Authorization: Bearer sk_live_...</code> or{" "}
            <code>sk_test_...</code>. See{" "}
            <Link to="/docs/identity">Identity</Link>.
          </p>

          <h2 id="collect">Collect</h2>
          <p>
            Create a collect request to receive money into a merchant wallet.
          </p>
          <p>
            <code>POST /api/merchant/collect</code>
          </p>
          <CodeBlock language="json" code={collectExample} />
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
                  <code>/api/merchant/collect</code>
                </td>
                <td>Create a collect request</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/collect/quote</code>
                </td>
                <td>Quote tax and discount before create</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/collect/:id</code>
                </td>
                <td>Read collect status and amounts</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/collect/:id/executions/:route</code>
                </td>
                <td>Start a payment route for the collect</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/collect/:id/cancel</code>
                </td>
                <td>Cancel an open collect</td>
              </tr>
            </tbody>
          </table>
          <p>
            A public payer can open a shared collect link. Status for that
            flow uses <code>/api/public/collect/:publicId</code>.
          </p>
          <p>
            Scan posts <code>collect.paid</code> to your webhook when the
            collect settles. See <Link to="/docs/webhooks">webhooks</Link>.
          </p>

          <h2 id="pay">Pay and payout</h2>
          <p>
            Send money from a merchant wallet. Use a six-digit transaction PIN
            for payouts.
          </p>
          <p>
            <code>POST /api/merchant/transfer</code>
          </p>
          <CodeBlock language="json" code={payExample} />
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
                  <code>/api/merchant/transfer</code>
                </td>
                <td>Create a pay or payout</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>
                  <code>/api/merchant/transfer/quote-fee</code>
                </td>
                <td>Quote the fee before send</td>
              </tr>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>
                  <code>/api/merchant/transfer/:id</code>
                </td>
                <td>Read pay status</td>
              </tr>
            </tbody>
          </table>
          <p>
            For MoMo and bank rails with name check, use{" "}
            <Link to="/docs/transfers">transfers</Link>.
          </p>

          <h2 id="status">Status</h2>
          <p>
            HTTP 200 on create means Scan accepted the request. It does not
            mean the money movement is complete.
          </p>
          <p>
            Read the resource by ID. Also wait for the webhook. Do not treat a
            pending poll as the final result when a webhook is configured.
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default Payments;
