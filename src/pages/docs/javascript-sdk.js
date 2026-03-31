import React from "react";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import "./docs.css";

const JavascriptSdkDocs = () => {
  const onThisPageItems = [
    { href: "#introduction", label: "Introduction" },
    { href: "#installation", label: "Installation" },
    { href: "#initialize", label: "Initialize transaction" },
    { href: "#browser", label: "Browser usage" },
    { href: "#node", label: "Node usage" },
    { href: "#result", label: "Handle result" },
  ];

  return (
    <>
      <SEO
        title="JavaScript SDK - Otto Africa API Documentation"
        description="Integrate Otto payment flows in web and Node.js apps."
        keywords="Otto JavaScript SDK, Node SDK, web payment sdk"
        url="https://ottoafrica.com/docs/sdks/javascript"
      />
      <DocsLayout
        currentPage="/docs/sdks"
        onThisPageItems={onThisPageItems}
        nutshell="Use Otto JavaScript SDK for browser and Node integrations, with server-side initialization and secure checkout."
      >
        <div className="docs-content">
          <h1 id="introduction">JavaScript SDK</h1>
          <p>
            The JavaScript SDK supports both browser and server integrations for
            Otto payment flows.
          </p>

          <h2 id="installation">Installation</h2>
          <CodeBlock language="bash" code={`npm install @otto/otto-js`} />

          <h2 id="initialize">Initialize transaction</h2>
          <p>
            Initialize the transaction on your server and return `access_code` to
            your frontend.
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

          <h2 id="browser">Browser usage</h2>
          <CodeBlock
            language="javascript"
            code={`import { OttoCheckout } from "@otto/otto-js";\n\nconst checkout = new OttoCheckout();\n\ncheckout.open({\n  accessCode,\n  onSuccess: (payload) => console.log(payload.reference),\n  onClose: () => {},\n  onError: (err) => console.error(err),\n});`}
          />

          <h2 id="node">Node usage</h2>
          <CodeBlock
            language="javascript"
            code={`import Otto from "@otto/otto-js";\n\nconst otto = new Otto({ apiKey: process.env.OTTO_SECRET_KEY });\nconst tx = await otto.transactions.initialize({\n  email: "customer@email.com",\n  amount: 500000,\n});\n\nconsole.log(tx.data.access_code);`}
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
