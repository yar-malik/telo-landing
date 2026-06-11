"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  Check,
  ClipboardList,
  Globe2,
  Headphones,
  Heart,
  Landmark,
  Mail,
  Menu,
  Moon,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  TicketCheck,
  UserRoundCheck,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { CALENDLY_LINK } from "@/constants";

const contactEmails = ["hello@teloai.app", "support@teloai.app"];

const capabilities = [
  {
    title: "Saudi Arabic Understanding",
    copy: "Handle Najdi, Hijazi, Gulf, Southern, Northern, and mixed Arabic-English conversations with local context.",
    icon: Bot,
    visual: "nodes",
  },
  {
    title: "Live Operations Intelligence",
    copy: "Track calls, transcripts, outcomes, sentiment, and team performance from one clean command center.",
    icon: BarChart3,
    visual: "chart",
  },
  {
    title: "Business Knowledge Grounding",
    copy: "Connect policies, branch details, menus, services, CRM data, and internal docs for accurate answers.",
    icon: Headphones,
    visual: "flow",
  },
  {
    title: "Human Handoff",
    copy: "Escalate sensitive or complex conversations with context, transcript history, and next best actions.",
    icon: UserRoundCheck,
    visual: "handoff",
  },
  {
    title: "Always On Across Saudi",
    copy: "Cover after-hours, weekends, Ramadan seasonality, national campaigns, and sudden call spikes.",
    icon: Zap,
    visual: "pulse",
  },
];

const productCards = [
  {
    title: "Telo Agents",
    copy: "Automate inbound and outbound calls with AI employees that speak naturally in Saudi Arabic and English.",
    points: [
      "Never miss a lead or customer call across Saudi time zones",
      "Automate support, booking, complaints, and follow-up workflows",
      "Route WhatsApp, phone, and web conversations to the right team",
      "Scale seasonal and campaign volume without hiring delays",
    ],
  },
  {
    title: "Telo Studio",
    copy: "Create realistic voice experiences, transcripts, and call flows with tooling built for operational teams.",
    points: [
      "Generate natural Arabic and English voice from text",
      "Transcribe calls and meetings into structured summaries",
      "Build repeatable workflows with a simple API",
      "Use approved brand voices for consistent customer delivery",
    ],
  },
];

const industries = [
  { title: "Clinics and Appointments", copy: "Book, confirm, and reschedule visits in Arabic or English.", icon: CalendarCheck },
  { title: "Restaurants and QSR", copy: "Answer menu, branch, order, and delivery questions instantly.", icon: Headphones },
  { title: "Government Services", copy: "Guide residents through common questions and document steps.", icon: Landmark },
  { title: "Retail and E-commerce", copy: "Confirm purchases, status updates, returns, and delivery questions.", icon: ClipboardList },
  { title: "Real Estate", copy: "Qualify buyers and schedule property viewings across Saudi cities.", icon: BriefcaseBusiness },
  { title: "Customer Care", copy: "Route, summarize, and resolve complaints around the clock.", icon: TicketCheck },
  { title: "Lead Qualification", copy: "Score and route inbound demand while intent is fresh.", icon: Target },
  { title: "Feedback and NPS", copy: "Collect post-call feedback and surface local trends.", icon: BadgeCheck },
];

const accentHighlights = [
  "Najdi",
  "Hijazi",
  "Gulf",
  "Southern",
  "Northern",
  "Arabic-English mix",
];

const saudiAdvantages = [
  {
    title: "Built around Saudi Arabic",
    copy: "We cover Saudi Arabic accents and conversational patterns, not just Modern Standard Arabic.",
    icon: MessageCircle,
  },
  {
    title: "Local rollout support",
    copy: "Launch with Saudi business hours, WhatsApp workflows, branch routing, and customer-care expectations.",
    icon: MapPin,
  },
  {
    title: "Best prices for teams",
    copy: "No public price menu. We tailor the package so Saudi teams get strong economics at production scale.",
    icon: WalletCards,
  },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3" aria-label="Telo AI">
      <Image
        src="/images/logo.png"
        alt="Telo AI"
        width={185}
        height={64}
        className="h-11 w-auto object-contain"
        priority
      />
      <span className="sr-only">Telo AI voice agents</span>
    </div>
  );
}

function Header({
  isDark,
  onToggleTheme,
}: {
  isDark: boolean;
  onToggleTheme: () => void;
}) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Use Cases", href: "#use-cases" },
    { label: "Features", href: "#features" },
    { label: "Saudi Arabic", href: "#saudi" },
    { label: "Products", href: "#products" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-6">
      <div className="mx-auto flex max-w-[1152px] items-center justify-between rounded-[28px] border border-slate-200/80 bg-white/82 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-[#08090c]/82 dark:shadow-[0_24px_70px_rgba(0,0,0,0.36)] sm:px-6">
        <Link href="/" aria-label="Telo AI home">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 dark:text-white/72 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 transition hover:text-slate-950 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={onToggleTheme}
            className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 dark:text-white/70 dark:hover:bg-white/8 dark:hover:text-white"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            href={CALENDLY_LINK}
            className="rounded-[13px] bg-[#0f8f5f] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(15,143,95,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0b744d]"
          >
            Book a call
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full text-slate-700 dark:text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-[1152px] rounded-[24px] border border-slate-200 bg-white/95 p-4 text-slate-900 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#08090c]/95 dark:text-white lg:hidden">
          <nav className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-white/72 dark:hover:bg-white/8 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button
              onClick={onToggleTheme}
              className="rounded-2xl border border-slate-200 px-3 py-3 text-center text-sm dark:border-white/12"
            >
              {isDark ? "Light mode" : "Dark mode"}
            </button>
            <Link href={CALENDLY_LINK} className="rounded-2xl bg-[#0f8f5f] px-3 py-3 text-center text-sm font-semibold text-white">
              Book a call
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function OrbitalHero() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-16 h-[680px] w-[680px] -translate-x-1/2 rounded-full border border-dashed border-emerald-300/70 dark:border-emerald-300/15" />
      <div className="absolute left-1/2 top-[-30px] h-[980px] w-[980px] -translate-x-1/2 rounded-full border border-dashed border-amber-200/80 dark:border-amber-200/10" />
      <div className="absolute left-1/2 top-[-150px] h-[1260px] w-[1260px] -translate-x-1/2 rounded-full border border-dashed border-slate-200/70 dark:border-white/6" />
      <span className="absolute left-[25%] top-[24%] h-2.5 w-2.5 rounded-full bg-[#0f8f5f] shadow-[0_0_20px_rgba(15,143,95,0.35)]" />
      <span className="absolute right-[24%] top-[45%] h-2 w-2 rounded-full bg-amber-400" />
      <span className="absolute left-[40%] top-[72%] h-2.5 w-2.5 rounded-full border border-slate-400 bg-white dark:border-white/30 dark:bg-white/15" />
      <div className="saudi-scan absolute left-1/2 top-40 h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-emerald-500/10" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#f7fbf8] to-transparent dark:from-[#050608]" />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {eyebrow ? (
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-slate-500 shadow-sm dark:border-white/12 dark:bg-white/[0.04] dark:text-white/62">
          <Sparkles className="h-3.5 w-3.5 text-[#0f8f5f]" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-white/55 sm:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function Visual({ type }: { type: string }) {
  if (type === "chart") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 dark:bg-white/[0.025]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-50 dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
        <svg viewBox="0 0 320 190" className="absolute inset-0 h-full w-full">
          <path d="M24 144 C70 104 96 128 132 104 C170 78 186 128 224 68 C250 28 272 66 304 28" fill="none" stroke="#0f8f5f" strokeWidth="5" />
          <circle cx="224" cy="68" r="10" fill="#0f8f5f" />
        </svg>
      </div>
    );
  }

  if (type === "handoff") {
    return (
      <div className="flex h-52 items-center justify-center gap-5">
        {["To Do", "In Progress"].map((label, index) => (
          <div key={label} className="h-36 w-32 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
            <p className="text-sm font-semibold text-slate-700 dark:text-white/75">{label}</p>
            <div className="mt-5 h-3 rounded-full bg-slate-200 dark:bg-white/12" />
            <div className="mt-3 h-3 w-3/4 rounded-full bg-slate-100 dark:bg-white/10" />
            {index === 0 ? <ArrowRight className="ml-auto mt-8 h-5 w-5 text-[#0f8f5f]" /> : null}
          </div>
        ))}
      </div>
    );
  }

  if (type === "pulse") {
    return (
      <div className="grid h-52 place-items-center">
        <div className="relative grid h-28 w-28 place-items-center rounded-full bg-[#0f8f5f]/10">
          <span className="absolute h-40 w-40 rounded-full border border-[#0f8f5f]/15" />
          <span className="absolute h-56 w-56 rounded-full border border-[#0f8f5f]/8" />
          <BadgeCheck className="h-12 w-12 text-[#0f8f5f]" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-52 place-items-center">
      <div className="relative h-24 w-24 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
        <UserRoundCheck className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-slate-500 dark:text-white/70" />
        {[["-70px", "8px", Mail], ["86px", "10px", BarChart3], ["-58px", "78px", Zap], ["92px", "78px", ClipboardList]].map(([left, top, Icon], index) => {
          const NodeIcon = Icon as typeof Mail;
          return (
            <div
              key={index}
              className="absolute grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.07]"
              style={{ left: left as string, top: top as string }}
            >
              <NodeIcon className="h-5 w-5 text-slate-500 dark:text-white/65" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CapabilitiesSection() {
  return (
    <section id="features" className="relative z-10 px-4 py-24">
      <div className="mx-auto max-w-[1190px]">
        <SectionHeading
          title={
            <>
              Capabilities built for Saudi <span className="text-slate-400 dark:text-white/40">customer teams</span>
            </>
          }
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={`group rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_14px_46px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none dark:hover:bg-white/[0.045] ${
                  index === 4 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-[#0f8f5f] group-hover:text-white dark:bg-white/8 dark:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{feature.title}</h3>
                </div>
                <p className="mt-4 min-h-16 text-sm leading-7 text-slate-500 dark:text-white/48">{feature.copy}</p>
                <Visual type={feature.visual} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="relative z-10 border-t border-slate-200 px-4 py-24 dark:border-white/8">
      <div className="mx-auto max-w-[1190px]">
        <SectionHeading
          title={
            <>
              One platform for Saudi <span className="text-slate-400 dark:text-white/40">voice operations</span>
            </>
          }
          copy="Telo brings agents, speech tools, transcripts, and integrations together for businesses serving Saudi customers."
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {productCards.map((product) => (
            <article key={product.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.11)] dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none sm:p-10">
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{product.title}</h3>
              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-white/52">{product.copy}</p>
              <div className="mt-8 grid gap-6">
                {product.points.map((point) => (
                  <div key={point} className="flex gap-4">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-400/12 dark:text-emerald-300">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="text-slate-700 dark:text-white/72">{point}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="use-cases" className="relative z-10 border-t border-slate-200 px-4 py-24 dark:border-white/8">
      <div className="mx-auto max-w-[1190px]">
        <SectionHeading
          title={
            <>
              Solutions for Every <span className="text-slate-400 dark:text-white/40">Industry</span>
            </>
          }
          copy="From appointment scheduling to complaint resolution, see how Telo serves diverse use cases."
        />
        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article key={industry.title} className="group min-h-44 rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_14px_46px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none">
                <div className="grid h-12 w-12 place-items-center rounded-[14px] border border-slate-200 bg-slate-50 text-slate-700 transition group-hover:border-[#0f8f5f] group-hover:bg-[#0f8f5f] group-hover:text-white dark:border-white/12 dark:bg-white/[0.07] dark:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-xl font-semibold text-slate-950 dark:text-white">{industry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-white/48">{industry.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SaudiAdvantageSection() {
  return (
    <section id="saudi" className="relative z-10 border-t border-slate-200 px-4 py-24 dark:border-white/8">
      <div className="mx-auto max-w-[1190px]">
        <SectionHeading
          eyebrow="Saudi market advantage"
          title={
            <>
              Built for Saudi Arabic, Saudi teams, and Saudi <span className="text-slate-400 dark:text-white/40">speed</span>
            </>
          }
          copy="Telo is designed for the way customers in Saudi Arabia actually speak, switch languages, ask questions, and expect service."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[28px] border border-emerald-200 bg-[#0f8f5f] p-7 text-white shadow-[0_30px_80px_rgba(15,143,95,0.22)] dark:border-emerald-300/20 sm:p-9">
            <div className="saudi-scan absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/20" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
                <Globe2 className="h-4 w-4" />
                Accent coverage
              </div>
              <h3 className="mt-8 text-3xl font-semibold leading-tight sm:text-4xl">
                We cover Saudi Arabic accents, not just Arabic as a checkbox.
              </h3>
              <p className="mt-5 max-w-xl leading-8 text-white/72">
                Customers can speak naturally. Telo is tuned for local phrasing,
                regional accents, English switching, and the service patterns Saudi
                companies need every day.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {accentHighlights.map((accent) => (
                  <span key={accent} className="rounded-full border border-white/18 bg-white/12 px-4 py-2 text-sm font-semibold text-white">
                    {accent}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {saudiAdvantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group flex gap-5 rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_54px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.11)] dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] bg-emerald-50 text-[#0f8f5f] transition group-hover:bg-[#0f8f5f] group-hover:text-white dark:bg-emerald-400/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-white/55">{item.copy}</p>
                  </div>
                </article>
              );
            })}
            <Link
              href={CALENDLY_LINK}
              className="inline-flex items-center justify-center gap-3 rounded-[18px] bg-slate-950 px-6 py-4 font-semibold text-white shadow-[0_18px_42px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-white/82"
            >
              Book a call about the best prices
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 px-4 py-16 dark:border-white/8">
      <div className="mx-auto grid max-w-[1190px] gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <LogoMark />
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-500 dark:text-white/48">
            Telo AI builds production-ready voice agents for customer operations,
            sales, support, and booking workflows.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-white/45">Contact</h3>
          <div className="mt-5 grid gap-3">
            {contactEmails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 text-slate-600 transition hover:text-slate-950 dark:text-white/72 dark:hover:text-white">
                <Mail className="h-4 w-4" />
                {email}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-white/45">Actions</h3>
          <div className="mt-5 grid gap-3">
            <Link href={CALENDLY_LINK} className="text-slate-600 transition hover:text-slate-950 dark:text-white/72 dark:hover:text-white">
              Book a call
            </Link>
            <Link href="/faq" className="text-slate-600 transition hover:text-slate-950 dark:text-white/72 dark:hover:text-white">
              FAQ
            </Link>
            <Link href="/privacy-policy" className="text-slate-600 transition hover:text-slate-950 dark:text-white/72 dark:hover:text-white">
              Privacy policy
            </Link>
            <Link href="/terms-and-conditions" className="text-slate-600 transition hover:text-slate-950 dark:text-white/72 dark:hover:text-white">
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1190px] flex-col justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-400 dark:border-white/8 dark:text-white/38 sm:flex-row">
        <span>Copyright 2026 Telo AI. All rights reserved.</span>
        <span className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4" />
          Voice AI for always-on teams
        </span>
      </div>
    </footer>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <main className={`${isDark ? "dark bg-[#050608] text-white" : "bg-[#f7fbf8] text-slate-950"} min-h-screen overflow-hidden font-sans transition-colors duration-300`}>
      <style>{`
        @keyframes saudiFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes saudiScan {
          0% { transform: translate(-50%, 0) scale(0.88); opacity: 0.35; }
          50% { opacity: 0.9; }
          100% { transform: translate(-50%, 0) scale(1.08); opacity: 0.18; }
        }
        .saudi-float { animation: saudiFloat 6s ease-in-out infinite; }
        .saudi-scan { animation: saudiScan 5.5s ease-in-out infinite; }
      `}</style>
      <Header isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <section className="relative min-h-[820px] px-4 pt-36 sm:pt-44">
        <OrbitalHero />
        <div className="relative z-10 mx-auto flex max-w-[1190px] flex-col items-center text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70">
            <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
            Made with Love in Riyadh
          </div>
          <div className="mb-7 inline-flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-emerald-800 dark:text-emerald-200">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 dark:bg-emerald-400/10">
              <MapPin className="h-4 w-4" />
              Saudi-first
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-amber-800 dark:bg-amber-400/10 dark:text-amber-200">
              <Building2 className="h-4 w-4" />
              Built for local operations
            </span>
          </div>
          <h1 className="max-w-6xl text-[42px] font-semibold leading-[1.12] text-slate-950 sm:text-6xl lg:text-[76px] dark:text-white">
            Saudi-first AI voice agents for every customer conversation
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-slate-600 dark:text-white/55 sm:text-lg">
            Telo AI answers calls, understands Saudi Arabic accents, follows up on
            WhatsApp, and gives your team clean summaries across Arabic and English.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={CALENDLY_LINK} className="inline-flex items-center justify-center gap-3 rounded-[14px] bg-[#0f8f5f] px-6 py-3.5 font-semibold text-white shadow-[0_18px_42px_rgba(15,143,95,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0b744d]">
              Book a call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#saudi" className="inline-flex items-center justify-center gap-3 rounded-[14px] border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/8">
              Explore Saudi Arabic
              <Globe2 className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid w-full gap-6 text-left lg:grid-cols-[0.92fr_1.08fr]">
            <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-white/82 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["24/7", "Answer every call"],
                ["Saudi Arabic", "Najdi, Hijazi, Gulf, Southern, Northern"],
                ["Best prices", "Custom packages for Saudi teams"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[20px] bg-white p-5 shadow-sm dark:bg-white/[0.055] dark:shadow-none">
                  <p className="text-2xl font-semibold text-slate-950 dark:text-white">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-white/48">{label}</p>
                </div>
              ))}
            </div>

            <div className="saudi-float relative min-h-[360px] overflow-hidden rounded-[32px] border border-emerald-200 bg-slate-950 shadow-[0_30px_90px_rgba(15,23,42,0.12)] dark:border-white/10">
              <Image
                src="/hero_image.png"
                alt="Telo AI operations view"
                fill
                sizes="(min-width: 1024px) 680px, 100vw"
                className="object-contain object-center p-4 opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-950/18 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/78 backdrop-blur">
                  <Globe2 className="h-4 w-4" />
                  Local voice intelligence
                </div>
                <h2 className="max-w-xl text-3xl font-semibold leading-tight">
                  Understand the customer, the city, the branch, and the intent.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/72">
                  Built for Saudi companies that need customer service to feel local,
                  fast, and reliable from the first call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CapabilitiesSection />
      <SaudiAdvantageSection />
      <ProductsSection />
      <IndustriesSection />
      <Footer />
    </main>
  );
}
