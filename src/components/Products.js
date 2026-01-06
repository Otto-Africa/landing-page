import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      name: "QR Payments",
      description: "Accept payments instantly with QR codes. No cards, no hassle.",
      icon: (
        <svg className="w-8 h-8 text-otto-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M12 15h4.01M12 21h4.01M12 18h4.01M12 9h4.01M12 6h4.01" />
        </svg>
      ),
      features: ["Contactless payments", "Instant processing", "Mobile optimized"],
      link: "/products/qr-payments"
    },
    {
      name: "Gift Cards",
      description: "Create and manage digital gift cards with custom designs.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      features: ["Custom designs", "Instant delivery", "Analytics dashboard"],
      link: "/products/gift-cards"
    },
    {
      name: "Loyalty Programs",
      description: "Build customer loyalty with points and rewards.",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      features: ["Points system", "Reward management", "Customer insights"],
      link: "/products/loyalty"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Products for Every Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the products that fit your business needs. Start with one, or use them all together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl p-8 transition-all duration-200 border border-gray-100 hover:border-otto-blue">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-lg mr-4">
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <ul className="space-y-2 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={product.link}
                className="block w-full bg-otto-blue text-white text-center py-4 rounded-full hover:bg-black transition-colors duration-200 font-semibold"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We can build custom integrations and solutions for your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-otto-blue text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-200 font-semibold"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
