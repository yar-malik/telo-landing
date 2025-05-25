"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Check, Home, MapPin, Search } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CALENDLY_LINK } from "@/constants";
import { AgentImage } from "@/components/agent-image";

export default function RealEstatePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-1">
                <section className="max-w-[1400px] mx-auto py-12 md:py-20 px-2 sm:px-8 bg-white">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-28">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                                Meet Ryan, your <br/> AI Estate Agent
                            </h1>
                            <p className="text-gray-500 md:text-xl max-w-2xl">
                                Ryan answers property enquiries, schedules viewings, and
                                provides detailed information about listings 24/7.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    target="_blank"
                                    href={CALENDLY_LINK}
                                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <AgentImage
                                src={"/ai-customer-service-face.png"}
                                alt={`Sophia:`}
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
                            <h2 className="text-3xl font-bold">What Ryan Can Do For You</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Our AI Estate Agent is designed to handle property
                                enquiries and provide detailed information
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-primary flex items-center justify-center">
                                        <Search className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        Property Information
                                    </h3>
                                    <p className="text-gray-500">
                                        Ryan provides detailed information about property features,
                                        pricing, and availability to interested buyers.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-primary flex items-center justify-center">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        Neighbourhood Insights
                                    </h3>
                                    <p className="text-gray-500">
                                        Ryan shares information about schools, amenities, and local
                                        market trends to help buyers make informed decisions.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-primary flex items-center justify-center">
                                        <Home className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Viewing Scheduling</h3>
                                    <p className="text-gray-500">
                                        Ryan coordinates property viewings, scheduling appointments
                                        that work for both buyers and sellers.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="max-w-[1400px] mx-auto py-16 px-2 sm:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 order-2 md:order-1">
                            <h2 className="text-3xl font-bold">
                                How Ryan Transforms Property Sales
                            </h2>
                            {[
                                {
                                    title: "Instant Property Information",
                                    description:
                                        "Ryan provides immediate answers to property questions, no matter the time of day.",
                                },
                                {
                                    title: "Qualified Lead Generation",
                                    description:
                                        "Ryan pre-qualifies buyers by understanding their needs and budget before scheduling viewings.",
                                },
                                {
                                    title: "Efficient Scheduling",
                                    description:
                                        "Ryan coordinates viewings that work for all parties, reducing back-and-forth communication.",
                                },
                                {
                                    title: "Consistent Follow-up",
                                    description:
                                        "Ryan maintains contact with interested buyers, providing additional information as needed.",
                                },
                            ].map((item, idx) => {
                                return(
                                <div key={item.title + idx} className="flex items-center gap-3 mb-4 last:mb-0">
                                    <div className="mt-1 bg-green-100 rounded-full p-1">
                                        <Check className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p className="text-gray-500">{item.description}</p>
                                    </div>
                                </div>
                            )})}
                            <a
                                target="_blank"
                                href={CALENDLY_LINK}
                                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                            >
                                Get Started with Ryan
                            </a>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
                            <Image
                                src="/placeholder.svg?height=400&width=500&query=real estate property listing"
                                fill
                                alt="Property listing"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section className="max-w-[1400px] mx-auto py-16 bg-gray-50">
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold">
                                Property Types Ryan Specialises In
                            </h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Our AI Estate Agent is knowledgeable about all types of
                                properties
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8 p-2 sm:p-8">
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-primary flex items-center justify-center">
                                        <Home className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Residential</h3>
                                    <p className="text-gray-500">
                                        Single-family homes, flats, and townhouses for individuals
                                        and families.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-primary flex items-center justify-center">
                                        <Building className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Commercial</h3>
                                    <p className="text-gray-500">
                                        Office spaces, retail locations, and mixed-use properties
                                        for businesses.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-primary flex items-center justify-center">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Land</h3>
                                    <p className="text-gray-500">
                                        Vacant land, development opportunities, and agricultural
                                        properties.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-primary flex items-center justify-center">
                                        <Building className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold">Investment</h3>
                                    <p className="text-gray-500">
                                        Multi-family properties, rental units, and other
                                        income-generating property.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    );
}
