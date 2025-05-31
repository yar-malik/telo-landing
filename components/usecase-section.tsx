"use client";

import type React from "react";

import { useState } from "react";
import {
  Building,
  Headphones,
  PhoneIncoming,
  PhoneOutgoing,
  PiggyBank,
  Building2,
  Hotel,
  Tv,
  Brain,
  Home,
  Heart,
  MessageSquare,
  Car,
  Package,
  ShoppingCart,
  BadgePercent,
  Receipt,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function UseCaseSection() {
  const [activeTab, setActiveTab] = useState("inbound");

  const tabs = [
    {
      value: "inbound",
      label: "Inbound calls",
      icon: <PhoneIncoming className="h-4 w-4" />,
    },
    {
      value: "outbound",
      label: "Outbound calls",
      icon: <PhoneOutgoing className="h-4 w-4" />,
    },
    {
      value: "industries",
      label: "Industries",
      icon: <Building className="h-4 w-4" />,
    },
  ];

  // Define use cases for each tab
  const useCases = {
    inbound: [
      {
        icon: <Building className="h-8 w-8 text-blue-600" />,
        title: "Receptionist",
        description:
          "Handle incoming enquiries, book appointments, and route calls to the appropriate departments with immediate assistance.",
      },
      {
        icon: <Headphones className="h-8 w-8 text-indigo-600" />,
        title: "Customer Care",
        description:
          "Instantly respond to enquiries, troubleshoot technical issues, and address FAQs, so you never miss a customer query.",
      },
      {
        icon: <Package className="h-8 w-8 text-green-600" />,
        title: "Order Management",
        description:
          "Assist customers with placing orders and tracking deliveries 24/7 to provide an exceptional experience.",
      },
      {
        icon: <Heart className="h-8 w-8 text-yellow-500" />,
        title: "Wellbeing Companion",
        description:
          "Offer wellbeing support through calming exercises, active listening, and employee mood tracking.",
      },
      {
        icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
        title: "Mock Interviews",
        description:
          "Simulate job interviews, giving feedback on answers, tone, and delivery to help candidates improve.",
      },
      {
        icon: <Car className="h-8 w-8 text-blue-600" />,
        title: "Drive-Through Orders",
        description:
          "Take food orders, confirm customisations, and streamline communication between customers and kitchens.",
      },
    ],
    outbound: [
      {
        icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
        title: "Feedback Surveys",
        description:
          "Collect detailed customer feedback via automated voice surveys.",
      },
      {
        icon: <BadgePercent className="h-8 w-8 text-indigo-600" />,
        title: "Sales Calls",
        description:
          "Call clients to promote products, qualify leads, and schedule meetings.",
      },
      {
        icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
        title: "Order Confirmation",
        description:
          "Deliver real-time updates on order statuses through various channels.",
      },
      {
        icon: <Building2 className="h-8 w-8 text-yellow-500" />,
        title: "Concierge Service",
        description:
          "Provide tailored recommendations, book reservations, or share event updates.",
      },
      {
        icon: <PiggyBank className="h-8 w-8 text-indigo-600" />,
        title: "Debt Collection",
        description:
          "Follow up with debtors, offer payment plans, and send reminders for overdue accounts.",
      },
      {
        icon: <Receipt className="h-8 w-8 text-blue-600" />,
        title: "Payment Reminders",
        description:
          "Send automated voice reminders for upcoming payments and due dates.",
      },
    ],
    industries: [
      {
        icon: <Building2 className="h-8 w-8 text-blue-600" />,
        title: "Banking & Financial Services",
        description:
          "From loan collections to sales and support, tailor multiple AI agents to automate operations and save millions of pounds.",
      },
      {
        icon: <Heart className="h-8 w-8 text-indigo-600" />,
        title: "Healthcare & Insurance",
        description:
          "Enhance patient care and simplify claims processes with intelligent, proactive, and always-available AI agents.",
      },
      {
        icon: <Home className="h-8 w-8 text-green-600" />,
        title: "Real Estate & Retail Services",
        description:
          "Generate high-quality leads based on your criteria and boost conversions without expanding your team.",
      },
      {
        icon: <Hotel className="h-8 w-8 text-yellow-500" />,
        title: "Hospitality & Entertainment",
        description:
          "Manage bookings, promote events, and engage customers with smooth, interactive communication.",
      },
      {
        icon: <Brain className="h-8 w-8 text-indigo-600" />,
        title: "Technology & E-commerce",
        description:
          "Resolve technical issues, track orders, and personalise product recommendations to keep customers happy.",
      },
      {
        icon: <Tv className="h-8 w-8 text-blue-600" />,
        title: "Telecom & Service Providers",
        description:
          "Handle account setups, billing issues, and troubleshooting efficiently, ensuring customer satisfaction.",
      },
    ],
  };

  return (
    <section className="px-4 2xl:px-16 py-16 bg-blue-50 rounded-3xl my-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tailored for every use case
          </h2>
          <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Our AI employees work alongside your human team members to save you
            cost and time, without additional headcount
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Tabs
            defaultValue="inbound"
            className="mb-12"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 bg-slate-100 border-[1px] border-gray-200 rounded-md h-[55px] gap-2 p-2">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={cn(
                    "rounded-sm flex items-center gap-3 px-4 py-2",
                    activeTab === tab.value
                      ? "text-orange-500 bg-white shadow border-[1px] border-gray-200"
                      : "text-slate-600"
                  )}
                >
                  <span className="hidden sm:block">{tab.icon}</span>
                  <span className="sm:ml-1">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Dynamically render tab content */}
            {Object.keys(useCases).map((tabKey) => (
              <TabsContent key={tabKey} value={tabKey} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
                  {useCases[tabKey as keyof typeof useCases].map(
                    (useCase, index) => (
                      <UseCaseCard
                        key={index}
                        icon={useCase.icon}
                        title={useCase.title}
                        description={useCase.description}
                      />
                    )
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-base sm:text-xl font-semibold text-slate-800">
            and much more...
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function UseCaseCard({ icon, title, description }: UseCaseCardProps) {
  return (
    <div className="p-6 border border-slate-100 bg-white h-full md:h-[250px] lg:h-[220px] flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm flex-grow">{description}</p>
    </div>
  );
}
