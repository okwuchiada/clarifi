import React from "react";

const WhyClariFiSection = () => {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Digital misinformation concept"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Why ClariFi Matters
            </h2>
            <div className="space-y-6">
              <div className="bg-navy-50 p-5 rounded-lg">
                <h3 className="text-xl font-bold text-navy-800 mb-2">
                  The Deepfake Crisis
                </h3>
                <p className="text-gray-700">
                  As AI technology advances, distinguishing between authentic
                  and synthetic content becomes increasingly difficult.
                  Deepfakes and AI-generated text can spread misinformation at
                  unprecedented speed and scale.
                </p>
              </div>
              <div className="bg-navy-50 p-5 rounded-lg">
                <h3 className="text-xl font-bold text-navy-800 mb-2">
                  Eroding Trust
                </h3>
                <p className="text-gray-700">
                  When people can't trust what they see and read online, it
                  undermines public discourse, threatens democracy, and creates
                  social division. The "liar's dividend" means even authentic
                  content is doubted.
                </p>
              </div>
              <div className="bg-navy-50 p-5 rounded-lg">
                <h3 className="text-xl font-bold text-navy-800 mb-2">
                  Restoring Confidence
                </h3>
                <p className="text-gray-700">
                  ClariFi doesn't block AI content—it simply provides
                  transparency. By clearly labeling AI-generated material, we
                  empower users to make informed decisions about the information
                  they consume.
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center">
              <div className="h-1 w-12 bg-emerald-500 mr-4"></div>
              <p className="text-navy-800 font-medium">
                Join us in creating a more transparent digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyClariFiSection;
