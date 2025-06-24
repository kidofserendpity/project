import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "West African Senior School Certificate (WASSC)",
      institution: "University of Nigeria Secondary School, Enugu Campus",
      period: "2015 - 2021",
      description: "Specialized in foundational science and technology majors."
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Federal University of Technology, Owerri",
      period: "2021 - present", 
      description: "Focus on Software Engineering and Systems Analysis"
    }
  ];

  const certifications = [
    "Community Management Professional (CMP)",
    "West African Senior School Certificate (WASSC)",
    "Digital Transformation Leadership",
    "Strategic Planning and Execution"
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development to stay at the forefront of technology and business innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-400" size={32} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-green-400" size={32} />
              <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
            </div>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-white font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
              <p className="text-gray-300 text-center">
                <strong className="text-white">Commitment to Excellence:</strong> Continuously updating skills and knowledge 
                to deliver cutting-edge solutions and maintain industry leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;