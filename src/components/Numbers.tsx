import React from 'react';
import { Users, Trophy, Briefcase, Star } from 'lucide-react';

const Numbers = () => {
  const stats = [
    { icon: Users, number: "200+", label: "Clients Served" },
    { icon: Trophy, number: "50+", label: "Awards Won" },
    { icon: Briefcase, number: "500+", label: "Projects Completed" },
    { icon: Star, number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-900 to-pink-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;