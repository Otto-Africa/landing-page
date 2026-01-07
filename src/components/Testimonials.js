import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Avatar from './Avatar';

const Testimonials = () => {
  const testimonialsRef = useScrollAnimation({ threshold: 0.1 });
  const testimonials = [
    {
      quote: "Otto transformed our payment process. Our customers love the QR payment system - it's fast, secure, and incredibly easy to use.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Ghana",
      company: "TechStart Ghana",
      avatar: "/img/team-1.jpg"
    },
    {
      quote: "The gift card system has boosted our sales by 40%. Customers love the instant delivery and our analytics help us understand buying patterns.",
      author: "Michael Osei",
      role: "Operations Manager, Bella's Boutique",
      company: "Bella's Boutique",
      avatar: "/img/team-2.jpg"
    },
    {
      quote: "Otto's loyalty program keeps our customers coming back. The points system is intuitive and the analytics are game-changing for our business.",
      author: "Grace Mensah",
      role: "Marketing Director, Urban Eats",
      company: "Urban Eats",
      avatar: "/img/team-3.jpg"
    },
    {
      quote: "We've tried many payment solutions, but Otto stands out. The API is robust, the support is excellent, and our integration was seamless.",
      author: "David Nkrumah",
      role: "CTO, FinTech Solutions",
      company: "FinTech Solutions",
      avatar: "/img/team-4.png"
    }
  ];

  return (
    <section ref={testimonialsRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 scroll-animate">
            Loved by Businesses Across Ghana
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-animate delay-100">
            See what our customers say about transforming their business with Otto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-100 scroll-animate hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0">
                  <Avatar
                    src={testimonial.avatar}
                    name={testimonial.author}
                    alt={`${testimonial.author}, ${testimonial.role} at ${testimonial.company}`}
                    size={48}
                    loading="lazy"
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
