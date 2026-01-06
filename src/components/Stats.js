import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Businesses Trust Otto",
      description: "From startups to enterprises"
    },
    {
      number: "₵500M+",
      label: "Processed Annually",
      description: "Secure transactions every day"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Bank-grade reliability"
    },
    {
      number: "24/7",
      label: "Customer Support",
      description: "Always here to help"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-otto-blue mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
