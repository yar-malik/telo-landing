"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const PricingPlansSection = () => {
const plans = [
  {
    name: "Starter",
    price: "$95",
    period: "/mo",
    description: "Perfect for developing and launching your AI voice agent.",
    features: [
      { text: "100 mins with 5 concurrent calls", included: true },
      {
        text: "Includes API, integrations, and appointment booking",
        included: true,
      },
      { text: "Basic email support", included: true },
      { text: "Workflow builder", included: false },
      { text: "24/7 support", included: false },
    ],
    highlight: false,
    border: "border-gray-100",
    button: {
      href: "/book-demo",
      className:
        "block w-full py-3 px-4 bg-white border border-primary text-primary hover:bg-primary/5 rounded-lg text-centre font-medium",
      text: "Get Started",
    },
  },
  {
    name: "Pro",
    price: "$395",
    period: "/mo",
    description: "Ideal for businesses with low call volumes.",
    features: [
      { text: "500 mins with 25 concurrent calls", included: true },
      {
        text: "Adds workflow builder and working hours support",
        included: true,
      },
      { text: "All Starter features included", included: true },
      { text: "Business hours support", included: true },
      { text: "24/7 support", included: false },
    ],
    highlight: false,
    border: "border-gray-100",
    button: {
      href: "/book-demo",
      className:
        "block w-full py-3 px-4 bg-primary text-white hover:bg-primary/90 rounded-lg text-centre font-medium",
      text: "Get Started",
    },
  },
  {
    name: "Growth",
    price: "$750",
    period: "/mo",
    description: "Best for businesses with higher call volumes.",
    features: [
      { text: "2,000 mins with 50 concurrent calls", included: true },
      {
        text: "Includes 24/7 support and live agent transfer",
        included: true,
      },
      { text: "Calendar integration", included: true },
      { text: "All Pro features included", included: true },
      { text: "Priority support", included: true },
    ],
    highlight: true,
    border: "border-primary",
    button: {
      href: "/book-demo",
      className:
        "block w-full py-3 px-4 bg-primary text-white hover:bg-primary/90 rounded-lg text-centre font-medium",
      text: "Get Started",
    },
  },
  {
    name: "Enterprise",
    price: "$1495",
    period: "/mo",
    description: "Full-featured solution for agencies and large businesses.",
    features: [
      { text: "4,000 mins with 80 concurrent calls", included: true },
      { text: "Full 24/7 support with 14-day onboarding", included: true },
      {
        text: "Includes UAE number and email/WhatsApp follow-ups",
        included: true,
      },
      { text: "All Growth features included", included: true },
      { text: "Dedicated account manager", included: true },
    ],
    highlight: false,
    border: "border-gray-100",
    button: {
      href: "/book-demo",
      className:
        "block w-full py-3 px-4 bg-white border border-primary text-primary hover:bg-primary/5 rounded-lg text-centre font-medium",
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
            className={`flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border ${
              plan.border
            } ${plan.highlight ? "relative" : ""}`}
          >
            <div
              className={`p-6 border-b border-gray-100 ${
                plan.highlight ? "bg-primary/5" : ""
              } h-[220px]`}
            >
              {plan.highlight && (
                <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.period}</span>
              </div>
              <p className="text-gray-600 mt-4">{plan.description}</p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="p-6 space-y-4 min-h-[320px]">
                {plan.features.map((feature, i) =>
                  feature.included ? (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature.text}</span>
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-gray-400"
                    >
                      <span className="text-gray-300">✓</span>
                      <span>{feature.text}</span>
                    </div>
                  )
                )}
              </div>
              <div className="p-6 pt-0">
                <Link href={plan.button.href} className={plan.button.className}>
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
