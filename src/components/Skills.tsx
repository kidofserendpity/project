import React from 'react';
import { Code, Database, Users, BarChart, Settings, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: "Technical Leadership",
      skills: ["Project Management", "System Architecture", "Digital Transformation", "Process Optimization"]
    },
    {
      icon: <Database className="text-green-400" size={32} />,
      title: "Data & Analytics",
      skills: ["Business Intelligence", "Data Analysis", "Reporting", "KPI Development"]
    },
    {
      icon: <Users className="text-purple-400" size={32} />,
      title: "Team Management",
      skills: ["Cross-functional Leadership", "Stakeholder Management", "Training & Development", "Change Management"]
    },
    {
      icon: <BarChart className="text-orange-400" size={32} />,
      title: "Business Strategy",
      skills: ["Strategic Planning", "Business Analysis", "Risk Assessment", "Performance Management"]
    },
    {
      icon: <Settings className="text-red-400" size={32} />,
      title: "Operations",
      skills: ["Process Improvement", "Quality Assurance", "Vendor Management", "Resource Planning"]
    },
    {
      icon: <Shield className="text-cyan-400" size={32} />,
      title: "Compliance & Security",
      skills: ["Risk Management", "Compliance Frameworks", "Security Protocols", "Audit Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Competencies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning technology, business, and leadership domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-black/40 backdrop-blur-sm px-8 py-4 rounded-xl border border-gray-800">
            <span className="text-gray-300">Ready to discuss your project?</span>
            <a 
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;