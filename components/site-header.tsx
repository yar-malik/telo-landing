"use client"

import Link from "next/link"
import Image from "next/image"
import { CALENDLY_LINK } from "@/constants"

export function SiteHeader() {
  return (
    <header className="px-6 md:px-12 py-3 flex justify-between items-center sticky top-0 z-50 bg-white backdrop-blur-lg backdrop-filter opacity-90">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="ConnectAI Solutions Logo"
            width={180}
            height={180}
            className="h-[60px] w-auto"
            priority
          />
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/pricing" className="text-gray-900 font-medium">
          Pricing
        </Link>
        <a
          target="_blank"
          href={CALENDLY_LINK}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          rel="noreferrer"
        >
          Book a demo
        </a>
      </nav>
    </header>
  )
}
