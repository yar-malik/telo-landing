"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Check, Users, Search, UserCheck, Briefcase } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CALENDLY_LINK } from "@/constants"
import { AgentImage } from "@/components/agent-image"

export default function RecruitmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="max-w-[1400px] mx-auto py-12 md:py-20 px-2 sm:px-8 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-28">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Meet Alex, your <br /> AI Recruitment Agent
              </h1>
              <p className="text-gray-500 md:text-xl max-w-2xl">
                Alex screens candidates, schedules interviews, and manages recruitment enquiries 24/7 to find the
                perfect talent for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  target="_blank"
                  href={CALENDLY_LINK}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                  rel="noreferrer"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="">
              <AgentImage
                src={"/ai-customer-service-face.png"}
                alt={`Alex: AI Recruitment Agent`}
                width={400}
                height={400}
                className="h-[400px] w-[400px]"
              />
            </div>
          </div>
        </section>

        <section className="max-w-[1400px] mx-auto py-16 px-2 sm:px-8 bg-gray-50">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">What Alex Can Do For You</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Our AI Recruitment Agent is designed to streamline your hiring process and find the best candidates
                efficiently
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Candidate Screening</h3>
                  <p className="text-gray-500">
                    Alex reviews applications, conducts initial screenings, and identifies top candidates based on your
                    requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Interview Scheduling</h3>
                  <p className="text-gray-500">
                    Alex coordinates interview schedules with candidates and hiring managers, ensuring smooth
                    communication throughout the process.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Candidate Engagement</h3>
                  <p className="text-gray-500">
                    Alex maintains regular contact with candidates, answers questions about roles and company culture,
                    and keeps them engaged throughout the process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="max-w-[1400px] mx-auto py-16 px-2 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold">How Alex Transforms Your Hiring Process</h2>
              {[
                {
                  title: "Instant Candidate Response",
                  description:
                    "Alex responds to candidate enquiries immediately, providing information about roles and next steps.",
                },
                {
                  title: "Automated Screening",
                  description:
                    "Alex pre-qualifies candidates by assessing their skills, experience, and cultural fit before scheduling interviews.",
                },
                {
                  title: "Efficient Interview Coordination",
                  description:
                    "Alex manages complex scheduling between multiple stakeholders, reducing time-to-hire significantly.",
                },
                {
                  title: "Consistent Candidate Experience",
                  description:
                    "Alex ensures every candidate receives timely updates and professional communication throughout their journey.",
                },
              ].map((item, idx) => {
                return (
                  <div key={item.title + idx} className="flex items-center gap-3 mb-4 last:mb-0">
                    <div className="mt-1 bg-green-100 rounded-full p-1">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                )
              })}
              <a
                target="_blank"
                href={CALENDLY_LINK}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                rel="noreferrer"
              >
                Get Started with Alex
              </a>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=500&query=recruitment team interviewing candidates"
                fill
                alt="Recruitment process"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="max-w-[1400px] mx-auto py-16 bg-gray-50">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Roles Alex Specialises In</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Our AI Recruitment Agent is knowledgeable about recruiting for all types of positions across industries
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 p-2 sm:p-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Technology</h3>
                  <p className="text-gray-500">
                    Software engineers, data scientists, product managers, and other tech professionals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                    <Building className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Corporate</h3>
                  <p className="text-gray-500">
                    Finance, marketing, operations, and executive-level positions across various industries.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Healthcare</h3>
                  <p className="text-gray-500">
                    Medical professionals, nurses, healthcare administrators, and specialized clinical roles.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Specialized</h3>
                  <p className="text-gray-500">
                    Legal, creative, research, and other specialized professional roles requiring specific expertise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
