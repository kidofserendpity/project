import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Users className="text-blue-400" size={24} />,
      title: "Leadership",
      description: "Proven track record of leading cross-functional teams and driving organizational change"
    },
    {
      icon: <Target className="text-green-400" size={24} />,
      title: "Strategic Vision",
      description: "Experience in developing and executing strategic initiatives across multiple industries"
    },
    {
      icon: <Award className="text-purple-400" size={24} />,
      title: "Excellence",
      description: "Consistent delivery of high-quality results with attention to detail and best practices"
    },
    {
      icon: <TrendingUp className="text-orange-400" size={24} />,
      title: "Growth Mindset",
      description: "Committed to continuous learning and adaptation in rapidly evolving technology landscapes"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A dedicated professional with extensive experience in technology leadership, 
            project management, and business transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              With a strong background in technology and business operations, I bring a unique blend of 
              technical expertise and strategic thinking to every project. My experience spans across 
              various industries, where I've successfully led digital transformation initiatives and 
              implemented innovative solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in bridging the gap between technical teams and business stakeholders, 
              ensuring that technology solutions align with organizational goals and deliver measurable value.
            </p>
            <div className="pt-4">
              <a 
                href="#contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Let's Work Together
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;