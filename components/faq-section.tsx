"use client";

import { ChevronDown, MessageCircleQuestion, Sparkles } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Can we customize the AI voice and scripts?",
      answer:
        "Yes. We shape the voice, conversation flow, prompts, WhatsApp follow-ups, and handoff rules around your Saudi customer journey.",
    },
    {
      question: "What happens when a customer does not answer?",
      answer:
        "Telo can send an approved follow-up through WhatsApp or SMS and keep the call outcome organized for your team.",
    },
    {
      question: "Can Telo AI integrate with my CRM?",
      answer:
        "Yes. We can connect call outcomes, summaries, recordings, and next steps into your CRM, helpdesk, or internal workflow.",
    },
    {
      question: "How do commercial packages work?",
      answer:
        "We tailor each package around your call volume, workflows, and rollout needs so Saudi teams get the best prices for production use.",
    },
  ];
  return (
    <section id="faq" className="relative overflow-hidden px-4 py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-12 h-[620px] w-[620px] -translate-x-1/2 rounded-full border border-dashed border-emerald-200" />
      <div className="pointer-events-none absolute right-[-180px] top-28 h-96 w-96 rounded-full border border-amber-200/80" />

      <div className="relative mx-auto mb-16 max-w-4xl text-center">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 shadow-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Telo answers
        </div>
        <h2 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Questions before we book your first call
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          A quick view of how Telo works with Saudi teams, Arabic voice flows,
          and meeting-led onboarding.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl space-y-4 sm:space-y-5">
        {faqs.map((faq, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: 0.1 + idx * 0.15,
            }}
            key={faq.question}
          >
            <details
              className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_54px_rgba(15,23,42,0.07)] transition hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(15,23,42,0.10)] sm:p-7"
              open={idx === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold text-slate-950 outline-none sm:text-xl">
                <span className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[15px] bg-emerald-50 text-[#0f8f5f]">
                    <MessageCircleQuestion className="h-5 w-5" />
                  </span>
                  {faq.question}
                </span>
                <span className="ml-4 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition-transform group-open:rotate-180 group-open:border-emerald-200 group-open:text-[#0f8f5f]">
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-5 pl-0 text-sm leading-7 text-slate-600 sm:pl-[60px] sm:text-base">
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
