import React from "react";
import { ArrowRight, PlayCircleIcon } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              ClariFi the Truth.
              <span className="text-emerald-400">
                {" "}
                Spot AI-Generated Content Instantly.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              ClariFi protects users from misinformation by detecting and
              labeling AI-generated text, images, video, and audio in real time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition flex items-center justify-center gap-2">
                Get Early Access
                <ArrowRight size={18} />
              </Button>
              <Button className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2">
                <PlayCircleIcon size={18} />
                See How It Works
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-navy-800 p-6 rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="AI content verification illustration"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-10 left-12 right-12 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-emerald-200">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <p className="text-navy-900 font-medium text-sm">
                      AI content detected and verified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
