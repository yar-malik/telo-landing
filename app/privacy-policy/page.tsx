"use client"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function PrivacyPolicyPage() {
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
              <h2 className="text-lg font-semibold mb-4 text-slate-900">Quick Navigation</h2>
              <nav className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((section) => (
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

          {/* Privacy Policy Content */}
          <div className="md:w-3/4">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold mb-6 text-slate-900">Privacy Policy</h1>
              <p className="text-slate-600 mb-8">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>

              <p className="text-slate-600 mb-8">
                This Privacy Policy outlines how Connect AI Solutions Automation Agency collects, uses, discloses, and
                safeguards your personal information.
              </p>

              <section id="section-1" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">1. Information We Collect</h2>
                <p className="text-slate-600 mb-4">We may collect various types of information from you, including:</p>

                <h3 className="text-lg font-medium mb-2 text-slate-800">Personal Information:</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                  <li>
                    <span className="font-medium">Contact Information:</span> Name, email address, phone number, company
                    name.
                  </li>
                  <li>
                    <span className="font-medium">Business Information:</span> Industry, company size, website URL.
                  </li>
                  <li>
                    <span className="font-medium">Project Information:</span> Details about your projects, including
                    goals, challenges, and budgets.
                  </li>
                </ul>

                <h3 className="text-lg font-medium mb-2 text-slate-800">Technical Information:</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>
                    Information collected automatically when you interact with our website or services, such as IP
                    address, browser type, device information, and browsing history.
                  </li>
                  <li>
                    <span className="font-medium">Usage Data:</span> Information about how you use our services, such as
                    the features you access and the actions you take within our platform.
                  </li>
                </ul>
              </section>

              <section id="section-2" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">2. How We Collect Information</h2>
                <p className="text-slate-600 mb-4">We collect information through various means, including:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>
                    <span className="font-medium">Directly from you:</span> When you provide information through our
                    website, contact forms, emails, or phone calls.
                  </li>
                  <li>
                    <span className="font-medium">Automatically:</span> Through the use of cookies, web beacons, and
                    other tracking technologies.
                  </li>
                  <li>
                    <span className="font-medium">From third parties:</span> With your consent or as permitted by law,
                    we may receive information about you from third-party sources.
                  </li>
                </ul>
              </section>

              <section id="section-3" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">3. How We Use Your Information</h2>
                <p className="text-slate-600 mb-4">We use your information for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>
                    <span className="font-medium">Providing our services:</span> To deliver the AI solutions you have
                    requested, such as AI-powered customer support, email marketing, content recommendations, and
                    operational automation.
                  </li>
                  <li>
                    <span className="font-medium">Communicating with you:</span> To respond to your inquiries, provide
                    customer support, and send you updates and notifications.
                  </li>
                  <li>
                    <span className="font-medium">Improving our services:</span> To analyze usage data and improve the
                    functionality and performance of our services.
                  </li>
                  <li>
                    <span className="font-medium">Marketing and sales:</span> To send you marketing communications, such
                    as newsletters, promotions, and event invitations, with your consent.
                  </li>
                  <li>
                    <span className="font-medium">Compliance with legal obligations:</span> To comply with applicable
                    laws and regulations.
                  </li>
                </ul>
              </section>

              <section id="section-4" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">4. Data Security</h2>
                <p className="text-slate-600">
                  We take reasonable measures to protect your personal information from unauthorized access, use,
                  disclosure, alteration, and destruction. However, no method of transmission over the internet or
                  method of electronic storage is completely secure.
                </p>
              </section>

              <section id="section-5" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">5. Data Sharing</h2>
                <p className="text-slate-600 mb-4">We may share your personal information with:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>
                    <span className="font-medium">Service providers:</span> Third-party companies that provide services
                    to us, such as data processing, website hosting, and email delivery.
                  </li>
                  <li>
                    <span className="font-medium">Business partners:</span> With your consent, we may share your
                    information with our business partners for marketing or other purposes.
                  </li>
                  <li>
                    <span className="font-medium">Legal authorities:</span> To comply with legal requests or when
                    required by law.
                  </li>
                </ul>
              </section>

              <section id="section-6" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">6. Your Rights</h2>
                <p className="text-slate-600 mb-4">
                  You may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>
                    <span className="font-medium">Access:</span> The right to access and request a copy of your personal
                    information.
                  </li>
                  <li>
                    <span className="font-medium">Correction:</span> The right to request the correction of inaccurate
                    or incomplete information.
                  </li>
                  <li>
                    <span className="font-medium">Erasure:</span> The right to request the deletion of your personal
                    information in certain circumstances.
                  </li>
                  <li>
                    <span className="font-medium">Restriction:</span> The right to restrict the processing of your
                    personal information.
                  </li>
                  <li>
                    <span className="font-medium">Data portability:</span> The right to receive your personal
                    information in a portable format.
                  </li>
                  <li>
                    <span className="font-medium">Objection:</span> The right to object to the processing of your
                    personal information in certain circumstances.
                  </li>
                </ul>
              </section>

              <section id="section-7" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">7. Cookies and Tracking Technologies</h2>
                <p className="text-slate-600">
                  We use cookies and other tracking technologies to collect information about how you use our website
                  and services. You can manage your cookie preferences through your browser settings.
                </p>
              </section>

              <section id="section-8" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">8. Children's Privacy</h2>
                <p className="text-slate-600">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal
                  information from children under 13.
                </p>
              </section>

              <section id="section-9" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">9. Changes to This Privacy Policy</h2>
                <p className="text-slate-600">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the updated policy on our website.
                </p>
              </section>

              <section id="section-10" className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-slate-900">10. Contact Us</h2>
                <p className="text-slate-600">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:contact@connectaisolutions.com" className="text-primary hover:underline">
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
  )
}

function getSectionTitle(section: number): string {
  const titles = {
    1: "Information We Collect",
    2: "How We Collect Information",
    3: "How We Use Your Information",
    4: "Data Security",
    5: "Data Sharing",
    6: "Your Rights",
    7: "Cookies and Tracking Technologies",
    8: "Children's Privacy",
    9: "Changes to This Privacy Policy",
    10: "Contact Us",
  }
  return titles[section as keyof typeof titles]
}
