import React from 'react';
import { ChevronDown, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="block">Nnanna</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Eseni
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experienced Technology Professional & Strategic Leader
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Driving digital transformation and innovation across multiple industries with expertise in 
              project management, business analysis, and technology implementation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>nnannaeseni16@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+234 907 916 5817</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Nigeria</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="#about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Learn More
            </a>
            <a 
              href="#contact"
              className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;