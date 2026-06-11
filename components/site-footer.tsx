"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { CALENDLY_LINK } from "@/constants";

const contactEmails = ["hello@teloai.app", "support@teloai.app"];

export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-100 bg-white px-4 py-14">
      <div className="mx-auto grid max-w-[1190px] gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Telo AI home" className="inline-flex">
            <Image
              src="/images/logo-green.png"
              alt="Telo AI"
              width={185}
              height={64}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
            Saudi-first AI voice agents for customer operations, support,
            bookings, and local Arabic conversations.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Contact
          </h3>
          <div className="mt-5 grid gap-3">
            {contactEmails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-slate-600 transition hover:text-slate-950"
              >
                <Mail className="h-4 w-4 text-[#0f8f5f]" />
                {email}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Actions
          </h3>
          <div className="mt-5 grid gap-3">
            <Link
              href={CALENDLY_LINK}
              className="text-slate-600 transition hover:text-slate-950"
            >
              Book a call
            </Link>
            <Link
              href="/faq"
              className="text-slate-600 transition hover:text-slate-950"
            >
              FAQ
            </Link>
            <Link
              href="/privacy-policy"
              className="text-slate-600 transition hover:text-slate-950"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-slate-600 transition hover:text-slate-950"
            >
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1190px] flex-col justify-between gap-4 border-t border-emerald-100 pt-8 text-sm text-slate-400 sm:flex-row">
        <span>Copyright 2026 Telo AI. All rights reserved.</span>
        <span className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-[#0f8f5f]" />
          Voice AI for always-on Saudi teams
        </span>
      </div>
    </footer>
  );
}
