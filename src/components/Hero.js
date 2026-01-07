import React, { useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Hero = () => {
  const merchantPortalUrl =
    process.env.NODE_ENV === "production"
      ? "https://business.ottoafrica.com"
      : "http://localhost:3001";

  const heroRef = useScrollAnimation({ threshold: 0.1 });

  const words = ["Scale", "Attract", "Retain"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      ref={heroRef}
      className="relative bg-white overflow-hidden h-[87.5vh] flex items-center"
    >
      {/* Vertical lines pattern behind background.png */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(8deg, transparent, transparent 2px, rgba(27, 51, 89, 0.03) 10px, rgba(27, 51, 89, 0.03) 8px)`,
        }}
      ></div>

      {/* Full background pattern like Cowrywise */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/background.png')`,
          opacity: 0.1,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline - Large typography with animated word */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-gray-900 mb-8 leading-tight scroll-animate">
            <span
              key={currentWordIndex}
              className="block text-otto-blue font-medium animate-fade-in"
            >
              {words[currentWordIndex]}
            </span>
            <span className="block">without limits.</span>
          </h1>

          {/* Sub-headline - Clear value prop with keywords */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-8 mb-12 scroll-animate delay-100 max-w-3xl mx-auto">
            Otto Africa is a leading fintech platform in Ghana offering payment
            API, digital gift cards, and loyalty programs. The all-in-one
            payment infrastructure built for businesses across Ghana and Africa.
            Accept payments, manage gift cards, and launch loyalty programs with
            our powerful API.
          </p>

          {/* Primary CTA - Action-oriented */}
          <div className="scroll-animate delay-200">
            <a
              href={merchantPortalUrl}
              className="inline-flex items-center gap-2 bg-otto-blue text-white px-10 py-5 rounded-full hover:bg-black transition-all duration-300 font-semibold text-lg md:text-xl"
            >
              Get Started for Free
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
