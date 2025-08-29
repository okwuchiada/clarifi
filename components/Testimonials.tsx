import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "ClariFi represents exactly the kind of technology we need to address the growing challenge of synthetic media.",
      author: "Dr. Samantha Chen",
      role: "Digital Ethics Researcher",
      organization: "Future Media Institute",
    },
    {
      quote:
        "We've implemented ClariFi across our digital platforms and have seen a significant improvement in user trust and engagement.",
      author: "Michael Rodriguez",
      role: "Chief Digital Officer",
      organization: "Global News Network",
    },
    {
      quote:
        "The transparency that ClariFi provides is essential for maintaining the integrity of online discourse in the age of AI.",
      author: "Prof. James Wilson",
      role: "Information Science Department",
      organization: "Technology University",
    },
  ];
  return (
    <section className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Trusted by Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading researchers, organizations, and institutions recognize
            ClariFi's impact on digital trust.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="absolute top-6 left-6 text-5xl text-emerald-100">
                "
              </div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6 pt-4">{testimonial.quote}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-navy-800">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-emerald-600">
                    {testimonial.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
            <div className="text-gray-400 font-medium">
              Research Partner Logo
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
            <div className="text-gray-400 font-medium">
              Academic Institution Logo
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
            <div className="text-gray-400 font-medium">Media Partner Logo</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
            <div className="text-gray-400 font-medium">
              Technology Alliance Logo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
