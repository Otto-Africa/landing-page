import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import "./docs.css";

const NPM_BASE = "https://www.npmjs.com/package";

const published = [
  {
    name: "Events SDK (Node)",
    registry: "npm",
    publishedName: "@ottoafrica/events-sdk-node",
    version: "0.1.1",
    url: `${NPM_BASE}/@ottoafrica/events-sdk-node`,
  },
  {
    name: "Customer SDK (JS)",
    registry: "npm",
    publishedName: "@ottoafrica/customer-sdk-js",
    version: "0.1.1",
    url: `${NPM_BASE}/@ottoafrica/customer-sdk-js`,
  },
  {
    name: "Loyalty popup widget",
    registry: "npm",
    publishedName: "@ottoafrica/loyalty-popup-widget",
    version: "0.1.1",
    url: `${NPM_BASE}/@ottoafrica/loyalty-popup-widget`,
  },
];

const blocked = [
  {
    package: "sdks/packages/customer-sdk-flutter",
    status: "Not publishable",
    blockers:
      "README-only scaffold; no pubspec.yaml, Dart lib/, tests, or pub.dev metadata.",
  },
  {
    package: "sdks/packages/events-sdk-python",
    status: "Not publishable",
    blockers:
      "README-only scaffold; missing pyproject.toml or setup.py, package code, tests, build config, PyPI metadata.",
  },
  {
    package: "sdks/packages/events-sdk-php",
    status: "Not publishable",
    blockers:
      "README-only scaffold; missing composer.json, PHP source/autoload, tests, Packagist metadata.",
  },
];

const SDKs = () => {
  return (
    <>
      <SEO
        title="SDKs & Libraries - Otto Africa API Documentation"
        description="Official Otto npm SDKs for loyalty events, browser customer flows, and popup widgets."
        keywords="Otto SDK, npm, loyalty SDK, JavaScript SDK, Node SDK"
        url="https://ottoafrica.com/docs/sdks"
      />
      <DocsLayout
        currentPage="/docs/sdks"
        nutshell="Published loyalty SDKs live on npm under @ottoafrica. Install from the registry; see Loyalty docs for API + client-token flow."
      >
        <div className="docs-content">
          <h1 className="text-4xl font-bold text-[#0D1B2A] mb-4">SDKs & Libraries</h1>
          <p className="text-gray-600 mb-6 text-base">
            Official JavaScript/Node packages for loyalty triggers, customer-facing browser usage, and an
            optional popup helper. Payment checkout flows can still use the REST API directly; see{" "}
            <Link to="/docs/getting-started" className="text-[#00B4D8] hover:underline">
              Quickstart
            </Link>{" "}
            and{" "}
            <Link to="/docs/sdks/javascript" className="text-[#00B4D8] hover:underline">
              JavaScript SDK
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">Published on npm (ready to use)</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Scope: <code className="bg-gray-100 px-1 rounded">@ottoafrica/*</code>. Current line on npm is{" "}
            <strong>v0.1.1</strong>.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Registry</th>
                  <th>Published name</th>
                  <th>Version</th>
                  <th>npm</th>
                </tr>
              </thead>
              <tbody>
                {published.map((row) => (
                  <tr key={row.publishedName}>
                    <td>{row.name}</td>
                    <td>{row.registry}</td>
                    <td>
                      <code>{row.publishedName}</code>
                    </td>
                    <td>{row.version}</td>
                    <td>
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00B4D8] hover:underline"
                      >
                        View package
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock
            language="bash"
            code={`# Install what you need (loyalty / merchant server + browser)
npm install @ottoafrica/events-sdk-node
npm install @ottoafrica/customer-sdk-js
npm install @ottoafrica/loyalty-popup-widget`}
          />

          <p className="text-gray-600 mb-8 text-sm">
            Source of truth for integration details:{" "}
            <Link to="/docs/loyalty" className="text-[#00B4D8] hover:underline">
              Loyalty Programs
            </Link>{" "}
            and the backend reference under <code>backend/sdks</code> in the{" "}
            <a
              href="https://github.com/Otto-Africa/backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B4D8] hover:underline"
            >
              Otto-Africa/backend
            </a>{" "}
            repository.
          </p>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">Roadmap: not on a registry yet</h2>
          <p className="text-gray-600 mb-4 text-sm">
            These folders in <code>backend/sdks/packages</code> are scaffolds only—nothing to install until
            packaging and tests land.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Package path</th>
                  <th>Status</th>
                  <th>Blockers</th>
                </tr>
              </thead>
              <tbody>
                {blocked.map((row) => (
                  <tr key={row.package}>
                    <td>
                      <code>{row.package}</code>
                    </td>
                    <td>{row.status}</td>
                    <td>{row.blockers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-4">Mobile & native guides</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Native payment SDK documentation (Android, iOS, Flutter) covers hosted checkout patterns. Loyalty
            npm packages above target browser and Node today.
          </p>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <Link
              to="/docs/sdks/android"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow block"
            >
              <h3 className="text-[#00B4D8] font-semibold text-lg mb-2">Android SDK</h3>
              <p className="text-gray-600 text-sm">
                Installation, project requirements, initialization flow, payment sheet, and callback handling.
              </p>
            </Link>
            <Link
              to="/docs/sdks/ios"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow block"
            >
              <h3 className="text-[#00B4D8] font-semibold text-lg mb-2">iOS SDK</h3>
              <p className="text-gray-600 text-sm">
                Swift setup, server initialization, payment sheet, and result handling.
              </p>
            </Link>
            <Link
              to="/docs/sdks/flutter"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow block"
            >
              <h3 className="text-[#00B4D8] font-semibold text-lg mb-2">Flutter SDK</h3>
              <p className="text-gray-600 text-sm">
                Cross-platform setup, initialize transaction, and present payment UI.
              </p>
            </Link>
            <Link
              to="/docs/sdks/javascript"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow block"
            >
              <h3 className="text-[#00B4D8] font-semibold text-lg mb-2">JavaScript & Node</h3>
              <p className="text-gray-600 text-sm">
                Published <code>@ottoafrica/*</code> loyalty SDKs, REST flows, and browser usage.
              </p>
            </Link>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default SDKs;
