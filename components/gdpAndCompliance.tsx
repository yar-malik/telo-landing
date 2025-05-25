"use client";

import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="py-16 bg-purple-50 rounded-3xl my-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            We honor your trust.
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your trust is our priority. We safeguard your data with the highest standards of security and compliance, ensuring every interaction is protected and every user feels safe.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-gray-100 p-3 rounded-full w-fit mx-auto">
          {[
            {
              src: "/gdp-compliance/gdpr.png",
              label: "GDPR",
            },
            {
              src: "/gdp-compliance/ec_ai_act.png",
              label: "EU AI Act",
            },
            {
              src: "/gdp-compliance/hipaa.png",
              label: "HIPAA",
            },
            {
              src: "/gdp-compliance/soc2.png",
              label: "SOC 2",
            },
          ].map(({ src, label }) => (
            <div key={label} className="flex flex-col items-center">
              <Image
                src={src}
                alt="ConnectAI Solutions Logo"
                width={100}
                height={100}
                className="rounded-full"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
