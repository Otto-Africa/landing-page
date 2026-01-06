import React, { useState } from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const QRCodes = () => {
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
    { href: "#generate", label: "Generate QR Code" },
    { href: "#static", label: "Static QR Codes" },
    { href: "#scan", label: "Process QR Scan" },
    { href: "#best-practices", label: "Best Practices" },
  ];

  return (
    <DocsLayout
      currentPage="/docs/qr-codes"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">QR Codes API</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Generate QR codes for payments and manage static QR codes
          for your business. Customers can scan QR codes with the Otto mobile app to make payments instantly.
        </div>

        <p>
          The QR Codes API allows you to generate dynamic QR codes for specific transactions or create
          static QR codes for your business. Process QR code scans to accept payments from customers.
        </p>

        <h2 id="generate">Generate QR Code</h2>

        <h3>Dynamic QR Code</h3>

        <p>
          Dynamic QR codes are generated for specific transactions with a set amount and expiration time.
        </p>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/v1/merchant/qr/generate</strong>
          <br />
          <span className="description">Generate a dynamic QR code for payment</span>
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
                  code={`curl -X POST "https://api.otto.com/v1/merchant/qr/generate" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "dynamic",
    "amount": 25.00,
    "expires_in": 3600,
    "description": "Table payment"
  }'`}
                />
              </div>
            )}
            {activeTab === "javascript" && (
              <div className="tab-pane">
                <CodeBlock
                  language="javascript"
                  code={`const response = await fetch('https://api.otto.com/v1/merchant/qr/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type: 'dynamic',
    amount: 25.00,
    expires_in: 3600,
    description: 'Table payment'
  })
});

const data = await response.json();
// data.qr_code_url contains the QR code image URL
// data.qr_data contains the QR code data string`}
                />
              </div>
            )}
            {activeTab === "python" && (
              <div className="tab-pane">
                <CodeBlock
                  language="python"
                  code={`import requests

response = requests.post(
    'https://api.otto.com/v1/merchant/qr/generate',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    json={
        'type': 'dynamic',
        'amount': 25.00,
        'expires_in': 3600,
        'description': 'Table payment'
    }
)

data = response.json()
# data['qr_code_url'] contains the QR code image URL
# data['qr_data'] contains the QR code data string`}
                />
              </div>
            )}
          </div>
        </div>

        <h3>Response</h3>

        <CodeBlock
          language="json"
          code={`{
  "status": "success",
  "data": {
    "qr_code_id": "qr_abc123",
    "qr_code_url": "https://api.otto.com/qr/qr_abc123.png",
    "qr_data": "OTTO:DYNAMIC:ABC123",
    "amount": 25.00,
    "expires_at": "2024-01-15T11:30:00Z"
  }
}`}
        />

        <h2 id="static">Static QR Codes</h2>

        <p>
          Static QR codes are permanent codes for your business that don't expire. Customers can scan
          them and enter the payment amount manually.
        </p>

        <h3>Get Static QR Code</h3>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/v1/merchant/qr/static</strong>
          <br />
          <span className="description">Retrieve your business static QR code</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/v1/merchant/qr/static" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <h3>Create Static QR Code</h3>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/v1/merchant/qr/static</strong>
          <br />
          <span className="description">Create or regenerate your static QR code</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X POST "https://api.otto.com/v1/merchant/qr/static" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "description": "Main store QR code"
  }'`}
        />

        <h2 id="scan">Process QR Scan</h2>

        <p>
          When a customer scans a QR code, process the scan to complete the payment.
        </p>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/v1/merchant/qr/scan</strong>
          <br />
          <span className="description">Process a QR code scan for payment</span>
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
                  code={`curl -X POST "https://api.otto.com/v1/merchant/qr/scan" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "qr_data": "OTTO:DYNAMIC:ABC123",
    "amount": 25.00,
    "customer_id": "CUST-456"
  }'`}
                />
              </div>
            )}
            {activeTab === "javascript" && (
              <div className="tab-pane">
                <CodeBlock
                  language="javascript"
                  code={`const response = await fetch('https://api.otto.com/v1/merchant/qr/scan', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    qr_data: 'OTTO:DYNAMIC:ABC123',
    amount: 25.00,
    customer_id: 'CUST-456'
  })
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

response = requests.post(
    'https://api.otto.com/v1/merchant/qr/scan',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    json={
        'qr_data': 'OTTO:DYNAMIC:ABC123',
        'amount': 25.00,
        'customer_id': 'CUST-456'
    }
)

data = response.json()`}
                />
              </div>
            )}
          </div>
        </div>

        <h2 id="best-practices">Best Practices</h2>

        <h3>QR Code Types</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Dynamic QR Codes</h4>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>Use for specific transactions</li>
              <li>Set expiration times</li>
              <li>Include transaction amount</li>
              <li>Best for table payments, invoices</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Static QR Codes</h4>
            <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
              <li>Use for permanent displays</li>
              <li>No expiration</li>
              <li>Customer enters amount</li>
              <li>Best for checkout counters, storefronts</li>
            </ul>
          </div>
        </div>

        <h3>Security</h3>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Always verify QR code data before processing payments</li>
          <li>Validate QR code expiration for dynamic codes</li>
          <li>Implement proper error handling for invalid QR codes</li>
          <li>Log all QR code scans for audit purposes</li>
        </ul>

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

export default QRCodes;


