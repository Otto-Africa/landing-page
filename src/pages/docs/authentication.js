import React, { useState } from 'react';
import DocsLayout from '../../layout/DocsLayout';
import SEO from '../../components/SEO';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const Authentication = () => {
  const [activeTab, setActiveTab] = useState('curl');

  const onThisPageItems = [
    { href: '#overview', label: 'Overview' },
    { href: '#api-keys', label: 'API Key Management' },
    { href: '#scopes', label: 'API Key Scopes' },
    { href: '#making-requests', label: 'Making Authenticated Requests' },
    { href: '#rate-limiting', label: 'Rate Limiting' },
    { href: '#error-responses', label: 'Error Responses' },
    { href: '#security', label: 'Security Best Practices' },
  ];

  return (
    <>
      <SEO
        title="Authentication - Otto Africa API Documentation"
        description="Learn how to authenticate with Otto Africa API using API keys. Understand test vs production keys and how to securely make API requests."
        keywords="Otto API authentication, API keys, Bearer token, API security, test API keys, production API keys"
        url="https://ottoafrica.com/docs/authentication"
      />
      <DocsLayout
        currentPage="/docs/authentication"
        onThisPageItems={onThisPageItems}
        nutshell="For the public and partner API, use only an API key in the Authorization header as Bearer sk_test_... or Bearer sk_live_.... Do not use login tokens (JWT) or other headers."
    >
      <div className="docs-content">
        <h1 id="overview">API Authentication</h1>

        <p>
          All requests to Otto's API must be authenticated using API keys. Otto uses Bearer token
          authentication with granular scope-based permissions to ensure secure access to your data.
        </p>

        <h2 id="api-keys">API Key Management</h2>

        <h3>Creating API Keys</h3>

        <p>
          API keys are created and managed through your Merchant Portal. Each key can have specific
          permissions (scopes) that control what actions it can perform.
        </p>

        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Log in to your Merchant Portal</li>
          <li>Navigate to <strong>Settings → API</strong></li>
          <li>Click <strong>"Create API Key"</strong></li>
          <li>Enter a descriptive name for your key</li>
          <li>Select the required permissions from the available scopes</li>
          <li>Click <strong>"Create API Key"</strong></li>
          <li><strong>Important:</strong> Copy the generated key immediately - it will only be shown once!</li>
        </ol>

        <h3>API Key Format</h3>

        <p>
          Otto uses environment-aware API keys. The key prefix determines whether requests are routed to
          test or production databases:
        </p>

        <table className="docs-table mb-6">
          <thead>
            <tr>
              <th>Key Type</th>
              <th>Prefix</th>
              <th>Environment</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test Keys</td>
              <td><code>sk_test_</code></td>
              <td>Test databases and ledgers</td>
              <td>Development and testing only (no real money)</td>
            </tr>
            <tr>
              <td>Live Keys</td>
              <td><code>sk_live_</code></td>
              <td>Production databases and ledgers</td>
              <td>Production transactions affecting live data</td>
            </tr>
          </tbody>
        </table>

        <div className="docs-alert info">
          <strong>Same Endpoint:</strong> Both test and live keys use the same API endpoint
          (<code>https://api.ottoafrica.com</code>). The environment is automatically determined by the key prefix.
        </div>

        <p>
          <strong>Examples:</strong>
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Test key:</strong> <code>sk_test_abc123xyz789...</code></li>
          <li><strong>Live key:</strong> <code>sk_live_abc123xyz789...</code></li>
        </ul>

        <h2 id="scopes">API Key Scopes</h2>

        <p>
          Otto uses scope-based permissions to control what each API key can access. This follows
          the principle of least privilege - only grant the minimum permissions needed.
        </p>

        <table className="docs-table">
          <thead>
            <tr>
              <th>Scope</th>
              <th>Description</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>read:profile</code></td>
              <td>Access basic merchant profile information</td>
              <td>Profile</td>
            </tr>
            <tr>
              <td><code>read:giftcards</code></td>
              <td>View gift card templates and instances</td>
              <td>Gift Cards</td>
            </tr>
            <tr>
              <td><code>write:issue</code></td>
              <td>Create and modify gift card templates</td>
              <td>Gift Cards</td>
            </tr>
            <tr>
              <td><code>write:redemption</code></td>
              <td>Process gift card and QR code redemptions</td>
              <td>Redemptions</td>
            </tr>
            <tr>
              <td><code>read:transactions</code></td>
              <td>View transaction history and details</td>
              <td>Transactions</td>
            </tr>
            <tr>
              <td><code>read:users</code></td>
              <td>View staff user information</td>
              <td>User Management</td>
            </tr>
            <tr>
              <td><code>write:users</code></td>
              <td>Create and modify staff users</td>
              <td>User Management</td>
            </tr>
            <tr>
              <td><code>read:loyalty</code></td>
              <td>View loyalty programs and rewards</td>
              <td>Loyalty</td>
            </tr>
            <tr>
              <td><code>write:loyalty</code></td>
              <td>Create and modify loyalty programs</td>
              <td>Loyalty</td>
            </tr>
            <tr>
              <td><code>write:qr</code></td>
              <td>Generate QR codes for payments</td>
              <td>QR Codes</td>
            </tr>
            <tr>
              <td><code>read:financials</code></td>
              <td>View settlements and balance information</td>
              <td>Financial</td>
            </tr>
          </tbody>
        </table>

        <h2 id="making-requests">Making Authenticated Requests</h2>

        <p>
          Include your API key in the <code>Authorization</code> header using the Bearer scheme.
        </p>

        <div className="code-tabs">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === 'curl' ? 'active' : ''}`}
              onClick={() => setActiveTab('curl')}
            >
              cURL
            </button>
            <button
              className={`tab-button ${activeTab === 'javascript' ? 'active' : ''}`}
              onClick={() => setActiveTab('javascript')}
            >
              JavaScript
            </button>
            <button
              className={`tab-button ${activeTab === 'python' ? 'active' : ''}`}
              onClick={() => setActiveTab('python')}
            >
              Python
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 'curl' && (
              <div className="tab-pane">
                <CodeBlock
                  language="bash"
                  code={`curl -X GET "https://api.ottoafrica.com/api/merchant/transactions" \\
  -H "Authorization: Bearer sk_test_your_api_key_here" \\
  -H "Content-Type: application/json"`}
                />
              </div>
            )}
            {activeTab === 'javascript' && (
              <div className="tab-pane">
                <CodeBlock
                  language="javascript"
                  code={`const response = await fetch('https://api.ottoafrica.com/api/merchant/transactions', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer sk_test_your_api_key_here',
    'Content-Type': 'application/json'
  }
});`}
                />
              </div>
            )}
            {activeTab === 'python' && (
              <div className="tab-pane">
                <CodeBlock
                  language="python"
                  code={`import requests

response = requests.get(
    'https://api.ottoafrica.com/api/merchant/transactions',
    headers={
        'Authorization': 'Bearer sk_test_your_api_key_here',
        'Content-Type': 'application/json'
    }
)`}
                />
              </div>
            )}
          </div>
        </div>

        <h2 id="rate-limiting">Rate Limiting</h2>

        <p>
          Otto implements rate limiting to ensure fair usage and system stability. Rate limits are
          applied per API key and reset periodically.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="docs-card p-4 text-center">
            <div className="text-2xl font-bold text-otto-blue mb-1">60</div>
            <div className="text-sm text-gray-600">requests per minute</div>
          </div>
          <div className="docs-card p-4 text-center">
            <div className="text-2xl font-bold text-otto-blue mb-1">1,000</div>
            <div className="text-sm text-gray-600">requests per hour</div>
          </div>
          <div className="docs-card p-4 text-center">
            <div className="text-2xl font-bold text-otto-blue mb-1">10,000</div>
            <div className="text-sm text-gray-600">requests per day</div>
          </div>
        </div>

        <p>
          When you exceed rate limits, you'll receive a <code>429 Too Many Requests</code> response
          with a <code>Retry-After</code> header indicating when you can retry.
        </p>

        <div className="docs-alert warning">
          <strong>Rate Limit Headers:</strong> Check the <code>X-RateLimit-Remaining</code> and
          <code>X-RateLimit-Reset</code> headers in responses to monitor your usage.
        </div>

        <h2 id="error-responses">Error Responses</h2>

        <p>
          Authentication failures return specific error codes to help you diagnose issues.
        </p>

        <table className="docs-table">
          <thead>
            <tr>
              <th>Status Code</th>
              <th>Error</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>401</td>
              <td>Unauthorized</td>
              <td>Missing or invalid API key</td>
            </tr>
            <tr>
              <td>403</td>
              <td>Forbidden</td>
              <td>Insufficient permissions for the requested action</td>
            </tr>
            <tr>
              <td>429</td>
              <td>Too Many Requests</td>
              <td>Rate limit exceeded</td>
            </tr>
          </tbody>
        </table>

        <h2 id="security">Security Best Practices</h2>

        <h3>API Key Security</h3>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Never expose API keys in client-side code</strong> - Keep them server-side only</li>
          <li><strong>Use environment variables</strong> - Store keys in environment variables, not in code</li>
          <li><strong>Rotate keys regularly</strong> - Create new keys and revoke old ones periodically</li>
          <li><strong>Use minimal scopes</strong> - Only grant the permissions your application actually needs</li>
          <li><strong>Monitor usage</strong> - Regularly check your API usage in the Merchant Portal</li>
        </ul>

        <h3>Request Security</h3>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Use HTTPS only</strong> - All API requests must use HTTPS</li>
          <li><strong>Validate SSL certificates</strong> - Don't disable SSL verification</li>
          <li><strong>Handle sensitive data properly</strong> - Don't log API keys or sensitive request data</li>
          <li><strong>Implement retries</strong> - Handle temporary failures gracefully with exponential backoff</li>
        </ul>

        <h2>Troubleshooting</h2>

        <h3>Common Issues</h3>

        <div className="space-y-4 mb-6">
          <div className="docs-alert error">
            <strong>401 Unauthorized:</strong> Check that your API key is correct and hasn't expired.
            Make sure you're using the Bearer authentication scheme.
          </div>

          <div className="docs-alert error">
            <strong>403 Forbidden:</strong> Your API key doesn't have the required scopes for this endpoint.
            Check the endpoint documentation for required permissions.
          </div>

          <div className="docs-alert warning">
            <strong>429 Too Many Requests:</strong> You've exceeded the rate limit. Wait for the reset
            period or consider upgrading your plan for higher limits.
          </div>
        </div>

        <h2>Testing Your Authentication</h2>

        <p>
          Test your authentication setup with a simple request to verify everything is working:
        </p>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.ottoafrica.com/api/health" \\
  -H "Authorization: Bearer sk_test_your_api_key_here"`}
        />

        <p>
          You should receive a successful response. If you get an authentication error, double-check
          your API key and ensure it's properly formatted in the Authorization header.
        </p>

        <div className="docs-alert info">
          <strong>Need Help?</strong> Visit our <a href="/docs/support" className="underline">Support page</a> or
          check the <a href="https://api.ottoafrica.com/api/docs" className="underline" target="_blank" rel="noopener noreferrer">API Reference</a> for detailed endpoint documentation.
        </div>
      </div>
    </DocsLayout>
    </>
  );
};

export default Authentication;
