"use client"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const sections = [
  {
    title: "Agreement",
    body: [
      "These Terms and Conditions apply when you use the Telo AI website, contact us, book a meeting, or engage Telo AI for services.",
      "Any signed proposal, service order, statement of work, or written agreement will control if it conflicts with these general terms.",
    ],
  },
  {
    title: "Services",
    body: [
      "Telo AI provides Arabic-first voice AI and automation services for Saudi teams, including inbound call handling, outbound calling, qualification, support workflows, integrations, and AI consulting.",
      "The exact scope, pricing, timeline, and delivery requirements are agreed separately for each customer engagement.",
    ],
  },
  {
    title: "Client Responsibilities",
    body: [
      "Clients are responsible for providing accurate project information, approved business requirements, and timely feedback.",
      "Clients must maintain the security of approved integration credentials, third-party systems, and data access they choose to provide to Telo AI.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "You may not use Telo AI services for unlawful, deceptive, abusive, or unauthorized communications.",
      "You are responsible for ensuring your campaigns, call flows, customer data, and consent practices comply with applicable laws and platform rules.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Telo AI retains ownership of its software, models, know-how, templates, processes, and technology unless a written agreement says otherwise.",
      "Clients retain ownership of their own business data, customer data, brand assets, and content provided to Telo AI.",
    ],
  },
  {
    title: "Service Levels",
    body: [
      "Service levels, support windows, maintenance terms, and success criteria may be defined in a separate written agreement for each project.",
    ],
  },
  {
    title: "Limitations of Liability",
    body: [
      "To the fullest extent permitted by applicable law, Telo AI is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the website or services.",
      "Any liability limits agreed in a signed service order or contract will apply to the relevant engagement.",
    ],
  },
  {
    title: "Termination",
    body: [
      "Either party may end an engagement according to the termination terms in the relevant proposal, service order, or written agreement.",
      "If no separate terms apply, either party may request termination in writing, subject to payment for approved work already completed or committed.",
    ],
  },
  {
    title: "Governing Terms",
    body: [
      "The governing law and dispute process may be defined in the relevant written agreement between Telo AI and the customer.",
      "Where no separate agreement exists, these terms will be interpreted according to applicable law and the commercial context of the services provided.",
    ],
  },
  {
    title: "Updates",
    body: [
      "Telo AI may update these Terms and Conditions from time to time. The latest version will be posted on this page with an updated date.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about these Terms and Conditions, contact Telo AI at hello@teloai.app.",
    ],
  },
]

export default function TermsAndConditionsPage() {
  const updatedAt = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7fbf8] text-slate-950">
      <SiteHeader />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-12rem] top-16 h-80 w-80 rounded-full border border-emerald-200/70" />
          <div className="absolute left-[-8rem] top-56 h-96 w-96 rounded-full border border-dashed border-emerald-300/70" />
          <div className="absolute bottom-20 right-1/4 h-52 w-52 rounded-full bg-emerald-100/50 blur-3xl" />
        </div>

        <section className="relative mx-auto max-w-[1190px] px-4 pb-12 pt-10 sm:px-6 lg:pb-16 lg:pt-16">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-[#0f8f5f] shadow-[0_10px_28px_rgba(15,143,95,0.08)]">
              Terms for working together
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Terms and Conditions
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A clear outline of how Telo AI engagements, voice AI projects, and customer responsibilities are handled.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-500">Last updated: {updatedAt}</p>
          </div>
        </section>

        <section className="relative mx-auto grid max-w-[1190px] gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[280px_1fr] lg:pb-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[24px] border border-emerald-100 bg-white/90 p-5 shadow-[0_18px_54px_rgba(15,23,42,0.08)] backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f8f5f]">On this page</p>
              <nav className="mt-4 space-y-1">
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#section-${index + 1}`}
                    className="block rounded-2xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-[#0f8f5f]"
                  >
                    {index + 1}. {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:p-8 lg:p-10">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  id={`section-${index + 1}`}
                  className="scroll-mt-32 rounded-[22px] border border-slate-100 bg-slate-50/60 p-5 transition hover:border-emerald-200 hover:bg-emerald-50/45 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0f8f5f] text-sm font-semibold text-white shadow-[0_12px_26px_rgba(15,143,95,0.22)]">
                      {index + 1}
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
                      <div className="mt-3 space-y-3 text-base leading-7 text-slate-600">
                        {section.body.map((paragraph) =>
                          paragraph.includes("hello@teloai.app") ? (
                            <p key={paragraph}>
                              For questions about these Terms and Conditions, contact Telo AI at{" "}
                              <a className="font-semibold text-[#0f8f5f] hover:underline" href="mailto:hello@teloai.app">
                                hello@teloai.app
                              </a>
                              .
                            </p>
                          ) : (
                            <p key={paragraph}>{paragraph}</p>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
