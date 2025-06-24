import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Dev Intern",
      company: "3bytz Solutions",
      location: "Nigeria",
      period: "2024 - Present",
      description: "Collaborate with experienced leads in heading digital transformation initiatives and providing strategic technology consulting services to multiple organizations across different industries.",
      achievements: [
        "Implemented comprehensive technology solutions resulting in 40% operational efficiency improvement",
        "Led cross-functional teams of 10+ professionals in complex project deliveries",
        "Developed and executed strategic roadmaps for digital transformation initiatives"
      ]
    },
    {
      title: "Community Manager and Lead Researchert",
      company: "Crypto CU",
      location: "Nigeria",
      period: "2022 - Present",
      description: "Managed end-to-end project lifecycle and conducted comprehensive blockchain analysis to drive individual interests.",
      achievements: [
        "Successfully researches 15+ projects on time and within timeline",
        "Conducted Q/As for community memebers",
        "Wrote articles and contributed to the adoption of blockchain technology on low scale."
      ]
    },
    {
      title: "Campus Ambassador",
      company: "Samsung",
      location: "Nigeria", 
      period: "February 2025 – April 2025",
      description: "Specialized in promoting products through various forums.",
      achievements: [
        "Social media marketer.",
        "Campus awareness volunteer/pitcher."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A track record of delivering excellence across diverse technology and business environments
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-xl text-blue-400 font-medium">{exp.company}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-white font-semibold">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;