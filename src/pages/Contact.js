import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const heroRef = useScrollAnimation({ threshold: 0.1 });
  const formRef = useScrollAnimation({ threshold: 0.1 });
  const faqRef = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? 'https://api.ottoafrica.com/api/contact/landing-page'
        : 'http://localhost:8000/api/contact/landing-page';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && !data.error) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your message! We\'ll get back to you soon.' });
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          interest: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Us - Otto Africa"
        description="Get in touch with Otto Africa. Have questions about our payment infrastructure? Need help getting started? Want to explore partnership opportunities? We'd love to hear from you."
        keywords="contact Otto, support, customer service, payment solutions support, fintech support"
        url="https://ottoafrica.com/contact"
      />
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 scroll-animate">
              Let's Build Something
              <span className="block text-otto-blue font-medium">Together</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 scroll-animate delay-100">
              Have questions about Otto? Need help getting started? Want to explore partnership opportunities?
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={formRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 scroll-animate">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="qr-payments">QR Code Payments</option>
                    <option value="gift-cards">Digital Gift Cards</option>
                    <option value="loyalty">Loyalty Programs</option>
                    <option value="api">API Integration</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your project, questions, or how we can help..."
                  />
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-otto-blue text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info & Support Options */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 scroll-animate delay-200">Get in touch</h2>

              <div className="space-y-8">
                {/* Support Options */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Need immediate help?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-otto-blue/10 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-otto-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Email Support</div>
                        <div className="text-gray-600">Response within 24 hours</div>
                        <a href="mailto:contact@ottoafrica.com" className="text-otto-blue hover:text-black font-medium mt-1">
                          contact@ottoafrica.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM GMT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM GMT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium text-gray-900 mb-4 scroll-animate">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 scroll-animate delay-100">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 scroll-animate" style={{ animationDelay: '200ms' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I get started with Otto?</h3>
              <p className="text-gray-600">Sign up for a free account at merchant.otto.com and start processing payments immediately. Our onboarding process takes less than 10 minutes.</p>
            </div>

            <div className="bg-white rounded-lg p-6 scroll-animate" style={{ animationDelay: '300ms' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the fees for using Otto?</h3>
              <p className="text-gray-600">We offer competitive pricing with no setup fees. QR payments are free. Service charges for gift cards and loyalty programs are applied dynamically during purchases - you only pay when you use the service.</p>
            </div>

            <div className="bg-white rounded-lg p-6 scroll-animate" style={{ animationDelay: '400ms' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is Otto secure?</h3>
              <p className="text-gray-600">Yes, Otto is PCI DSS Level 1 compliant and uses bank-grade encryption. We employ multiple layers of security including end-to-end encryption, fraud detection, and regular security audits.</p>
            </div>

            <div className="bg-white rounded-lg p-6 scroll-animate" style={{ animationDelay: '500ms' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you support international payments?</h3>
              <p className="text-gray-600">Currently, Otto focuses on the Ghanaian market with support for major local payment methods. We're expanding to other African countries soon.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
