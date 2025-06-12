"use client";

import Link from "next/link";
import Image from "next/image";
import { DASHBOARD_PAGE_LINK } from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#pricing", label: "Pricing" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#features", label: "Features" },
    { href: "#team", label: "Our Team" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <header className="w-full px-6 md:px-12 py-3 flex justify-between items-center sticky top-0 z-50 bg-purple-50/70 backdrop-blur-md backdrop-saturate-150">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="ConnectAI Solutions Logo"
              width={180}
              height={180}
              className="h-[50px] w-auto"
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
                className={`font-medium px-2 py-1 rounded transition-colours ${
                  isActive ? "text-primary" : "text-gray-700"
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
            href={DASHBOARD_PAGE_LINK}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colours"
            rel="noreferrer"
          >
            Start Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
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
              className="fixed top-0 left-0 w-80 h-full bg-white shadow-xl z-50 flex flex-col md:hidden"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <Image
                  src="/images/logo.png"
                  alt="ConnectAI Solutions Logo"
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
                            ? "text-primary bg-purple-50"
                            : "text-gray-700 hover:text-primary hover:bg-gray-50"
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
                  href={DASHBOARD_PAGE_LINK}
                  className="block w-full text-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  rel="noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Now
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
