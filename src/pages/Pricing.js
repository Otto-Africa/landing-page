import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      price: { monthly: "₵0", yearly: "₵0" },
      features: [
        "Up to 1,000 transactions/month",
        "QR Code Payments (Free)",
        "Basic reporting",
        "Email support",
        "Mobile app access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
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
        "Loyalty program (₵100 extra/month)"
      ],
      cta: "Get Started",
      popular: true
    },
    {
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
        "Custom reporting"
      ],
      cta: "Contact Us",
      popular: false
    }
  ];

  const addons = [
    {
      name: "Gift Cards",
      description: "Create and manage digital gift cards",
      price: "₵50/month",
      features: ["Custom designs", "Bulk creation", "Analytics", "API access"]
    },
    {
      name: "Loyalty Program",
      description: "Build customer loyalty with points and rewards",
      price: "₵100/month",
      features: ["Points system", "Reward management", "Customer insights", "Mobile app"]
    },
    {
      name: "Advanced Analytics",
      description: "Deep insights into your business performance",
      price: "₵75/month",
      features: ["Real-time dashboards", "Custom reports", "Export capabilities", "API access"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="block text-blue-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that fits your business. No hidden fees, no setup costs,
              no surprises. Start free and scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-lg p-1 mb-8 border border-gray-200">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                  billingCycle === 'yearly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 p-8 ${
                  plan.popular ? 'border-blue-500 relative' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price[billingCycle]}
                    {plan.price[billingCycle] !== "Custom" && billingCycle === 'monthly' && (
                      <span className="text-lg text-gray-500 font-normal">/month</span>
                    )}
                    {plan.price[billingCycle] !== "Custom" && billingCycle === 'yearly' && (
                      <span className="text-lg text-gray-500 font-normal">/year</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.cta === "Contact Us" ? "/contact" : "https://merchant.otto.com/signup"}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enhance Your Plan</h2>
            <p className="text-xl text-gray-600">Add powerful features to supercharge your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {addons.map((addon, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{addon.name}</h3>
                  <p className="text-gray-600 mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-blue-600">{addon.price}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing FAQ</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are there any setup fees?</h3>
              <p className="text-gray-600">No, we don't charge any setup fees. You can start using Otto immediately after signing up.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, bank transfers, and mobile money payments.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Yes, we offer a 14-day free trial for all paid plans. No credit card required to start.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I need more than the plan limits?</h3>
              <p className="text-gray-600">Contact our sales team for custom enterprise plans with unlimited usage and dedicated support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already saving time and money with Otto.
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://merchant.otto.com/signup"
              className="bg-white text-otto-blue px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200 font-semibold text-lg"
            >
              Start Accepting Payments
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-200 font-semibold text-lg"
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
