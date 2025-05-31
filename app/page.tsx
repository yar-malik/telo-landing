"use client";

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
  PhoneMissed,
  PhoneIncoming,
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
import FaqSection from "@/components/faq-section";
import { DynamicText } from "@/components/dynamic-text";
import { motion } from "framer-motion";

export default function Home() {
  const aiAgents = [
    {
      name: "Emma",
      role: "AI Sales Executive",
      href: "/sales-executive",
      img: "/ai-sales-face.png",
      imgAlt: "Emma AI Sales",
      gradient: "from-blue-50 to-indigo-50",
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
      gradient: "from-indigo-50 to-purple-50",
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
    <div className="min-h-screen bg-blue-50 overflow-hidden">
      {/* Header section */}
      <SiteHeader />

      <main>
        {/* Hero section - Completely redesigned */}
        <section className="relative">
          <div className="absolute top-[50%] left-[30%] w-[50%] h-[50%] sm:w-72 sm:h-72 bg-blue-800/40 rounded-full blur-[100px]"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-20 max-w-[1400px] mx-auto px-6 py-8 sm:py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-3 sm:space-y-6 flex-1"
            >
              <div className="inline-flex items-center px-2 py-[5px] bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 text-xs font-medium border border-blue-200">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Workforce Revolution
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[55px] lg:leading-[60px] font-bold text-gray-900 leading-tight">
                Let AI handle your <br /> calls like a human <br /> for&nbsp;
                <DynamicText
                  words={[
                    "Sales Excellence",
                    "Smart Recruitment",
                    "Customer Service",
                  ]}
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                />
              </h1>

              <p className="text-base text-gray-600 leading-relaxed max-w-lg">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex-1 flex sm:justify-end w-full max-w-[550px]"
            >
              <OptimizedImage
                src="/ai-customer-service-face.png"
                alt="AI Assistant"
                width={550}
                height={550}
                priority
                imageClassName="rounded-2xl object-cover"
                className="w-full max-w-[550px] h-auto sm:h-[500px]"
              />

              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-between px-4 py-2 w-[360px] max-w-[90%]">
                <Image
                  src="/ai-customer-service-face.png"
                  alt="Caller"
                  width={100}
                  height={100}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />

                <div className="flex-1">
                  <p className="text-sm text-gray-300 leading-none">Incoming</p>
                  <p className="text-base font-semibold text-white leading-tight">
                    Alex
                  </p>
                </div>

                <div className="flex items-center space-x-2 ml-3">
                  <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                    <PhoneMissed />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <PhoneIncoming />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <UseCaseSection />

        {/* Floating Stats Cards */}
        <section className="relative z-10 mb-8 md:mb-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
              ].map(({ number, label, icon: Icon, color }, idx) => (
                <motion.div
                  key={label}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: -30 }}
                  transition={{ duration: 1, y: 0, delay: idx * 0.5, damping: 20 }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Team Showcase - Horizontal Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  AI Dream Team
                </span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the AI employees that will revolutionize your business
                operations and drive unprecedented growth.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.18,
                  },
                },
              }}
            >
              {aiAgents.map(
                (
                  { name, role, img, imgAlt, gradient, features, description },
                  idx
                ) => (
                  <motion.div
                    key={idx}
                    className={`bg-gradient-to-b ${gradient} flex-1 rounded-3xl p-6 hover:shadow-2xl transition-all duration-300`}
                    variants={{
                      hidden: { opacity: 0, y: 60, scale: 0.96 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{
                      duration: 0.7,
                      delay: idx * 0.15,
                      type: "spring",
                      stiffness: 80,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <div className="flex flex-col gap-4 items-center">
                      <motion.div
                        className="flex flex-col items-start w-full"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                      >
                        <div
                          className={`w-full h-[330px] rounded-xl bg-gradient-to-r mb-4 overflow-hidden`}
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
                      </motion.div>
                      <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                      >
                        <p className="text-gray-700 text-base leading-relaxed mb-6">
                          {description}
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                          {features.map(
                            ({ icon: Icon, label, color }, fidx) => (
                              <motion.div
                                className="flex items-center"
                                key={label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.4 + fidx * 0.08,
                                  duration: 0.4,
                                }}
                              >
                                <Icon className={`w-5 h-5 ${color} mr-2`} />
                                <span className="text-gray-600">{label}</span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </section>

        {/* Process Steps - Vertical Timeline */}
        {/* <HiringSteps /> */}

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our{" "}
                <span className="text-blue-600">AI Employees</span>
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Experience the future of work with AI that's indistinguishable
                from human interaction.
              </p>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.18,
                  },
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Always <span className="text-blue-600">Available</span>,
                  Always <span className="text-indigo-600">Professional</span>
                </h3>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
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
                  ].map((feature, idx) => (
                    <motion.div
                      key={feature}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <a href={CALENDLY_LINK}>
                  <Button variant="default">
                    Experience the Difference
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                </a>
              </motion.div>
              <motion.div
                className="flex justify-end"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <AgentImage
                  src="/available.jpg"
                  alt="24/7 Available AI"
                  width={600}
                  height={400}
                  className="relative w-full lg:w-[70%] h-auto rounded-3xl"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.18,
                  },
                },
              }}
            >
              <motion.div
                className="order-2 lg:order-1 relative flex justify-start"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Image
                  src="/love_employee.png"
                  alt="Customizable AI"
                  width={600}
                  height={400}
                  className="relative w-full lg:w-[70%] h-auto"
                />
              </motion.div>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Fully <span className="text-blue-600">Customizable</span> to
                  Your Brand
                </h3>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  Tailor every aspect of your AI employee to match your brand
                  voice, industry requirements, and specific business processes.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    "Custom personality & tone",
                    "Industry-specific knowledge",
                    "Brand voice alignment",
                    "Workflow integration",
                  ].map((feature, idx) => (
                    <motion.div
                      key={feature}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <a href={CALENDLY_LINK}>
                  <Button variant="default">
                    Customize Your AI
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 bg-[#FDF9F8]">
          <div className="px-6 md:px-12 text-center">
            <motion.div
              className="grid md:grid-cols-2 gap-16 items-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.18,
                  },
                },
              }}
            >
              <motion.div
                className="flex flex-col items-center md:items-start"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
                  We integrate with your existing tools
                </h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto mb-8 text-center md:text-left">
                  Our platform integrates with the most commonly used
                  applications, so you can continue using your existing tools
                  while maximising your efficiency.
                </p>

                <a href={CALENDLY_LINK}>
                  <Button variant="default">
                    Start building today
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Image
                  src="/how-it-works.png"
                  alt="How It Works Process"
                  width={1000}
                  height={400}
                  className="mx-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingPlansSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Trust Section */}
        <TrustSection />
      </main>

      <SiteFooter />
    </div>
  );
}
