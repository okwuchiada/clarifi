"use client";
import React, { useState } from "react";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };
  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the ClariFi Movement for a Safer Digital World
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Be among the first to access our technology and help shape the
            future of digital content verification.
          </p>
          {submitted ? (
            <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-xl p-8 text-white">
              <div className="flex justify-center mb-4">
                <CheckCircle2Icon size={48} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thank You for Joining!</h3>
              <p className="text-gray-200">
                We've received your request for early access. Our team will be
                in touch soon with next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-white  placeholder-gray-300 focus:ring-2 focus:ring-emerald-500 flex-grow"
                //   className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Get Early Access
                  <ArrowRightIcon size={18} />
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                We respect your privacy and will never share your information.
              </p>
            </form>
          )}
          <div className="mt-16 hidden grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-emerald-400 mb-1">
                100M+
              </div>
              <div className="text-gray-300">Content items analyzed</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-emerald-400 mb-1">
                99.2%
              </div>
              <div className="text-gray-300">Detection accuracy</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-emerald-400 mb-1">
                50+
              </div>
              <div className="text-gray-300">Partner organizations</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-emerald-400 mb-1">
                5M+
              </div>
              <div className="text-gray-300">Users protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
