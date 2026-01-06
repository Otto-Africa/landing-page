import React from 'react';
import DocsLayout from '../../layout/DocsLayout';
import './docs.css';

const Support = () => {
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
    { href: '#channels', label: 'Support Channels' },
    { href: '#common-issues', label: 'Common Issues' },
    { href: '#response-times', label: 'Response Times' },
    { href: '#report-issue', label: 'Report an Issue' },
    { href: '#contact', label: 'Contact Information' },
  ];

  return (
    <DocsLayout
      currentPage="/docs/support"
      sidebarItems={sidebarItems}
      onThisPageItems={onThisPageItems}
    >
      <div className="docs-content">
        <h1 id="overview">Support</h1>

        <div className="docs-alert info">
          <strong>In a nutshell:</strong> Get help from our developer community and support team through 
          multiple channels including email, community forum, and status page.
        </div>

        <p>
          Get help from our developer community and support team. We're here to help you integrate 
          Otto's API successfully.
        </p>

        <h2 id="channels">Support Channels</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 text-sm mb-4">
              Send us an email for technical questions and support.
            </p>
            <a href="mailto:developers@ottoafrica.com" className="text-otto-blue hover:text-black font-medium text-sm">
              developers@ottoafrica.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Developer Forum</h3>
            <p className="text-gray-600 text-sm mb-4">
              Join our community of developers and get help from peers.
            </p>
            <a href="https://community.otto.com" className="text-otto-blue hover:text-black font-medium text-sm">
              Join Discussion →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Status Page</h3>
            <p className="text-gray-600 text-sm mb-4">
              Check system status and incident reports.
            </p>
            <a href="https://status.ottoafrica.com" className="text-otto-blue hover:text-black font-medium text-sm">
              View Status →
            </a>
          </div>
        </div>

        <h2 id="common-issues">Common Issues</h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">API Authentication Errors</h4>
            <p className="text-gray-600 text-sm mb-4">
              If you're getting authentication errors, check that you're using the correct API keys and that they're properly formatted in the Authorization header.
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm">
              <strong>Solution:</strong> Ensure your API key starts with <code>sk_live_</code> for production or <code>sk_test_</code> for test environment. Both use the same endpoint (<code>https://api.otto.com</code>).
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Webhook Signature Verification</h4>
            <p className="text-gray-600 text-sm mb-4">
              Webhook payloads include a signature for verification. Make sure you're verifying signatures to ensure request authenticity.
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm">
              <strong>Help:</strong> Check our <a href="/docs/webhooks" className="text-otto-blue hover:text-black">webhooks guide</a> for implementation details.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Rate Limiting</h4>
            <p className="text-gray-600 text-sm mb-4">
              API requests are rate limited to prevent abuse. If you're hitting limits, implement proper error handling and retry logic.
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm">
              <strong>Limit:</strong> 60 requests per minute per API key. Upgrade plans available for higher limits.
            </div>
          </div>
        </div>

        <h2 id="response-times">Response Times</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
            <div className="text-gray-900 font-medium mb-1">Community</div>
            <div className="text-gray-600 text-sm">Response within 24 hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12h</div>
            <div className="text-gray-900 font-medium mb-1">Email</div>
            <div className="text-gray-600 text-sm">Business hours response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">2h</div>
            <div className="text-gray-900 font-medium mb-1">Critical Issues</div>
            <div className="text-gray-600 text-sm">Emergency response</div>
          </div>
        </div>

        <h2 id="report-issue">Report an Issue</h2>

        <p>
          Found a bug or need to report an issue? Use our issue tracker to submit detailed bug reports.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-900 mb-4">Before Submitting</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Include your API request/response details</li>
            <li>• Mention your programming language and framework</li>
            <li>• Include timestamps and error messages</li>
            <li>• Check if the issue is reproducible with test API keys</li>
          </ul>
        </div>

        <a
          href="https://github.com/ottoafrica/api-issues/issues/new"
          className="inline-flex items-center bg-otto-blue text-white px-6 py-3 rounded-full hover:bg-black transition-colors duration-200 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Report Issue
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <h2 id="contact">Contact Information</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Technical Support</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 <a href="mailto:developers@ottoafrica.com" className="text-otto-blue hover:text-black">developers@ottoafrica.com</a></p>
              <p>💬 <a href="https://discord.gg/ottoafrica" className="text-otto-blue hover:text-black">Discord Community</a></p>
              <p>📖 <a href="https://github.com/ottoafrica/api-issues" className="text-otto-blue hover:text-black">GitHub Issues</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>🕒 Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
              <p>📞 Emergency: <a href="tel:+233501234567" className="text-otto-blue hover:text-black">+233 50 123 4567</a></p>
              <p>🌐 Time Zone: Greenwich Mean Time (GMT)</p>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Support;
