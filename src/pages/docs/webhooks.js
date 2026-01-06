import React from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const Webhooks = () => {
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
    { href: '#configure', label: 'Configure Webhooks' },
    { href: '#events', label: 'Available Events' },
    { href: '#payload', label: 'Webhook Payload' },
    { href: '#security', label: 'Security & Verification' },
    { href: '#retries', label: 'Retries & Delivery' },
  ];

  return (
    <DocsLayout
      currentPage="/docs/webhooks"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">Webhooks</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Webhooks allow you to receive real-time notifications when important
          events occur in your Otto account. Instead of polling our API for updates, we'll send HTTP POST requests
          to your configured endpoint.
        </div>

        <p>
          Webhooks allow you to receive real-time notifications when important events occur in your Otto account.
          Instead of polling our API for updates, we'll send HTTP POST requests to your configured endpoint.
        </p>

        <h2 id="configure">Configure Webhooks</h2>

        <p>
          Set up webhook endpoints in your Merchant Portal or via API.
        </p>

        <h3>Via Merchant Portal</h3>

        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Go to <strong>Settings → API → Webhooks</strong> in your Merchant Portal</li>
          <li>Click <strong>"Add Webhook"</strong></li>
          <li>Enter your endpoint URL (must be HTTPS)</li>
          <li>Select events you want to receive</li>
          <li>Click <strong>"Save Webhook"</strong></li>
        </ol>

        <h3>Via API</h3>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/v1/merchant/webhooks</strong><br />
          <span className="description">Create a new webhook endpoint</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X POST "https://api.otto.com/v1/merchant/webhooks" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-app.com/webhooks/otto",
    "events": ["payment.completed", "giftcard.redeemed"],
    "secret": "whsec_your_secret"
  }'`}
        />

        <h2 id="events">Available Events</h2>

        <p>
          The following events can be subscribed to:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">payment.completed</h4>
            <p className="text-gray-600 text-sm">Triggered when a payment is successfully processed</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">payment.failed</h4>
            <p className="text-gray-600 text-sm">Triggered when a payment fails to process</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">giftcard.redeemed</h4>
            <p className="text-gray-600 text-sm">Triggered when a gift card is redeemed</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">settlement.completed</h4>
            <p className="text-gray-600 text-sm">Triggered when funds are settled to your account</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">loyalty.points_awarded</h4>
            <p className="text-gray-600 text-sm">Triggered when loyalty points are awarded to a customer</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">loyalty.points_redeemed</h4>
            <p className="text-gray-600 text-sm">Triggered when loyalty points are redeemed</p>
          </div>
        </div>

        <h2 id="payload">Webhook Payload</h2>

        <p>
          All webhook payloads include a signature header for verification and follow a consistent structure.
        </p>

        <h3>Headers</h3>

        <CodeBlock
          language="http"
          code={`X-Otto-Signature: sha256=abc123...
X-Otto-Event: payment.completed
Content-Type: application/json
User-Agent: Otto-Webhook/1.0`}
        />

        <h3>Example Payload</h3>

        <CodeBlock
          language="json"
          code={`{
  "event": "payment.completed",
  "data": {
    "transaction_id": "txn_1234567890",
    "amount": 50.00,
    "currency": "GHS",
    "status": "completed",
    "customer": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`}
        />

        <h2 id="security">Security & Verification</h2>

        <p>
          Verify webhook authenticity using the signature header and your webhook secret.
        </p>

        <h3>Signature Verification</h3>

        <p>
          Otto signs each webhook payload with your webhook secret. Verify the signature to ensure
          the request came from Otto.
        </p>

        <div className="code-tabs">
          <div className="tab-buttons">
            <button className="tab-button active">JavaScript</button>
            <button className="tab-button">Python</button>
          </div>
          <div className="tab-content">
            <div className="tab-pane">
              <CodeBlock
                language="javascript"
                showLineNumbers={true}
                code={`const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(\`sha256=\${hash}\`)
  );
}`}
              />
            </div>
          </div>
        </div>

        <div className="docs-alert warning">
          <strong>Security Best Practices:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Always verify webhook signatures</li>
            <li>Use HTTPS endpoints only</li>
            <li>Respond with 200 status within 5 seconds</li>
            <li>Handle duplicate events gracefully</li>
          </ul>
        </div>

        <h2 id="retries">Retries & Delivery</h2>

        <p>
          Otto will automatically retry failed webhook deliveries:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Initial attempt:</strong> Immediate</li>
          <li><strong>Retry 1:</strong> After 1 minute</li>
          <li><strong>Retry 2:</strong> After 5 minutes</li>
          <li><strong>Retry 3:</strong> After 15 minutes</li>
          <li><strong>Retry 4:</strong> After 1 hour</li>
        </ul>

        <p>
          If all retries fail, the webhook will be marked as failed. You can view failed deliveries
          in your Merchant Portal and manually retry them.
        </p>

        <div className="docs-alert success">
          <strong>Need Help?</strong> Check the <a href="https://api.otto.com/v1/docs" className="underline" target="_blank" rel="noopener noreferrer">API Reference</a> for complete endpoint documentation,
          or visit our <a href="/docs/support" className="underline">Support page</a>.
        </div>
      </div>
    </DocsLayout>
  );
};

export default Webhooks;
