import React from 'react';
import DocsLayout from '../../layout/DocsLayout';
import SEO from '../../components/SEO';
import CodeBlock from '../../components/CodeBlock';
import './docs.css';

const InvestmentCertificates = () => {

  const onThisPageItems = [
    { href: '#overview', label: 'Overview' },
    { href: '#provider-only', label: 'Investment Provider Only' },
    { href: '#list-certificates', label: 'List Certificates' },
    { href: '#reconciliation', label: 'Reconciliation' },
    { href: '#gift-card-templates', label: 'Creating Investment Templates' },
  ];

  return (
    <>
      <SEO
        title="Investment Certificates API - Otto Africa API Documentation"
        description="API for investment providers: list certificates, reconciliation, sync value. Only available for businesses registered as Investment providers."
        keywords="investment certificates API, investment gift certificates, investment provider, Otto API"
        url="https://ottoafrica.com/docs/investment-certificates"
      />
      <DocsLayout
        currentPage="/docs/investment-certificates"
        
        onThisPageItems={onThisPageItems}
        nutshell="Investment certificates are gift products for recipients and are available to Investment provider businesses only."
      >
        <div className="docs-content">
          <h1 id="overview">Investment Certificates API</h1>

          <div className="docs-alert warning">
            <strong>Access:</strong> All endpoints under <code>/merchant/investment-certificates</code> require your business to be registered as an <strong>Investment provider</strong>. Otherwise the API returns <strong>403 Forbidden</strong>.
          </div>

          <p>
            Two merchant types exist: <strong>Merchant</strong> (gift cards, loyalty, payments) and <strong>Investment provider</strong> (same plus investment gift certificates). Only Investment providers can create gift card templates with <code>certificate_type: "INVESTMENT"</code> and call the Investment Certificates endpoints below. See <a href="/docs/gift-cards#merchant-types" className="text-otto-blue hover:underline">Gift Cards – Merchant Types & Gift Card Types</a> for the full picture.
          </p>

          <h2 id="provider-only">Investment Provider Only</h2>
          <p>
            Every request to the Investment Certificates API checks that the authenticated business has <code>business_type: "INVESTMENT_PROVIDER"</code>. If not, the response is <code>403</code> with a message that investment provider access is required.
          </p>
          <p>
            <strong>API key scoping:</strong> When using API key (Bearer token) authentication, your key must have been created for an Investment provider business. Keys created for a Merchant business do not have the <code>investment_certificates</code> ability and will receive <code>403 Forbidden</code> on all <code>/merchant/investment-certificates</code> endpoints. In the merchant portal, Settings → API Keys shows each key’s type (Merchant or Investment provider).
          </p>

          <h2 id="list-certificates">List Certificates</h2>
          <div className="api-endpoint">
            <span className="method get">GET</span>
            <strong>/merchant/investment-certificates</strong><br />
            <span className="description">List certificates issued for your business (paginated) with summary</span>
          </div>
          <p>Returns certificates for the current provider. Optional query params: <code>status</code>, <code>date_from</code>, <code>date_to</code>, <code>per_page</code>.</p>
          <CodeBlock
            language="bash"
            code={`curl -X GET "https://api.ottoafrica.com/api/merchant/investment-certificates?per_page=20" \\
  -H "Authorization: Bearer your_token"`}
          />

          <h2 id="reconciliation">Reconciliation</h2>
          <div className="api-endpoint">
            <span className="method get">GET</span>
            <strong>/merchant/investment-certificates/reconciliation</strong><br />
            <span className="description">Last reconciliation run and discrepancies vs provider</span>
          </div>
          <CodeBlock
            language="bash"
            code={`curl -X GET "https://api.ottoafrica.com/api/merchant/investment-certificates/reconciliation" \\
  -H "Authorization: Bearer your_token"`}
          />

          <h3>Other Endpoints</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>GET /merchant/investment-certificates/{'{id}'}</strong> – Certificate detail</li>
            <li><strong>POST /merchant/investment-certificates/{'{id}'}/sync-value</strong> – Sync current value from provider</li>
            <li><strong>POST /merchant/investment-certificates/{'{id}'}/unlock</strong> – Manual unlock (if supported)</li>
            <li><strong>POST /merchant/investment-certificates/{'{id}'}/revoke</strong> – Revoke certificate (if product is revocable)</li>
          </ul>

          <h2 id="gift-card-templates">Creating Investment Templates</h2>
          <p>
            To offer investment certificates, create a <strong>gift card template</strong> with <code>certificate_type: "INVESTMENT"</code> via the Gift Cards API (<code>POST /merchant/giftcards/create</code>). Only Investment providers can set <code>certificate_type</code> to <code>INVESTMENT</code>; see <a href="/docs/gift-cards#merchant-types" className="text-otto-blue hover:underline">Gift Cards – Merchant Types & Gift Card Types</a>.
          </p>

          <p className="mt-6">
            <strong>Need Help?</strong> Visit our <a href="/docs/support" className="underline">Support page</a> or the <a href="https://api.ottoafrica.com/api/docs" className="underline" target="_blank" rel="noopener noreferrer">API Reference</a> for detailed endpoint documentation.
          </p>
        </div>
      </DocsLayout>
    </>
  );
};

export default InvestmentCertificates;
