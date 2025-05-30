"use client";

import { ChevronDown } from "lucide-react";
import React from "react";

const FaqSection = () => {
  return (
    <section className="py-10 sm:py-20 container mx-auto px-3 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          FAQ
        </h2>
        <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Find answers to the most common questions to better understand how our
          platform works and how it can benefit you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-3 sm:space-y-6">
        {[
          {
            question: "How does the 3-day free trial work?",
            answer: "You get 3 free candidate calls per day for 3 days.",
          },
          {
            question: "Can I customise the AI voice and scripts?",
            answer:
              "Yes! You can choose from 10+ professional voices. You can also customise both call prompts and SMS templates.",
          },
          {
            question: "What happens if a candidate doesn't answer?",
            answer:
              "We send an automated SMS follow-up asking them to call you back or reply via email.",
          },
          {
            question: "Can Telo AI integrate with my CRM?",
            answer:
              "Yes, we offer CRM/ATS integrations to sync all call data and notes",
          },
          {
            question: "What happens after my free trial ends?",
            answer:
              "You can choose from one of our paid plans starting at £199/month or upgrade to a custom Enterprise plan.",
          },
        ].map((faq, idx) => (
          <details
            key={faq.question}
            className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg group"
            open={idx === 0}
          >
            <summary className="cursor-pointer text-base sm:text-xl font-bold text-gray-900 outline-none flex items-center justify-between">
              {faq.question}
              <span className="ml-4 transition-transform group-open:rotate-180">
                <ChevronDown />
              </span>
            </summary>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
