import React from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import MultiLanguageCodeBlock from '../../components/MultiLanguageCodeBlock';
import './docs.css';

const GettingStarted = () => {

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
    { href: '#what-you-can-do', label: 'What You Can Do' },
    { href: '#create-api-key', label: 'Create API Key' },
    { href: '#first-api-call', label: 'Make Your First API Call' },
    { href: '#create-gift-card', label: 'Create Your First Gift Card' },
    { href: '#next-steps', label: 'Next Steps' },
  ];

  return (
    <DocsLayout
      currentPage="/docs/getting-started"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">Getting Started with Otto API</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> To integrate with Otto's API, create an API key in your Merchant Portal,
          authenticate requests using Bearer tokens, and start making API calls. Every API request includes a link
          that can be used to complete operations.
        </div>

        <p>
          Welcome to Otto's Developer Documentation! This guide will help you get up and running
          with the Otto API in just a few minutes. Whether you're building an e-commerce platform,
          a mobile app, or any other integration, Otto's API makes it easy to manage gift cards,
          transactions, loyalty programs, and more.
        </p>

        <h2 id="what-you-can-do">What You Can Do with Otto API</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="docs-card">
            <h3 className="text-lg font-semibold mb-2">💳 Gift Cards</h3>
            <p className="text-gray-600">
              Create, manage, and redeem gift cards programmatically. Perfect for e-commerce integrations
              and customer rewards.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="text-lg font-semibold mb-2">💰 Transactions</h3>
            <p className="text-gray-600">
              Access real-time transaction data, payment history, and detailed analytics for your business.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="text-lg font-semibold mb-2">🎯 Loyalty Programs</h3>
            <p className="text-gray-600">
              Build and manage customer loyalty programs with points, rewards, and comprehensive analytics.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="text-lg font-semibold mb-2">👥 User Management</h3>
            <p className="text-gray-600">
              Manage staff users, roles, and permissions across your business locations programmatically.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="text-lg font-semibold mb-2">📱 QR Codes</h3>
            <p className="text-gray-600">
              Generate QR codes for payments and manage static QR codes for your business.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="text-lg font-semibold mb-2">💵 Settlements</h3>
            <p className="text-gray-600">
              Access settlement history, balances, and upcoming settlements for financial reconciliation.
            </p>
          </div>
        </div>

        <h2 id="create-api-key">Step 1: Create Your API Key</h2>

        <p>
          Before you can start using the API, you need to create an API key with the appropriate permissions.
          API keys are managed through your Merchant Portal.
        </p>

        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Log in to your <a href={process.env.NODE_ENV === 'production' ? 'https://business.ottoafrica.com' : 'http://localhost:3001'} className="text-otto-blue hover:underline">Merchant Portal</a></li>
          <li>Navigate to <strong>Settings → API</strong></li>
          <li>Click <strong>"Create API Key"</strong></li>
          <li>Give your key a descriptive name (e.g., "Production E-commerce Integration")</li>
          <li>Select the permissions your integration needs (scopes)</li>
          <li>Click <strong>"Create API Key"</strong></li>
          <li><strong>Important:</strong> Copy and securely store your API key - you won't be able to see it again!</li>
        </ol>

        <div className="docs-alert warning">
          <strong>Security Note:</strong> Keep your API keys secure and never expose them in client-side code or public repositories.
          Always use environment variables to store API keys.
        </div>

        <h2 id="first-api-call">Step 2: Make Your First API Call</h2>

        <p>
          Let's test your API key by making a simple request to verify it's working.
          We'll check your merchant account information.
        </p>

        <MultiLanguageCodeBlock
          examples={{
            curl: `curl -X GET "https://api.otto.com/merchant/transactions" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
            javascript: `const response = await fetch('https://api.otto.com/merchant/transactions', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`,
            python: `import requests

response = requests.get(
    'https://api.otto.com/merchant/transactions',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
)

data = response.json()
print(data)`
          }}
        />

        <p>
          Replace <code>YOUR_API_KEY</code> with the API key you created in Step 1.
          You should receive a JSON response with your recent transactions.
        </p>

        <h2 id="create-gift-card">Step 3: Create Your First Gift Card</h2>

        <div className="docs-alert warning">
          <strong>Currency Note:</strong> All currency values are stored in Pesewas (1 GHS = 100 Pesewas).
        </div>

        <p>
          Now let's create a gift card template. This will demonstrate how to make a POST request
          to create resources.
        </p>

        <MultiLanguageCodeBlock
          examples={{
            curl: `curl -X POST "https://api.otto.com/merchant/giftcard-templates" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Welcome Gift Card",
    "description": "A special welcome gift for new customers",
    "denominations": [25, 50, 100],
    "currency": "GHS",
    "expires_in_days": 365
  }'`,
            javascript: `const response = await fetch('https://api.otto.com/merchant/giftcard-templates', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Welcome Gift Card',
    description: 'A special welcome gift for new customers',
    denominations: [25, 50, 100],
    currency: 'GHS',
    expires_in_days: 365
  })
});

const data = await response.json();
console.log(data);`,
            python: `import requests

response = requests.post(
    'https://api.otto.com/merchant/giftcard-templates',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'name': 'Welcome Gift Card',
        'description': 'A special welcome gift for new customers',
        'denominations': [25, 50, 100],
        'currency': 'GHS',
        'expires_in_days': 365
    }
)

data = response.json()
print(data)`
          }}
        />

        <div className="docs-alert info">
          <strong>Expected Response:</strong> You should receive a 201 Created response with the gift card template details,
          including a unique ID that you can use for future operations.
        </div>

        <h2>Step 4: Handle Webhooks (Optional)</h2>

        <p>
          For real-time integrations, set up webhooks to receive notifications when events occur.
          This is especially useful for transaction updates and gift card redemptions.
        </p>

        <p>
          To set up webhooks:
        </p>

        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Go to <strong>Settings → API → Webhooks</strong> in your Merchant Portal</li>
          <li>Click <strong>"Add Webhook"</strong></li>
          <li>Enter your endpoint URL (must be HTTPS)</li>
          <li>Select events you want to receive (e.g., <code>transaction.completed</code>, <code>giftcard.redeemed</code>)</li>
          <li>Test the webhook to ensure it's working</li>
        </ol>

        <p>
          Learn more about webhooks in our <a href="/docs/webhooks" className="text-otto-blue hover:underline">Webhooks guide</a>.
        </p>

        <h2>Step 5: Go Live</h2>

        <p>
          Once you've tested your integration with test API keys:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Replace test API keys (starting with <code>sk_test_</code>) with live keys (starting with <code>sk_live_</code>)</li>
          <li>The API endpoint remains the same: <code>https://api.otto.com</code></li>
          <li>Update webhook URLs to production endpoints</li>
          <li>Implement proper error handling and retries</li>
          <li>Monitor your API usage in the Merchant Portal</li>
          <li>Set up alerting for any issues</li>
        </ul>

        <h2 id="next-steps">Next Steps</h2>

        <p>
          Now that you have the basics working, explore our detailed guides for specific features:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <a href="/docs/gift-cards" className="docs-card p-4 transition-all duration-200 hover:border-otto-blue">
            <h3 className="font-semibold mb-2">🎁 Gift Cards Guide</h3>
            <p className="text-sm text-gray-600">Complete guide to creating and managing gift cards</p>
          </a>

          <a href="/docs/transactions" className="docs-card p-4 transition-all duration-200 hover:border-otto-blue">
            <h3 className="font-semibold mb-2">💰 Transactions Guide</h3>
            <p className="text-sm text-gray-600">Access transaction data and analytics</p>
          </a>

          <a href="/docs/webhooks" className="docs-card p-4 transition-all duration-200 hover:border-otto-blue">
            <h3 className="font-semibold mb-2">🔄 Webhooks Guide</h3>
            <p className="text-sm text-gray-600">Set up real-time event notifications</p>
          </a>

          <a href="/docs/authentication" className="docs-card p-4 transition-all duration-200 hover:border-otto-blue">
            <h3 className="font-semibold mb-2">🔐 Authentication Guide</h3>
            <p className="text-sm text-gray-600">Advanced authentication and security</p>
          </a>
        </div>

        <div className="docs-alert success">
          <strong>Need Help?</strong> Check out our <a href="/docs/support" className="underline">Support page</a> or
          visit the <a href="https://api.otto.com/api/docs" className="underline" target="_blank" rel="noopener noreferrer">API Reference</a> for detailed documentation.
        </div>
      </div>
    </DocsLayout>
  );
};

export default GettingStarted;
