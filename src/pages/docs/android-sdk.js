import React from "react";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import CodeBlock from "../../components/CodeBlock";
import "./docs.css";

const AndroidSdkDocs = () => {
  const onThisPageItems = [
    { href: "#introduction", label: "Introduction" },
    { href: "#requirements", label: "Project requirements" },
    { href: "#installation", label: "Installation" },
    { href: "#builder", label: "Otto builder" },
    { href: "#initialize", label: "Initialize transaction" },
    { href: "#payment-sheet", label: "Payment sheet" },
    { href: "#result", label: "Payment result" },
  ];

  return (
    <>
      <SEO
        title="Android SDK - Otto Africa API Documentation"
        description="Integrate Otto payments in Android apps using our SDK."
        keywords="Otto Android SDK, mobile payment sdk, Android payment integration"
        url="https://ottoafrica.com/docs/sdks/android"
      />
      <DocsLayout currentPage="/docs/sdks" onThisPageItems={onThisPageItems}>
        <div className="docs-content">
          <h1 id="introduction">Android SDK</h1>
          <p>
            The Android SDK provides UI components and methods for secure in-app
            payments. Integration is a two-step process:
          </p>
          <ol>
            <li>Initialize the transaction from your server</li>
            <li>Complete payment in the Android SDK</li>
          </ol>

          <h2 id="requirements">Project requirements</h2>
          <p>Ensure your app meets these minimum requirements:</p>
          <ul>
            <li>Android 6.0 (API level 23) and above</li>
            <li>Android Gradle Plugin 7.2 and above</li>
            <li>Gradle 7.1.3 and above</li>
            <li>AndroidX enabled</li>
          </ul>

          <h2 id="installation">Installation</h2>
          <p>
            Add the Otto Android UI package to your app-level dependencies:
          </p>
          <CodeBlock
            language="gradle"
            code={`dependencies {\n  implementation "com.otto.android:otto-ui:0.1.0"\n}`}
          />
          <p>
            Sync your project and confirm the SDK classes are available in your
            app module.
          </p>

          <h2 id="builder">Otto builder</h2>
          <p>
            Initialize Otto in your app startup path using the builder pattern.
          </p>
          <CodeBlock
            language="kotlin"
            code={`import com.otto.android.core.Otto\n\nOtto.builder()\n  .setPublicKey("pk_test_xxxxx")\n  .setLoggingEnabled(true)\n  .build()`}
          />

          <h2 id="initialize">Initialize transaction</h2>
          <p>
            Create transactions from your server only. Never initialize directly
            from the app because this requires your secret key.
          </p>
          <CodeBlock
            language="bash"
            code={`curl -X POST "https://api.ottoafrica.com/api/merchant/transactions/initialize" \\\n  -H "Authorization: Bearer sk_live_or_test_key" \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "email": "customer@email.com",\n    "amount": 500000\n  }'`}
          />
          <p>
            Return the generated `access_code` to your Android app, then launch
            the payment sheet.
          </p>

          <h2 id="payment-sheet">Payment sheet</h2>
          <p>
            Use `PaymentSheet` to render the payment UI in your Activity or
            Fragment:
          </p>
          <CodeBlock
            language="kotlin"
            code={`import com.otto.android.ui.paymentsheet.PaymentSheet\n\nprivate lateinit var paymentSheet: PaymentSheet\n\noverride fun onCreate(savedInstanceState: Bundle?) {\n  super.onCreate(savedInstanceState)\n  paymentSheet = PaymentSheet(this, ::onPaymentComplete)\n}\n\nfun pay(accessCode: String) {\n  paymentSheet.launch(accessCode)\n}`}
          />

          <h2 id="result">Payment result</h2>
          <p>
            The payment callback exposes three states: `Completed`, `Cancelled`,
            and `Failed`.
          </p>
          <CodeBlock
            language="kotlin"
            code={`private fun onPaymentComplete(result: PaymentSheetResult) {\n  when (result) {\n    PaymentSheetResult.Cancelled -> {\n      // Customer cancelled\n    }\n    is PaymentSheetResult.Failed -> {\n      // Handle error and log result.error\n    }\n    is PaymentSheetResult.Completed -> {\n      // Verify transaction reference on your server before giving value\n      val reference = result.paymentCompletionDetails.reference\n    }\n  }\n}`}
          />
        </div>
      </DocsLayout>
    </>
  );
};

export default AndroidSdkDocs;
