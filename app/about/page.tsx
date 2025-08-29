import React from "react";

import {
  ShieldIcon,
  LightbulbIcon,
  AwardIcon,
  BarChartIcon,
  CheckCircleIcon,
  Handshake,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  const partners = [
    {
      name: "Future Media Institute",
      logo: "https://via.placeholder.com/150x80?text=FMI",
    },
    {
      name: "Global News Network",
      logo: "https://via.placeholder.com/150x80?text=GNN",
    },
    {
      name: "Tech University",
      logo: "https://via.placeholder.com/150x80?text=TechU",
    },
    {
      name: "Digital Rights Foundation",
      logo: "https://via.placeholder.com/150x80?text=DRF",
    },
  ];

  const copyWriting = {
    about: [
      "We're on a mission to restore trust in digital content by providing transparency in an era of increasingly sophisticated AI-generated media.",
    ],
    story: [
      "ClariFi began in 2025 when a team of AI researchers, digital ethics experts, and technology entrepreneurs came together with a shared concern: as AI-generated content became increasingly sophisticated, the line between authentic and synthetic media was blurring at an alarming rate.",
      "Our founders had witnessed firsthand how deepfakes and AI-written content could spread misinformation, undermine trust in legitimate sources, and create a world where nothing could be trusted at face value.",
      "Rather than accepting this as inevitable, they set out to develop technology that could detect AI-generated content across text, images, audio, and video—not to block or censor this content, but to provide transparency and allow users to make informed decisions.",
      "Today, ClariFi is at the forefront of the fight against digital misinformation, partnering with media organizations, educational institutions, and technology platforms to create a more transparent digital ecosystem.",
    ],
  };
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy-800 py-16 md:py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  About ClariFi
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit iste dolorem nesciunt eos tempora provident
                  architecto! Exercitationem sunt atque neque voluptates minima,
                  ipsa at alias iure ut, modi facere amet! Ullam ad cumque
                  maiores, temporibus inventore in illum id et obcaecati
                  reprehenderit laboriosam voluptate nisi delectus quis eius
                  optio ratione maxime?
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-emerald-400">Founded in 2025</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-emerald-400">3 Team Members</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-emerald-400">Global Reach</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="ClariFi team collaboration"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  placeat quos impedit ullam veniam. Vel atque, nostrum
                  consequatur quibusdam ea debitis fugiat, similique eius
                  labore, dolorum ipsam excepturi dicta? Architecto!
                </p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur, maiores libero at dolorum molestiae dolorem
                  accusamus tempora consequuntur aliquid. Nesciunt incidunt
                  dolor aliquid quae dolorum quam non quisquam assumenda illo!
                </p>
                <p className="text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit, nisi itaque. Nihil ad aliquid ipsum voluptatum,
                  fugit corporis ipsam amet aut veritatis similique! Dolorem
                  culpa tenetur unde nostrum debitis voluptatum?
                </p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  doloremque, provident ex ipsum illo totam esse voluptate rerum
                  magnam delectus recusandae assumenda et. Facilis perspiciatis
                  ullam, esse error harum ipsam.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* The Problem We're Solving */}
        <section className="py-16 bg-navy-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
              The Problem We&apos;re Solving
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-navy-800 mb-4 flex items-center">
                  <ShieldIcon size={24} className="text-emerald-500 mr-3" />
                  The Deepfake Crisis
                </h3>
                <p className="text-gray-700 mb-4">
                  AI can now generate realistic images, videos, and text that
                  are increasingly difficult to distinguish from authentic
                  content created by humans.
                </p>
                <p className="text-gray-700">
                  This technology is becoming more accessible, allowing bad
                  actors to create convincing fake content at scale with minimal
                  technical expertise.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-navy-800 mb-4 flex items-center">
                  <BarChartIcon size={24} className="text-emerald-500 mr-3" />
                  Eroding Trust
                </h3>
                <p className="text-gray-700 mb-4">
                  When people can&apos;t trust what they see and read online, it
                  undermines public discourse, threatens democracy, and creates
                  social division.
                </p>
                <p className="text-gray-700">
                  The &quot;liar&apos;s dividend&quot; means even authentic content can be
                  dismissed as fake, creating a crisis of trust in digital
                  information.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
              Our Approach
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-4">
                    Cutting-Edge Technology
                  </h3>
                  <p className="text-gray-700 mb-4">
                    ClariFi uses proprietary machine learning algorithms trained
                    on millions of content samples to detect subtle patterns
                    that distinguish AI-generated content from human-created
                    material.
                  </p>
                  <p className="text-gray-700">
                    Our technology continuously evolves to keep pace with
                    advancements in content generation, ensuring we maintain
                    high accuracy rates even as AI improves.
                  </p>
                </div>
                <div className="bg-navy-50 p-8 rounded-xl">
                  <LightbulbIcon
                    size={64}
                    className="text-emerald-500 mx-auto mb-4"
                  />
                  <div className="text-center">
                    <div className="text-navy-900 font-bold mb-1">
                      Detection Accuracy
                    </div>
                    <div className="text-3xl font-bold text-emerald-500">
                      99.2%
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Based on independent verification
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-navy-50 p-8 rounded-xl">
                  <AwardIcon
                    size={64}
                    className="text-emerald-500 mx-auto mb-4"
                  />
                  <div className="text-center">
                    <div className="text-navy-900 font-bold mb-1">
                      Ethical Framework
                    </div>
                    <div className="flex justify-center gap-2 flex-wrap">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                        Transparency
                      </span>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                        Privacy
                      </span>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                        Fairness
                      </span>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                        Accountability
                      </span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-navy-800 mb-4">
                    Ethical Principles
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We believe in transparency not censorship. ClariFi doesn&apos;t
                    block AI content—it simply provides clear labeling so users
                    can make informed decisions.
                  </p>
                  <p className="text-gray-700">
                    Our ethical framework ensures we respect user privacy, avoid
                    bias in our detection systems, and maintain accountability
                    through regular third-party audits.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
                <div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-4">
                    Inclusivity and Scalability
                  </h3>
                  <p className="text-gray-700 mb-4">
                    First-of-its-kind AI literacy via SMS/USSD.
                  </p>
                  <p className="text-gray-700">
                    Combines low-tech access (SMS/USSD) with high-tech detection
                    (AI chatbot)
                  </p>
                </div>
                <div className="bg-navy-50 p-8 rounded-xl">
                  <Handshake
                    size={64}
                    className="text-emerald-500 mx-auto mb-4"
                  />
                  <div className="text-center">
                    {/* <div className="text-navy-900 font-bold mb-1">
                      Community Engagement
                    </div> */}
                    <div className="flex justify-center gap-2 flex-wrap">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                      Community Engagement
                      </span>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                      Partnerships
                      </span>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                      Sustainability
                      </span>
                      {/* <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                        Accountability
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Partners & Supporters */}
        <section className="hidden py-16 bg-navy-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
              Partners & Supporters
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md mb-12">
                <p className="text-lg text-gray-700 text-center mb-8">
                  ClariFi works with leading organizations across media,
                  academia, and technology to advance our mission of digital
                  transparency.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {partners.map((partner, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-20 w-auto object-contain mb-3"
                      />
                      <p className="text-navy-800 font-medium text-center">
                        {partner.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-navy-800 mb-4">
                  Become a Partner
                </h3>
                <p className="text-gray-700 mb-6">
                  Interested in joining our network of partners committed to
                  digital transparency?
                </p>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition">
                  Contact Our Partnership Team
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Recognition */}
        <section className="hidden py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
              Recognition
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-navy-50 p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  <CheckCircleIcon size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2 text-center">
                  Tech Innovation Award
                </h3>
                <p className="text-gray-700 text-center">
                  Global Technology Forum, 2023
                </p>
              </div>
              <div className="bg-navy-50 p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  <CheckCircleIcon size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2 text-center">
                  Digital Ethics Excellence
                </h3>
                <p className="text-gray-700 text-center">
                  Media Trust Initiative, 2023
                </p>
              </div>
              <div className="bg-navy-50 p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  <CheckCircleIcon size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2 text-center">
                  Top 50 AI Startups
                </h3>
                <p className="text-gray-700 text-center">
                  Tech Innovators List, 2024
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
