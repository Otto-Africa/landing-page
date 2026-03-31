import React from "react";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import "./docs.css";

const IosSdkDocs = () => {
  const onThisPageItems = [
    { href: "#introduction", label: "Introduction" },
    { href: "#requirements", label: "Project requirements" },
    { href: "#installation", label: "Installation" },
    { href: "#initialize", label: "Initialize transaction" },
    { href: "#payment-sheet", label: "Payment sheet" },
    { href: "#result", label: "Payment result" },
  ];

  return (
    <>
      <SEO
        title="iOS SDK - Otto Africa API Documentation"
        description="Integrate Otto payments in iOS apps using the Otto iOS SDK."
        keywords="Otto iOS SDK, Swift payment sdk, iOS payment integration"
        url="https://ottoafrica.com/docs/sdks/ios"
      />
      <DocsLayout
        currentPage="/docs/sdks"
        onThisPageItems={onThisPageItems}
        nutshell="Integrate Otto payment flows in iOS using a server-initialized access code and a native payment sheet."
      >
        <div className="docs-content">
          <h1 id="introduction">iOS SDK</h1>
          <p>
            The iOS SDK provides native payment UI components for secure in-app
            checkout. Integration has two steps:
          </p>
          <ol>
            <li>Initialize transaction on your server</li>
            <li>Launch the payment sheet in your iOS app</li>
          </ol>

          <h2 id="requirements">Project requirements</h2>
          <ul>
            <li>iOS 13.0 and above</li>
            <li>Xcode 14 and above</li>
            <li>Swift 5.7 and above</li>
          </ul>

          <h2 id="installation">Installation</h2>
          <p>Add the SDK using Swift Package Manager:</p>
          <CodeBlock
            language="swift"
            code={`dependencies: [\n  .package(url: "https://github.com/ottoafrica/otto-ios-sdk.git", from: "0.1.0")\n]`}
          />

          <h2 id="initialize">Initialize transaction</h2>
          <p>
            Always initialize from your backend because this call requires your
            secret key.
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

          <h2 id="payment-sheet">Payment sheet</h2>
          <CodeBlock
            language="swift"
            code={`import OttoIOSSDK\n\nlet paymentSheet = OttoPaymentSheet()\npaymentSheet.present(accessCode: accessCode, from: self)`}
          />

          <h2 id="result">Payment result</h2>
          <CodeBlock
            language="swift"
            code={`paymentSheet.onComplete = { result in\n  switch result {\n  case .completed(let reference):\n    // Verify reference on server before providing value\n    print(reference)\n  case .cancelled:\n    break\n  case .failed(let error):\n    print(error.localizedDescription)\n  }\n}`}
          />
        </div>
      </DocsLayout>
    </>
  );
};

export default IosSdkDocs;
