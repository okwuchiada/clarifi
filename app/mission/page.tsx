import React from 'react'

import {
  CheckCircle2Icon,
  TrendingUpIcon,
  TargetIcon,
  AwardIcon,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function MissionPage () {
  const milestones = [
    {
      year: '2025',
      title: 'Research Begins',
      description:
        'Initial research into AI content detection algorithms at Tech University.',
    },
    {
      year: '2025',
      title: 'ClariFi Founded',
    //   description:
    //     'Company established with seed funding from ethical tech investors.',
    },
    // {
    //   year: '2025',
    //   title: 'Beta Launch',
    //   description:
    //     'First beta version released to select media partners and researchers.',
    // },
    // {
    //   year: '2024',
    //   title: 'Public Launch',
    //   description:
    //     'Full public release of ClariFi technology across multiple platforms.',
    // },
  ]
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy-800 py-16 md:py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Our Mission
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                ClariFi exists to restore trust in digital content by providing
                transparency in an era of increasingly sophisticated
                AI-generated media.
              </p>
              <div className="inline-block px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm">
                <span className="text-emerald-400 font-medium">
                  Transparency • Trust • Truth
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Mission Statement */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">
                    Our Mission Statement
                  </h2>
                  <div className="h-1 w-24 bg-emerald-500 mb-6"></div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To empower individuals and organizations with the tools to
                    identify AI-generated content, fostering a digital ecosystem
                    built on transparency and informed trust.
                  </p>
                </div>
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="bg-navy-50 p-8 rounded-full">
                    <TargetIcon
                      size={120}
                      className="text-emerald-500 mx-auto"
                    />
                  </div>
                </div>
              </div>
              {/* <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-8 text-gray-700 italic text-lg">
                "In a world where seeing is no longer believing, transparency
                becomes our most valuable currency."
                <footer className="mt-2 text-navy-800 font-medium not-italic">
                  — Favour C, Project Lead
                </footer>
              </blockquote> */}
            </div>
          </div>
        </section>
        {/* Vision & Values */}
        <section className="py-16 bg-navy-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
              Vision & Values
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4 flex items-center">
                  <AwardIcon size={24} className="text-emerald-500 mr-2" />
                  Our Vision
                </h3>
                <p className="text-gray-700 mb-6">
                  We envision a digital world where all content is clearly
                  labeled by origin, where AI-generated material is instantly
                  recognizable, and where users can navigate information with
                  confidence.
                </p>
                <p className="text-gray-700">
                  By 2030, we aim to make AI content detection as common and
                  expected as spam filters, creating a new standard for digital
                  transparency.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4 flex items-center">
                  <CheckCircle2Icon
                    size={24}
                    className="text-emerald-500 mr-2"
                  />
                  Core Values
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </span>
                    <p className="text-gray-700">
                      <span className="font-semibold">Transparency:</span> We
                      believe in complete openness about how our technology
                      works.
                    </p>
                  </li>
                  <li className="flex">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </span>
                    <p className="text-gray-700">
                      <span className="font-semibold">Empowerment:</span> We
                      give users control over their digital consumption.
                    </p>
                  </li>
                  <li className="flex">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </span>
                    <p className="text-gray-700">
                      <span className="font-semibold">Innovation:</span> We
                      continuously improve our detection capabilities.
                    </p>
                  </li>
                  <li className="flex">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      4
                    </span>
                    <p className="text-gray-700">
                      <span className="font-semibold">Accessibility:</span> Our
                      tools are designed to be available to everyone.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Goals & Impact */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
              Goals & Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-emerald-500">
                <div className="mb-4">
                  <TrendingUpIcon size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  Short-term Goals
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2Icon
                      size={18}
                      className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Expand detection capabilities to video and audio
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2Icon
                      size={18}
                      className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>Partner with 50+ major news organizations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2Icon
                      size={18}
                      className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>Reach 1 million active users</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-emerald-500">
                <div className="mb-4">
                  <TrendingUpIcon size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  Long-term Vision
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2Icon
                      size={18}
                      className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>Universal adoption across digital platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2Icon
                      size={18}
                      className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>Industry standards for content transparency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2Icon
                      size={18}
                      className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>
                      Global educational initiatives on digital literacy
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-emerald-500">
                <div className="mb-4">
                  <TrendingUpIcon size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  Measured Impact
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2Icon
                      size={18}
                      className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>30% reduction in viral misinformation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2Icon
                      size={18}
                      className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>85% user confidence in labeled content</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2Icon
                      size={18}
                      className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span>12 policy initiatives influenced</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Timeline */}
        <section className="hidden py-16 bg-navy-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
              Our Journey
            </h2>
            <div className="max-w-3xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className="relative mb-12">
                  <div className="flex items-center justify-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white z-10"></div>
                  </div>
                  <div
                    className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2"></div>
                    <div
                      className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}
                    >
                      <div className="bg-white p-5 rounded-lg shadow-md">
                        <span className="text-emerald-600 font-bold">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold text-navy-800 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-700">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
