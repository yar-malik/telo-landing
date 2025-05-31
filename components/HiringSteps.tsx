import { CALENDLY_LINK } from "@/constants";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HiringSteps = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Get Started in <span className="text-blue-600">3 Simple Steps</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            From setup to deployment, we'll have your AI employee working in
            under an hour.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  step: "1",
                  title: "Add Job Details and Customize the Script",
                  desc: "Fill out the salary, experience and additional info so the AI can discuss the role with the candidate precisely and identify the good fits.",
                  img: "/how-it-works/one.svg",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  step: "2",
                  title: "Import Candidate Information",
                  desc: "You can quickly enter details manually or upload a CSV file for bulk importing.",
                  img: "/how-it-works/two.svg",
                  color: "from-indigo-500 to-indigo-600",
                },
                {
                  step: "3",
                  title: "Run AI Calls and Review Candidate Matches",
                  desc: "You will be able to identify all the good fits from the ones that are not a good fit.",
                  img: "/how-it-works/three.svg",
                  color: "from-purple-500 to-purple-600",
                },
              ].map(({ step, title, desc, img, color }, index) => (
                <div className="flex-1" key={index}>
                  <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 md:h-[100%]">
                    <div className="flex flex-col gap-4">
                      <div>
                        <img
                          src={img || "/placeholder.svg"}
                          alt={title}
                          className="w-full h-[300px] object-contain rounded-xl"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          <span className="text-blue-600">Step {step}: </span>
                          {title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href={CALENDLY_LINK}>
            <Button variant="default">
              Get Started Now
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HiringSteps;
