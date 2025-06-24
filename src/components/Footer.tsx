import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 Nnanna Eseni. Crafted with 
            <Heart className="text-red-400" size={16} fill="currentColor" />
            and dedication to excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;