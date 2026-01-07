import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Avatar from "../components/Avatar";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const heroRef = useScrollAnimation({ threshold: 0.1 });
  const missionRef = useScrollAnimation({ threshold: 0.1 });
  const teamRef = useScrollAnimation({ threshold: 0.1 });
  const valuesRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us - Otto Africa"
        description="Learn about Otto Africa - the payment infrastructure platform built for Africa's most ambitious businesses. Discover our mission, vision, and commitment to transforming payments across the continent."
        keywords="about Otto Africa, payment platform, fintech company, Africa fintech, payment solutions company"
        url="https://ottoafrica.com/about"
      />
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 scroll-animate">
              Powering Africa's
              <span className="block text-otto-blue font-medium">
                Digital Economy
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 scroll-animate delay-100">
              We're building the infrastructure that enables businesses across
              Africa to thrive in the digital age through seamless payment
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 scroll-animate">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed scroll-animate delay-100">
                To democratize access to world-class payment infrastructure for
                businesses of all sizes across Africa. We believe that every
                business, from street vendors to multinational corporations,
                should have access to the same powerful tools that drive
                innovation and growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed scroll-animate delay-200">
                We're not just building payment systems – we're building the
                foundation for Africa's digital transformation, one transaction
                at a time.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 scroll-animate delay-300">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-otto-blue mb-2">
                    2023
                  </div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    100+
                  </div>
                  <div className="text-sm text-gray-600">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    2
                  </div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section ref={teamRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-900 mb-4 scroll-animate">
              Founders
            </h2>
            <p className="text-xl text-gray-600 scroll-animate delay-100">
              The innovators behind Otto's success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              className="text-center scroll-animate"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex justify-center mb-4">
                <Avatar
                  src={null}
                  name="Kofi Addo Atuah"
                  alt="Kofi Addo Atuah"
                  size={128}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-1">
                Kofi Addo Atuah
              </h3>
              <p className="text-otto-blue font-medium mb-2">
                Cofounder / Tech Lead
              </p>
              <p className="text-gray-600 text-sm">
                Serial entrepreneur and blockchain
              </p>
            </div>

            <div
              className="text-center scroll-animate"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex justify-center mb-4">
                <Avatar
                  src={null}
                  name="Jonathan Addo Atuah"
                  alt="Jonathan Addo Atuah"
                  size={128}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-1">
                Jonathan Addo Atuah
              </h3>
              <p className="text-otto-blue font-medium mb-2">
                Cofounder / Business Lead
              </p>
              <p className="text-gray-600 text-sm">
                Finance executive with 10+ years
              </p>
            </div>

            <div
              className="text-center scroll-animate"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex justify-center mb-4">
                <Avatar
                  src={null}
                  name="Amen Olabode"
                  alt="Amen Olabode"
                  size={128}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-1">
                Amen Olabode
              </h3>
              <p className="text-otto-blue font-medium mb-2">
                Head of Product
              </p>
              <p className="text-gray-600 text-sm">
                Product leader with experience in Banking, and at top tech companies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-900 mb-4 scroll-animate">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 scroll-animate delay-100">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="text-center scroll-animate"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-otto-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We constantly push boundaries to solve complex problems with
                elegant solutions.
              </p>
            </div>

            <div
              className="text-center scroll-animate"
              style={{ animationDelay: "300ms" }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
              <p className="text-gray-600">
                Security and reliability are at the core of everything we build.
              </p>
            </div>

            <div
              className="text-center scroll-animate"
              style={{ animationDelay: "400ms" }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We work closely with our partners to deliver exceptional
                experiences.
              </p>
            </div>

            <div
              className="text-center scroll-animate"
              style={{ animationDelay: "500ms" }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600">
                We measure our success by the positive change we create in our
                community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-otto-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-medium text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using Otto to power their
            growth. Let's discuss how we can help transform your business.
          </p>
          <a
            href="/contact"
            className="bg-white text-otto-blue px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200 font-semibold text-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
