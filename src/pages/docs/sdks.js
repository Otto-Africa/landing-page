import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import "./docs.css";

const SDKs = () => {
  return (
    <>
      <SEO
        title="SDKs & Libraries - Otto Africa API Documentation"
        description="Discover official SDKs for integrating Otto Africa APIs."
        keywords="Otto SDK, Android SDK, Flutter SDK, API libraries"
        url="https://ottoafrica.com/docs/sdks"
      />
      <DocsLayout currentPage="/docs/sdks">
        <div className="docs-content">
          <h1 className="text-4xl font-bold text-[#0D1B2A] mb-4">SDKs & Libraries</h1>
          <p className="text-gray-600 mb-8 text-lg">
            SDK integration guides are now available with step-by-step setup and
            transaction flow examples.
          </p>

          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-4">Mobile SDK Guides</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <Link to="/docs/sdks/android" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow block">
              <h3 className="text-[#00B4D8] font-semibold text-lg mb-2">Android SDK</h3>
              <p className="text-gray-600 text-sm">
                Installation, project requirements, initialization flow, payment sheet, and callback handling.
              </p>
            </Link>
            <Link to="/docs/sdks/ios" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow block">
              <h3 className="text-[#00B4D8] font-semibold text-lg mb-2">iOS SDK</h3>
              <p className="text-gray-600 text-sm">Swift setup, server initialization, payment sheet, and result handling.</p>
            </Link>
            <Link to="/docs/sdks/flutter" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow block">
              <h3 className="text-[#00B4D8] font-semibold text-lg mb-2">Flutter SDK</h3>
              <p className="text-gray-600 text-sm">Cross-platform setup, initialize transaction, and present payment UI.</p>
            </Link>
            <Link to="/docs/sdks/javascript" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow block">
              <h3 className="text-[#00B4D8] font-semibold text-lg mb-2">JavaScript SDK</h3>
              <p className="text-gray-600 text-sm">Browser and Node usage with server-side transaction initialization.</p>
            </Link>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default SDKs;
