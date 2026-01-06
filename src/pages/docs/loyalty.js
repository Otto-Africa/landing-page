import React, { useState } from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const Loyalty = () => {
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
    { href: "#programs", label: "Loyalty Programs" },
    { href: "#points", label: "Points Management" },
    { href: "#rewards", label: "Rewards" },
    { href: "#analytics", label: "Analytics" },
  ];

  return (
    <DocsLayout
      currentPage="/docs/loyalty"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">Loyalty Programs API</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Create and manage customer loyalty programs with points,
          rewards, and comprehensive analytics. Award points for purchases, redeem points for rewards,
          and track program performance.
        </div>

        <p>
          The Loyalty Programs API allows you to build and manage customer loyalty programs programmatically.
          Create programs, award points, manage rewards, and track customer engagement.
        </p>

        <h2 id="programs">Loyalty Programs</h2>

        <h3>Create a Loyalty Program</h3>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/v1/merchant/loyalty/programs</strong>
          <br />
          <span className="description">Create a new loyalty program</span>
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
                  code={`curl -X POST "https://api.otto.com/v1/merchant/loyalty/programs" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Gold Tier Rewards",
    "description": "Premium loyalty program",
    "points_per_cedi": 1,
    "redemption_rules": {
      "minimum_points": 100,
      "categories": ["food", "beverages"]
    }
  }'`}
                />
              </div>
            )}
            {activeTab === "javascript" && (
              <div className="tab-pane">
                <CodeBlock
                  language="javascript"
                  code={`const response = await fetch('https://api.otto.com/v1/merchant/loyalty/programs', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Gold Tier Rewards',
    description: 'Premium loyalty program',
    points_per_cedi: 1,
    redemption_rules: {
      minimum_points: 100,
      categories: ['food', 'beverages']
    }
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
    'https://api.otto.com/v1/merchant/loyalty/programs',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    json={
        'name': 'Gold Tier Rewards',
        'description': 'Premium loyalty program',
        'points_per_cedi': 1,
        'redemption_rules': {
            'minimum_points': 100,
            'categories': ['food', 'beverages']
        }
    }
)

data = response.json()`}
                />
              </div>
            )}
          </div>
        </div>

        <h3>List Loyalty Programs</h3>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/v1/merchant/loyalty/programs</strong>
          <br />
          <span className="description">List all loyalty programs for your merchant account</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/v1/merchant/loyalty/programs" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <h3>Update Loyalty Program</h3>

        <div className="api-endpoint">
          <span className="method put">PUT</span>
          <strong>/v1/merchant/loyalty/programs/{`{id}`}</strong>
          <br />
          <span className="description">Update an existing loyalty program</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X PUT "https://api.otto.com/v1/merchant/loyalty/programs/123" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "points_per_cedi": 2,
    "is_active": true
  }'`}
        />

        <h2 id="points">Points Management</h2>

        <h3>Award Points</h3>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/v1/merchant/loyalty/points/add</strong>
          <br />
          <span className="description">Award points to a customer</span>
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
                  code={`curl -X POST "https://api.otto.com/v1/merchant/loyalty/points/add" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_id": "CUST-123",
    "points": 50,
    "reason": "Purchase reward",
    "transaction_reference": "TXN-789"
  }'`}
                />
              </div>
            )}
            {activeTab === "javascript" && (
              <div className="tab-pane">
                <CodeBlock
                  language="javascript"
                  code={`const response = await fetch('https://api.otto.com/v1/merchant/loyalty/points/add', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    customer_id: 'CUST-123',
    points: 50,
    reason: 'Purchase reward',
    transaction_reference: 'TXN-789'
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
    'https://api.otto.com/v1/merchant/loyalty/points/add',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    json={
        'customer_id': 'CUST-123',
        'points': 50,
        'reason': 'Purchase reward',
        'transaction_reference': 'TXN-789'
    }
)

data = response.json()`}
                />
              </div>
            )}
          </div>
        </div>

        <h3>Redeem Points</h3>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/v1/merchant/loyalty/points/redeem</strong>
          <br />
          <span className="description">Redeem customer points for a reward</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X POST "https://api.otto.com/v1/merchant/loyalty/points/redeem" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_id": "CUST-123",
    "points": 100,
    "reward_type": "discount",
    "reward_value": 10.00
  }'`}
        />

        <h2 id="rewards">Rewards</h2>

        <h3>Create a Reward</h3>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/v1/merchant/loyalty/programs/{`{programId}`}/rewards</strong>
          <br />
          <span className="description">Create a new reward for a loyalty program</span>
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
                  code={`curl -X POST "https://api.otto.com/v1/merchant/loyalty/programs/123/rewards" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "10% Discount",
    "description": "Get 10% off your next purchase",
    "points_required": 100,
    "reward_type": "DISCOUNT_PERCENTAGE",
    "reward_value": 10.00,
    "stock_quantity": 1000,
    "is_active": true
  }'`}
                />
              </div>
            )}
            {activeTab === "javascript" && (
              <div className="tab-pane">
                <CodeBlock
                  language="javascript"
                  code={`const response = await fetch('https://api.otto.com/v1/merchant/loyalty/programs/123/rewards', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: '10% Discount',
    description: 'Get 10% off your next purchase',
    points_required: 100,
    reward_type: 'DISCOUNT_PERCENTAGE',
    reward_value: 10.00,
    stock_quantity: 1000,
    is_active: true
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
    'https://api.otto.com/v1/merchant/loyalty/programs/123/rewards',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    json={
        'name': '10% Discount',
        'description': 'Get 10% off your next purchase',
        'points_required': 100,
        'reward_type': 'DISCOUNT_PERCENTAGE',
        'reward_value': 10.00,
        'stock_quantity': 1000,
        'is_active': True
    }
)

data = response.json()`}
                />
              </div>
            )}
          </div>
        </div>

        <h3>Reward Types</h3>

        <table className="docs-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Value Format</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>DISCOUNT_PERCENTAGE</code></td>
              <td>Percentage discount on purchase</td>
              <td>0-100 (percentage)</td>
            </tr>
            <tr>
              <td><code>DISCOUNT_FIXED</code></td>
              <td>Fixed amount discount</td>
              <td>Amount in currency</td>
            </tr>
            <tr>
              <td><code>FREE_ITEM</code></td>
              <td>Free item reward</td>
              <td>Item identifier</td>
            </tr>
            <tr>
              <td><code>POINTS_BONUS</code></td>
              <td>Bonus points award</td>
              <td>Points amount</td>
            </tr>
          </tbody>
        </table>

        <h3>List Rewards</h3>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/v1/merchant/loyalty/programs/{`{programId}`}/rewards</strong>
          <br />
          <span className="description">List all rewards for a loyalty program</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/v1/merchant/loyalty/programs/123/rewards" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <h2 id="analytics">Analytics</h2>

        <h3>Get Reward Analytics</h3>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/v1/merchant/loyalty/rewards/{`{id}`}/analytics</strong>
          <br />
          <span className="description">Get analytics for a specific reward</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/v1/merchant/loyalty/rewards/456/analytics" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <h3>Get Program Analytics</h3>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/v1/merchant/loyalty/programs/{`{id}`}/analytics</strong>
          <br />
          <span className="description">Get comprehensive analytics for a loyalty program</span>
        </div>

        <p>
          Returns metrics including total points awarded, total points redeemed, active members,
          top rewards, and engagement statistics.
        </p>

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

export default Loyalty;


