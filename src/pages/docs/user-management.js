import React, { useState } from 'react';
import DocsLayout from '../../layout/DocsLayout';
import SEO from '../../components/SEO';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('curl');


  const onThisPageItems = [
    { href: "#overview", label: "Overview" },
    { href: "#create-user", label: "Create Staff User" },
    { href: "#list-users", label: "List Staff Users" },
    { href: "#update-user", label: "Update User" },
    { href: "#roles", label: "Roles & Permissions" },
  ];

  return (
    <>
      <SEO
        title="User Management API - Otto Africa API Documentation"
        description="Learn how to create, manage, and control access for users in your merchant account using Otto Africa API."
        keywords="user management API, team members, user roles, access control, Otto user management"
        url="https://ottoafrica.com/docs/user-management"
      />
      <DocsLayout
        currentPage="/docs/user-management"
      
      onThisPageItems={onThisPageItems}
      nutshell="Manage staff users, roles, and permissions for your business. Create, update, and deactivate staff accounts programmatically."
    >
      <div className="docs-content">
        <h1 id="overview">User Management API</h1>

        <p>
          The User Management API allows you to manage staff users for your merchant account. Create
          new staff members, assign roles and permissions, and manage access to your business operations.
        </p>

        <h2 id="create-user">Create Staff User</h2>

        <div className="api-endpoint">
          <span className="method post">POST</span>
          <strong>/api/merchant/users</strong>
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
                  code={`curl -X POST "https://api.ottoafrica.com/api/merchant/users" \\
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
                  code={`const response = await fetch('https://api.ottoafrica.com/api/merchant/users', {
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
    'https://api.ottoafrica.com/api/merchant/users',
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
          <strong>/api/merchant/users</strong>
          <br />
          <span className="description">List all staff users with pagination</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.ottoafrica.com/api/merchant/users?page=1&per_page=10&role=cashier" \\
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
          <strong>/api/merchant/users/{`{id}`}</strong>
          <br />
          <span className="description">Update staff user details</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X PUT "https://api.ottoafrica.com/api/merchant/users/456" \\
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
          <strong>/api/merchant/users/roles</strong>
          <br />
          <span className="description">List all available roles and their permissions</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X GET "https://api.ottoafrica.com/api/merchant/users/roles" \\
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
          <strong>/api/merchant/users/{`{id}`}</strong>
          <br />
          <span className="description">Deactivate a staff user</span>
        </div>

        <CodeBlock
          language="bash"
          code={`curl -X DELETE "https://api.ottoafrica.com/api/merchant/users/456" \\
  -H "Authorization: Bearer your_api_key"`}
        />

        <div className="docs-alert warning">
          <strong>Note:</strong> Deleting a user deactivates their account but preserves their data
          for audit purposes. The user will no longer be able to access the system.
        </div>

        <div className="docs-alert success">
          <strong>Need Help?</strong> Check the{" "}
          <a
            href="https://api.ottoafrica.com/api/docs"
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
    </>
  );
};

export default UserManagement;


