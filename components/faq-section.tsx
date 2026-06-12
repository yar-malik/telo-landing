"use client";

import { CALENDLY_LINK } from "@/constants";
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Mail,
  MessageCircleQuestion,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
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
    <section id="faq" className="relative overflow-hidden px-4 pb-20 pt-12 sm:pb-24 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,143,95,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-[42vw] bg-emerald-100/55" style={{ clipPath: "polygon(0 0, 78% 0, 48% 100%, 0 100%)" }} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[36vw] bg-amber-100/55" style={{ clipPath: "polygon(34% 0, 100% 18%, 100% 100%, 0 100%)" }} />

      <div className="relative mx-auto grid max-w-[1152px] gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:sticky lg:top-32"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0f8f5f] shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            FAQ
          </div>
          <h1 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.05] text-slate-950 sm:text-5xl lg:text-6xl">
            Answers before your first Telo call.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
            Everything Saudi teams usually ask about voice setup, workflows,
            CRM handoff, and commercial rollout.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <Link
              href={CALENDLY_LINK}
              className="group flex items-center justify-between rounded-[20px] bg-[#0f8f5f] px-5 py-4 font-semibold text-white shadow-[0_18px_42px_rgba(15,143,95,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0b744d]"
            >
              <span className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5" />
                Book a call
              </span>
              <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="mailto:hello@teloai.app"
              className="flex items-center justify-between rounded-[20px] border border-slate-200 bg-white/90 px-5 py-4 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-[#0f8f5f]"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#0f8f5f]" />
                hello@teloai.app
              </span>
            </a>
          </div>

          <div className="mt-6 rounded-[24px] border border-emerald-100 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-950">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-[#0f8f5f]">
                <Clock3 className="h-5 w-5" />
              </span>
              Typical onboarding
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Most pilots start with one workflow, approved scripts, and a
              short calibration cycle before production calls.
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.08 + idx * 0.08,
              }}
              key={faq.question}
            >
              <details
                className="group rounded-[26px] border border-slate-200/90 bg-white/95 p-4 shadow-[0_18px_54px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-[0_26px_70px_rgba(15,23,42,0.11)] sm:p-5"
                open={idx === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[18px] text-left text-base font-semibold text-slate-950 outline-none sm:text-lg">
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[16px] bg-slate-950 text-white transition group-open:bg-[#0f8f5f]">
                      <MessageCircleQuestion className="h-5 w-5" />
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-180 group-open:border-emerald-200 group-open:bg-emerald-50 group-open:text-[#0f8f5f]">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="mt-5 rounded-[20px] bg-slate-50 px-5 py-4 sm:ml-[60px]">
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
