"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  ClipboardList,
  Copy,
  Headphones,
  Heart,
  Mail,
  Menu,
  Mic,
  Moon,
  Phone,
  Play,
  Radio,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  TicketCheck,
  UserRoundCheck,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { CALENDLY_LINK } from "@/constants";

const contactEmails = ["hello@teloai.app", "support@teloai.app"];
const LOGIN_LINK = "https://dashboard.teloai.app/login?redirect=%2F";

const demoTabs = [
  {
    label: "AI Voice Agent",
    icon: Mic,
    title: "Live voice agent",
    copy: "A Telo agent answers, qualifies, routes, and summarizes the call while your team keeps working.",
    transcript: [
      "Customer: I need to move my appointment.",
      "Telo: No problem. I can check the next available slots.",
      "Outcome: Rescheduled, CRM updated, confirmation sent.",
    ],
  },
  {
    label: "Text To Speech",
    icon: Radio,
    title: "Natural speech generation",
    copy: "Turn scripts, follow-ups, and announcements into clear voice output for customer journeys.",
    transcript: [
      "Script loaded",
      "Voice style: Warm, clear, professional",
      "Output: 18 second customer-ready message",
    ],
  },
  {
    label: "Speech-to-Text",
    icon: ClipboardList,
    title: "Structured transcripts",
    copy: "Convert conversations into searchable transcripts, topics, action items, and quality signals.",
    transcript: [
      "Call transcribed",
      "Intent: Billing question",
      "Action item: Send updated invoice by email",
    ],
  },
  {
    label: "Voice Cloning",
    icon: Copy,
    title: "Consistent approved voices",
    copy: "Create controlled, brand-safe voice experiences for demos, training, and customer workflows.",
    transcript: [
      "Consent verified",
      "Voice profile prepared",
      "Ready for approved campaign usage",
    ],
  },
];

const capabilities = [
  {
    title: "Natural Voice Agents",
    copy: "Answer inbound calls, qualify leads, and resolve customer questions with fluent, human-like conversations.",
    icon: Bot,
    visual: "nodes",
  },
  {
    title: "Live Call Intelligence",
    copy: "Track performance, transcripts, sentiment, and outcomes with dashboards built for contact center teams.",
    icon: BarChart3,
    visual: "chart",
  },
  {
    title: "Knowledge Grounding",
    copy: "Connect your website, policies, CRM, and docs so agents respond with accurate, current information.",
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
    title: "Always On Operations",
    copy: "Keep service running after hours, on weekends, and during volume spikes without adding headcount.",
    icon: Zap,
    visual: "pulse",
  },
];

const productCards = [
  {
    title: "Telo Agents",
    copy: "Automate inbound and outbound calls with AI employees that speak naturally, work 24/7, and integrate with your business systems.",
    points: [
      "Never miss a lead or customer call",
      "Automate support and follow-up workflows",
      "Route WhatsApp, phone, and web conversations",
      "Scale high-volume conversations without hiring delays",
    ],
  },
  {
    title: "Telo Studio",
    copy: "Create realistic voice experiences for content, demos, call flows, and internal training with a toolkit built for teams.",
    points: [
      "Generate natural voice from text",
      "Transcribe calls and meetings accurately",
      "Build repeatable workflows with a simple API",
      "Clone approved brand voices for consistent delivery",
    ],
  },
];

const industries = [
  { title: "Appointment Handling", copy: "Book, confirm, and reschedule visits automatically.", icon: CalendarCheck },
  { title: "Answering FAQs", copy: "Give instant answers to common customer questions.", icon: Headphones },
  { title: "Customer Complaints", copy: "Route, summarize, and resolve issues around the clock.", icon: TicketCheck },
  { title: "Lead Qualification", copy: "Score and route inbound leads while intent is fresh.", icon: Target },
  { title: "Orders", copy: "Confirm purchases, status updates, and delivery questions.", icon: ClipboardList },
  { title: "Real Estate Inquiries", copy: "Qualify buyers and schedule property viewings.", icon: BriefcaseBusiness },
  { title: "Bookings", copy: "Manage reservations, reminders, and cancellations.", icon: CalendarCheck },
  { title: "Feedback", copy: "Collect post-call feedback and surface trends.", icon: BadgeCheck },
];

const plans = [
  {
    name: "Free Trial",
    eyebrow: "Try Telo with no credit card required.",
    price: "Free",
    cta: "Try Now",
    features: ["20,000 credits", "API access included", "Demo voice agent", "Email onboarding"],
  },
  {
    name: "Individual",
    eyebrow: "For individual use and personal projects.",
    price: "$99",
    cadence: "/ month",
    cta: "Choose Plan",
    features: [
      "99,000 credits",
      "Unlimited voice AI agents",
      "WhatsApp integration",
      "Built-in ticketing",
      "Dynamic call analytics",
      "Voice cloning access",
    ],
  },
  {
    name: "Business",
    eyebrow: "For growing teams and customer operations.",
    price: "$600",
    cadence: "/ month",
    cta: "Choose Plan",
    features: [
      "800,000 credits",
      "Everything in Individual",
      "Priority support",
      "CRM and helpdesk integrations",
      "Team workspace",
      "Production deployment guidance",
    ],
  },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950">
        <div className="flex h-6 items-center gap-[3px]">
          {[14, 22, 30, 18, 26].map((height, index) => (
            <span
              key={index}
              className="w-[3px] rounded-full bg-current"
              style={{ height }}
            />
          ))}
        </div>
      </div>
      <div className="leading-none">
        <div className="text-[13px] font-black uppercase tracking-[0.32em] text-slate-950 dark:text-white">
          Telo AI
        </div>
        <div className="mt-1 text-xs font-medium text-slate-500 dark:text-white/55">
          Voice agents
        </div>
      </div>
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
    { label: "Products", href: "#products" },
    { label: "FAQ", href: "/faq" },
    { label: "Pricing", href: "#pricing" },
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
            href={LOGIN_LINK}
            className="rounded-[13px] border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-[#3340ff]/60 dark:text-white dark:hover:bg-white/8"
          >
            Login
          </Link>
          <Link
            href={CALENDLY_LINK}
            className="rounded-[13px] bg-[#2438ff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(36,56,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#1025db]"
          >
            Contact us
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
          <div className="mt-3 grid grid-cols-3 gap-3">
            <button
              onClick={onToggleTheme}
              className="rounded-2xl border border-slate-200 px-3 py-3 text-center text-sm dark:border-white/12"
            >
              {isDark ? "Light mode" : "Dark mode"}
            </button>
            <Link href={LOGIN_LINK} className="rounded-2xl border border-slate-200 px-3 py-3 text-center text-sm font-semibold dark:border-white/12">
              Login
            </Link>
            <Link href={CALENDLY_LINK} className="rounded-2xl bg-[#2438ff] px-3 py-3 text-center text-sm font-semibold text-white">
              Contact us
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
      <div className="absolute left-1/2 top-16 h-[680px] w-[680px] -translate-x-1/2 rounded-full border border-dashed border-slate-300/70 dark:border-white/10" />
      <div className="absolute left-1/2 top-[-30px] h-[980px] w-[980px] -translate-x-1/2 rounded-full border border-dashed border-slate-200 dark:border-white/8" />
      <div className="absolute left-1/2 top-[-150px] h-[1260px] w-[1260px] -translate-x-1/2 rounded-full border border-dashed border-slate-200/70 dark:border-white/6" />
      <span className="absolute left-[25%] top-[24%] h-2.5 w-2.5 rounded-full bg-[#2438ff] shadow-[0_0_20px_rgba(36,56,255,0.35)]" />
      <span className="absolute right-[24%] top-[45%] h-2 w-2 rounded-full bg-emerald-400" />
      <span className="absolute left-[40%] top-[72%] h-2.5 w-2.5 rounded-full border border-slate-400 bg-white dark:border-white/30 dark:bg-white/15" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#f8fbff] to-transparent dark:from-[#050608]" />
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
          <Sparkles className="h-3.5 w-3.5 text-[#2438ff]" />
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

function DemoSection() {
  const [activeDemo, setActiveDemo] = useState(0);
  const demo = demoTabs[activeDemo];
  const DemoIcon = demo.icon;

  return (
    <section id="demos" className="relative z-10 px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-[1116px]">
        <SectionHeading
          eyebrow="Interactive demos"
          title={
            <>
              Experience Telo&apos;s voice products in one{" "}
              <span className="text-slate-400 dark:text-white/40">place</span>
            </>
          }
          copy="Switch between voice workflows and see how Telo turns calls into structured outcomes for your team."
        />

        <div className="mt-12 rounded-[20px] border border-slate-200 bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.07]">
          <div className="grid gap-2 md:grid-cols-4">
            {demoTabs.map((tab, index) => {
              const Icon = tab.icon;
              const active = index === activeDemo;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveDemo(index)}
                  className={`flex items-center justify-center gap-2 rounded-[15px] px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-[#2438ff] text-white shadow-[0_12px_28px_rgba(36,56,255,0.24)]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-white/72 dark:hover:bg-white/8 dark:hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.09)] dark:border-white/10 dark:bg-[#08090c] dark:shadow-none lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex min-h-[410px] flex-col items-center justify-center border-b border-slate-200 p-8 text-center dark:border-white/10 lg:border-b-0 lg:border-r">
            <div
              aria-hidden="true"
              className="group relative grid h-28 w-28 place-items-center rounded-full bg-[#2438ff] text-white shadow-[0_0_0_22px_rgba(36,56,255,0.09),0_20px_55px_rgba(36,56,255,0.26)] transition hover:scale-105"
            >
              <span className="absolute h-36 w-36 rounded-full border border-[#2438ff]/20 transition group-hover:scale-110" />
              <DemoIcon className="h-10 w-10" />
            </div>
            <h3 className="mt-14 text-2xl font-semibold text-slate-950 dark:text-white">
              {demo.title}
            </h3>
            <p className="mt-4 max-w-sm text-slate-600 dark:text-white/55">
              {demo.copy}
            </p>
          </div>

          <div className="min-h-[410px] p-6 sm:p-8">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-white/35">
                  Live workflow
                </p>
                <p className="mt-1 font-semibold text-slate-950 dark:text-white">
                  {demo.label}
                </p>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                <Play className="h-4 w-4 fill-current" />
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {demo.transcript.map((line, index) => (
                <div
                  key={line}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.035] dark:text-white/62 dark:shadow-none"
                >
                  <span className="mr-3 inline-grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 dark:bg-white/8 dark:text-white/55">
                    {index + 1}
                  </span>
                  {line}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] dark:bg-white dark:text-slate-950">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <p className="font-semibold">Prefer a quick call?</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65 dark:text-slate-600">
                Book a live walkthrough and we will map the best voice workflow
                for your current operation.
              </p>
              <Link
                href={CALENDLY_LINK}
                className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-[16px] bg-[#2438ff] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1025db]"
              >
                Book a live demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-slate-500 dark:text-white/42">
          By using our AI-powered services, including voice agents, text-to-speech,
          speech-to-text, and voice cloning, you agree to responsible usage,
          privacy safeguards, and approved business workflows.
        </p>
      </div>
    </section>
  );
}

function Visual({ type }: { type: string }) {
  if (type === "chart") {
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50 dark:bg-white/[0.025]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-50 dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
        <svg viewBox="0 0 320 190" className="absolute inset-0 h-full w-full">
          <path d="M24 144 C70 104 96 128 132 104 C170 78 186 128 224 68 C250 28 272 66 304 28" fill="none" stroke="#2438ff" strokeWidth="5" />
          <circle cx="224" cy="68" r="10" fill="#2438ff" />
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
            {index === 0 ? <ArrowRight className="ml-auto mt-8 h-5 w-5 text-[#2438ff]" /> : null}
          </div>
        ))}
      </div>
    );
  }

  if (type === "pulse") {
    return (
      <div className="grid h-52 place-items-center">
        <div className="relative grid h-28 w-28 place-items-center rounded-full bg-[#2438ff]/10">
          <span className="absolute h-40 w-40 rounded-full border border-[#2438ff]/15" />
          <span className="absolute h-56 w-56 rounded-full border border-[#2438ff]/8" />
          <BadgeCheck className="h-12 w-12 text-[#2438ff]" />
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
              Advanced Capabilities for Your <span className="text-slate-400 dark:text-white/40">AI Workforce</span>
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
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-[#2438ff] group-hover:text-white dark:bg-white/8 dark:text-white">
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
              Our <span className="text-slate-400 dark:text-white/40">Products</span>
            </>
          }
          copy="Two platforms. One goal: putting powerful AI voice and conversation tools in your hands."
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
                <div className="grid h-12 w-12 place-items-center rounded-[14px] border border-slate-200 bg-slate-50 text-slate-700 transition group-hover:border-[#2438ff] group-hover:bg-[#2438ff] group-hover:text-white dark:border-white/12 dark:bg-white/[0.07] dark:text-white">
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

function PricingSection() {
  return (
    <section id="pricing" className="relative z-10 border-t border-slate-200 px-4 py-24 dark:border-white/8">
      <div className="mx-auto max-w-[1190px]">
        <SectionHeading
          title={
            <>
              Plans for Every <span className="text-slate-400 dark:text-white/40">Scale</span>
            </>
          }
          copy="Simple, transparent pricing for Agents and Studio. Choose what is right for you."
        />
        <div className="mt-8 text-center">
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/72 dark:hover:text-white">
            View plan comparisons and FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`rounded-[28px] border p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.11)] dark:shadow-none sm:p-8 ${
                index === 1
                  ? "border-[#2438ff]/30 bg-[#2438ff] text-white"
                  : "border-slate-200 bg-white text-slate-950 dark:border-white/10 dark:bg-[#08090c] dark:text-white"
              }`}
            >
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className={`mt-4 min-h-12 text-sm leading-6 ${index === 1 ? "text-white/70" : "text-slate-500 dark:text-white/52"}`}>{plan.eyebrow}</p>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-semibold">{plan.price}</span>
                {plan.cadence ? <span className={`pb-2 ${index === 1 ? "text-white/60" : "text-slate-500 dark:text-white/48"}`}>{plan.cadence}</span> : null}
              </div>
              <Link href={CALENDLY_LINK} className={`mt-8 flex w-full items-center justify-center rounded-[14px] px-5 py-3 font-semibold transition hover:-translate-y-0.5 ${index === 1 ? "bg-white text-slate-950 hover:bg-white/88" : "bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-white/82"}`}>
                {plan.cta}
              </Link>
              <div className="mt-8 grid gap-4">
                {plan.features.map((feature) => (
                  <div key={feature} className={`flex items-center gap-3 border-b pb-4 text-sm last:border-b-0 ${index === 1 ? "border-white/16 text-white/78" : "border-slate-200 text-slate-600 dark:border-white/8 dark:text-white/68"}`}>
                    <Check className="h-4 w-4 shrink-0" />
                    {feature}
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
              Book a demo
            </Link>
            <Link href={LOGIN_LINK} className="text-slate-600 transition hover:text-slate-950 dark:text-white/72 dark:hover:text-white">
              Login
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
    <main className={`${isDark ? "dark bg-[#050608] text-white" : "bg-[#f8fbff] text-slate-950"} min-h-screen overflow-hidden font-sans transition-colors duration-300`}>
      <Header isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <section className="relative min-h-[740px] px-4 pt-36 sm:min-h-[780px] sm:pt-44">
        <OrbitalHero />
        <div className="relative z-10 mx-auto flex max-w-[1120px] flex-col items-center text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70">
            <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
            Made with Love in Riyadh
          </div>
          <h1 className="max-w-6xl text-[42px] font-semibold leading-[1.12] text-slate-950 sm:text-6xl lg:text-[74px] dark:text-white">
            The Future of AI Voice, Now for Your Contact Center
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-slate-600 dark:text-white/55 sm:text-lg">
            From autonomous AI agents for your business to realistic voice
            generation for customer journeys. Discover the Telo AI platform.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#demos" className="inline-flex items-center justify-center gap-3 rounded-[14px] bg-slate-950 px-6 py-3.5 font-semibold text-white shadow-[0_18px_42px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-white/82">
              Try The Demos
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={CALENDLY_LINK} className="inline-flex items-center justify-center gap-3 rounded-[14px] border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/8">
              Contact us
              <CalendarCheck className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid w-full max-w-4xl gap-4 rounded-[28px] border border-slate-200 bg-white/76 p-3 text-left shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:grid-cols-3">
            {[
              ["24/7", "Answer every call"],
              ["32+", "Languages supported"],
              ["60 min", "Typical setup path"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[20px] bg-white p-5 shadow-sm dark:bg-white/[0.055] dark:shadow-none">
                <p className="text-3xl font-semibold text-slate-950 dark:text-white">{value}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-white/48">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoSection />
      <CapabilitiesSection />
      <ProductsSection />
      <IndustriesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
