import React from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const Testing = () => {
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
    { href: '#sandbox', label: 'Test Environment' },
    { href: '#test-keys', label: 'Test API Keys' },
    { href: '#test-data', label: 'Test Data' },
    { href: '#checklist', label: 'Testing Checklist' },
    { href: '#go-live', label: 'Go Live Checklist' },
  ];

  return (
    <DocsLayout
      currentPage="/docs/testing"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">Testing</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Use test API keys to test your integration without processing
          real payments or affecting live data. Test keys automatically route to test databases and ledgers.
        </div>

        <p>
          Otto uses the same API endpoint for both test and live environments. The environment is determined
          by your API key prefix. Test keys (starting with <code>sk_test_</code>) automatically route to test
          databases, while live keys (starting with <code>sk_live_</code>) route to production databases.
        </p>

        <h2 id="sandbox">Test Environment</h2>

        <p>
          When you use a test API key, all API requests are automatically routed to test databases and ledgers.
          All test transactions are simulated and don't involve real money or affect live customer data.
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-green-900 mb-2">🧪 How It Works</h4>
          <ul className="text-green-800 text-sm space-y-2 list-disc list-inside">
            <li>Use the same API endpoint: <code className="bg-green-100 px-2 py-1 rounded">https://api.otto.com</code></li>
            <li>Test keys (starting with <code>sk_test_</code>) automatically route to test environment</li>
            <li>Live keys (starting with <code>sk_live_</code>) route to production environment</li>
            <li>No need to change URLs or endpoints when switching environments</li>
          </ul>
        </div>

        <h2 id="test-keys">Test API Keys</h2>

        <p>
          Generate test API keys in your Merchant Portal to authenticate API requests in the test environment.
          Test keys are clearly marked and can be generated alongside your live keys.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-900 mb-4">API Key Format</h4>
          <div className="space-y-3 text-sm">
            <div>
              <strong>Test Keys:</strong> <code className="bg-gray-200 px-2 py-1 rounded">sk_test_...</code>
              <p className="text-gray-600 mt-1">Automatically routes to test databases and ledgers</p>
            </div>
            <div>
              <strong>Live Keys:</strong> <code className="bg-gray-200 px-2 py-1 rounded">sk_live_...</code>
              <p className="text-gray-600 mt-1">Routes to production databases and ledgers</p>
            </div>
          </div>
        </div>

        <CodeBlock
          language="bash"
          code={`# Test environment - uses test databases
curl -X GET "https://api.otto.com/v1/merchant/giftcards" \\
  -H "Authorization: Bearer sk_test_your_test_key_here"

# Production environment - uses live databases
curl -X GET "https://api.otto.com/v1/merchant/giftcards" \\
  -H "Authorization: Bearer sk_live_your_live_key_here"`}
        />

        <div className="docs-alert warning">
          <strong>Important:</strong> Never use test keys in production or live keys in test. The API key
          prefix determines which environment your requests are routed to.
        </div>

        <h2 id="test-data">Test Data</h2>

        <p>
          Use these test values to simulate different scenarios in the test environment. Test data is
          automatically available when using test API keys.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Test Gift Card Codes</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Valid:</strong> <code className="bg-gray-100 px-2 py-1 rounded">GC_TEST_123456</code>
              </div>
              <div>
                <strong>Expired:</strong> <code className="bg-gray-100 px-2 py-1 rounded">GC_TEST_EXPIRED</code>
              </div>
              <div>
                <strong>Invalid:</strong> <code className="bg-gray-100 px-2 py-1 rounded">GC_TEST_INVALID</code>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Test Transaction IDs</h4>
            <div className="space-y-3 text-sm">
              <div>
                <strong>Success:</strong> <code className="bg-gray-100 px-2 py-1 rounded">txn_test_success</code>
              </div>
              <div>
                <strong>Failed:</strong> <code className="bg-gray-100 px-2 py-1 rounded">txn_test_failed</code>
              </div>
              <div>
                <strong>Pending:</strong> <code className="bg-gray-100 px-2 py-1 rounded">txn_test_pending</code>
              </div>
            </div>
          </div>
        </div>

        <h2 id="checklist">Testing Checklist</h2>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="font-semibold text-gray-900">API Authentication</h4>
              <p className="text-gray-600 text-sm">Verify your test API keys work correctly</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="font-semibold text-gray-900">Gift Card Operations</h4>
              <p className="text-gray-600 text-sm">Test creating, purchasing, and redeeming gift cards</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="font-semibold text-gray-900">Webhook Integration</h4>
              <p className="text-gray-600 text-sm">Verify webhook endpoints receive and process events</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="font-semibold text-gray-900">Error Handling</h4>
              <p className="text-gray-600 text-sm">Test how your application handles API errors and failures</p>
            </div>
          </div>
        </div>

        <h2 id="go-live">Go Live Checklist</h2>

        <p>
          Before moving to production, ensure all critical functionality works with test keys.
        </p>

        <div className="bg-red-50 p-6 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">🚨 Important</h4>
          <p className="text-red-800 text-sm mb-4">
            Replace all test API keys with live keys before going to production. The API endpoint
            remains the same (<code>https://api.otto.com</code>), but you must use live keys.
          </p>
          <ul className="text-red-800 text-sm space-y-1">
            <li>• Replace test API keys (starting with <code>sk_test_</code>) with live keys (starting with <code>sk_live_</code>)</li>
            <li>• Update webhook URLs to production endpoints</li>
            <li>• Verify all API calls use live keys in production code</li>
            <li>• Test with real payment methods after switching to live keys</li>
            <li>• Monitor API usage and transactions in the Merchant Portal</li>
          </ul>
        </div>

        <div className="docs-alert success">
          <strong>Need Help?</strong> Check the <a href="https://api.otto.com/v1/docs" className="underline" target="_blank" rel="noopener noreferrer">API Reference</a> for complete endpoint documentation,
          or visit our <a href="/docs/support" className="underline">Support page</a>.
        </div>
      </div>
    </DocsLayout>
  );
};

export default Testing;
