import React from 'react';
import { Heart, Code, ArrowUpRight } from 'lucide-react';

const FooterMinimal = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 border-t border-cyan-500/10 pt-12 pb-6">
      {/* Glowing border effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="mb-3">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-chakra tracking-wider inline-block">
                MK
                <sup className="text-xs text-emerald-400 ml-1">®</sup>
              </h2>
            </div>
            <p className="text-gray-500 text-sm font-mono tracking-wider">
              Digital Architect & Full-Stack Developer
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => window.location.href = '#contact'}
            className="group relative px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-cyan-500/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <span className="relative z-10 flex items-center space-x-2 text-gray-300 group-hover:text-white">
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-600 text-sm font-mono">
            © {new Date().getFullYear()} Maxwell Kiprotich
          </div>

          {/* Made with love */}
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <Code className="w-4 h-4" />
            <span>with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>in Kenya</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="text-gray-500 hover:text-cyan-300 transition-colors text-sm font-medium flex items-center space-x-1 group"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded border border-gray-700 group-hover:border-cyan-400 flex items-center justify-center">
              <span className="transform -translate-y-0.5">↑</span>
            </div>
          </button>
        </div>

        {/* Status indicator */}
        <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-gray-700">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span>Available for new projects</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterMinimal;