"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const PricingPlansSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "£199",
      period: "/mo",
      description: "Perfect for developing and launching your AI voice agent.",
      features: [
        { text: "1 User" },
        { text: "50 Candidate calls" },
        { text: "Free SMS Follow Ups" },
        { text: "3 Days Free Trial" },
      ],
      button: {
        href: "/book-demo",
        className:
          "block w-full py-3 px-4 bg-primary text-white hover:bg-primary/90 rounded-lg text-centre font-medium",
        text: "Get Started",
      },
    },
    {
      name: "Growth",
      price: "£499",
      period: "/mo",
      description: "Ideal for businesses with low call volumes.",
      features: [
        { text: "3 User" },
        { text: "200 Candidate calls" },
        { text: "Free SMS Follow Ups" },
        { text: "3 Days Free Trial" },
      ],
      button: {
        href: "/book-demo",
        className:
          "block w-full py-3 px-4 bg-primary text-white hover:bg-primary/90 rounded-lg text-centre font-medium",
        text: "Get Started",
      },
    },
    {
      name: "Scale",
      price: "£999",
      period: "/mo",
      description: "Best for businesses with higher call volumes.",
      features: [
        { text: "10 User" },
        { text: "500 Candidate calls" },
        { text: "Free SMS Follow Ups" },
        { text: "3 Days Free Trial" },
      ],
      button: {
        href: "/book-demo",
        className:
          "block w-full py-3 px-4 bg-primary text-white hover:bg-primary/90 rounded-lg text-centre font-medium",
        text: "Get Started",
      },
    },
    {
      name: "Custom Pricing",
      price: "",
      period: "/mo",
      description: "Full-featured solution for agencies and large businesses.",
      features: [
        { text: "Unlimited Users" },
        { text: "Unlimited calls" },
        { text: "Free SMS Follow Ups" },
        { text: "3 Days Free Trial" },
      ],
      button: {
        href: "/book-demo",
        className:
          "block w-full py-3 px-4 bg-primary text-white hover:bg-primary/90 rounded-lg text-centre font-medium",
        text: "Get Started",
      },
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Pricing Plans
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Choose from flexible options designed to match your business needs and
          call volume.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-primary`}
          >
            <div
              className={`p-6 border-b border-gray-100 bg-primary/5 h-[120px]`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              {plan.price && (
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between">
              <div className="p-6 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={plan.button.href}
                  className={`${plan.button.className} text-center`}
                >
                  {plan.button.text}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlansSection;
