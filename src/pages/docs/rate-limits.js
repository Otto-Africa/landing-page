import React from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const RateLimits = () => {
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
    { href: "#limits", label: "Rate Limit Tiers" },
    { href: "#headers", label: "Rate Limit Headers" },
    { href: "#handling", label: "Handling Rate Limits" },
    { href: "#best-practices", label: "Best Practices" },
  ];

  return (
    <DocsLayout
      currentPage="/docs/rate-limits"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">Rate Limits</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Otto's API uses rate limiting to ensure fair usage and
          system stability. Understand the limits and how to handle rate limit responses.
        </div>

        <p>
          Rate limiting helps ensure the API remains stable and available for all merchants. Each
          API key has rate limits that control how many requests can be made within a specific time period.
        </p>

        <h2 id="limits">Rate Limit Tiers</h2>

        <p>
          All API keys have the following default rate limits:
        </p>

        <table className="docs-table">
          <thead>
            <tr>
              <th>Time Period</th>
              <th>Limit</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Per Minute</td>
              <td><strong>60 requests</strong></td>
              <td>Maximum requests per minute</td>
            </tr>
            <tr>
              <td>Per Hour</td>
              <td><strong>1,000 requests</strong></td>
              <td>Maximum requests per hour</td>
            </tr>
            <tr>
              <td>Per Day</td>
              <td><strong>10,000 requests</strong></td>
              <td>Maximum requests per day</td>
            </tr>
          </tbody>
        </table>

        <div className="docs-alert warning">
          <strong>Note:</strong> Rate limits are applied per API key. If you need higher limits,
          contact support to discuss custom rate limit tiers.
        </div>

        <h3>Endpoint-Specific Limits</h3>

        <p>
          Some endpoints may have stricter rate limits to prevent abuse:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Payment endpoints:</strong> 30 requests per minute</li>
          <li><strong>Webhook endpoints:</strong> 20 requests per minute</li>
          <li><strong>Report generation:</strong> 10 requests per hour</li>
        </ul>

        <h2 id="headers">Rate Limit Headers</h2>

        <p>
          Every API response includes rate limit information in the response headers:
        </p>

        <table className="docs-table">
          <thead>
            <tr>
              <th>Header</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>X-RateLimit-Limit</code></td>
              <td>Maximum number of requests allowed in the current window</td>
              <td><code>60</code></td>
            </tr>
            <tr>
              <td><code>X-RateLimit-Remaining</code></td>
              <td>Number of requests remaining in the current window</td>
              <td><code>45</code></td>
            </tr>
            <tr>
              <td><code>X-RateLimit-Reset</code></td>
              <td>Unix timestamp when the rate limit window resets</td>
              <td><code>1705312800</code></td>
            </tr>
            <tr>
              <td><code>Retry-After</code></td>
              <td>Seconds to wait before retrying (only present on 429 responses)</td>
              <td><code>30</code></td>
            </tr>
          </tbody>
        </table>

        <h2 id="handling">Handling Rate Limits</h2>

        <h3>Rate Limit Exceeded Response</h3>

        <p>
          When you exceed the rate limit, you'll receive a <code>429 Too Many Requests</code> response:
        </p>

        <CodeBlock
          language="http"
          code={`HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1705312800
Retry-After: 30

{
  "status": "error",
  "message": "Rate limit exceeded",
  "code": "RATE_LIMIT_EXCEEDED"
}`}
        />

        <h3>JavaScript Example</h3>

        <CodeBlock
          language="javascript"
          code={`async function makeRequestWithRetry(url, options, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const response = await fetch(url, options);
    
    if (response.status === 429) {
      const retryAfter = parseInt(response.headers.get('Retry-After') || '60');
      const resetTime = parseInt(response.headers.get('X-RateLimit-Reset') || '0');
      
      console.log(\`Rate limit exceeded. Retrying after \${retryAfter} seconds\`);
      await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
      continue;
    }
    
    if (!response.ok) {
      throw new Error(\`Request failed: \${response.status}\`);
    }
    
    return await response.json();
  }
  
  throw new Error('Max retries exceeded');
}`}
        />

        <h3>Python Example</h3>

        <CodeBlock
          language="python"
          code={`import requests
import time

def make_request_with_retry(url, headers, data, max_retries=3):
    for attempt in range(max_retries):
        response = requests.post(url, headers=headers, json=data)
        
        if response.status_code == 429:
            retry_after = int(response.headers.get('Retry-After', 60))
            reset_time = int(response.headers.get('X-RateLimit-Reset', 0))
            
            print(f"Rate limit exceeded. Retrying after {retry_after} seconds")
            time.sleep(retry_after)
            continue
        
        if response.status_code == 200:
            return response.json()
        
        response.raise_for_status()
    
    raise Exception('Max retries exceeded')`}
        />

        <h2 id="best-practices">Best Practices</h2>

        <h3>1. Monitor Rate Limit Headers</h3>
        <p>
          Always check the <code>X-RateLimit-Remaining</code> header to monitor your usage and avoid
          hitting limits unexpectedly.
        </p>

        <h3>2. Implement Exponential Backoff</h3>
        <p>
          When you receive a 429 response, wait for the duration specified in the <code>Retry-After</code>
          header before retrying. Implement exponential backoff for multiple consecutive rate limit errors.
        </p>

        <h3>3. Batch Requests When Possible</h3>
        <p>
          Instead of making multiple individual requests, batch operations when the API supports it to
          reduce the number of requests.
        </p>

        <h3>4. Cache Responses</h3>
        <p>
          Cache responses for data that doesn't change frequently (e.g., loyalty program details,
          gift card templates) to reduce API calls.
        </p>

        <h3>5. Use Webhooks</h3>
        <p>
          Instead of polling for updates, use webhooks to receive real-time notifications and reduce
          unnecessary API calls.
        </p>

        <h3>6. Request Higher Limits</h3>
        <p>
          If you consistently approach your rate limits, contact support to discuss custom rate limit
          tiers for your use case.
        </p>

        <div className="docs-alert success">
          <strong>Need Help?</strong> If you need higher rate limits or have questions about rate limiting,
          visit our{" "}
          <a href="/docs/support" className="underline">
            Support page
          </a>
          .
        </div>
      </div>
    </DocsLayout>
  );
};

export default RateLimits;


