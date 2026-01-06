import React, { useState } from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const Settlements = () => {
  const [activeTab, setActiveTab] = useState('curl');

  const sidebarItems = [
    {
      title: "Getting Started",
      icon: "🚀",
      items: [
        { path: "/docs/getting-started", label: "Introduction" },
        { path: "/docs/authentication", label: "Authentication" },
        { path: "/docs/testing", label: "Testing" },
      ],
    },
    {
      title: "API Reference",
      icon: "📚",
      items: [
        { path: "/docs/gift-cards", label: "Gift Cards" },
        { path: "/docs/transactions", label: "Transactions" },
        { path: "/docs/loyalty", label: "Loyalty Programs" },
        { path: "/docs/qr-codes", label: "QR Codes" },
        { path: "/docs/settlements", label: "Settlements" },
        { path: "/docs/user-management", label: "User Management" },
      ],
    },
    {
      title: "Guides",
      icon: "📖",
      items: [
        { path: "/docs/webhooks", label: "Webhooks" },
        { path: "/docs/error-handling", label: "Error Handling" },
        { path: "/docs/rate-limits", label: "Rate Limits" },
      ],
    },
    {
      title: "Resources",
      icon: "🔧",
      items: [
        { path: "/docs/sdks", label: "SDKs & Libraries" },
        { path: "/docs/support", label: "Support" },
      ],
    },
  ];

  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#list-settlements", label: "List Settlements" },
    { href: "#get-settlement", label: "Get Settlement Details" },
    { href: "#balance", label: "Current Balance" },
    { href: "#upcoming", label: "Upcoming Settlements" },
  ];

  return (
    <DocsLayout
      currentPage="/docs/settlements"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">Settlements API</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Access settlement history, current balances, and upcoming
          settlements. Track when funds are transferred to your account and reconcile your finances.
        </div>

        <p>
          The Settlements API provides access to your financial settlement data, including settlement
          history, current available balance, and information about upcoming settlements.
        </p>

        <h2 id="list-settlements">List Settlements</h2>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/v1/merchant/settlements</strong>
          <br />
          <span className="description">Retrieve settlement history with pagination</span>
        </div>

        <div className="code-tabs">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === "curl" ? "active" : ""}`}
              onClick={() => setActiveTab("curl")}
            >
              cURL
            </button>
            <button
              className={`tab-button ${activeTab === "javascript" ? "active" : ""}`}
              onClick={() => setActiveTab("javascript")}
            >
              JavaScript
            </button>
            <button
              className={`tab-button ${activeTab === "python" ? "active" : ""}`}
              onClick={() => setActiveTab("python")}
            >
              Python
            </button>
          </div>
          <div className="tab-content">
            {activeTab === "curl" && (
              <div className="tab-pane">
                <CodeBlock
                  language="bash"
                  code={`curl -X GET "https://api.otto.com/v1/merchant/settlements?page=1&per_page=10&status=paid" \\
  -H "Authorization: Bearer your_api_key"`}
                />
              </div>
            )}
            {activeTab === "javascript" && (
              <div className="tab-pane">
                <CodeBlock
                  language="javascript"
                  code={`const response = await fetch('https://api.otto.com/v1/merchant/settlements?page=1&per_page=10&status=paid', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();`}
                />
              </div>
            )}
            {activeTab === "python" && (
              <div className="tab-pane">
                <CodeBlock
                  language="python"
                  code={`import requests

response = requests.get(
    'https://api.otto.com/v1/merchant/settlements',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    params={
        'page': 1,
        'per_page': 10,
        'status': 'paid'
    }
)

data = response.json()`}
                />
              </div>
            )}
          </div>
        </div>

        <h3>Query Parameters</h3>

        <table className="docs-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>page</code></td>
              <td>integer</td>
              <td>No</td>
              <td>Page number (default: 1)</td>
            </tr>
            <tr>
              <td><code>per_page</code></td>
              <td>integer</td>
              <td>No</td>
              <td>Items per page (default: 10, max: 100)</td>
            </tr>
            <tr>
              <td><code>status</code></td>
              <td>string</td>
              <td>No</td>
              <td>Filter by status (pending, processing, paid, failed)</td>
            </tr>
            <tr>
              <td><code>date_from</code></td>
              <td>string</td>
              <td>No</td>
              <td>Filter from date (YYYY-MM-DD)</td>
            </tr>
            <tr>
              <td><code>date_to</code></td>
              <td>string</td>
              <td>No</td>
              <td>Filter to date (YYYY-MM-DD)</td>
            </tr>
          </tbody>
        </table>

        <h3>Response</h3>

        <CodeBlock
          language="json"
          code={`{
  "status": "success",
  "data": [
    {
      "id": "settlement_123",
      "amount": 5000.00,
      "currency": "GHS",
      "status": "paid",
      "settlement_date": "2024-01-15",
      "transaction_count": 150,
      "fees": 75.00,
      "net_amount": 4925.00
    }
  ],
  "meta": {
    "current_page": 1,
    "per_page": 10,
    "total": 25,
    "total_pages": 3
  }
}`}
        />

        <h2 id="get-settlement">Get Settlement Details</h2>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/v1/merchant/settlements/{`{id}`}</strong>
          <br />
          <span className="description">Get detailed information about a specific settlement</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/v1/merchant/settlements/settlement_123" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <h3>Settlement Statuses</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">pending</h4>
            <p className="text-gray-600 text-sm">Settlement is scheduled but not yet processed</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">processing</h4>
            <p className="text-gray-600 text-sm">Settlement is being processed</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">paid</h4>
            <p className="text-gray-600 text-sm">Funds have been transferred to your account</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">failed</h4>
            <p className="text-gray-600 text-sm">Settlement failed to process</p>
          </div>
        </div>

        <h2 id="balance">Current Balance</h2>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/v1/merchant/settlements/balance</strong>
          <br />
          <span className="description">Get your current available balance</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/v1/merchant/settlements/balance" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <h3>Response</h3>

        <CodeBlock
          language="json"
          code={`{
  "status": "success",
  "data": {
    "available_balance": 12500.00,
    "pending_balance": 2500.00,
    "currency": "GHS",
    "last_settlement_date": "2024-01-15",
    "next_settlement_date": "2024-01-22"
  }
}`}
        />

        <h2 id="upcoming">Upcoming Settlements</h2>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/v1/merchant/settlements/upcoming</strong>
          <br />
          <span className="description">Get information about upcoming settlements</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/v1/merchant/settlements/upcoming" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <div className="docs-alert warning">
          <strong>Note:</strong> All settlement endpoints require the <code>read:financials</code> scope.
          Settlement data is sensitive and should be handled securely.
        </div>

        <div className="docs-alert success">
          <strong>Need Help?</strong> Check the{" "}
          <a
            href="https://api.otto.com/v1/docs"
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
  );
};

export default Settlements;


