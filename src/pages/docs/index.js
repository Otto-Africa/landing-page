import React from "react";
import { Link } from "react-router-dom";
import DocsLayout from "../../layout/DocsLayout";
import SEO from "../../components/SEO";
import "./docs.css";

const DocsIndex = () => {

  return (
    <>
      <SEO
        title="API Documentation - Otto Africa"
        description="Complete API documentation for Otto Africa. Learn how to integrate payments, gift cards, loyalty programs, and QR codes into your application."
        keywords="Otto API documentation, payment API, gift card API, loyalty program API, QR code API, Africa payments API"
        url="https://ottoafrica.com/docs"
      />
      <DocsLayout currentPage="/docs" >
        <div className="docs-content">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">API Platform</h1>
          
          {/* Quickstart Block (OpenAI Style) */}
          <div className="bg-[#F7F7F8] rounded-2xl p-8 mb-12 flex flex-col lg:flex-row gap-8 items-center border border-gray-100">
             <div className="flex-1">
               <h2 className="text-2xl font-bold text-gray-900 mb-3">Developer quickstart</h2>
               <p className="text-gray-600 mb-6 text-base">
                 Make your first API request in minutes. Learn the basics of the Otto platform.
               </p>
               <Link to="/docs/getting-started" className="bg-black text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors inline-block text-sm">
                 Get started
               </Link>
             </div>
             <div className="flex-1 bg-white rounded-xl p-5 shadow-sm border border-gray-200 w-full font-mono text-sm overflow-x-auto">
               <div className="flex items-center justify-between mb-3">
                 <div className="text-gray-400 text-xs">javascript</div>
                 <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
               </div>
               <div className="text-pink-600">import <span className="text-gray-800">&#123; OttoCustomerSdk &#125;</span> from <span className="text-green-600">"@ottoafrica/customer-sdk-js"</span>;</div>
               <div className="text-blue-600 mt-2">const <span className="text-gray-800">sdk = new OttoCustomerSdk(&#123;</span></div>
               <div className="text-gray-800 ml-4">baseUrl: <span className="text-green-600">"https://api.ottoafrica.com"</span>,</div>
               <div className="text-gray-800 ml-4">clientToken: <span className="text-green-600">"&lt;from your server&gt;"</span>,</div>
               <div className="text-gray-800">&#125;);</div>
               <div className="text-blue-600 mt-2">const <span className="text-gray-800">res = await sdk.lookupMember(</span><span className="text-green-600">"MEMBER-CODE"</span><span className="text-gray-800">);</span></div>
               <div className="text-gray-500 mt-2">// npm: @ottoafrica/* — see /docs/sdks</div>
             </div>
          </div>

          {/* Features Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Core capabilities</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-5">
              <Link to="/docs/gift-cards" className="group relative rounded-2xl overflow-hidden aspect-[4/3] block bg-gradient-to-br from-blue-400 to-indigo-400 shadow-sm hover:shadow-md transition-all">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold mb-2">Gift Cards</h3>
                  <p className="text-white/90 text-sm leading-relaxed">Create, manage and redeem digital gift cards programmatically.</p>
                </div>
              </Link>
              
              <Link to="/docs/loyalty" className="group relative rounded-2xl overflow-hidden aspect-[4/3] block bg-gradient-to-br from-pink-400 to-rose-400 shadow-sm hover:shadow-md transition-all">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold mb-2">Loyalty</h3>
                  <p className="text-white/90 text-sm leading-relaxed">Build powerful rewards programs and issue points to users.</p>
                </div>
              </Link>
              
              <Link to="/docs/transactions" className="group relative rounded-2xl overflow-hidden aspect-[4/3] block bg-gradient-to-br from-teal-400 to-emerald-500 shadow-sm hover:shadow-md transition-all">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold mb-2">Payments</h3>
                  <p className="text-white/90 text-sm leading-relaxed">Process transactions securely and manage merchant settlements.</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 border-t border-gray-100 pt-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/docs/sdks" className="text-gray-600 hover:text-black transition-colors text-sm">SDKs & Libraries</Link></li>
                <li><Link to="/docs/webhooks" className="text-gray-600 hover:text-black transition-colors text-sm">Webhooks Guide</Link></li>
                <li><Link to="/docs/error-handling" className="text-gray-600 hover:text-black transition-colors text-sm">Error Handling</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3">
                <li><Link to="/docs/support" className="text-gray-600 hover:text-black transition-colors text-sm">Help Center</Link></li>
                <li><a href="https://api.ottoafrica.com/api/health" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors text-sm">API Status</a></li>
              </ul>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default DocsIndex;
