import React from "react";
import { ScanIcon, AlertCircleIcon, ShieldCheckIcon } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <ScanIcon size={32} className="text-emerald-500" />,
      title: "Detect",
      description:
        "AI scans digital content across platforms, analyzing patterns and signatures unique to AI-generated material.",
    },
    {
      icon: <AlertCircleIcon size={32} className="text-emerald-500" />,
      title: "Alert",
      description:
        "Labels AI-generated material with a clear warning, providing transparency about content origin.",
    },
    {
      icon: <ShieldCheckIcon size={32} className="text-emerald-500" />,
      title: "Empower",
      description:
        "Helps users consume information with confidence, making informed decisions about the content they engage with.",
    },
  ];
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            How ClariFi Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our cutting-edge technology works seamlessly to identify
            AI-generated content and provide clear alerts in real-time.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-[1.02] p-6 relative overflow-hidden border border-gray-100"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 group-hover:bg-emerald-200 rounded-bl-full transition-colors duration-300 delay-75 opacity-70"></div>
              <div className="relative z-10">
                <div className="mb-4 p-3 bg-emerald-50 group-hover:bg-emerald-200 transition-colors duration-300 delay-75 rounded-full inline-block">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              <div className="absolute bottom-4 right-4 text-4xl font-bold text-gray-100">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block py-2 px-4 bg-navy-50 rounded-full text-navy-700 font-medium">
            Powered by proprietary machine learning models trained on millions
            of content samples
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;