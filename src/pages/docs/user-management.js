import React, { useState } from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const UserManagement = () => {
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
    { href: "#create-user", label: "Create Staff User" },
    { href: "#list-users", label: "List Staff Users" },
    { href: "#update-user", label: "Update User" },
    { href: "#roles", label: "Roles & Permissions" },
  ];

  return (
    <DocsLayout
      currentPage="/docs/user-management"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">User Management API</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Manage staff users, roles, and permissions for your business.
          Create, update, and deactivate staff accounts programmatically.
        </div>

        <p>
          The User Management API allows you to manage staff users for your merchant account. Create
          new staff members, assign roles and permissions, and manage access to your business operations.
        </p>

        <h2 id="create-user">Create Staff User</h2>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/v1/merchant/users</strong>
          <br />
          <span className="description">Create a new staff user</span>
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
                  code={`curl -X POST "https://api.otto.com/v1/merchant/users" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@merchant.com",
    "role": "cashier",
    "permissions": ["read:transactions", "write:redemption"]
  }'`}
                />
              </div>
            )}
            {activeTab === "javascript" && (
              <div className="tab-pane">
                <CodeBlock
                  language="javascript"
                  code={`const response = await fetch('https://api.otto.com/v1/merchant/users', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@merchant.com',
    role: 'cashier',
    permissions: ['read:transactions', 'write:redemption']
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
    'https://api.otto.com/v1/merchant/users',
    headers={
        'Authorization': 'Bearer your_api_key',
        'Content-Type': 'application/json'
    },
    json={
        'name': 'John Doe',
        'email': 'john@merchant.com',
        'role': 'cashier',
        'permissions': ['read:transactions', 'write:redemption']
    }
)

data = response.json()`}
                />
              </div>
            )}
          </div>
        </div>

        <h3>Request Parameters</h3>

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
              <td>Full name of the staff user</td>
            </tr>
            <tr>
              <td><code>email</code></td>
              <td>string</td>
              <td>Yes</td>
              <td>Email address (must be unique)</td>
            </tr>
            <tr>
              <td><code>role</code></td>
              <td>string</td>
              <td>Yes</td>
              <td>User role (admin, manager, cashier, etc.)</td>
            </tr>
            <tr>
              <td><code>permissions</code></td>
              <td>array</td>
              <td>No</td>
              <td>Array of permission scopes</td>
            </tr>
          </tbody>
        </table>

        <h2 id="list-users">List Staff Users</h2>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/v1/merchant/users</strong>
          <br />
          <span className="description">List all staff users with pagination</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/v1/merchant/users?page=1&per_page=10&role=cashier" \\
  -H "Authorization: Bearer your_api_key"`}
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
              <td>Items per page (default: 10, max: 100)</td>
            </tr>
            <tr>
              <td><code>role</code></td>
              <td>string</td>
              <td>No</td>
              <td>Filter by role</td>
            </tr>
            <tr>
              <td><code>status</code></td>
              <td>string</td>
              <td>No</td>
              <td>Filter by status (active, inactive)</td>
            </tr>
          </tbody>
        </table>

        <h2 id="update-user">Update User</h2>

        <div className="api-endpoint">
          <span className="method put">PUT</span>
          <strong>/v1/merchant/users/{`{id}`}</strong>
          <br />
          <span className="description">Update staff user details</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X PUT "https://api.otto.com/v1/merchant/users/456" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Smith",
    "role": "manager",
    "permissions": ["read:transactions", "write:redemption", "read:financials"]
  }'`}
        />

        <h2 id="roles">Roles & Permissions</h2>

        <h3>Get Available Roles</h3>

        <div className="api-endpoint">
          <span className="method get">GET</span>
          <strong>/v1/merchant/users/roles</strong>
          <br />
          <span className="description">List all available roles and their permissions</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.otto.com/v1/merchant/users/roles" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <h3>Common Roles</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">admin</h4>
            <p className="text-gray-600 text-sm mb-2">Full access to all features</p>
            <p className="text-xs text-gray-500">All permissions</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">manager</h4>
            <p className="text-gray-600 text-sm mb-2">Management and reporting access</p>
            <p className="text-xs text-gray-500">read:*, write:redemption, read:financials</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">cashier</h4>
            <p className="text-gray-600 text-sm mb-2">Point of sale operations</p>
            <p className="text-xs text-gray-500">read:transactions, write:redemption</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">viewer</h4>
            <p className="text-gray-600 text-sm mb-2">Read-only access</p>
            <p className="text-xs text-gray-500">read:transactions, read:giftcards</p>
          </div>
        </div>

        <h3>Delete User</h3>

        <div className="api-endpoint">
          <span className="method delete">DELETE</span>
          <strong>/v1/merchant/users/{`{id}`}</strong>
          <br />
          <span className="description">Deactivate a staff user</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X DELETE "https://api.otto.com/v1/merchant/users/456" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <div className="docs-alert warning">
          <strong>Note:</strong> Deleting a user deactivates their account but preserves their data
          for audit purposes. The user will no longer be able to access the system.
        </div>

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

export default UserManagement;


