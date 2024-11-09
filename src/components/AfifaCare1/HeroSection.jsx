import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text">
          Ship your code faster than ever before
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Experience the future of development with our cutting-edge platform. 
          Deploy, scale, and manage your applications with unparalleled ease.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <button className="bg-white text-black px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
            Start Building <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 rounded-lg flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;