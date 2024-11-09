import React from 'react';
import { Zap, Globe, Lock, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-blue-400" size={24} />,
    title: 'Lightning Fast Deployments',
    description: 'Deploy your applications in seconds with our optimized build system.'
  },
  {
    icon: <Globe className="text-purple-400" size={24} />,
    title: 'Global Edge Network',
    description: 'Serve your content from locations closest to your users.'
  },
  {
    icon: <Lock className="text-green-400" size={24} />,
    title: 'Enterprise Security',
    description: 'Bank-grade security with automated SSL and continuous monitoring.'
  },
  {
    icon: <Cpu className="text-red-400" size={24} />,
    title: 'Auto-scaling',
    description: 'Scale automatically based on your traffic patterns.'
  }
];

const Features=()=> {
  return (
    <div className="py-20 px-4" id="features">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Everything you need to build at scale
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
              <div className="bg-white/5 p-3 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features