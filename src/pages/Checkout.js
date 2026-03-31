import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { getMerchantPortalUrl } from "../utils/getMerchantPortalUrl";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const heroRef = useScrollAnimation({ threshold: 0.1 });

  const tierId = searchParams.get("tier");
  const token = searchParams.get("token");

  useEffect(() => {
    if (tierId) {
      const merchantPortalUrl = getMerchantPortalUrl(
        `/settings?tab=subscription&tier=${tierId}${token ? `&token=${token}` : ""}`
      );
      window.location.href = merchantPortalUrl;
    }
  }, [tierId, token]);

  if (!tierId) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <SEO
          title="Checkout - Otto Africa"
          description="Complete your subscription purchase"
          url="https://ottoafrica.com/checkout"
        />
        <Header />

        <section ref={heroRef} className="flex-1 bg-white flex items-center justify-center min-h-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 scroll-animate">
                Missing Information
              </h1>
              <p className="text-xl text-gray-600 mb-8 scroll-animate delay-100">
                Please select a subscription plan from the{" "}
                <a href={getMerchantPortalUrl("/settings?tab=subscription")} className="text-otto-blue hover:text-black">
                  merchant portal
                </a>{" "}
                or{" "}
                <a href="/pricing" className="text-otto-blue hover:text-black">
                  view our pricing page
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="Redirecting - Otto Africa"
        description="Redirecting to merchant portal"
        url="https://ottoafrica.com/checkout"
      />
      <Header />
      <section ref={heroRef} className="flex-1 bg-white flex items-center justify-center min-h-0">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-otto-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to merchant portal...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Checkout;
