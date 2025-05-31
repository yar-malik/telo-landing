"use client";

import { Calendar, Check } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const PricingPlansSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      description: "For businesses getting started with AI phone minutes",
      monthlyPrice: 99,
      yearlyPrice: 99,
      yearlyDiscount: 0,
      features: [
        "200 minutes, then $0.29/min",
        "AI-powered call automation",
        "Basic chat support",
      ],
      buttonText: "Start with 10 Free minutes",
      isEnterprise: false,
    },
    {
      name: "Growth",
      description: "For businesses needing versatile and smart AI phone agents",
      monthlyPrice: 249,
      yearlyPrice: 224,
      yearlyDiscount: 10,
      features: [
        "1000 minutes, then $0.26/min",
        "Self-learning AI technology",
        "Customer recognition",
        "Advanced call analytics",
        "30-day onboarding support",
      ],
      buttonText: "Start with 10 Free minutes",
      isEnterprise: false,
    },
    {
      name: "Scale",
      description: "For enterprises needing advanced AI phone solutions",
      monthlyPrice: 499,
      yearlyPrice: 409,
      yearlyDiscount: 18,
      features: [
        "2000 minutes, then $0.23/min",
        "All Growth plan features",
        "Custom pricing per minute",
        "Custom AI agent & integrations",
        "Monthly optimization reports",
      ],
      buttonText: "Start with 10 Free minutes",
      isEnterprise: false,
    },
    {
      name: "Enterprise",
      description: "For organizations needing complete customization",
      monthlyPrice: null,
      yearlyPrice: null,
      yearlyDiscount: 0,
      features: [
        "White Label solution",
        "Dedicated Slack support",
        "Free phone number",
        "Prompting assistance",
        "All Scale plan features",
      ],
      buttonText: "Book a call",
      isEnterprise: true,
    },
  ];

  return (
    <div className="container mx-auto px-2 sm:px-6 md:px-12 py-12 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Pricing Plans
        </h1>
        <p className="text-base text-gray-700 max-w-3xl mx-auto">
          Choose from flexible options designed to match your business needs and
          call volume.
        </p>
      </div>
      {/* Billing Toggle */}
      <div className="flex items-center justify-center mb-12">
        <div className="bg-gray-200 rounded-full p-1 flex">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              !isYearly
                ? "bg-blue-700 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              isYearly
                ? "bg-blue-700 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>
      {/* Pricing Cards Section */}
      <section className="grid lg:grid-cols-4 gap-6 lg:gap-8 py-8 sm:px-4 relative mx-auto max-w-full sm:max-w-7xl">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="relative">
            <CardContent
              className={`p-4 h-full relative overflow-hidden rounded-xl ${
                plan.isEnterprise
                  ? "bg-gradient-to-br from-blue-900 to-blue-700 text-white border-0"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              <CardContent className="p-0">
                {/* Plan Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`text-2xl font-bold ${
                        plan.isEnterprise ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    {isYearly && plan.yearlyDiscount > 0 && (
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        -{plan.yearlyDiscount}%
                      </Badge>
                    )}
                  </div>
                  <p
                    className={`text-xs ${
                      plan.isEnterprise ? "text-purple-100" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-2">
                  {plan.isEnterprise ? (
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                      Custom
                    </div>
                  ) : (
                    <div className="flex items-baseline mb-2">
                      <span
                        className={`text-4xl font-bold ${
                          plan.isEnterprise ? "text-white" : "text-gray-900"
                        }`}
                      >
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span
                        className={`text-lg ${
                          plan.isEnterprise
                            ? "text-purple-100"
                            : "text-gray-600"
                        }`}
                      >
                        /mo
                      </span>
                    </div>
                  )}

                  <div className="text-sm text-gray-500 line-through h-6">
                    {isYearly && plan.yearlyDiscount
                      ? `$${plan.monthlyPrice}`
                      : ""}
                  </div>

                  {plan.isEnterprise ? (
                    <p className="text-[10px] text-center text-purple-100">
                      Contact us for custom pricing
                    </p>
                  ) : (
                    <p className="text-[10px] text-center text-gray-600">
                      Cancel anytime. We'll remind you before trial ends
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <div className="mb-6">
                  <Button
                    className={`w-full py-3 font-medium ${
                      plan.isEnterprise
                        ? "bg-white text-blue-600 hover:bg-gray-100"
                        : "bg-transparent hover:bg-blue-50 text-primary border border-primary"
                    }`}
                  >
                    {plan.isEnterprise && <Calendar className="w-4 h-4 mr-2" />}
                    {plan.buttonText}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.isEnterprise
                            ? "text-purple-200"
                            : "text-green-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.isEnterprise
                            ? "text-purple-100"
                            : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </CardContent>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PricingPlansSection;
