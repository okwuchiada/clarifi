import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react";
export default function TeamsPage() {
  const leadershipTeam = [
    {
      name: "Favour C",
      role: "Project Lead – Strategy & Partnerships",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      //   bio: "Former tech policy advisor with 15+ years experience in digital ethics and AI governance.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Ada O",
      role: "Tech & Product Lead",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      //   bio: "AI researcher and former lead engineer at DeepMind with expertise in machine learning and content analysis.",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Chioma N",
      role: "Content & Community Engagement",
      image:
        "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      //   bio: "Product leader with experience at multiple tech unicorns, focused on ethical technology development.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    // {
    //   name: "Miguel Sanchez",
    //   role: "Chief Research Officer",
    //   image:
    //     "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    //   bio: "PhD in Computer Science with 20+ published papers on AI detection and digital forensics.",
    //   social: {
    //     linkedin: "#",
    //     github: "#",
    //     twitter: "#",
    //   },
    // },
  ];

  const gradients = [
    "bg-gradient-to-tr from-emerald-500 to-navy-500",
    "bg-gradient-to-br from-navy-400 to-emerald-600",
    "bg-gradient-to-r from-emerald-400 to-navy-700",
    "bg-gradient-to-bl from-navy-600 to-emerald-500",
    "bg-gradient-to-t from-emerald-300 to-navy-800",
  ];

  const advisors = [
    {
      name: "Dr. Emily Zhang",
      role: "AI Ethics Advisor",
      organization: "Global AI Institute",
    },
    {
      name: "Robert Williams",
      role: "Media Policy Expert",
      organization: "Digital Rights Foundation",
    },
    {
      name: "Prof. Alicia Torres",
      role: "Academic Advisor",
      organization: "Tech University",
    },
  ];
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy-800 py-16 md:py-24 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              The passionate minds behind ClariFi are dedicated to creating a
              more transparent digital ecosystem through cutting-edge AI
              detection technology.
            </p>
          </div>
        </section>
        {/* Leadership Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
              {/* Meet the Team */}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  {/* image */}
                  <div
                    className={`w-full h-64 flex items-center justify-center text-white text-4xl font-bold 
                   ${gradients[index % gradients.length]}`}
                  >
                    <span className="text-4xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-3">
                      {member.role}
                    </p>
                    {/* <p className="text-gray-600 mb-4">{member?.bio}</p> */}
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="text-gray-500 hover:text-emerald-500 transition"
                        >
                          <LinkedinIcon size={20} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="text-gray-500 hover:text-emerald-500 transition"
                        >
                          <TwitterIcon size={20} />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="text-gray-500 hover:text-emerald-500 transition"
                        >
                          <GithubIcon size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Advisors */}
        <section className="hidden py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
              Our Advisors
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {advisors.map((advisor, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-navy-800 mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-1">
                    {advisor.role}
                  </p>
                  <p className="text-gray-600">{advisor.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Team Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-navy-50 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  Transparency
                </h3>
                <p className="text-gray-700">
                  We believe in complete transparency in both our technology and
                  our operations. Our detection methods are open for review and
                  discussion.
                </p>
              </div>
              <div className="p-6 bg-navy-50 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  Integrity
                </h3>
                <p className="text-gray-700">
                  We maintain the highest standards of integrity in our
                  research, development, and business practices, ensuring our
                  technology serves the public good.
                </p>
              </div>
              <div className="p-6 bg-navy-50 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  We continuously push the boundaries of what&apos;s possible in AI
                  detection, staying ahead of evolving synthetic content
                  generation technologies.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Join Our Team */}
        <section className="py-16 bg-gradient-to-br from-navy-800 to-navy-900 text-white">
          <div className="hidden container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-300 mb-8">
                We&apos;re looking for passionate individuals who want to make a
                difference in the fight against digital misinformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition">
                  View Open Positions
                </button>
                <button className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-full transition">
                  Our Benefits
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
