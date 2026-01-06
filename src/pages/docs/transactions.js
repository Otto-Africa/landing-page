import React from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import MultiLanguageCodeBlock from '../../components/MultiLanguageCodeBlock';
import './docs.css';

const Transactions = () => {

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
    { href: '#list-transactions', label: 'List Transactions' },
    { href: '#get-transaction', label: 'Get Transaction Details' },
    { href: '#transaction-statuses', label: 'Transaction Statuses' },
    { href: '#filtering', label: 'Filtering & Pagination' },
  ];

  return (
    <DocsLayout
      currentPage="/docs/transactions"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">Transactions API</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Access transaction history, payment status, and settlement
          information. Filter by date, status, or type, and paginate through results.
        </div>

        <div className="docs-alert warning">
          <strong>Currency Note:</strong> All currency values are stored in Pesewas (1 GHS = 100 Pesewas).
        </div>

        <p>
          The Transactions API allows you to retrieve transaction history, view transaction details,
          and access settlement information for your merchant account.
        </p>

        <h2 id="list-transactions">List Transactions</h2>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/merchant/transactions</strong><br />
          <span className="description">Retrieve a paginated list of transactions</span>
        </div>

        <p>
          Retrieve a paginated list of transactions for your merchant account.
        </p>

        <MultiLanguageCodeBlock
          examples={{
            curl: `curl -X GET "https://api.otto.com/merchant/transactions?page=1&per_page=20" \\
  -H "Authorization: Bearer your_api_key"`,
            javascript: `const response = await fetch('https://api.otto.com/merchant/transactions?page=1&per_page=20', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();`,
            python: `import requests

response = requests.get(
    'https://api.otto.com/merchant/transactions',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    params={
        'page': 1,
        'per_page': 20
    }
)

data = response.json()`
          }}
        />

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
              <td>Items per page (default: 20, max: 100)</td>
            </tr>
            <tr>
              <td><code>status</code></td>
              <td>string</td>
              <td>No</td>
              <td>Filter by status (pending, completed, failed, refunded)</td>
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
            <tr>
              <td><code>type</code></td>
              <td>string</td>
              <td>No</td>
              <td>Filter by type (payment, refund, giftcard, loyalty)</td>
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
      "id": "txn_1234567890",
      "amount": 50.00,
      "currency": "GHS",
      "status": "completed",
      "type": "payment",
      "description": "Gift card purchase",
      "created_at": "2024-01-15T10:30:00Z",
      "customer": {
        "name": "John Doe",
        "email": "john@example.com"
      }
    }
  ],
  "meta": {
    "current_page": 1,
    "per_page": 20,
    "total": 150,
    "total_pages": 8
  }
}`}
        />

        <h2 id="get-transaction">Get Transaction Details</h2>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/merchant/transactions/{`{transaction_id}`}</strong><br />
          <span className="description">Retrieve detailed information about a specific transaction</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/merchant/transactions/txn_1234567890" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <h2 id="transaction-statuses">Transaction Statuses</h2>

        <p>
          Transactions can have the following statuses:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">pending</h4>
            <p className="text-gray-600 text-sm">Transaction initiated but not yet completed</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">completed</h4>
            <p className="text-gray-600 text-sm">Transaction successfully processed</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">failed</h4>
            <p className="text-gray-600 text-sm">Transaction failed to process</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">refunded</h4>
            <p className="text-gray-600 text-sm">Transaction has been refunded</p>
          </div>
        </div>

        <h2 id="filtering">Filtering & Pagination</h2>

        <p>
          Use query parameters to filter and paginate transaction results:
        </p>

        <CodeBlock
          language="bash"
          code={`# Filter by status and date range
curl -X GET "https://api.otto.com/merchant/transactions?status=completed&date_from=2024-01-01&date_to=2024-01-31" \\
  -H "Authorization: Bearer your_api_key"

# Paginate through results
curl -X GET "https://api.otto.com/merchant/transactions?page=2&per_page=50" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <div className="docs-alert info">
          <strong>Tip:</strong> Use the <code>meta</code> object in the response to implement pagination
          controls in your application.
        </div>

        <div className="docs-alert success">
          <strong>Need Help?</strong> Check the <a href="https://api.otto.com/api/docs" className="underline" target="_blank" rel="noopener noreferrer">API Reference</a> for complete endpoint documentation,
          or visit our <a href="/docs/support" className="underline">Support page</a>.
        </div>
      </div>
    </DocsLayout>
  );
};

export default Transactions;
