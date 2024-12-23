import React from 'react';
import { Rocket, Palette, Megaphone, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Brand Strategy",
      description: "Strategic positioning and market analysis to elevate your brand.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Eye-catching visuals that capture your brand's essence.",
    },
    {
      icon: Megaphone,
      title: "Social Media",
      description: "Engaging content that builds community and drives growth.",
    },
    {
      icon: BarChart,
      title: "Performance Marketing",
      description: "Data-driven campaigns that deliver measurable results.",
    },
  ];

  return (
    <section id="services" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;