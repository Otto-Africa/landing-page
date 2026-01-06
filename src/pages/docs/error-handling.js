import React from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const ErrorHandling = () => {
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
    { href: "#error-codes", label: "Error Codes" },
    { href: "#error-format", label: "Error Response Format" },
    { href: "#handling-errors", label: "Handling Errors" },
    { href: "#best-practices", label: "Best Practices" },
  ];

  return (
    <DocsLayout
      currentPage="/docs/error-handling"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">Error Handling</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Understand how Otto's API returns errors and how to handle
          them gracefully in your application. All errors follow a consistent format for easy handling.
        </div>

        <p>
          The Otto API uses conventional HTTP response codes and returns errors in a consistent JSON format.
          This guide will help you understand and handle errors effectively in your integration.
        </p>

        <h2 id="error-format">Error Response Format</h2>

        <p>
          All error responses follow this consistent format:
        </p>

        <CodeBlock
          language="json"
          code={`{
  "status": "error",
  "message": "A human-readable error message",
  "code": "ERROR_CODE",
  "errors": {
    "field_name": ["Validation error message"]
  }
}`}
        />

        <h2 id="error-codes">HTTP Status Codes</h2>

        <table className="docs-table">
          <thead>
            <tr>
              <th>Status Code</th>
              <th>Meaning</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>200</code></td>
              <td>OK</td>
              <td>Request succeeded</td>
            </tr>
            <tr>
              <td><code>201</code></td>
              <td>Created</td>
              <td>Resource created successfully</td>
            </tr>
            <tr>
              <td><code>400</code></td>
              <td>Bad Request</td>
              <td>Invalid request parameters or missing required fields</td>
            </tr>
            <tr>
              <td><code>401</code></td>
              <td>Unauthorized</td>
              <td>Invalid or missing API key</td>
            </tr>
            <tr>
              <td><code>403</code></td>
              <td>Forbidden</td>
              <td>Valid API key but insufficient permissions</td>
            </tr>
            <tr>
              <td><code>404</code></td>
              <td>Not Found</td>
              <td>Resource not found</td>
            </tr>
            <tr>
              <td><code>422</code></td>
              <td>Unprocessable Entity</td>
              <td>Validation errors</td>
            </tr>
            <tr>
              <td><code>429</code></td>
              <td>Too Many Requests</td>
              <td>Rate limit exceeded</td>
            </tr>
            <tr>
              <td><code>500</code></td>
              <td>Internal Server Error</td>
              <td>Server error - contact support</td>
            </tr>
            <tr>
              <td><code>503</code></td>
              <td>Service Unavailable</td>
              <td>Service temporarily unavailable</td>
            </tr>
          </tbody>
        </table>

        <h2>Error Codes</h2>

        <h3>Authentication Errors</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>INVALID_API_KEY</code></h4>
            <p className="text-gray-600 text-sm">The provided API key is invalid or expired</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>MISSING_API_KEY</code></h4>
            <p className="text-gray-600 text-sm">No API key provided in the request</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>INSUFFICIENT_SCOPE</code></h4>
            <p className="text-gray-600 text-sm">API key doesn't have required permissions</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>TOKEN_EXPIRED</code></h4>
            <p className="text-gray-600 text-sm">API key has expired</p>
          </div>
        </div>

        <h3>Validation Errors</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>VALIDATION_ERROR</code></h4>
            <p className="text-gray-600 text-sm">Request validation failed</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>MISSING_REQUIRED_FIELD</code></h4>
            <p className="text-gray-600 text-sm">Required field is missing</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>INVALID_FORMAT</code></h4>
            <p className="text-gray-600 text-sm">Field format is invalid</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>OUT_OF_RANGE</code></h4>
            <p className="text-gray-600 text-sm">Value is outside allowed range</p>
          </div>
        </div>

        <h3>Business Logic Errors</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>INSUFFICIENT_BALANCE</code></h4>
            <p className="text-gray-600 text-sm">Gift card or account has insufficient balance</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>RESOURCE_NOT_FOUND</code></h4>
            <p className="text-gray-600 text-sm">Requested resource doesn't exist</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>RESOURCE_ALREADY_EXISTS</code></h4>
            <p className="text-gray-600 text-sm">Resource with this identifier already exists</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2"><code>OPERATION_NOT_ALLOWED</code></h4>
            <p className="text-gray-600 text-sm">Operation not allowed in current state</p>
          </div>
        </div>

        <h2 id="handling-errors">Handling Errors</h2>

        <h3>JavaScript Example</h3>

        <CodeBlock
          language="javascript"
          code={`async function makeRequest() {
  try {
    const response = await fetch('https://api.otto.com/v1/merchant/giftcards', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ /* ... */ })
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle error
      if (response.status === 401) {
        // Invalid API key
        console.error('Authentication failed:', data.message);
      } else if (response.status === 422) {
        // Validation errors
        console.error('Validation errors:', data.errors);
      } else if (response.status === 429) {
        // Rate limit exceeded
        const retryAfter = response.headers.get('Retry-After');
        console.error('Rate limit exceeded. Retry after:', retryAfter);
      } else {
        // Other errors
        console.error('Error:', data.message);
      }
      return;
    }

    // Success
    console.log('Success:', data);
  } catch (error) {
    // Network or other errors
    console.error('Request failed:', error);
  }
}`}
        />

        <h3>Python Example</h3>

        <CodeBlock
          language="python"
          code={`import requests

try:
    response = requests.post(
        'https://api.otto.com/v1/merchant/giftcards',
        headers={
            'Authorization': 'Bearer your_api_key',
            'Content-Type': 'application/json'
        },
        json={ /* ... */ }
    )

    if response.status_code == 200:
        data = response.json()
        print('Success:', data)
    elif response.status_code == 401:
        print('Authentication failed:', response.json()['message'])
    elif response.status_code == 422:
        errors = response.json()['errors']
        print('Validation errors:', errors)
    elif response.status_code == 429:
        retry_after = response.headers.get('Retry-After')
        print(f'Rate limit exceeded. Retry after: {retry_after}')
    else:
        error_data = response.json()
        print('Error:', error_data['message'])

except requests.exceptions.RequestException as e:
    print('Request failed:', e)`}
        />

        <h2 id="best-practices">Best Practices</h2>

        <h3>1. Always Check Response Status</h3>
        <p>
          Don't assume requests succeed. Always check the HTTP status code before processing the response.
        </p>

        <h3>2. Handle Validation Errors</h3>
        <p>
          When you receive a 422 status, check the <code>errors</code> object for field-specific
          validation messages and display them to users.
        </p>

        <h3>3. Implement Retry Logic</h3>
        <p>
          For transient errors (5xx, 503), implement exponential backoff retry logic. For rate limit
          errors (429), respect the <code>Retry-After</code> header.
        </p>

        <h3>4. Log Errors</h3>
        <p>
          Log all errors with sufficient context (request details, response, timestamp) for debugging
          and monitoring.
        </p>

        <h3>5. User-Friendly Messages</h3>
        <p>
          Translate technical error messages into user-friendly messages in your application's UI.
        </p>

        <div className="docs-alert success">
          <strong>Need Help?</strong> If you encounter errors you can't resolve, check our{" "}
          <a href="/docs/support" className="underline">
            Support page
          </a>{" "}
          for assistance.
        </div>
      </div>
    </DocsLayout>
  );
};

export default ErrorHandling;


