import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { getMerchantPortalUrl } from "../utils/getMerchantPortalUrl";

const Pricing = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const heroRef = useScrollAnimation({ threshold: 0.1 });
  const plansRef = useScrollAnimation({ threshold: 0.1 });

  // Get URL parameters for subscription flow
  const tierId = searchParams.get("tier");
  const billingCycle = searchParams.get("billing") || "1";
  const token = searchParams.get("token"); // Auth token from mobile app

  const [billingCycleState, setBillingCycleState] = useState("monthly");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);

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

  // Fetch subscription tiers from backend
  useEffect(() => {
    const fetchTiers = async () => {
      try {
        const response = await fetch(getApiUrl("merchant/subscription/tiers"), {
          headers: {
            Accept: "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        });

        if (response.ok) {
          const data = await response.json();
          const tiers = data.data?.tiers || data.tiers || data;

          // If tierId is provided, find and set the selected tier
          if (tierId && Array.isArray(tiers)) {
            const tier = tiers.find(
              (t) => t.id === parseInt(tierId) || t.name === tierId
            );
            if (tier) {
              setSelectedTier(tier);
            }
          }
        }
      } catch (err) {
        console.error("Error fetching tiers:", err);
      }
    };

    fetchTiers();
  }, [tierId, token]);

  // Handle subscription purchase
  const handleSubscribe = async (tier, months = 1) => {
    if (!token) {
      // Redirect to merchant portal for authentication
      window.location.href = "https://merchant.ottoafrica.com/signup";
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
            subscription_tier_id: tier.id,
            billing_cycle_months: months,
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

  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Perfect for small businesses getting started",
      price: { monthly: "₵0", yearly: "₵0" },
      features: [
        "Up to 1,000 transactions/month",
        "QR Code Payments (Free)",
        "Basic reporting",
        "Email support",
        "Mobile app access",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      id: "professional",
      name: "Professional",
      description: "For growing businesses with advanced needs",
      price: { monthly: "₵150", yearly: "₵1,500" },
      features: [
        "Up to 10,000 transactions/month",
        "All payment methods",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations",
        "Gift cards (₵50 extra/month)",
        "Loyalty program (₵100 extra/month)",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For large organizations with custom requirements",
      price: { monthly: "Custom", yearly: "Custom" },
      features: [
        "Unlimited transactions",
        "Dedicated account manager",
        "Custom integrations",
        "White-label solutions",
        "Advanced security features",
        "24/7 phone support",
        "SLA guarantees",
        "Custom reporting",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  // If coming from mobile app with tier selected, show focused checkout
  if (selectedTier && token) {
    const monthlyPrice = selectedTier.monthly_price_ghs || 0;
    const totalPrice = monthlyPrice * parseInt(billingCycle);
    const discount =
      billingCycle === "3"
        ? 5
        : billingCycle === "6"
        ? 10
        : billingCycle === "12"
        ? 15
        : 0;
    const finalPrice = totalPrice * (1 - discount / 100);

    return (
      <div className="min-h-screen bg-white">
        <SEO
          title="Complete Subscription - Otto Africa"
          description="Complete your subscription purchase for Otto Africa"
          url="https://ottoafrica.com/pricing"
        />
        <Header />

        {/* Checkout Section */}
        <section ref={heroRef} className="pt-20 pb-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 scroll-animate">
                Complete Your
                <span className="block text-otto-blue font-medium">
                  Subscription
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 scroll-animate delay-100">
                Review your plan details and complete your payment to get
                started.
              </p>
            </div>

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
                    plans.find((p) => p.id === selectedTier.name)?.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Billing Cycle</span>
                    <span className="font-medium text-gray-900">
                      {billingCycle} Month{billingCycle !== "1" ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Monthly Price</span>
                    <span className="font-medium text-gray-900">
                      ₵{monthlyPrice.toFixed(2)}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">
                        Discount ({discount}%)
                      </span>
                      <span className="font-medium text-green-600">
                        -₵{(totalPrice - finalPrice).toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-4 border-t-2 border-gray-300">
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
                onClick={() =>
                  handleSubscribe(selectedTier, parseInt(billingCycle))
                }
                disabled={isProcessing}
                className="w-full bg-otto-blue text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Complete Payment"}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                You'll be redirected to our secure payment page
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Regular pricing page
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Pricing - Otto Africa"
        description="Simple, transparent pricing for Otto Africa. Choose the plan that fits your business. No hidden fees, no setup costs."
        keywords="Otto pricing, payment platform pricing, subscription plans, business pricing, fintech pricing"
        url="https://ottoafrica.com/pricing"
      />
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 scroll-animate">
              Simple, Transparent
              <span className="block text-otto-blue font-medium">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 scroll-animate delay-100">
              Choose the plan that fits your business. No hidden fees, no setup
              costs, no surprises. Start free and scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-lg p-1 mb-8 border border-gray-200 scroll-animate delay-200">
              <button
                onClick={() => setBillingCycleState("monthly")}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                  billingCycleState === "monthly"
                    ? "bg-otto-blue text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycleState("yearly")}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                  billingCycleState === "yearly"
                    ? "bg-otto-blue text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section ref={plansRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 p-8 scroll-animate ${
                  plan.popular ? "border-otto-blue relative" : "border-gray-200"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-otto-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-medium text-gray-900 mb-2">
                    {plan.price[billingCycleState]}
                    {plan.price[billingCycleState] !== "Custom" &&
                      billingCycleState === "monthly" && (
                        <span className="text-lg text-gray-500 font-normal">
                          /month
                        </span>
                      )}
                    {plan.price[billingCycleState] !== "Custom" &&
                      billingCycleState === "yearly" && (
                        <span className="text-lg text-gray-500 font-normal">
                          /year
                        </span>
                      )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={
                    plan.cta === "Contact Us"
                      ? "/contact"
                      : getMerchantPortalUrl(
                          `/settings?tab=subscription&tier=${plan.id}`
                        )
                  }
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? "bg-otto-blue text-white hover:bg-black"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-900 mb-4">
              Pricing FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are there any setup fees?
              </h3>
              <p className="text-gray-600">
                No, we don't charge any setup fees. You can start using Otto
                immediately after signing up.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change plans anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, bank transfers, and mobile
                money payments.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for all paid plans. No credit
                card required to start.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I need more than the plan limits?
              </h3>
              <p className="text-gray-600">
                Contact our sales team for custom enterprise plans with
                unlimited usage and dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-otto-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-medium text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already saving time and money with
            Otto. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://merchant.ottoafrica.com/signup"
              className="bg-white text-otto-blue px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200 font-semibold text-lg"
            >
              Start Accepting Payments
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-otto-blue transition-colors duration-200 font-semibold text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
