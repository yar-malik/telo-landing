"use client"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We collect the information you choose to share when you contact Telo AI, book a meeting, request a proposal, or work with us on a voice AI deployment.",
      "This can include contact details, company information, project goals, support context, call workflow requirements, and technical information such as device, browser, IP address, and website usage data.",
    ],
  },
  {
    title: "How We Collect Information",
    body: [
      "We collect information directly from you through forms, meetings, email, phone calls, and approved project channels.",
      "We may also collect limited technical information through cookies, analytics, and similar tools so we can keep the website reliable and improve the experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use information to respond to inquiries, schedule meetings, design Saudi-ready voice AI workflows, provide support, improve our services, and communicate relevant updates.",
      "When we process customer data for a project, we use it only for the agreed business purpose and according to the terms of the relevant engagement.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use reasonable administrative, technical, and organizational safeguards to protect personal information from unauthorized access, misuse, loss, or disclosure.",
      "No internet-based service is perfectly secure, but we work to keep security practices proportionate to the sensitivity of the information we handle.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "We do not sell personal information. We may share information with trusted service providers who help us operate the website, schedule meetings, host systems, or deliver agreed services.",
      "We may also disclose information when required by law, to protect rights and safety, or with your consent.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on your location and applicable law, you may have rights to access, correct, delete, restrict, or object to the use of your personal information.",
      "To make a privacy request, contact us and we will respond in line with applicable legal requirements.",
    ],
  },
  {
    title: "Cookies and Tracking",
    body: [
      "We may use cookies and similar technologies to understand website performance and improve navigation. You can manage cookies through your browser settings.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Telo AI services are designed for businesses and are not intended for children. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Policy Updates",
    body: [
      "We may update this Privacy Policy from time to time. The latest version will be posted on this page with an updated date.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how Telo AI handles information, contact us at hello@teloai.app.",
    ],
  },
]

export default function PrivacyPolicyPage() {
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
          <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full border border-violet-200/70" />
          <div className="absolute right-[-8rem] top-48 h-96 w-96 rounded-full border border-dashed border-violet-300/70" />
          <div className="absolute bottom-16 left-1/3 h-44 w-44 rounded-full bg-violet-100/45 blur-3xl" />
        </div>

        <section className="relative mx-auto max-w-[1190px] px-4 pb-12 pt-10 sm:px-6 lg:pb-16 lg:pt-16">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-[#6b46c1] shadow-[0_10px_28px_rgba(107,70,193,0.08)]">
              Privacy, written clearly
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              How Telo AI handles information when Saudi teams contact us, book meetings, and deploy voice AI workflows.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-500">Last updated: {updatedAt}</p>
          </div>
        </section>

        <section className="relative mx-auto grid max-w-[1190px] gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[280px_1fr] lg:pb-24">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[24px] border border-violet-100 bg-white/90 p-5 shadow-[0_18px_54px_rgba(15,23,42,0.08)] backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6b46c1]">On this page</p>
              <nav className="mt-4 space-y-1">
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#section-${index + 1}`}
                    className="block rounded-2xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-violet-50 hover:text-[#6b46c1]"
                  >
                    {index + 1}. {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="rounded-[28px] border border-violet-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:p-8 lg:p-10">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  id={`section-${index + 1}`}
                  className="scroll-mt-32 rounded-[22px] border border-slate-100 bg-slate-50/60 p-5 transition hover:border-violet-200 hover:bg-violet-50/45 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#6b46c1] text-sm font-semibold text-white shadow-[0_12px_26px_rgba(107,70,193,0.22)]">
                      {index + 1}
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
                      <div className="mt-3 space-y-3 text-base leading-7 text-slate-600">
                        {section.body.map((paragraph) =>
                          paragraph.includes("hello@teloai.app") ? (
                            <p key={paragraph}>
                              If you have questions about this Privacy Policy or how Telo AI handles information, contact
                              us at{" "}
                              <a className="font-semibold text-[#6b46c1] hover:underline" href="mailto:hello@teloai.app">
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
