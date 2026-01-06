import React from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import MultiLanguageCodeBlock from '../../components/MultiLanguageCodeBlock';
import './docs.css';

const GiftCards = () => {

  const sidebarItems = [
    {
      title: 'Getting Started',
      icon: '🚀',
      items: [
        { path: '/docs/getting-started', label: 'Introduction' },
        { path: '/docs/authentication', label: 'Authentication' },
        { path: '/docs/testing', label: 'Testing' },
      ]
    },
    {
      title: 'API Reference',
      icon: '📚',
      items: [
        { path: '/docs/gift-cards', label: 'Gift Cards' },
        { path: '/docs/transactions', label: 'Transactions' },
        { path: '/docs/loyalty', label: 'Loyalty Programs' },
        { path: '/docs/qr-codes', label: 'QR Codes' },
        { path: '/docs/settlements', label: 'Settlements' },
        { path: '/docs/user-management', label: 'User Management' },
      ]
    },
    {
      title: 'Guides',
      icon: '📖',
      items: [
        { path: '/docs/webhooks', label: 'Webhooks' },
        { path: '/docs/error-handling', label: 'Error Handling' },
        { path: '/docs/rate-limits', label: 'Rate Limits' },
      ]
    },
    {
      title: 'Resources',
      icon: '🔧',
      items: [
        { path: '/docs/sdks', label: 'SDKs & Libraries' },
        { path: '/docs/support', label: 'Support' },
      ]
    }
  ];

  const onThisPageItems = [
    { href: '#overview', label: 'Overview' },
    { href: '#templates', label: 'Gift Card Templates' },
    { href: '#instances', label: 'Gift Card Instances' },
    { href: '#redemption', label: 'Redemption Flow' },
    { href: '#error-handling', label: 'Error Handling' },
    { href: '#best-practices', label: 'Best Practices' },
  ];

  return (
    <DocsLayout
      currentPage="/docs/gift-cards"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">Gift Cards API</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Otto supports two types of gift cards - templates (reusable designs)
          and instances (individual purchased cards). Use the API to create templates, manage instances, verify
          balances, and process redemptions.
        </div>

        <p>
          The Gift Cards API allows you to programmatically create, manage, and redeem gift cards
          through Otto's platform. This is perfect for e-commerce integrations, loyalty programs,
          and custom gift card solutions.
        </p>

        <h2>Overview</h2>

        <p>
          Otto supports two types of gift cards:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Gift Card Templates:</strong> Reusable designs that define denominations, styling, and redemption rules</li>
          <li><strong>Gift Card Instances:</strong> Individual gift cards purchased by customers with unique codes</li>
        </ul>

        <h2 id="templates">Gift Card Templates</h2>

        <p>
          Templates define the structure and appearance of gift cards. Create templates once,
          then use them to generate individual gift card instances.
        </p>

        <h3>Create a Gift Card Template</h3>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/merchant/giftcard-templates</strong><br />
          <span className="description">Create a new gift card template</span>
        </div>

        <MultiLanguageCodeBlock
          examples={{
            curl: `curl -X POST "https://api.otto.com/merchant/giftcard-templates" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Birthday Special",
    "description": "Perfect for birthday celebrations",
    "denominations": [25, 50, 100, 200],
    "currency": "GHS",
    "background_color": "#FF6B6B",
    "text_color": "#FFFFFF",
    "expires_in_days": 365
  }'`,
            javascript: `const response = await fetch('https://api.otto.com/merchant/giftcard-templates', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Birthday Special',
    description: 'Perfect for birthday celebrations',
    denominations: [25, 50, 100, 200],
    currency: 'GHS',
    background_color: '#FF6B6B',
    text_color: '#FFFFFF',
    expires_in_days: 365
  })
});

const data = await response.json();`,
            python: `import requests

response = requests.post(
    'https://api.otto.com/merchant/giftcard-templates',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    json={
        'name': 'Birthday Special',
        'description': 'Perfect for birthday celebrations',
        'denominations': [25, 50, 100, 200],
        'currency': 'GHS',
        'background_color': '#FF6B6B',
        'text_color': '#FFFFFF',
        'expires_in_days': 365
    }
)

data = response.json()`
          }}
        />

        <h3>Template Parameters</h3>

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
              <td><code>name</code></td>
              <td>string</td>
              <td>Yes</td>
              <td>Template name (max 100 characters)</td>
            </tr>
            <tr>
              <td><code>denominations</code></td>
              <td>array</td>
              <td>Yes</td>
              <td>Available values in the specified currency</td>
            </tr>
            <tr>
              <td><code>currency</code></td>
              <td>string</td>
              <td>Yes</td>
              <td>Currency code (GHS, USD, etc.)</td>
            </tr>
            <tr>
              <td><code>background_color</code></td>
              <td>string</td>
              <td>No</td>
              <td>Hex color code for card background</td>
            </tr>
            <tr>
              <td><code>text_color</code></td>
              <td>string</td>
              <td>No</td>
              <td>Hex color code for text</td>
            </tr>
            <tr>
              <td><code>expires_in_days</code></td>
              <td>integer</td>
              <td>No</td>
              <td>Days until gift card expires (default: 365)</td>
            </tr>
          </tbody>
        </table>

        <h3>List Gift Card Templates</h3>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/merchant/giftcard-templates</strong><br />
          <span className="description">List all gift card templates</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/merchant/giftcard-templates?page=1&per_page=15" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <h3>Update Gift Card Template</h3>

        <div className="api-endpoint">
          <span className="method put">PUT</span>
          <strong>/merchant/giftcard-templates/{`{id}`}</strong><br />
          <span className="description">Update an existing gift card template</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X PUT "https://api.otto.com/merchant/giftcard-templates/123" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Updated Birthday Special",
    "is_active": true
  }'`}
        />

        <h2 id="instances">Gift Card Instances</h2>

        <p>
          Once you have templates, you can create individual gift card instances for customers.
          Each instance has a unique code and can be redeemed through Otto's mobile apps.
        </p>

        <h3>List Gift Card Instances</h3>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/merchant/giftcards</strong><br />
          <span className="description">List all purchased gift card instances</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/merchant/giftcards?page=1&per_page=20&status=active" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <h3>Verify Gift Card Balance</h3>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/merchant/giftcards/{`{code}`}/verify</strong><br />
          <span className="description">Check gift card balance and status</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/merchant/giftcards/ABC123456/verify" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <div className="docs-alert info">
          <strong>Response:</strong> Returns current balance, status, and expiration date.
        </div>

        <h2 id="redemption">Redeem a Gift Card</h2>

        <div className="docs-alert warning">
          <strong>Currency Note:</strong> All currency values are stored in Pesewas (1 GHS = 100 Pesewas).
        </div>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/merchant/giftcards/{`{code}`}/redeem</strong><br />
          <span className="description">Redeem gift card for specified amount</span>
        </div>

        <MultiLanguageCodeBlock
          examples={{
            curl: `curl -X POST "https://api.otto.com/merchant/giftcards/ABC123456/redeem" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 25.00,
    "transaction_reference": "TXN-12345"
  }'`,
            javascript: `const response = await fetch('https://api.otto.com/merchant/giftcards/ABC123456/redeem', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 25.00,
    transaction_reference: 'TXN-12345'
  })
});

const data = await response.json();`,
            python: `import requests

response = requests.post(
    'https://api.otto.com/merchant/giftcards/ABC123456/redeem',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    json={
        'amount': 25.00,
        'transaction_reference': 'TXN-12345'
    }
)

data = response.json()`
          }}
        />

        <h3>Redemption Flow</h3>

        <p>
          The typical gift card redemption flow involves:
        </p>

        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li><strong>Verify:</strong> Check if the gift card exists and has sufficient balance</li>
          <li><strong>Redeem:</strong> Process the redemption and update balance</li>
          <li><strong>Confirm:</strong> Receive webhook notification of successful redemption</li>
        </ol>

        <h2 id="error-handling">Error Handling</h2>

        <p>
          Common gift card errors and how to handle them:
        </p>

        <div className="docs-alert error">
          <strong>INVALID_CODE:</strong> The gift card code doesn't exist. Ask the customer to check the code.
        </div>

        <div className="docs-alert error">
          <strong>INSUFFICIENT_BALANCE:</strong> The gift card doesn't have enough balance for the transaction.
        </div>

        <div className="docs-alert error">
          <strong>EXPIRED:</strong> The gift card has expired and can no longer be used.
        </div>

        <div className="docs-alert warning">
          <strong>ALREADY_REDEEMED:</strong> The gift card has already been fully redeemed.
        </div>

        <h2 id="best-practices">Best Practices</h2>

        <h3>Security</h3>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Always verify gift card balance before redemption</li>
          <li>Store gift card codes securely (never in logs or client-side storage)</li>
          <li>Use idempotent operations for redemption to prevent double-charging</li>
          <li>Implement proper error handling for all API responses</li>
        </ul>

        <h3>Performance</h3>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Cache gift card template information to reduce API calls</li>
          <li>Use pagination for large lists of gift card instances</li>
          <li>Implement retry logic with exponential backoff</li>
          <li>Monitor your API usage in the Merchant Portal</li>
        </ul>

        <div className="docs-alert success">
          <strong>Need Help?</strong> Check the <a href="https://api.otto.com/api/docs" className="underline" target="_blank" rel="noopener noreferrer">API Reference</a> for complete endpoint documentation,
          or visit our <a href="/docs/support" className="underline">Support page</a>.
        </div>
      </div>
    </DocsLayout>
  );
};

export default GiftCards;
