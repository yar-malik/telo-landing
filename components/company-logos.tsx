'use client'

import Image from "next/image"

export function CompanyLogos() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-28">Used by companies in various industries</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="w-32 h-16 relative flex items-center justify-center">
            <Image
              src="/logos/cater.png"
              alt="CATER"
              width={120}
              height={48}
              className="opacity-30 hover:opacity-60 transition-opacity"
            />
          </div>
          <div className="w-32 h-16 relative flex items-center justify-center">
            <Image
              src="/logos/blackpearl.png"
              alt="black pearl"
              width={120}
              height={48}
              className="opacity-30 hover:opacity-60 transition-opacity"
            />
          </div>
          <div className="w-32 h-16 relative flex items-center justify-center">
            <Image
              src="/logos/metric.png"
              alt="metric"
              width={120}
              height={48}
              className="opacity-30 hover:opacity-60 transition-opacity"
            />
          </div>
          <div className="w-32 h-16 relative flex items-center justify-center">
            <Image
              src="/logos/fuze.png"
              alt="FUZE"
              width={120}
              height={48}
              className="opacity-30 hover:opacity-60 transition-opacity"
            />
          </div>
          <div className="w-32 h-16 relative flex items-center justify-center">
            <Image
              src="/logos/media.png"
              alt="medi@"
              width={120}
              height={48}
              className="opacity-30 hover:opacity-60 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
