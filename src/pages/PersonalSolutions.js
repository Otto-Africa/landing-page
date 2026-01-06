import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PersonalSolutions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Payment Solutions for
                <span className="block text-otto-blue">Everyone</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Simple, secure, and convenient payment solutions designed for individuals.
                Pay bills, send money, and manage your finances with ease.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Built for Personal Finance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the convenience of modern payments with features designed for your everyday financial needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <div className="w-16 h-16 bg-otto-blue rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M12 15h4.01M12 21h4.01M12 18h4.01M12 9h4.01M12 6h4.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">QR Payments</h3>
                <p className="text-gray-600 mb-6">
                  Pay instantly at merchants with QR codes. No cards, no hassle - just scan and pay.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Instant payments
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Secure transactions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mobile optimized
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <div className="w-16 h-16 bg-otto-blue rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gift Cards</h3>
                <p className="text-gray-600 mb-6">
                  Purchase and redeem digital gift cards from your favorite brands instantly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Instant delivery
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Secure purchases
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Multiple brands
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <div className="w-16 h-16 bg-otto-blue rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Loyalty Rewards</h3>
                <p className="text-gray-600 mb-6">
                  Earn points and rewards when you pay with Otto. Get exclusive deals and benefits.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Earn points
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Exclusive rewards
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Special offers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-20 bg-otto-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Started Today
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Download the Otto mobile app and experience seamless payments for all your personal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.otto.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200 font-medium text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414C17.5097 15.6825 17.4373 16.0226 17.3069 16.3516C17.1319 16.8066 16.8724 17.2216 16.547 17.5656C16.2216 17.9096 15.8395 18.1726 15.4209 18.3406C14.8839 18.5586 14.3059 18.6736 13.7159 18.6786C13.2269 18.6786 12.6819 18.5476 12.0999 18.2916C11.5119 18.0326 10.9609 17.7206 10.4649 17.3556C9.96887 16.9906 9.55887 16.5926 9.24687 16.1646C8.93287 15.7366 8.73187 15.2806 8.65087 14.8106C8.65087 14.6736 8.65087 14.5486 8.65087 14.4336L8.65087 9.56659C8.65087 9.45159 8.65087 9.32659 8.65087 9.18959C8.73187 8.71959 8.93287 8.26359 9.24687 7.83559C9.55887 7.40759 9.96887 7.00959 10.4649 6.64459C10.9609 6.27959 11.5119 5.96759 12.0999 5.70859C12.6819 5.45259 13.2269 5.32159 13.7159 5.32159C14.3059 5.32659 14.8839 5.44159 15.4209 5.65959C15.8395 5.82759 16.2216 6.09059 16.547 6.43459C16.8724 6.77859 17.1319 7.19359 17.3069 7.64859C17.4373 7.97759 17.5097 8.31759 17.523 8.65859L17.341 8.65859C16.971 8.65859 16.616 8.73159 16.289 8.87559C15.962 9.01959 15.67 9.22959 15.427 9.48959C15.184 9.74959 14.995 10.0506 14.871 10.3706C14.747 10.6906 14.69 11.0206 14.693 11.3526V13.6476C14.69 13.9796 14.747 14.3096 14.871 14.6296C14.995 14.9496 15.184 15.2506 15.427 15.5106C15.67 15.7706 15.962 15.9806 16.289 16.1246C16.616 16.2686 16.971 16.3416 17.341 16.3416L17.523 16.3416V15.3414ZM15.113 7.08359C14.664 7.08359 14.229 7.18759 13.826 7.38759C13.423 7.58759 13.065 7.87559 12.772 8.22959C12.479 8.58359 12.258 8.99259 12.121 9.43759C12.002 9.88159 11.949 10.3476 11.964 10.8176V14.1826C11.949 14.6526 12.002 15.1186 12.121 15.5626C12.258 16.0076 12.479 16.4166 12.772 16.7706C13.065 17.1246 13.423 17.4126 13.826 17.6126C14.229 17.8126 14.664 17.9166 15.113 17.9166C15.446 17.9166 15.774 17.8606 16.083 17.7506C16.392 17.6406 16.678 17.4786 16.927 17.2706C17.176 17.0626 17.383 16.8126 17.542 16.5286C17.701 16.2446 17.809 15.9316 17.859 15.6046C17.909 15.2776 17.9 14.9426 17.833 14.6186C17.766 14.2946 17.643 13.9886 17.468 13.7136C17.293 13.4386 17.07 13.2006 16.808 13.0126C16.546 12.8246 16.251 12.6916 15.94 12.6206C15.629 12.5496 15.309 12.5426 14.993 12.6006C14.677 12.6586 14.372 12.7796 14.095 12.9566C13.818 13.1336 13.575 13.3626 13.377 13.6326C13.179 13.9026 13.03 14.2066 12.937 14.5266C12.844 14.8466 12.809 15.1766 12.833 15.5046C12.857 15.8326 12.94 16.1516 13.077 16.4496C13.214 16.7476 13.403 17.0176 13.633 17.2436C13.863 17.4696 14.129 17.6466 14.418 17.7636C14.707 17.8806 15.014 17.9356 15.324 17.9266C15.634 17.9176 15.941 17.8446 16.226 17.7106C16.511 17.5766 16.769 17.3846 16.986 17.1436C17.203 16.9026 17.375 16.6176 17.492 16.2996C17.609 15.9816 17.668 15.6376 17.666 15.2896V9.71059C17.668 9.36259 17.609 9.01859 17.492 8.70059C17.375 8.38259 17.203 8.09759 16.986 7.85659C16.769 7.61559 16.511 7.42359 16.226 7.28959C15.941 7.15559 15.634 7.08259 15.324 7.07359C15.014 7.06459 14.707 7.11959 14.418 7.23659C14.129 7.35359 13.863 7.53059 13.633 7.75659C13.403 7.98259 13.214 8.25259 13.077 8.55059C12.94 8.84859 12.857 9.16759 12.833 9.49559C12.809 9.82359 12.844 10.1536 12.937 10.4736C13.03 10.7936 13.179 11.0976 13.377 11.3676C13.575 11.6376 13.818 11.8666 14.095 12.0436C14.372 12.2206 14.677 12.3416 14.993 12.3996C15.309 12.4576 15.629 12.4506 15.94 12.3796C16.251 12.3086 16.546 12.1756 16.808 11.9876C17.07 11.7996 17.293 11.5616 17.468 11.2866C17.643 11.0116 17.766 10.7056 17.833 10.3816C17.9 10.0576 17.909 9.72259 17.859 9.39559C17.809 9.06859 17.701 8.75559 17.542 8.47159C17.383 8.18759 17.176 7.93759 16.927 7.72959C16.678 7.52159 16.392 7.35959 16.083 7.24959C15.774 7.13959 15.446 7.08359 15.113 7.08359Z"/>
                </svg>
                Google Play
              </a>
              <a
                href="https://apps.apple.com/app/otto-mobile/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200 font-medium text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
};

export default PersonalSolutions;
