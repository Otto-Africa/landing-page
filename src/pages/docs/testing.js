import React from "react";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import "./docs.css";

/**
 * Testing.
 * Route-level components compose shared UI primitives so merchant workflows stay consistent across the portal.
 */
const Testing = () => {
  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#sandbox", label: "Test Environment" },
    { href: "#test-keys", label: "Test API Keys" },
    { href: "#test-data", label: "Test Data" },
    { href: "#checklist", label: "Testing Checklist" },
    { href: "#demo-bank", label: "Demo Bank (NUBAN / MoMo)" },
    { href: "#webhooks", label: "Testing Webhooks" },
    { href: "#collect-pay", label: "Collect & Pay Notes" },
    { href: "#go-live", label: "Go Live Checklist" },
  ];

  return (
    <>
      <SEO
        title="Testing - Otto Africa API Documentation"
        description="Learn how to test your Otto Africa API integration using test API keys and test mode. Complete testing guide."
        keywords="API testing, test mode, test API keys, integration testing, Otto API testing"
        url="https://ottoafrica.com/docs/testing"
      />
      <DocsLayout
        currentPage="/docs/testing"
        onThisPageItems={onThisPageItems}
        nutshell="Use test API keys to test your integration without processing real payments or affecting live data."
      >
        <div className="docs-content">
          <h1 id="overview">Testing</h1>

          <p>
            Otto uses the same API endpoint for both test and live environments.
            The environment is determined by your API key prefix. Test keys
            (starting with <code>sk_test_</code>) automatically route to test
            databases, while live keys (starting with <code>sk_live_</code>)
            route to production databases.
          </p>

          <h2 id="sandbox">Test Environment</h2>

          <p>
            When you use a test API key, all API requests are automatically
            routed to test databases and ledgers. All test transactions are
            simulated and don't involve real money or affect live customer data.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-green-900 mb-2">
              🧪 How It Works
            </h4>
            <ul className="text-green-800 text-sm space-y-2 list-disc list-inside">
              <li>
                Use the same API endpoint:{" "}
                <code className="bg-green-100 px-2 py-1 rounded">
                  https://api.ottoafrica.com
                </code>
              </li>
              <li>
                Test keys (starting with <code>sk_test_</code>) automatically
                route to test environment
              </li>
              <li>
                Live keys (starting with <code>sk_live_</code>) route to
                production environment
              </li>
              <li>
                No need to change URLs or endpoints when switching environments
              </li>
            </ul>
          </div>

          <h2 id="test-keys">Test API Keys</h2>

          <p>
            Generate test API keys in your Merchant Portal to authenticate API
            requests in the test environment. Test keys are clearly marked and
            can be generated alongside your live keys.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-900 mb-4">API Key Format</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Test Keys:</strong>{" "}
                <code className="bg-gray-200 px-2 py-1 rounded">
                  sk_test_...
                </code>
                <p className="text-gray-600 mt-1">
                  Automatically routes to test databases and ledgers
                </p>
              </div>
              <div>
                <strong>Live Keys:</strong>{" "}
                <code className="bg-gray-200 px-2 py-1 rounded">
                  sk_live_...
                </code>
                <p className="text-gray-600 mt-1">
                  Routes to production databases and ledgers
                </p>
              </div>
            </div>
          </div>

          <CodeBlock
            language="bash"
            code={`# Test environment - uses test databases
curl -X GET "https://api.ottoafrica.com/api/merchant/giftcards" \\
  -H "Authorization: Bearer sk_test_your_test_key_here"

# Production environment - uses live databases
curl -X GET "https://api.ottoafrica.com/api/merchant/giftcards" \\
  -H "Authorization: Bearer sk_live_your_live_key_here"`}
          />

          <div className="docs-alert warning">
            <strong>Important:</strong> Never use test keys in production or
            live keys in test. The API key prefix determines which environment
            your requests are routed to.
          </div>

          <h2 id="test-data">Test Data</h2>

          <p>
            Use these test values to simulate different scenarios in the test
            environment. Test data is automatically available when using test
            API keys.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">
                Test Gift Card Codes
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Valid:</strong>{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    GC_TEST_123456
                  </code>
                </div>
                <div>
                  <strong>Expired:</strong>{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    GC_TEST_EXPIRED
                  </code>
                </div>
                <div>
                  <strong>Invalid:</strong>{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    GC_TEST_INVALID
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">
                Test Transaction IDs
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Success:</strong>{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    txn_test_success
                  </code>
                </div>
                <div>
                  <strong>Failed:</strong>{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    txn_test_failed
                  </code>
                </div>
                <div>
                  <strong>Pending:</strong>{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    txn_test_pending
                  </code>
                </div>
              </div>
            </div>
          </div>

          <h2 id="checklist">Testing Checklist</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900">
                  API Authentication
                </h4>
                <p className="text-gray-600 text-sm">
                  Verify your test API keys work correctly
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900">
                  Gift Card Operations
                </h4>
                <p className="text-gray-600 text-sm">
                  Test creating, purchasing, and redeeming gift cards
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900">
                  Webhook Integration
                </h4>
                <p className="text-gray-600 text-sm">
                  Verify webhook endpoints receive and process events
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-gray-900">Error Handling</h4>
                <p className="text-gray-600 text-sm">
                  Test how your application handles API errors and failures
                </p>
              </div>
            </div>
          </div>

          <h2 id="demo-bank">Demo Bank (NUBAN / MoMo)</h2>

          <p>
            For Collect &amp; Pay invoices, Otto provisions a wallet (virtual
            account) customers pay into. On{" "}
            <strong>local and test</strong> (with{" "}
            <code>APP_ENV=local</code> or <code>test</code>; demo bank is on by
            default there), use{" "}
            <a href="/demo-bank" className="text-[#00B4D8] hover:underline">
              Otto Demo Bank
            </a>{" "}
            to simulate bank transfer or mobile money payments without a real
            payment processor.
          </p>

          <div className="docs-alert info">
            Demo Bank is disabled on staging and production. It calls the same
            Otto Wallet inbound settlement path used by real bank/MoMo
            integrations (<code>otto.wallet.inbound</code>).
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-900 mb-2">
              End-to-end test flow
            </h4>
            <ol className="text-blue-800 text-sm space-y-2 list-decimal list-inside">
              <li>
                Create a Collect invoice in the merchant app (Collect &amp;
                Pay). The merchant must be approved so wallet rails are
                provisioned.
              </li>
              <li>
                Copy the Otto Wallet NUBAN (<code>777…</code>) or Ghana MoMo
                number from the invoice detail screen.
              </li>
              <li>
                Open{" "}
                <a href="/demo-bank" className="underline">
                  /demo-bank
                </a>
                , paste the account number, and confirm the lookup shows the
                correct amount and <strong>Awaiting payment</strong> status.
              </li>
              <li>
                Send payment with the <strong>exact invoice amount</strong>.
                Wrong amounts return <code>422 Amount must be GHS …</code>.
              </li>
              <li>
                On success the form clears and the invoice moves to{" "}
                <strong>Paid</strong>. Payment rails (QR, bank details) are
                hidden on the merchant app once paid — tap{" "}
                <strong>Check payment</strong> to refresh.
              </li>
              <li>
                Otto fires <code>collect.paid</code> for your business (see{" "}
                <a href="/docs/webhooks" className="underline">
                  Webhooks
                </a>
                ).
              </li>
            </ol>
          </div>

          <h3>Demo Bank API</h3>

          <div className="api-endpoint mb-4">
            <span className="method get">GET</span>
            <strong>/api/public/demo-bank/lookup</strong>
            <br />
            <span className="description">
              Resolve an invoice wallet — query params: <code>account</code>,{" "}
              <code>rail</code> (<code>nuban</code> | <code>momo</code>),
              optional <code>network</code> for MoMo
            </span>
          </div>

          <div className="api-endpoint mb-6">
            <span className="method post">POST</span>
            <strong>/api/public/demo-bank/transfer</strong>
            <br />
            <span className="description">
              Simulate an inbound transfer and settle the collect intent
              atomically
            </span>
          </div>

          <CodeBlock
            language="bash"
            code={`# Lookup an invoice wallet (Otto-issued NUBAN)
curl "http://localhost:3000/api/public/demo-bank/lookup?account=7770000027&rail=nuban"

# Simulate bank transfer — amount_minor must match the invoice exactly (1200 = GHS 12.00)
curl -X POST "http://localhost:3000/api/public/demo-bank/transfer" \\
  -H "Content-Type: application/json" \\
  -d '{"account_number":"7770000027","amount_minor":1200,"rail":"nuban","narration":"Test payment"}'

# Simulate MoMo transfer (MTN prefix 23324 + entity digit 7 for an invoice)
curl -X POST "http://localhost:3000/api/public/demo-bank/transfer" \\
  -H "Content-Type: application/json" \\
  -d '{"account_number":"2332470000027","amount_minor":1200,"rail":"momo","momo_network":"mtn"}'

# Direct inbound webhook (production integrations / GHIPSS simulator)
curl -X POST "http://localhost:3000/api/webhooks/otto-wallet/inbound" \\
  -H "Content-Type: application/json" \\
  -H "X-Otto-Signature: <hmac-of-body>" \\
  -d '{"event":"otto.wallet.inbound","data":{"account_number":"7770000027","amount_minor":1200,"collect_intent_public_id":"col_..."}}'`}
          />

          <h2 id="webhooks">Testing Webhooks</h2>

          <p>
            Every collect settlement triggers a <code>collect.paid</code>{" "}
            dispatch for your business — even before you configure a URL. Otto
            records an audit row with status <code>unconfigured</code> until you
            add an endpoint.
          </p>

          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>
              Set your webhook URL in the merchant app under{" "}
              <strong>Profile → Webhooks</strong>, or via{" "}
              <code>PUT /api/merchant/webhooks/primary</code>
            </li>
            <li>
              Use a tunnel (ngrok, Cloudflare Tunnel) or a request inspector
              like webhook.site in development
            </li>
            <li>Pay an invoice through Demo Bank</li>
            <li>
              Confirm your endpoint receives a signed POST with{" "}
              <code>X-Otto-Event: collect.paid</code>
            </li>
            <li>
              Return <code>200</code> — Otto retries up to three times and logs
              each HTTP status code
            </li>
          </ol>

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

          <p>
            Full details:{" "}
            <a href="/docs/webhooks" className="text-[#00B4D8] hover:underline">
              Webhooks guide
            </a>
            .
          </p>

          <h2 id="collect-pay">Collect &amp; Pay Notes</h2>

          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              <strong>Wallet balance</strong> — Collect settlements post to your
              spendable Otto wallet (<code>MB_CASH</code> ledger accounts),
              visible on the merchant dashboard.
            </li>
            <li>
              <strong>Paid invoices</strong> — QR codes and bank/MoMo rails are
              omitted from API responses once status is <code>paid</code>.
            </li>
            <li>
              <strong>Idempotent settlements</strong> — Retrying the same
              inbound transfer with the same idempotency key will not
              double-settle.
            </li>
            <li>
              <strong>Otto transfers</strong> — Send to another Otto user by
              phone, email, name, or
              <code>@tag</code> from the merchant app transfer screen.
            </li>
          </ul>

          <h2 id="go-live">Go Live Checklist</h2>

          <p>
            Before moving to production, ensure all critical functionality works
            with test keys.
          </p>

          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-900 mb-2">🚨 Important</h4>
            <p className="text-red-800 text-sm mb-4">
              Replace all test API keys with live keys before going to
              production. The API endpoint remains the same (
              <code>https://api.ottoafrica.com</code>), but you must use live
              keys.
            </p>
            <ul className="text-red-800 text-sm space-y-1">
              <li>
                • Replace test API keys (starting with <code>sk_test_</code>)
                with live keys (starting with <code>sk_live_</code>)
              </li>
              <li>• Update webhook URLs to production endpoints</li>
              <li>• Verify all API calls use live keys in production code</li>
              <li>
                • Test with real payment methods after switching to live keys
              </li>
              <li>
                • Monitor API usage and transactions in the Merchant Portal
              </li>
            </ul>
          </div>

          <div className="docs-alert success">
            <strong>Need Help?</strong> Check the{" "}
            <a
              href="https://api.ottoafrica.com/api/docs"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              API Reference
            </a>{" "}
            for complete endpoint documentation, or visit our{" "}
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

export default Testing;
