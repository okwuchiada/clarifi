import React from "react";
import {
  ClockIcon,
  Share2Icon,
  LayoutDashboardIcon,
  ShieldIcon,
} from "lucide-react";
import { Button } from "./ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: <ClockIcon size={24} className="text-emerald-500" />,
      title: "Real-time Alerts",
      description:
        "Instant notifications about AI-generated content as you browse, with clear visual indicators.",
    },
    {
      icon: <Share2Icon size={24} className="text-emerald-500" />,
      title: "Wide Integration",
      description:
        "Seamlessly works with social media platforms, news sites, and enterprise applications.",
    },
    {
      icon: <LayoutDashboardIcon size={24} className="text-emerald-500" />,
      title: "Transparency Dashboards",
      description:
        "Comprehensive analytics and reporting tools for organizations to monitor AI content.",
    },
    {
      icon: <ShieldIcon size={24} className="text-emerald-500" />,
      title: "Privacy-First Detection",
      description:
        "Unbiased AI detection that respects user privacy and doesn't store personal data.",
    },
  ];
  return (
    <section id="features" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ClariFi comes equipped with everything you need to navigate today&apos;s
            complex information landscape.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] p-6 flex"
            >
              <div className="mr-4 mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-navy-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Enterprise Solutions Available
              </h3>
              <p className="text-gray-300">
                Custom deployments for media companies, educational
                institutions, and government agencies.
              </p>
            </div>
            <Button className="whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
