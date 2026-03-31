import React from "react";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import { Link } from "react-router-dom";
import "./docs.css";

const JavascriptSdkDocs = () => {
  const onThisPageItems = [
    { href: "#introduction", label: "Introduction" },
    { href: "#published-npm", label: "Published npm packages" },
    { href: "#installation", label: "Installation" },
    { href: "#initialize", label: "Initialize transaction" },
    { href: "#browser", label: "Browser (customer SDK)" },
    { href: "#node", label: "Node (events SDK)" },
    { href: "#popup", label: "Popup widget" },
    { href: "#result", label: "Handle result" },
  ];

  return (
    <>
      <SEO
        title="JavaScript SDK - Otto Africa API Documentation"
        description="Otto loyalty SDKs on npm: @ottoafrica/customer-sdk-js, events-sdk-node, loyalty-popup-widget."
        keywords="Otto JavaScript SDK, Node SDK, loyalty SDK, npm"
        url="https://ottoafrica.com/docs/sdks/javascript"
      />
      <DocsLayout
        currentPage="/docs/sdks"
        onThisPageItems={onThisPageItems}
        nutshell="Use @ottoafrica/* on npm (v0.1.1) for loyalty: browser customer SDK, server events SDK, optional popup. Payments still use REST + keys for initialize."
      >
        <div className="docs-content">
          <h1 id="introduction">JavaScript & Node SDKs</h1>
          <p>
            Published packages focus on <strong>loyalty</strong> (merchant triggers, customer-facing browser
            calls, optional popup). For <strong>card payments</strong>, initialize transactions on your server
            via the REST API (see below) and complete checkout with your chosen UI.
          </p>

          <h2 id="published-npm">Published on npm</h2>
          <p className="text-gray-600 mb-4">
            Current release line: <strong>v0.1.1</strong>. See also{" "}
            <Link to="/docs/sdks" className="text-[#00B4D8] hover:underline">
              SDKs & Libraries
            </Link>{" "}
            for the full table and roadmap.
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>
              <a
                href="https://www.npmjs.com/package/@ottoafrica/customer-sdk-js"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00B4D8] hover:underline"
              >
                @ottoafrica/customer-sdk-js
              </a>{" "}
              — browser (or any JS runtime) client using a short-lived <strong>client token</strong> from{" "}
              <code>POST /api/auth/client-token</code>.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@ottoafrica/events-sdk-node"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00B4D8] hover:underline"
              >
                @ottoafrica/events-sdk-node
              </a>{" "}
              — merchant server with API key; emit loyalty triggers / record activity.
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@ottoafrica/loyalty-popup-widget"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00B4D8] hover:underline"
              >
                @ottoafrica/loyalty-popup-widget
              </a>{" "}
              — optional helper to open a loyalty popup wired to the customer SDK.
            </li>
          </ul>

          <h2 id="installation">Installation</h2>
          <CodeBlock
            language="bash"
            code={`npm install @ottoafrica/customer-sdk-js
# optional — merchant backend
npm install @ottoafrica/events-sdk-node
# optional — popup helper (browser)
npm install @ottoafrica/loyalty-popup-widget`}
          />

          <h2 id="initialize">Initialize transaction (payments)</h2>
          <p>
            Initialize the transaction on your server and return <code>access_code</code> to your frontend.
            Use your secret API key in the <code>Authorization</code> header (see{" "}
            <Link to="/docs/authentication" className="text-[#00B4D8] hover:underline">
              Authentication
            </Link>
            ).
          </p>
          <CodeBlock
            language="bash"
            requestMethod="POST"
            requestUrl="/api/merchant/transactions/initialize"
            code={`curl -X POST "https://api.ottoafrica.com/api/merchant/transactions/initialize" \\
  -H "Authorization: Bearer sk_live_or_test_key" \\
  -H "Content-Type: application/json" \\
  -d '{\n    "email":"customer@email.com",\n    "amount":500000\n  }'`}
          />

          <h2 id="browser">Browser usage (customer SDK)</h2>
          <p>
            Mint a client token on your server, then construct <code>OttoCustomerSdk</code> in the browser.
          </p>
          <CodeBlock
            language="javascript"
            code={`import { OttoCustomerSdk } from "@ottoafrica/customer-sdk-js";

const sdk = new OttoCustomerSdk({
  baseUrl: "https://api.ottoafrica.com",
  clientToken: "<from POST /api/auth/client-token>",
});

const res = await sdk.lookupMember("ABCD-EFGH-IJKL");
console.log(res);`}
          />

          <h2 id="node">Node usage (events SDK)</h2>
          <p>Server-side merchant automation with your API key (not the customer client token).</p>
          <CodeBlock
            language="javascript"
            code={`import { OttoEventsSdk } from "@ottoafrica/events-sdk-node";

const events = new OttoEventsSdk({
  baseUrl: "https://api.ottoafrica.com",
  apiKey: process.env.OTTO_SECRET_KEY,
});

await events.trackTrigger("purchase_completed", {
  member_code: "ABCD-EFGH-IJKL",
  amount: 50,
  activity_type: "GIFT_CARD_PURCHASE",
});`}
          />

          <h2 id="popup">Popup widget (browser)</h2>
          <CodeBlock
            language="javascript"
            code={`import { openOttoLoyaltyPopup } from "@ottoafrica/loyalty-popup-widget";
import { OttoCustomerSdk } from "@ottoafrica/customer-sdk-js";

const customerSdk = new OttoCustomerSdk({
  baseUrl: "https://api.ottoafrica.com",
  clientToken: "<token>",
});

openOttoLoyaltyPopup({
  memberCode: "ABCD-EFGH-IJKL",
  customerSdk,
  onError: (e) => console.error(e),
});`}
          />

          <h2 id="result">Handle result</h2>
          <CodeBlock
            language="javascript"
            code={`if (result.status === "completed") {\n  // Verify result.reference on your server before providing value\n} else if (result.status === "failed") {\n  // Handle error\n}`}
          />
        </div>
      </DocsLayout>
    </>
  );
};

export default JavascriptSdkDocs;
