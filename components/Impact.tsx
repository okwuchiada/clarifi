import React from "react";
import { CheckCircle2Icon } from "lucide-react";
const ImpactSection = () => {
  const sdgItems = [
    {
      number: 16,
      title: "Peace, Justice & Strong Institutions",
      description:
        "Primary alignment: Fighting misinformation to strengthen public institutions and promote peaceful societies",
      isPrimary: false,
    },
    {
      number: 9,
      title: "Industry, Innovation & Infrastructure",
      description:
        "Supporting digital infrastructure with innovative technology solutions",
      isPrimary: false,
    },
    {
      number: 12,
      title: "Responsible Consumption",
      description:
        "Enabling responsible consumption of digital information and media",
      isPrimary: false,
    },
    {
      number: 17,
      title: "Partnerships for the Goals",
      description:
        "Fostering partnerships between technology providers, media, and institutions",
      isPrimary: false,
    },
  ];
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Our Global Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ClariFi aligns with the UN Sustainable Development Goals,
            contributing to a more transparent and trustworthy digital
            ecosystem.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sdgItems.map((item, index) => (
            <div
              key={index}
              className={`group rounded-xl p-6 transition-all duration-300 ease-in-out hover:scale-[1.02] ${
                item.isPrimary
                  ? "bg-navy-800 text-white shadow-lg"
                  : "bg-gray-50 text-navy-800 border border-gray-200 hover:bg-navy-800 hover:text-white hover:shadow-lg"
              }`}
            >
              <div className="flex items-start mb-4">
                <div
                  className={`h-12 w-12 rounded-lg flex transition-colors duration-300 delay-75 items-center justify-center text-xl font-bold ${
                    item.isPrimary
                      ? "bg-emerald-500 text-white"
                      : "bg-navy-100 text-navy-800 group-hover:bg-emerald-500 group-hover:text-white"
                  }`}
                >
                  {item.number}
                </div>
                <div className="ml-3">
                  <CheckCircle2Icon
                    size={20}
                    className={`transition-colors duration-300 delay-100 ${
                      item.isPrimary
                        ? "text-emerald-400"
                        : "text-emerald-500 group-hover:text-emerald-400"
                    }`}
                  />
                </div>
              </div>
              <h3
                className={`text-lg transition-colors duration-300 delay-150 font-bold mb-2 ${
                  item.isPrimary
                    ? "text-white"
                    : "text-navy-800 group-hover:text-white"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`transition-colors duration-300 delay-200
                 ${
                   item.isPrimary
                     ? "text-gray-200"
                     : "text-gray-600 group-hover:text-gray-200"
                 }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://sdgs.un.org/goals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
          >
            Learn more about the UN Sustainable Development Goals
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
