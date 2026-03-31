import React, { useState } from 'react';
import DocsLayout from '../../layout/DocsLayout';
import SEO from '../../components/SEO';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const QRCodes = () => {
  const [activeTab, setActiveTab] = useState('curl');


  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#generate", label: "Generate QR Code" },
    { href: "#static", label: "Static QR Codes" },
    { href: "#scan", label: "Process QR Scan" },
    { href: "#best-practices", label: "Best Practices" },
  ];

  return (
    <>
      <SEO
        title="QR Codes API - Otto Africa API Documentation"
        description="Learn how to generate, manage, and scan QR codes for payments using Otto Africa API. Complete QR code integration guide."
        keywords="QR code API, payment QR codes, QR code generation, QR code scanning, Otto QR codes"
        url="https://ottoafrica.com/docs/qr-codes"
      />
      <DocsLayout
        currentPage="/docs/qr-codes"
      
      onThisPageItems={onThisPageItems}
      nutshell="Generate QR codes for payments and manage static QR codes so customers can pay instantly in the Otto app."
    >
      <div className="docs-content">
        <h1 id="overview">QR Codes API</h1>

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
          <strong>/api/merchant/qr/generate</strong>
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
                  code={`curl -X POST "https://api.ottoafrica.com/api/merchant/qr/generate" \\
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
                  code={`const response = await fetch('https://api.ottoafrica.com/api/merchant/qr/generate', {
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
    'https://api.ottoafrica.com/api/merchant/qr/generate',
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
    "qr_code_url": "https://api.ottoafrica.com/qr/qr_abc123.png",
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
          <strong>/api/merchant/qr/static</strong>
          <br />
          <span className="description">Retrieve your business static QR code</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.ottoafrica.com/api/merchant/qr/static" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <h3>Create Static QR Code</h3>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/api/merchant/qr/static</strong>
          <br />
          <span className="description">Create or regenerate your static QR code</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X POST "https://api.ottoafrica.com/api/merchant/qr/static" \\
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
          <strong>/api/merchant/qr/scan</strong>
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
                  code={`curl -X POST "https://api.ottoafrica.com/api/merchant/qr/scan" \\
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
                  code={`const response = await fetch('https://api.ottoafrica.com/api/merchant/qr/scan', {
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
    'https://api.ottoafrica.com/api/merchant/qr/scan',
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

export default QRCodes;


