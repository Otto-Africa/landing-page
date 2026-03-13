import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/**
 * Investment Certificate Purchase – Terms and Conditions
 * Otto facilitates the purchase of investment certificates offered by third-party
 * investment providers. Otto does not provide, endorse, or guarantee any investment product.
 */
const InvestmentTermsAndConditions = () => {
  const contentRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Investment Certificate Terms and Conditions - Otto Africa"
        description="Terms and conditions for purchasing investment certificates on Otto. Otto facilitates access to third-party investment products; we do not provide investment advice or the underlying investments."
        keywords="investment certificate, terms and conditions, investment terms, Otto Africa, third-party investment"
        url="https://ottoafrica.com/investment-terms-and-conditions"
      />
      <Header />

      <section ref={contentRef} className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Investment Certificate – Terms and Conditions
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none mt-12">
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">1. Introduction and Role of Otto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Investment Certificate Terms and Conditions (“Investment Terms”) apply when you use the Otto platform to purchase or gift investment certificates. Otto Africa (“Otto”, “we”, “us”, or “our”) operates a platform that enables you to buy and send investment certificates. The underlying investment products are offered by third-party investment providers (“Providers”), not by Otto.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>We do not provide investments.</strong> Otto does not issue, manage, or guarantee any investment product. We facilitate the purchase and delivery of investment certificates on behalf of Providers. The value, performance, unlock, and redemption of your certificate are determined by the Provider’s terms and the applicable product. You should read the Provider’s own terms and any product disclosure before purchasing.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">2. No Investment Advice</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Otto does not provide any advice on the merits of any investment certificate or investment product. We do not make personal recommendations. Nothing on our platform constitutes financial, legal, or tax advice. If you are unsure about any investment decision, you should seek the advice of an authorised financial adviser.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You are solely responsible for deciding whether a particular investment certificate or product is suitable for you or for the recipient of a gifted certificate.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">3. Risk Warning</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Investment certificates and the underlying investments may carry significant risk. Don’t invest unless you’re prepared to lose the money you invest. Past performance is not a guide to future performance. The value of an investment can go down as well as up, and you may get back less than you put in.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Investment products offered by Providers may not be covered by deposit protection or investor compensation schemes. You should understand the specific risks of the product and the Provider before you purchase.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">4. Purchase and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you purchase an investment certificate on Otto, you pay the amount you choose (plus any applicable fees shown at checkout). Payment is collected by Otto and passed to the Provider in accordance with our agreements. Your purchase is subject to the Provider’s acceptance and their terms. We are not responsible for any refusal by a Provider to issue or honour a certificate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Investments do not execute immediately.</strong> Execution may take up to 24 hours (or longer) depending on the third-party Provider. Your certificate will be issued and/or activated in accordance with the Provider’s processing times. Otto is not responsible for any delay in execution by the Provider.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For certificates sent as a gift, the recipient will be able to access or redeem the certificate in accordance with the Provider’s rules and the unlock date you set. Otto is not responsible for the recipient’s use or any delay or failure by the Provider.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">5. Third-Party Providers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Investment certificates are issued and managed by third-party Providers. Otto does not hold or safeguard the underlying investments. We are not a custodian, broker, or investment manager. Any dispute about the value, performance, or terms of an investment certificate should be directed to the relevant Provider. We may assist in routing enquiries but have no obligation to resolve Provider disputes.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, Otto shall not be liable for any loss of capital, loss of returns, or any indirect, special, incidental, or consequential damages arising from or related to (a) your purchase or use of investment certificates, (b) the acts or omissions of any Provider, (c) market movements or performance of underlying investments, or (d) your or a recipient’s reliance on any information on our platform. Our total liability in connection with investment certificate purchases shall not exceed the fees paid by you to Otto for the relevant transaction in the twelve (12) months preceding the claim.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">7. Governing Law and Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Investment Terms are governed by the laws of Ghana. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ghana. For questions about these Investment Terms or about investment certificates on Otto, please contact us at{" "}
                <a href="mailto:legal@ottoafrica.com" className="text-otto-blue hover:underline">
                  legal@ottoafrica.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestmentTermsAndConditions;
