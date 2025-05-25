import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Users,
  Clock,
  Zap,
  Bot,
  MessageSquare,
  Calendar,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { DynamicText } from "@/components/dynamic-text";
import { OptimizedImage } from "@/components/optimized-image";
import { SiteHeader } from "@/components/site-header";
import { AgentImage } from "@/components/agent-image";
import { SiteFooter } from "@/components/site-footer";
import UseCaseSection from "@/components/usecase-section";
import TrustSection from "@/components/gdpAndCompliance";
import PricingPlansSection from "@/components/pricing-plans";
import { CALENDLY_LINK } from "@/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header section */}
      <SiteHeader />

      <main>
        {/* Hero section - Completely redesigned */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>

          <div className="relative container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 text-sm font-medium border border-blue-200">
                  <Zap className="w-4 h-4 mr-2" />
                  AI-Powered Workforce Revolution
                </div>

                <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Meet Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    AI Dream Team
                  </span>
                </h1>

                <div className="text-2xl text-gray-600 leading-relaxed">
                  Specialized in{" "}
                  <DynamicText
                    words={[
                      "Sales Excellence",
                      "Smart Recruitment",
                      "Customer Service",
                    ]}
                    className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                  />
                </div>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your recruitment process with AI that calls,
                  qualifies, and identifies the best candidates automatically.
                  Save hours every week on candidate outreach.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href={CALENDLY_LINK}
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-lg"
                  >
                    Start Free Trial
                    <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    target="_blank"
                    href="https://connectaisolutionsvoice.vercel.app/"
                    className="group border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center text-lg"
                    rel="noreferrer"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Watch Demo
                  </a>
                </div>

                <div className="flex items-center space-x-8 py-8">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                    <span className="ml-4 text-gray-600 font-medium">
                      500+ companies trust us
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 font-medium">
                      4.9/5 rating
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform hover:rotate-1 transition-transform duration-300">
                  <OptimizedImage
                    src="/hero_image.png"
                    alt="AI Assistant"
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ✨ Live & Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Stats Cards */}
        <section className="relative -mt-20 z-10">
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
          <div className="container mx-auto px-6">
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

            <div className="space-y-8 max-w-5xl mx-auto">
              {/* Emma - Sales */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block mb-4">
                      <div className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 p-1">
                        <img
                          src="/ai-sales-face.png"
                          alt="Emma AI Sales"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Emma
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      AI Sales Executive
                    </p>
                    <Link
                      href="/sales-executive"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Generates qualified leads, conducts personalized outreach,
                      and nurtures prospects through your entire sales funnel
                      with human-like conversations.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">Lead Generation</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">
                          Personalized Outreach
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Bot className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">24/7 Follow-ups</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-gray-600">CRM Integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alex - Recruitment */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block mb-4">
                      <div className="w-36 h-36 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 p-1">
                        <img
                          src="/ai-customer-service-face.png"
                          alt="Alex AI Recruitment"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Alex
                    </h3>
                    <p className="text-indigo-600 font-semibold mb-2">
                      AI Recruitment Agent
                    </p>
                    <Link
                      href="/recruitment"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Screens candidates, schedules interviews, and manages your
                      entire recruitment pipeline with precision and efficiency.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-indigo-500 mr-2" />
                        <span className="text-gray-600">
                          Candidate Screening
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-indigo-500 mr-2" />
                        <span className="text-gray-600">
                          Interview Scheduling
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="w-5 h-5 text-indigo-500 mr-2" />
                        <span className="text-gray-600">
                          Candidate Communication
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                        <span className="text-gray-600">ATS Integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sophia - Reception */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block mb-4">
                      <div className="w-36 h-36 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 p-1">
                        <img
                          src="/ai-receptionist-face.jpg"
                          alt="Sophia AI Receptionist"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Sophia
                    </h3>
                    <p className="text-purple-600 font-semibold mb-2">
                      AI Receptionist
                    </p>
                    <Link
                      href="/receptionist"
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Handles calls, books appointments, and provides
                      exceptional customer service around the clock with
                      professional courtesy.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <MessageSquare className="w-5 h-5 text-purple-500 mr-2" />
                        <span className="text-gray-600">Call Handling</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-purple-500 mr-2" />
                        <span className="text-gray-600">
                          Appointment Booking
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-purple-500 mr-2" />
                        <span className="text-gray-600">24/7 Availability</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                        <span className="text-gray-600">
                          Multi-language Support
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-400"></div>

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
                        className={`relative z-10 w-16 h-16 bg-gradient-to-r ${color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                      >
                        {step}
                      </div>

                      <div className="ml-8 flex-1">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
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

        {/* Use Cases */}
        <UseCaseSection />

        {/* Trust Section */}
        <TrustSection />
      </main>

      <SiteFooter />
    </div>
  );
}
