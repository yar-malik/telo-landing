import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Zap,
  Bot,
  MessageSquare,
  Calendar,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { OptimizedImage } from "@/components/optimized-image";
import { SiteHeader } from "@/components/site-header";
import { AgentImage } from "@/components/agent-image";
import { SiteFooter } from "@/components/site-footer";
import UseCaseSection from "@/components/usecase-section";
import TrustSection from "@/components/gdpAndCompliance";
import PricingPlansSection from "@/components/pricing-plans";
import { CALENDLY_LINK } from "@/constants";
import { Button } from "@/components/ui/button";

export default function Home() {
  const aiAgents = [
    {
      name: "Emma",
      role: "AI Sales Executive",
      href: "/sales-executive",
      img: "/ai-sales-face.png",
      imgAlt: "Emma AI Sales",
      gradient: "from-blue-50 to-indigo-50",
      avatarGradient: "from-blue-400 to-blue-600",
      linkColor: "text-blue-600 hover:text-blue-700",
      features: [
        { icon: TrendingUp, label: "Lead Generation", color: "text-blue-500" },
        {
          icon: MessageSquare,
          label: "Personalized Outreach",
          color: "text-blue-500",
        },
        { icon: Bot, label: "24/7 Follow-ups", color: "text-blue-500" },
        { icon: CheckCircle, label: "CRM Integration", color: "text-blue-500" },
      ],
      description:
        "Generates qualified leads, conducts personalized outreach, and nurtures prospects through your entire sales funnel with human-like conversations.",
    },
    {
      name: "Alex",
      role: "AI Recruiter",
      href: "/recruitment",
      img: "/ai-customer-service-face.png",
      imgAlt: "Alex AI Recruiter",
      gradient: "from-indigo-50 to-purple-50",
      avatarGradient: "from-indigo-400 to-indigo-600",
      linkColor: "text-indigo-600 hover:text-indigo-700",
      features: [
        { icon: Users, label: "Candidate Screening", color: "text-indigo-500" },
        {
          icon: Calendar,
          label: "Interview Scheduling",
          color: "text-indigo-500",
        },
        {
          icon: MessageSquare,
          label: "Candidate Communication",
          color: "text-indigo-500",
        },
        {
          icon: CheckCircle,
          label: "ATS Integration",
          color: "text-indigo-500",
        },
      ],
      description:
        "Screens candidates, schedules interviews, and manages your entire recruitment pipeline with precision and efficiency.",
    },
    {
      name: "Sophia",
      role: "AI Receptionist",
      href: "/receptionist",
      img: "/ai-receptionist-face.jpg",
      imgAlt: "Sophia AI Receptionist",
      gradient: "from-purple-50 to-pink-50",
      avatarGradient: "from-purple-400 to-purple-600",
      linkColor: "text-purple-600 hover:text-purple-700",
      features: [
        {
          icon: MessageSquare,
          label: "Call Handling",
          color: "text-purple-500",
        },
        {
          icon: Calendar,
          label: "Appointment Booking",
          color: "text-purple-500",
        },
        { icon: Clock, label: "24/7 Availability", color: "text-purple-500" },
        {
          icon: CheckCircle,
          label: "Multi-language Support",
          color: "text-purple-500",
        },
      ],
      description:
        "Handles calls, books appointments, and provides exceptional customer service around the clock with professional courtesy.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header section */}
      <SiteHeader />

      <main>
        {/* Hero section - Completely redesigned */}
        <section className="relative overflow-hidden">
          <div className="absolute top-[50%] left-[30%] w-72 h-72 bg-blue-800/40 rounded-full blur-[100px]"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-20 max-w-[1400px] mx-auto px-6 sm:py-16 md:py-24">
            <div className="space-y-3 sm:space-y-6 flex-1">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 text-sm font-medium border border-blue-200">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Workforce Revolution
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Let AI handle your <br /> calls like a human
                {/* <DynamicText
                  words={[
                    "Sales Excellence",
                    "Smart Recruitment",
                    "Customer Service",
                  ]}
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                /> */}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your recruitment process with AI that calls,
                qualifies, and identifies the best candidates automatically.
                Save hours every week on candidate outreach.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link href={CALENDLY_LINK}>
                  <Button>
                    Start Free Trial
                    <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative flex-1">
              <OptimizedImage
                src="/hero_image.png"
                alt="AI Assistant"
                width={500}
                height={500}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <UseCaseSection />

        {/* Floating Stats Cards */}
        <section className="relative z-10 my-8 md:my-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "500+",
                  label: "Active Clients",
                  icon: Users,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  number: "24/7",
                  label: "Availability",
                  icon: Clock,
                  color: "from-indigo-500 to-indigo-600",
                },
                {
                  number: "95%",
                  label: "Accuracy Rate",
                  icon: CheckCircle,
                  color: "from-purple-500 to-purple-600",
                },
                {
                  number: "60min",
                  label: "Setup Time",
                  icon: Zap,
                  color: "from-pink-500 to-pink-600",
                },
              ].map(({ number, label, icon: Icon, color }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${color} rounded-xl mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {number}
                  </div>
                  <div className="text-gray-600 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OptimizedImage
          src="/main_image.png"
          alt="main_image"
          width={500}
          height={500}
          className="w-[80%] mx-auto h-auto my-20 rounded-xl object-cover"
        />

        {/* AI Team Showcase - Horizontal Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  AI Dream Team
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the AI employees that will revolutionize your business
                operations and drive unprecedented growth.
              </p>
            </div>

            <div className="flex gap-8 mx-auto">
              {/* Emma - Sales */}
              {aiAgents.map(
                (
                  {
                    name,
                    role,
                    img,
                    imgAlt,
                    gradient,
                    avatarGradient,
                    features,
                    description,
                  },
                  idx
                ) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-b ${gradient} flex-1 rounded-3xl p-6 hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex flex-col gap-4 items-center">
                      <div className="flex flex-col items-start w-full">
                        <div
                          className={`w-full h-[350px] rounded-xl bg-gradient-to-r ${avatarGradient} mb-4`}
                        >
                          <img
                            src={img}
                            alt={imgAlt}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {name}
                        </h3>
                        <p className={`text-blue-600 text-base font-semibold`}>
                          {role}
                        </p>
                      </div>
                      <div className="lg:col-span-2">
                        <p className="text-gray-700 text-base leading-relaxed mb-6">
                          {description}
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                          {features.map(({ icon: Icon, label, color }) => (
                            <div className="flex items-center" key={label}>
                              <Icon className={`w-5 h-5 ${color} mr-2`} />
                              <span className="text-gray-600">{label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Process Steps - Vertical Timeline */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get Started in{" "}
                <span className="text-blue-600">3 Simple Steps</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From setup to deployment, we'll have your AI employee working in
                under an hour.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-400"></div>

                <div className="space-y-12">
                  {[
                    {
                      step: "1",
                      title:
                        "Simply add your job details and customise call script.",
                      desc: "Fill out the salary, experience and additional info so the AI can discuss the role with the candidate precisely and identify the good fits.",
                      img: "/how-it-works/one.png",
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      step: "2",
                      title: "Add candidates manually or via csv",
                      desc: "You can quickly enter details manually or upload a CSV file for bulk importing.",
                      img: "/how-it-works/two.png",
                      color: "from-indigo-500 to-indigo-600",
                    },
                    {
                      step: "3",
                      title:
                        "Execute AI Calls & The Good Fit Candidates Will Be Shown In Green",
                      desc: "You will be able to identify all the good fits from the ones that are not a good fit.",
                      img: "/how-it-works/three.png",
                      color: "from-purple-500 to-purple-600",
                    },
                  ].map(({ step, title, desc, img, color }, index) => (
                    <div key={step} className="relative flex items-center">
                      <div
                        className={`hidden sm:flex relative z-10 w-10 sm:w-16 h-10 sm:h-16 bg-gradient-to-r ${color} rounded-full items-center justify-center text-white font-bold text-xl shadow-lg`}
                      >
                        {step}
                      </div>

                      <div className="ml-0 sm:ml-8 flex-1">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                              <div
                                className={`block sm:hidden relative z-10 w-16 h-16 bg-gradient-to-r ${color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mb-4`}
                              >
                                {step}
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {title}
                              </h3>
                              <p className="text-gray-600 text-lg leading-relaxed">
                                {desc}
                              </p>
                            </div>
                            <div>
                              <img
                                src={img || "/placeholder.svg"}
                                alt={title}
                                className="w-full h-[350px] object-center rounded-xl"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <a
                href={CALENDLY_LINK}
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-xl"
              >
                Get Started Now
                <ArrowRight className="w-6 h-6 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our{" "}
                <span className="text-blue-600">AI Employees</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the future of work with AI that's indistinguishable
                from human interaction.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  Always <span className="text-blue-600">Available</span>,
                  Always <span className="text-indigo-600">Professional</span>
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our AI employees deliver human-like conversations that feel
                  natural and engaging. They're available 24/7, never need
                  breaks, and consistently provide exceptional service.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    "Natural conversation flow",
                    "Multilingual support",
                    "Instant response time",
                    "Consistent quality",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={CALENDLY_LINK}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Experience the Difference
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl transform rotate-3"></div>
                <AgentImage
                  src="/available.jpg"
                  alt="24/7 Available AI"
                  width={600}
                  height={400}
                  className="relative w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <Image
                  src="/love_employee.png"
                  alt="Customizable AI"
                  width={600}
                  height={400}
                  className="relative w-full h-auto rounded-3xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  Fully <span className="text-blue-600">Customizable</span> to
                  Your Brand
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Tailor every aspect of your AI employee to match your brand
                  voice, industry requirements, and specific business processes.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    "Custom personality & tone",
                    "Industry-specific knowledge",
                    "Brand voice alignment",
                    "Workflow integration",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={CALENDLY_LINK}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Customize Your AI
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 bg-[#FDF9F8] rounded-3xl my-16">
          <div className="px-6 md:px-12 text-center">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
                  We integrate with your existing tools
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 text-center md:text-left">
                  Our platform integrates with the most commonly used
                  applications, so you can continue using your existing tools
                  while maximising your efficiency.
                </p>
                <div>
                  <a
                    href={CALENDLY_LINK}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-colors text-xl inline-block"
                  >
                    Start building today
                  </a>
                </div>
              </div>

              <div>
                <Image
                  src="/how-it-works.png"
                  alt="How It Works Process"
                  width={1000}
                  height={400}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingPlansSection />

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                FAQ
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "How does the 3-day free trial work?",
                  answer: "You get 3 free candidate calls per day for 3 days.",
                },
                {
                  question: "Can I customise the AI voice and scripts?",
                  answer:
                    "Yes! You can choose from 10+ professional voices. You can also customise both call prompts and SMS templates.",
                },
                {
                  question: "What happens if a candidate doesn't answer?",
                  answer:
                    "We send an automated SMS follow-up asking them to call you back or reply via email.",
                },
                {
                  question: "Can Telo AI integrate with my CRM?",
                  answer:
                    "Yes, we offer CRM/ATS integrations to sync all call data and notes",
                },
                {
                  question: "What happens after my free trial ends?",
                  answer:
                    "You can choose from one of our paid plans starting at £199/month or upgrade to a custom Enterprise plan.",
                },
              ].map((faq, idx) => (
                <details
                  key={faq.question}
                  className="bg-white rounded-2xl p-8 shadow-lg group"
                  open={idx === 0}
                >
                  <summary className="cursor-pointer text-xl font-bold text-gray-900 outline-none flex items-center justify-between">
                    {faq.question}
                    <span className="ml-2 transition-transform group-open:rotate-180">
                      <ChevronDown />
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <TrustSection />
      </main>

      <SiteFooter />
    </div>
  );
}
