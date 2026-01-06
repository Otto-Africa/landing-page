import React from 'react';
import DocsLayout from '../../layout/DocsLayout';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const SDKs = () => {
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
    { href: "#javascript", label: "JavaScript/Node.js" },
    { href: "#python", label: "Python" },
    { href: "#php", label: "PHP" },
    { href: "#community", label: "Community Libraries" },
  ];

  return (
    <DocsLayout
      currentPage="/docs/sdks"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">SDKs & Libraries</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Official and community-maintained SDKs and libraries to help
          you integrate Otto's API quickly and easily in your preferred programming language.
        </div>

        <p>
          While you can use Otto's API directly with HTTP requests, SDKs provide a more convenient
          way to integrate with type safety, error handling, and helpful utilities.
        </p>

        <h2 id="javascript">JavaScript/Node.js</h2>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">@otto/otto-js</h3>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              Official
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Official JavaScript SDK for Node.js and browser environments. TypeScript support included.
          </p>
          <div className="space-y-2">
            <div>
              <strong className="text-gray-900">Install:</strong>
              <CodeBlock
                language="bash"
                code="npm install @otto/otto-js"
              />
            </div>
            <div>
              <strong className="text-gray-900">Usage:</strong>
              <CodeBlock
                language="javascript"
                code={`import Otto from '@otto/otto-js';

const otto = new Otto('your_api_key');

// Create a gift card template
const template = await otto.giftCards.create({
  name: 'Premium Gift Card',
  price: 100.00
});

// List transactions
const transactions = await otto.transactions.list({
  page: 1,
  per_page: 10
});`}
              />
            </div>
            <div>
              <a
                href="https://github.com/ottoafrica/otto-js"
                target="_blank"
                rel="noopener noreferrer"
                className="text-otto-blue hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>

        <h2 id="python">Python</h2>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">otto-python</h3>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              Official
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Official Python SDK with full type hints and async support.
          </p>
          <div className="space-y-2">
            <div>
              <strong className="text-gray-900">Install:</strong>
              <CodeBlock
                language="bash"
                code="pip install otto-python"
              />
            </div>
            <div>
              <strong className="text-gray-900">Usage:</strong>
              <CodeBlock
                language="python"
                code={`from otto import Otto

otto = Otto(api_key='your_api_key')

# Create a gift card template
template = otto.gift_cards.create(
    name='Premium Gift Card',
    price=100.00
)

# List transactions
transactions = otto.transactions.list(
    page=1,
    per_page=10
)`}
              />
            </div>
            <div>
              <a
                href="https://github.com/ottoafrica/otto-python"
                target="_blank"
                rel="noopener noreferrer"
                className="text-otto-blue hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>

        <h2 id="php">PHP</h2>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">otto-php</h3>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              Official
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Official PHP SDK with PSR-7 support and Laravel integration.
          </p>
          <div className="space-y-2">
            <div>
              <strong className="text-gray-900">Install:</strong>
              <CodeBlock
                language="bash"
                code="composer require otto/otto-php"
              />
            </div>
            <div>
              <strong className="text-gray-900">Usage:</strong>
              <CodeBlock
                language="php"
                code={`use Otto\\Otto;

$otto = new Otto('your_api_key');

// Create a gift card template
$template = $otto->giftCards()->create([
    'name' => 'Premium Gift Card',
    'price' => 100.00
]);

// List transactions
$transactions = $otto->transactions()->list([
    'page' => 1,
    'per_page' => 10
]);`}
              />
            </div>
            <div>
              <a
                href="https://github.com/ottoafrica/otto-php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-otto-blue hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>

        <h2 id="community">Community Libraries</h2>

        <p>
          Community-maintained libraries for other languages and frameworks:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Go</h4>
            <p className="text-gray-600 text-sm mb-3">
              Unofficial Go SDK maintained by the community
            </p>
            <a
              href="https://github.com/community/otto-go"
              target="_blank"
              rel="noopener noreferrer"
              className="text-otto-blue hover:underline text-sm"
            >
              View on GitHub →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Ruby</h4>
            <p className="text-gray-600 text-sm mb-3">
              Unofficial Ruby gem maintained by the community
            </p>
            <a
              href="https://github.com/community/otto-ruby"
              target="_blank"
              rel="noopener noreferrer"
              className="text-otto-blue hover:underline text-sm"
            >
              View on GitHub →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Java</h4>
            <p className="text-gray-600 text-sm mb-3">
              Unofficial Java SDK maintained by the community
            </p>
            <a
              href="https://github.com/community/otto-java"
              target="_blank"
              rel="noopener noreferrer"
              className="text-otto-blue hover:underline text-sm"
            >
              View on GitHub →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">C#</h4>
            <p className="text-gray-600 text-sm mb-3">
              Unofficial .NET SDK maintained by the community
            </p>
            <a
              href="https://github.com/community/otto-dotnet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-otto-blue hover:underline text-sm"
            >
              View on GitHub →
            </a>
          </div>
        </div>

        <div className="docs-alert warning">
          <strong>Note:</strong> Community libraries are maintained by third parties and may not have
          the same level of support as official SDKs. Use at your own discretion.
        </div>

        <h2>Features</h2>

        <p>All official SDKs include:</p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Type safety and autocomplete support</li>
          <li>Automatic request retry with exponential backoff</li>
          <li>Built-in rate limit handling</li>
          <li>Request/response validation</li>
          <li>Comprehensive error handling</li>
          <li>Webhook signature verification</li>
          <li>Full API coverage</li>
        </ul>

        <div className="docs-alert success">
          <strong>Need Help?</strong> If you need help with an SDK or want to contribute, visit our{" "}
          <a href="/docs/support" className="underline">
            Support page
          </a>
          .
        </div>
      </div>
    </DocsLayout>
  );
};

export default SDKs;


