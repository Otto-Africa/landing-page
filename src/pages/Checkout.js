import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { getMerchantPortalUrl } from "../utils/getMerchantPortalUrl";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const heroRef = useScrollAnimation({ threshold: 0.1 });

  // Get URL parameters for subscription flow
  const tierId = searchParams.get("tier");
  const billingCycle = searchParams.get("billing") || "1";
  const token = searchParams.get("token"); // Auth token from mobile app

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [selectedMonths, setSelectedMonths] = useState(parseInt(billingCycle));

  // Determine API URL based on environment
  const getApiUrl = (endpoint) => {
    if (process.env.NODE_ENV === "production") {
      return `https://api.ottoafrica.com/api/${endpoint}`;
    } else if (process.env.REACT_APP_API_URL) {
      return `${process.env.REACT_APP_API_URL}/${endpoint}`;
    } else {
      return `http://localhost:8000/api/${endpoint}`;
    }
  };

  // Define billing options
  const billingOptions = [
    { months: 1, label: "1 Month", discount: 0 },
    { months: 3, label: "3 Months", discount: 5 },
    { months: 6, label: "6 Months", discount: 10 },
    { months: 12, label: "12 Months", discount: 15 },
  ];

  // Fetch subscription tiers from backend
  useEffect(() => {
    const fetchTiers = async () => {
      if (!tierId) {
        setError("No subscription tier selected. Please select a plan first.");
        return;
      }

      if (!token) {
        setError("Authentication required. Please sign in to continue.");
        return;
      }

      try {
        const response = await fetch(getApiUrl("merchant/subscription/tiers"), {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const tiers = data.data?.tiers || data.tiers || data;

          // Find the selected tier
          if (Array.isArray(tiers)) {
            const tier = tiers.find(
              (t) => t.id === parseInt(tierId) || t.name === tierId
            );
            if (tier) {
              setSelectedTier(tier);
              setError(null);
            } else {
              setError("Selected subscription tier not found.");
            }
          } else {
            setError("Failed to parse subscription tiers.");
          }
        } else {
          const errorData = await response.json().catch(() => ({}));
          setError(errorData.message || "Failed to load subscription details. Please try again.");
        }
      } catch (err) {
        console.error("Error fetching tiers:", err);
        setError("Network error. Please check your connection and try again.");
      }
    };

    fetchTiers();
  }, [tierId, token]);

  // Handle subscription purchase
  const handleSubscribe = async () => {
    if (!token) {
      window.location.href = "https://merchant.ottoafrica.com/signup";
      return;
    }

    if (!selectedTier) {
      setError("Please select a subscription tier.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const response = await fetch(
        getApiUrl("merchant/subscription/subscribe"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            subscription_tier_id: selectedTier.id,
            billing_cycle_months: selectedMonths,
            payment_method: "mobile_money",
          }),
        }
      );

      const data = await response.json();

      if (response.ok && !data.error && data.data?.authorization_url) {
        // Redirect to Paystack payment page
        window.location.href = data.data.authorization_url;
      } else {
        setError(
          data.message || "Failed to initiate subscription. Please try again."
        );
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Redirect to merchant portal if tier is provided
  useEffect(() => {
    if (tierId) {
      const merchantPortalUrl = getMerchantPortalUrl(`/settings?tab=subscription&tier=${tierId}${token ? `&token=${token}` : ''}`);
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

  // Show loading while redirecting
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

  const monthlyPrice = selectedTier?.monthly_price_ghs || 0;
  const totalPrice = monthlyPrice * selectedMonths;
  const discount =
    selectedMonths === 3
      ? 5
      : selectedMonths === 6
      ? 10
      : selectedMonths === 12
      ? 15
      : 0;
  const finalPrice = totalPrice * (1 - discount / 100);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="Complete Subscription - Otto Africa"
        description="Complete your subscription purchase for Otto Africa"
        url="https://ottoafrica.com/checkout"
      />
      <Header />

      {/* Checkout Section */}
      <section ref={heroRef} className="flex-1 bg-white flex items-center justify-center min-h-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 scroll-animate">
              Complete Your
              <span className="block text-otto-blue font-medium">
                Subscription
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 scroll-animate delay-100">
              Review your plan details and complete your payment to get started.
            </p>
          </div>

          {!selectedTier ? (
            <div className="bg-white rounded-xl border-2 border-gray-200 p-8 max-w-2xl mx-auto text-center scroll-animate delay-200">
              {error ? (
                <>
                  <div className="mb-4 p-4 bg-red-50 text-red-800 border border-red-200 rounded-lg">
                    {error}
                  </div>
                  <a
                    href="/pricing"
                    className="inline-block bg-otto-blue text-white px-6 py-3 rounded-full hover:bg-black transition-colors duration-200 font-semibold"
                  >
                    View Pricing Plans
                  </a>
                </>
              ) : (
                <>
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-otto-blue mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading subscription details...</p>
                </>
              )}
            </div>
          ) : (
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-otto-blue p-8 max-w-2xl mx-auto scroll-animate delay-200">
              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-lg">
                  {error}
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-2xl font-medium text-gray-900 mb-4">
                  {selectedTier.display_name || selectedTier.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedTier.description ||
                    "Choose the billing cycle that works best for you."}
                </p>

                {/* Billing Cycle Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Billing Cycle
                  </label>
                  <div className="space-y-2">
                    {billingOptions.map((option) => (
                      <label
                        key={option.months}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                          selectedMonths === option.months
                            ? "border-otto-blue bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="billing"
                          value={option.months}
                          checked={selectedMonths === option.months}
                          onChange={(e) =>
                            setSelectedMonths(parseInt(e.target.value))
                          }
                          className="mr-3 h-4 w-4 text-otto-blue focus:ring-otto-blue"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900">
                              {option.label}
                            </span>
                            {option.discount > 0 && (
                              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                                {option.discount}% discount
                              </span>
                            )}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Monthly Price</span>
                    <span className="font-medium text-gray-900">
                      ₵{monthlyPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Billing Cycle</span>
                    <span className="font-medium text-gray-900">
                      {selectedMonths} Month{selectedMonths !== 1 ? "s" : ""}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">
                        Discount ({discount}%)
                      </span>
                      <span className="font-medium text-green-600">
                        -₵{(totalPrice - finalPrice).toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-semibold text-gray-900">
                      Total Amount
                    </span>
                    <span className="text-2xl font-bold text-otto-blue">
                      ₵{finalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubscribe}
                disabled={isProcessing || !selectedTier}
                className="w-full bg-otto-blue text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Complete Payment"}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                You'll be redirected to our secure payment page powered by
                Paystack
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;

