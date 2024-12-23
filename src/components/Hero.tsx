import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex  flex-col gap-y-10 justify-center items-center">
      {/* Video Background */}
      <div className='h-full w-full absolute z-0'>
      <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/IW30ho8eM5Y?autoplay=1&loop=1&mute=1&playlist=IW30ho8eM5Y&controls=0&modestbranding=1&showinfo=0"
  frameBorder="0"
  allow="autoplay; loop; fullscreen"
  allowFullScreen
  style={{ pointerEvents: 'none' }}
  title="Embedded youtube"
/>

      </div>

      {/* Brand Name */}
      <div className="relative text-center mt-8 z-10 md:mt-36">
        <h1
          style={{
            WebkitTextStroke: "3px pink", // Border thickness and color
          }}
          className="text-white font-anton md:text-6xl font-extrabold "
        >
          <span className="block text-left text-5xl">THE</span>
          <span className="block md:text-[12rem] tracking-widest my-1 ">HYPE</span>
          <span className="block text-7xl tracking-widest">DEPARTMENT</span>
        </h1>
      </div>

      {/* Tagline and Call to Action */}
      <div className="relative flex flex-col items-center text-center mb-8 md:mb-16 px-4 max-w-xl">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Ready to Give Your Brand <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            the Hype It Deserves?
          </span>
        </h2>
        <button className="group bg-gradient-to-r from-yellow-400 to-pink-500 mt-20 text-gray-700 px-6 py-3 rounded-full font-medium text-base md:text-lg transition-all duration-300 flex items-center space-x-2">
          <span>Book a Call</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
