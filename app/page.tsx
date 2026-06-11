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
  ChevronDown,
  ClipboardList,
  Copy,
  Headphones,
  Languages,
  Mail,
  Menu,
  Mic,
  Moon,
  Phone,
  Radio,
  Sparkles,
  Sun,
  Target,
  TicketCheck,
  UserRoundCheck,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { CALENDLY_LINK, DASHBOARD_PAGE_LINK } from "@/constants";

const contactEmails = ["hello@teloai.app", "support@teloai.app"];

const demoTabs = [
  { label: "AI Voice Agent", icon: Mic },
  { label: "Text To Speech", icon: Radio },
  { label: "Speech-to-Text", icon: ClipboardList },
  { label: "Voice Cloning", icon: Copy },
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
      <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-white text-black shadow-[0_0_28px_rgba(54,70,255,0.35)]">
        <div className="flex h-6 items-center gap-[3px]">
          {[14, 22, 30, 18, 26].map((height, index) => (
            <span
              key={index}
              className="w-[3px] rounded-full bg-black"
              style={{ height }}
            />
          ))}
        </div>
      </div>
      <div className="leading-none">
        <div className="text-[13px] font-black uppercase tracking-[0.32em] text-white">
          Telo AI
        </div>
        <div className="mt-1 text-xs font-medium text-white/60">Voice agents</div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Products", href: "#products", dropdown: true },
    { label: "Resources", href: "#features", dropdown: true },
    { label: "Demos", href: "#demos" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-6">
      <div className="mx-auto flex max-w-[1152px] items-center justify-between rounded-[28px] border border-white/10 bg-[#08090c]/85 px-4 py-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6">
        <Link href="/" aria-label="Telo AI home">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/82 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 transition hover:text-white"
            >
              {link.label}
              {link.dropdown ? <ChevronDown className="h-3.5 w-3.5" /> : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button aria-label="Translate" className="grid h-9 w-9 place-items-center rounded-full text-white/80 transition hover:bg-white/8 hover:text-white">
            <Languages className="h-4 w-4" />
          </button>
          <button aria-label="Toggle theme" className="grid h-9 w-9 place-items-center rounded-full text-white/80 transition hover:bg-white/8 hover:text-white">
            <Sun className="h-4 w-4" />
          </button>
          <Link
            href={DASHBOARD_PAGE_LINK}
            className="rounded-[13px] border border-[#3340ff]/70 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_18px_rgba(50,57,255,0.22)] transition hover:bg-white/8"
          >
            Login
          </Link>
          <Link
            href={CALENDLY_LINK}
            className="rounded-[13px] bg-[#3038f2] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_22px_rgba(48,56,242,0.48)] transition hover:bg-[#4d55ff]"
          >
            Contact us
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-[1152px] rounded-[24px] border border-white/10 bg-[#08090c]/95 p-4 text-white shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-white/80 hover:bg-white/8 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Link href={DASHBOARD_PAGE_LINK} className="rounded-2xl border border-white/12 px-4 py-3 text-center text-sm">
              Login
            </Link>
            <Link href={CALENDLY_LINK} className="rounded-2xl bg-[#3038f2] px-4 py-3 text-center text-sm font-semibold">
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
      <div className="absolute left-1/2 top-20 h-[760px] w-[760px] -translate-x-1/2 rounded-full border border-dashed border-white/10" />
      <div className="absolute left-1/2 top-0 h-[1040px] w-[1040px] -translate-x-1/2 rounded-full border border-dashed border-white/8" />
      <div className="absolute left-1/2 top-[-120px] h-[1320px] w-[1320px] -translate-x-1/2 rounded-full border border-dashed border-white/6" />
      <span className="absolute left-[27%] top-[22%] h-2 w-2 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.7)]" />
      <span className="absolute right-[25%] top-[44%] h-1.5 w-1.5 rounded-full bg-white/70" />
      <span className="absolute left-[38%] top-[72%] h-2.5 w-2.5 rounded-full border border-white/30 bg-white/15" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07080a] to-transparent" />
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
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.42em] text-white/70">
          <Sparkles className="h-3.5 w-3.5 text-[#3038f2]" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function DemoSection() {
  return (
    <section id="demos" className="relative z-10 px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-[1116px]">
        <SectionHeading
          eyebrow="Interactive demos"
          title={
            <>
              Experience Telo&apos;s voice products in one{" "}
              <span className="text-white/45">place</span>
            </>
          }
          copy="Try voice AI in action with live agents, text-to-speech, transcription, and voice cloning designed for realistic customer conversations."
        />

        <div className="mt-12 rounded-[18px] border border-white/10 bg-white/[0.08] p-2">
          <div className="grid gap-2 md:grid-cols-4">
            {demoTabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.label}
                  className={`flex items-center justify-center gap-2 rounded-[13px] px-4 py-3 text-sm font-medium transition ${
                    index === 0
                      ? "bg-[#3038f2] text-white shadow-[0_0_26px_rgba(48,56,242,0.45)]"
                      : "text-white/82 hover:bg-white/8"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid overflow-hidden rounded-[24px] border border-white/10 bg-[#08090c] lg:grid-cols-2">
          <div className="flex min-h-[380px] flex-col items-center justify-center border-b border-white/10 p-8 text-center lg:border-b-0 lg:border-r">
            <button aria-label="Start voice demo" className="relative grid h-28 w-28 place-items-center rounded-full bg-[#3038f2] text-white shadow-[0_0_0_32px_rgba(48,56,242,0.08),0_0_0_62px_rgba(48,56,242,0.04),0_0_70px_rgba(48,56,242,0.65)]">
              <Mic className="h-10 w-10" />
            </button>
            <h3 className="mt-16 text-2xl font-semibold text-white">
              Click the Mic to start talking
            </h3>
            <p className="mt-4 text-white/52">Receive an instant call from our AI agent.</p>
          </div>

          <div className="flex min-h-[380px] flex-col items-center justify-center p-8 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#3038f2] text-white">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">
              Prefer a quick call?
            </h3>
            <p className="mt-3 max-w-sm text-white/52">
              Call us directly to discuss the voice agent demo with our team.
            </p>
            <Link
              href={CALENDLY_LINK}
              className="mt-8 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-[18px] bg-[#3038f2] px-6 py-5 text-lg font-bold text-white transition hover:bg-[#4d55ff]"
            >
              <Phone className="h-5 w-5" />
              Book a live demo
            </Link>
            <p className="mt-4 text-sm text-white/45">Available for demo and sales questions.</p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-white/45">
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
      <div className="relative h-52 overflow-hidden rounded-2xl bg-white/[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px] opacity-50" />
        <svg viewBox="0 0 320 190" className="absolute inset-0 h-full w-full">
          <path d="M24 144 C70 104 96 128 132 104 C170 78 186 128 224 68 C250 28 272 66 304 28" fill="none" stroke="#3038f2" strokeWidth="5" />
          <circle cx="224" cy="68" r="10" fill="#3038f2" />
        </svg>
      </div>
    );
  }

  if (type === "handoff") {
    return (
      <div className="flex h-52 items-center justify-center gap-6">
        {["To Do", "In Progress"].map((label, index) => (
          <div key={label} className="h-36 w-32 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
            <p className="text-sm font-semibold text-white/75">{label}</p>
            <div className="mt-5 h-3 rounded-full bg-white/12" />
            <div className="mt-3 h-3 w-3/4 rounded-full bg-white/10" />
            {index === 0 ? <ArrowRight className="ml-auto mt-8 h-5 w-5 text-[#3038f2]" /> : null}
          </div>
        ))}
      </div>
    );
  }

  if (type === "pulse") {
    return (
      <div className="grid h-52 place-items-center">
        <div className="relative grid h-28 w-28 place-items-center rounded-full bg-[#3038f2]/15">
          <span className="absolute h-40 w-40 rounded-full border border-[#3038f2]/20" />
          <span className="absolute h-56 w-56 rounded-full border border-[#3038f2]/10" />
          <BadgeCheck className="h-12 w-12 text-[#4d55ff]" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-52 place-items-center">
      <div className="relative h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.08]">
        <UserRoundCheck className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-white/70" />
        {[["-70px", "8px", Mail], ["86px", "10px", BarChart3], ["-58px", "78px", Zap], ["92px", "78px", ClipboardList]].map(([left, top, Icon], index) => {
          const NodeIcon = Icon as typeof Mail;
          return (
            <div
              key={index}
              className="absolute grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.08]"
              style={{ left: left as string, top: top as string }}
            >
              <NodeIcon className="h-5 w-5 text-white/65" />
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
              Advanced Capabilities for Your <span className="text-white/45">AI Workforce</span>
            </>
          }
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={`rounded-[24px] border border-white/10 bg-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${
                  index === 4 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-white" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="mt-4 min-h-16 text-sm leading-7 text-white/48">{feature.copy}</p>
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
    <section id="products" className="relative z-10 border-t border-white/6 px-4 py-24">
      <div className="mx-auto max-w-[1190px]">
        <SectionHeading
          title={
            <>
              Our <span className="text-white/45">Products</span>
            </>
          }
          copy="Two platforms. One goal: putting powerful AI voice and conversation tools in your hands."
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {productCards.map((product) => (
            <article key={product.title} className="rounded-[26px] border border-white/10 bg-white/[0.015] p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
              <p className="mt-5 text-base leading-8 text-white/52">{product.copy}</p>
              <div className="mt-8 grid gap-6">
                {product.points.map((point) => (
                  <div key={point} className="flex gap-4">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/12 text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="text-white/72">{point}</p>
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
    <section className="relative z-10 border-t border-white/6 px-4 py-24">
      <div className="mx-auto max-w-[1190px]">
        <SectionHeading
          title={
            <>
              Solutions for Every <span className="text-white/45">Industry</span>
            </>
          }
          copy="From appointment scheduling to complaint resolution, see how Telo serves diverse use cases."
        />
        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article key={industry.title} className="min-h-44 rounded-[22px] border border-white/10 bg-white/[0.015] p-6">
                <div className="grid h-12 w-12 place-items-center rounded-[14px] border border-white/12 bg-white/[0.07] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-xl font-semibold text-white">{industry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/48">{industry.copy}</p>
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
    <section id="pricing" className="relative z-10 border-t border-white/6 px-4 py-24">
      <div className="mx-auto max-w-[1190px]">
        <SectionHeading
          title={
            <>
              Plans for Every <span className="text-white/45">Scale</span>
            </>
          }
          copy="Simple, transparent pricing for Agents and Studio. Choose what is right for you."
        />
        <div className="mt-8 text-center">
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm text-white/72 transition hover:text-white">
            View plan comparisons and FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="rounded-[26px] border border-white/10 bg-[#08090c] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 min-h-12 text-sm leading-6 text-white/52">{plan.eyebrow}</p>
              <div className="mt-8 flex items-end gap-2 text-white">
                <span className="text-5xl font-semibold">{plan.price}</span>
                {plan.cadence ? <span className="pb-2 text-white/48">{plan.cadence}</span> : null}
              </div>
              <Link href={CALENDLY_LINK} className="mt-8 flex w-full items-center justify-center rounded-[14px] bg-white px-5 py-3 font-semibold text-black transition hover:bg-white/82">
                {plan.cta}
              </Link>
              <div className="mt-8 grid gap-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center justify-between gap-5 border-b border-white/8 pb-4 text-sm text-white/68 last:border-b-0">
                    <span className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-white" />
                      {feature}
                    </span>
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
    <footer className="relative z-10 border-t border-white/8 px-4 py-16">
      <div className="mx-auto grid max-w-[1190px] gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <LogoMark />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/48">
            Telo AI builds production-ready voice agents for customer operations,
            sales, support, and booking workflows.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">Contact</h3>
          <div className="mt-5 grid gap-3">
            {contactEmails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="flex items-center gap-3 text-white/72 transition hover:text-white">
                <Mail className="h-4 w-4" />
                {email}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">Actions</h3>
          <div className="mt-5 grid gap-3">
            <Link href={CALENDLY_LINK} className="text-white/72 transition hover:text-white">
              Book a demo
            </Link>
            <Link href={DASHBOARD_PAGE_LINK} className="text-white/72 transition hover:text-white">
              Login
            </Link>
            <Link href="/privacy-policy" className="text-white/72 transition hover:text-white">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1190px] flex-col justify-between gap-4 border-t border-white/8 pt-8 text-sm text-white/38 sm:flex-row">
        <span>Copyright 2026 Telo AI. All rights reserved.</span>
        <span className="flex items-center gap-2">
          <Moon className="h-4 w-4" />
          Voice AI for always-on teams
        </span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050608] font-sans text-white">
      <Header />
      <section className="relative min-h-[720px] px-4 pt-36 sm:min-h-[760px] sm:pt-44">
        <OrbitalHero />
        <div className="relative z-10 mx-auto flex max-w-[1120px] flex-col items-center text-center">
          <div className="mb-9 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70">
            Made for modern customer teams
          </div>
          <h1 className="max-w-6xl text-[44px] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-6xl lg:text-[74px]">
            The Future of AI Voice, Now for Your Contact Center
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
            From autonomous AI agents for your business to realistic voice
            generation for customer journeys. Discover the Telo AI platform.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#demos" className="inline-flex items-center justify-center gap-3 rounded-[13px] bg-white px-5 py-3 font-semibold text-black transition hover:bg-white/80">
              Try The Demos
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={CALENDLY_LINK} className="inline-flex items-center justify-center gap-3 rounded-[13px] border border-white/10 bg-white/[0.04] px-5 py-3 font-semibold text-white transition hover:bg-white/8">
              Contact us
              <CalendarCheck className="h-4 w-4" />
            </Link>
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
