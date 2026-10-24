import React from "react";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import DocsOpener from "../../components/DocsOpener";
import "./docs.css";

/**
 * Webhooks.
 * Route-level components compose shared UI primitives so merchant workflows stay consistent across the portal.
 */
const Webhooks = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#when-why-how", label: "When, why, and how" },
    { href: "#configure", label: "Configure Webhooks" },
    { href: "#events", label: "Available Events" },
    { href: "#payload", label: "Webhook Payload" },
    { href: "#security", label: "Security & Verification" },
    { href: "#retries", label: "Retries & Delivery" },
    { href: "#testing", label: "Testing with Demo Bank" },
  ];

  return (
    <>
      <SEO
        title="Webhooks - Otto Africa API Documentation"
        description="Configure merchant webhooks for collect.paid and payment events. Learn about delivery retries, signature verification, and testing with Otto Demo Bank."
        keywords="Otto webhooks, collect.paid, webhook configuration, webhook events, payment webhooks, real-time notifications"
        url="https://ottoafrica.com/docs/webhooks"
      />
      <DocsLayout
        currentPage="/docs/webhooks"
        onThisPageItems={onThisPageItems}
        nutshell="Otto records every collect settlement and POSTs collect.paid to your endpoint when configured, with up to three delivery attempts and full HTTP status logging."
      >
        <div className="docs-content">
          <h1 id="overview">Webhooks</h1>

          <DocsOpener
            lead="A webhook is a signed HTTP POST from Otto to your HTTPS URL when an event occurs. The primary payment event is collect.paid."
            when="Use webhooks when your server must react as soon as a collect settles, without polling every few seconds. Still poll as a backup if you cannot miss a delivery."
            why="Otto records every settlement. If you register an endpoint, Otto posts collect.paid up to three times and logs HTTP status. That is how your ledger stays in sync with Otto."
            how="Register a URL in the merchant app or POST /api/merchant/webhooks. Store the signing secret. Verify the signature on each POST. Return HTTP 2xx quickly. Read the payload for the collect ID and status."
          />

          <p>
            Otto sends a signed HTTP POST to your endpoint. Configure the URL
            below.
          </p>

          <div className="docs-alert info">
            <strong>Always recorded:</strong> Every successful collect
            settlement triggers a <code>collect.paid</code> webhook dispatch for
            your business, even if you have not configured a URL yet. Otto
            stores an audit row with status <code>unconfigured</code> until you
            add an endpoint in the merchant app or via API.
          </div>

          <h2 id="configure">Configure Webhooks</h2>

          <p>
            Set up your webhook endpoint in the Otto Merchant app or via API.
          </p>

          <h3>Via Merchant App</h3>

          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>
              Open <strong>Profile → Webhooks</strong> in the Otto Merchant app
            </li>
            <li>
              Enter your HTTPS endpoint URL ( <code>http://localhost</code> is
              allowed in development )
            </li>
            <li>
              Save — Otto subscribes you to default Collect &amp; Pay events
              automatically
            </li>
            <li>
              Copy the webhook secret shown after save and use it to verify
              signatures
            </li>
          </ol>

          <h3>Via API — primary webhook</h3>

          <div className="api-endpoint">
            <span className="method put">PUT</span>
            <strong>/api/merchant/webhooks/primary</strong>
            <br />
            <span className="description">
              Set or update your primary webhook URL and events
            </span>
          </div>

          <CodeBlock
            language="bash"
            code={`curl -X PUT "https://api.ottoafrica.com/api/merchant/webhooks/primary" \\
  -H "Authorization: Bearer your_merchant_token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-app.com/webhooks/otto",
    "events": ["collect.paid", "collect.created", "payment.completed"],
    "is_active": true
  }'`}
          />

          <p className="text-sm text-gray-600 mb-6">
            You can also list endpoints with{" "}
            <code>GET /api/merchant/webhooks</code> or create additional
            endpoints with <code>POST /api/merchant/webhooks</code>.
          </p>

          <h2 id="events">Available Events</h2>

          <p>
            Collect &amp; Pay merchants should subscribe to at least these
            events:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">collect.paid</h4>
              <p className="text-gray-600 text-sm">
                Fired when an invoice collect intent settles (bank transfer,
                MoMo, or Otto Wallet inbound). This is the main event for
                payment confirmation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                collect.created
              </h4>
              <p className="text-gray-600 text-sm">
                Fired when a new Collect invoice is created and payment rails
                are provisioned.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                payment.completed
              </h4>
              <p className="text-gray-600 text-sm">
                General payment completion event for supported payment flows.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Gift card, loyalty, and legacy payment events may also be available
            depending on your Otto products. If you omit an <code>events</code>{" "}
            array when configuring a webhook, Otto defaults to all Collect &amp;
            Pay events above.
          </p>

          <h2 id="payload">Webhook Payload</h2>

          <p>
            All outbound merchant webhooks use the same envelope. Sign and
            verify the raw JSON body string — not a re-parsed object.
          </p>

          <h3>Headers</h3>

          <CodeBlock
            language="http"
            code={`X-Otto-Signature: sha256=abc123...
X-Otto-Event: collect.paid
Content-Type: application/json
User-Agent: Otto-Webhooks/1.0`}
          />

          <h3>
            Example <code>collect.paid</code> payload
          </h3>

          <CodeBlock
            language="json"
            code={`{
  "id": "evt_1718865416000",
  "type": "collect.paid",
  "created_at": "2026-06-20T04:36:56.000Z",
  "data": {
    "collect_intent_public_id": "col_785d7ce0354b4f02ac3519a1",
    "status": "paid",
    "amount_minor": 1200,
    "currency": "GHS",
    "invoice_number": "INV-02ac3519a1"
  }
}`}
          />

          <p className="text-sm text-gray-600">
            Amounts are in minor units (pesewas for GHS). Divide by 100 for
            display.
          </p>

          <h2 id="security">Security & Verification</h2>

          <p>
            Verify webhook authenticity using the <code>X-Otto-Signature</code>{" "}
            header and your webhook secret.
          </p>

          <CodeBlock
            language="javascript"
            showLineNumbers={true}
            code={`const crypto = require('crypto');

/**
 * Verify Webhook Signature.
 * Route-level components compose shared UI primitives so merchant workflows stay consistent across the portal.
 */
function verifyWebhookSignature(rawBody, signatureHeader, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  const provided = String(signatureHeader || '').replace(/^sha256=/, '');

  return crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(provided),
  );
}`}
          />

          <div className="docs-alert warning">
            <strong>Security best practices:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Always verify signatures against the raw request body</li>
              <li>Use HTTPS endpoints in production</li>
              <li>
                Respond with <code>2xx</code> within 15 seconds
              </li>
              <li>
                Handle duplicate <code>collect.paid</code> events idempotently
                (settlements are idempotent on Otto&apos;s side too)
              </li>
            </ul>
          </div>

          <h2 id="retries">Retries & Delivery</h2>

          <p>
            When your endpoint URL is configured and active, Otto delivers
            webhooks with up to <strong>three attempts</strong> per event:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              <strong>Attempt 1:</strong> Immediate
            </li>
            <li>
              <strong>Attempt 2:</strong> After ~750 ms
            </li>
            <li>
              <strong>Attempt 3:</strong> After ~2 s (from attempt 1)
            </li>
          </ul>

          <p>
            Each attempt records the HTTP status code returned by your server —{" "}
            <code>200</code>, <code>400</code>, <code>401</code>,{" "}
            <code>500</code>, and so on — in the delivery audit log. Network
            errors are recorded with a null status code.
          </p>

          <CodeBlock
            language="json"
            code={`{
  "attempts": [
    { "attempt": 1, "status_code": 500, "ok": false, "response": "Internal Server Error" },
    { "attempt": 2, "status_code": 500, "ok": false, "response": "Internal Server Error" },
    { "attempt": 3, "status_code": 200, "ok": true, "response": "{\\"received\\":true}" }
  ]
}`}
          />

          <h3>Delivery statuses</h3>

          <table className="docs-table mb-6">
            <thead>
              <tr>
                <th>Status</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>success</code>
                </td>
                <td>
                  Your endpoint returned <code>2xx</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>failed</code>
                </td>
                <td>All three attempts failed or returned non-2xx</td>
              </tr>
              <tr>
                <td>
                  <code>unconfigured</code>
                </td>
                <td>Event recorded — no merchant webhook URL configured yet</td>
              </tr>
              <tr>
                <td>
                  <code>retrying</code>
                </td>
                <td>Background scheduler retry (legacy queued deliveries)</td>
              </tr>
            </tbody>
          </table>

          <p>
            Deliveries are stored in <code>webhook_deliveries</code> per
            business. When no URL is configured, Otto still writes an audit row
            so you can confirm the event fired during integration testing.
          </p>

          <h2 id="testing">Testing with Demo Bank</h2>

          <p>
            The fastest way to trigger an Otto Cash credit in sandbox is Otto
            Demo Bank. Invoice <code>collect.paid</code> is no longer driven by
            a dedicated NUBAN — pay invoices with QR, mobile money, or Otto
            Cash.
          </p>

          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>Copy a merchant or customer Otto Cash NUBAN (888… / 999…)</li>
            <li>
              Open{" "}
              <a href="/demo-bank" className="text-[#00B4D8] hover:underline">
                Demo Bank
              </a>{" "}
              and enter that wallet number
            </li>
            <li>Send a test credit — retired 777 numbers return 410</li>
            <li>
              Check your endpoint (or Otto&apos;s delivery audit) for{" "}
              <code>collect.paid</code>
            </li>
          </ol>

          <p>
            See the full walkthrough in the{" "}
            <a
              href="/docs/testing#demo-bank"
              className="text-[#00B4D8] hover:underline"
            >
              Testing guide
            </a>
            .
          </p>

          <div className="docs-alert success">
            <strong>Need help?</strong> See the{" "}
            <a href="/docs/testing" className="underline">
              Testing guide
            </a>{" "}
            for Demo Bank curl examples, or visit our{" "}
            <a href="/docs/support" className="underline">
              Support page
            </a>
            .
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default Webhooks;
