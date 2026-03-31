import React from "react";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import "./docs.css";

const FlutterSdkDocs = () => {
  const onThisPageItems = [
    { href: "#introduction", label: "Introduction" },
    { href: "#requirements", label: "Project requirements" },
    { href: "#installation", label: "Installation" },
    { href: "#initialize", label: "Initialize transaction" },
    { href: "#present", label: "Present payment sheet" },
    { href: "#result", label: "Handle result" },
  ];

  return (
    <>
      <SEO
        title="Flutter SDK - Otto Africa API Documentation"
        description="Integrate Otto payments in Flutter apps using the Otto Flutter SDK."
        keywords="Otto Flutter SDK, Flutter payment sdk, mobile payment integration"
        url="https://ottoafrica.com/docs/sdks/flutter"
      />
      <DocsLayout
        currentPage="/docs/sdks"
        onThisPageItems={onThisPageItems}
        nutshell="Use Otto Flutter SDK with server-side transaction initialization and a native payment sheet UI."
      >
        <div className="docs-content">
          <h1 id="introduction">Flutter SDK</h1>
          <p>
            The Flutter SDK lets you integrate Otto payment flows across Android
            and iOS from one codebase.
          </p>

          <h2 id="requirements">Project requirements</h2>
          <ul>
            <li>Flutter 3.16 and above</li>
            <li>Dart 3.0 and above</li>
            <li>Android minSdk 23 / iOS 13+</li>
          </ul>

          <h2 id="installation">Installation</h2>
          <CodeBlock
            language="yaml"
            code={`dependencies:\n  otto_flutter_sdk: ^0.1.0`}
          />
          <CodeBlock language="bash" code={`flutter pub get`} />

          <h2 id="initialize">Initialize transaction</h2>
          <CodeBlock
            language="bash"
            requestMethod="POST"
            requestUrl="/api/merchant/transactions/initialize"
            code={`curl -X POST "https://api.ottoafrica.com/api/merchant/transactions/initialize" \\
  -H "Authorization: Bearer sk_live_or_test_key" \\
  -H "Content-Type: application/json" \\
  -d '{\n    "email":"customer@email.com",\n    "amount":500000\n  }'`}
          />

          <h2 id="present">Present payment sheet</h2>
          <CodeBlock
            language="dart"
            code={`final result = await OttoPaymentSheet.present(\n  context: context,\n  accessCode: accessCode,\n);`}
          />

          <h2 id="result">Handle result</h2>
          <CodeBlock
            language="dart"
            code={`switch (result.status) {\n  case OttoPaymentStatus.completed:\n    // Verify result.reference on your server\n    break;\n  case OttoPaymentStatus.cancelled:\n    break;\n  case OttoPaymentStatus.failed:\n    // Log and handle error\n    break;\n}`}
          />
        </div>
      </DocsLayout>
    </>
  );
};

export default FlutterSdkDocs;
