"use client";

import Link from "next/link";
import Image from "next/image";
import { CALENDLY_LINK } from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#use-cases", label: "Use Cases" },
    { href: "/#features", label: "Features" },
    { href: "/#saudi", label: "Saudi Arabic" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-4 py-4">
        <div className="mx-auto flex max-w-[1152px] items-center justify-between rounded-[28px] border border-emerald-100/80 bg-white/85 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-green.png"
              alt="Telo AI"
              width={185}
              height={64}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded px-2 py-1 font-medium transition-colors ${
                  isActive ? "text-[#0f8f5f]" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <nav className="hidden md:flex items-center gap-8">
          <a
            target="_blank"
            href={CALENDLY_LINK}
            className="rounded-[13px] bg-[#0f8f5f] px-5 py-2.5 font-semibold text-white shadow-[0_14px_34px_rgba(15,143,95,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0b744d]"
            rel="noreferrer"
          >
            Book a call
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-10 w-10 place-items-center rounded-full text-slate-700"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar mobile menu */}
            <motion.div
              className="fixed left-0 top-0 z-50 flex h-full w-80 flex-col bg-white shadow-xl md:hidden"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <Image
                  src="/images/logo-green.png"
                  alt="Telo AI"
                  width={150}
                  height={50}
                  className="h-[40px] w-auto"
                />
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <nav className="flex flex-col p-6 space-y-2 flex-1">
                {navLinks.map(({ href, label }, index) => {
                  const isActive = pathname === href;
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className={`block text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                          isActive
                            ? "bg-emerald-50 text-[#0f8f5f]"
                            : "text-gray-700 hover:bg-emerald-50 hover:text-[#0f8f5f]"
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="p-6 border-t border-gray-100">
                <motion.a
                  target="_blank"
                  href={CALENDLY_LINK}
                  className="block w-full rounded-lg bg-[#0f8f5f] px-6 py-3 text-center font-medium text-white transition-colors hover:bg-[#0b744d]"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a call
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
