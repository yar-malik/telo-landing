"use client";

import { ChevronDown } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const FaqSection = () => {
  const faqs = [
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
        "You can choose from one of our paid plans starting at £99/month or upgrade to a custom Enterprise plan.",
    },
  ];
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
        {faqs.map((faq, idx) => (
          <motion.div
            initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1 + idx * 0.15,
              type: "spring",
              stiffness: 80,
              damping: 18,
            }}
            key={faq.question}
          >
            <details
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
