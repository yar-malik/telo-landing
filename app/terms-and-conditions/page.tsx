"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <SiteHeader />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-6">
              <h2 className="text-lg font-semibold mb-4 text-slate-900">
                Quick Navigation
              </h2>
              <nav className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((section) => (
                  <a
                    key={section}
                    href={`#section-${section}`}
                    className="block text-slate-600 hover:text-primary transition-colors"
                  >
                    {section}. {getSectionTitle(section)}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Terms Content */}
          <div className="md:w-3/4">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold mb-6 text-slate-900">
                Terms and Conditions
              </h1>
              <p className="text-slate-600 mb-8">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              <section id="section-1" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">
                  1. Agreement
                </h2>
                <p className="text-slate-600">
                  These Terms and Conditions govern the use of Connect AI
                  Solutions' Automation Agency services. By engaging Connect AI
                  Solutions for any Services, you agree to be bound by these
                  Terms.
                </p>
              </section>

              <section id="section-2" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">
                  2. Services
                </h2>
                <p className="text-slate-600 mb-4">
                  Connect AI Solutions provides a range of AI-powered services,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>
                    <span className="font-medium">
                      AI-Powered Customer Support:
                    </span>{" "}
                    24/7 AI chatbot and support systems.
                  </li>
                  <li>
                    <span className="font-medium">Email Marketing:</span>{" "}
                    Hyper-personalized campaigns with AI-driven segmentation and
                    automation.
                  </li>
                  <li>
                    <span className="font-medium">Content Recommendation:</span>{" "}
                    Tailored content recommendations for website visitors.
                  </li>
                  <li>
                    <span className="font-medium">Operational Automation:</span>{" "}
                    Automation of routine tasks like social media management and
                    data entry.
                  </li>
                  <li>
                    <span className="font-medium">Visitor Re-engagement:</span>{" "}
                    AI-powered tools to identify and re-engage website visitors.
                  </li>
                  <li>
                    <span className="font-medium">AI Consulting:</span> Expert
                    guidance on AI strategy, implementation, and optimization.
                  </li>
                </ul>
              </section>

              <section id="section-3" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">
                  3. Client Responsibilities
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>
                    <span className="font-medium">
                      Provide accurate information:
                    </span>{" "}
                    Clients are responsible for providing accurate and complete
                    information to Connect AI Solutions.
                  </li>
                  <li>
                    <span className="font-medium">Access and security:</span>{" "}
                    Clients are responsible for maintaining the security of
                    their accounts and any login credentials.
                  </li>
                  <li>
                    <span className="font-medium">
                      Third-party integrations:
                    </span>{" "}
                    Clients are responsible for ensuring compatibility and
                    security of any third-party integrations with Connect AI
                    Solutions' services.
                  </li>
                  <li>
                    <span className="font-medium">Data privacy:</span> Clients
                    are responsible for ensuring compliance with all applicable
                    data privacy laws and regulations.
                  </li>
                </ul>
              </section>

              <section id="section-4" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">
                  4. Intellectual Property
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>
                    Connect AI Solutions retains all intellectual property
                    rights in its software, technology, and any materials
                    provided as part of the Services.
                  </li>
                  <li>
                    Clients retain ownership of their own data and content.
                  </li>
                </ul>
              </section>

              <section id="section-5" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">
                  5. Service Level Agreements (SLAs)
                </h2>
                <p className="text-slate-600">
                  SLAs may be agreed upon separately in writing for specific
                  services.
                </p>
              </section>

              <section id="section-6" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">
                  6. Limitations of Liability
                </h2>
                <p className="text-slate-600">
                  Connect AI Solutions shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages
                  arising out of or relating to the use of the Services.
                </p>
              </section>

              <section id="section-7" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">
                  7. Termination
                </h2>
                <p className="text-slate-600">
                  This Agreement may be terminated by either party upon written
                  notice to the other party.
                </p>
              </section>

              <section id="section-8" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">
                  8. Governing Law
                </h2>
                <p className="text-slate-600">
                  These Terms shall be governed by and construed in accordance
                  with the laws of United Kingdom.
                </p>
              </section>

              <section id="section-9" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">
                  9. Modifications
                </h2>
                <p className="text-slate-600">
                  Connect AI Solutions reserves the right to modify these Terms
                  at any time. Any changes will be effective upon posting on the
                  Connect AI Solutions website.
                </p>
              </section>

              <section id="section-10" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">
                  10. Entire Agreement
                </h2>
                <p className="text-slate-600">
                  These Terms constitute the entire agreement between the
                  parties with respect to the subject matter hereof and
                  supersede all prior or contemporaneous communications,
                  representations, or agreements, whether oral or written.
                </p>
              </section>

              <section id="section-11" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">
                  11. Contact
                </h2>
                <p className="text-slate-600">
                  For any questions regarding these Terms, please contact us at{" "}
                  <a
                    href="mailto:contact@connectaisolutions.com"
                    className="text-primary hover:underline"
                  >
                    contact@connectaisolutions.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}

function getSectionTitle(section: number): string {
  const titles = {
    1: "Agreement",
    2: "Services",
    3: "Client Responsibilities",
    4: "Intellectual Property",
    5: "Service Level Agreements",
    6: "Limitations of Liability",
    7: "Termination",
    8: "Governing Law",
    9: "Modifications",
    10: "Entire Agreement",
    11: "Contact",
  };
  return titles[section as keyof typeof titles];
}
