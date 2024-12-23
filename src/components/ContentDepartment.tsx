import React from "react";

const ContentDepartment = () => {
  const works = [
    {
      title: "Brand Strategy",
      video: "https://growthrocket.media/Portfolio/1.mp4",
    },
    {
      title: "Content Creation",
      video: "https://growthrocket.media/Portfolio/2.mp4",
    },
    {
      title: "Social Media",
      video: "https://growthrocket.media/Portfolio/3.mp4",
    },
    {
      title: "Influencer Marketing",
      video: "https://growthrocket.media/Portfolio/4.mp4",
    },
    {
      title: "Paid Advertising",
      video: "https://growthrocket.media/Portfolio/3.mp4",
    },
  ];

  return (
    <section id="content" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Content Department
        </h2>
        <div
          className="flex gap-8 overflow-x-auto scrollbar-hide" // Custom class to hide scrollbar
          style={{
            WebkitOverflowScrolling: "touch", // Smooth scrolling for touch devices
          }}
        >
          {works.map((work, index) => (
            <div
              key={index}
              className="relative w-72 h-[50vh] rounded-lg overflow-hidden group flex-shrink-0"
            >
              {/* Video Element */}
              <video
                src={work.video}
                className="w-full border-2 border-orange-600 h-full object-cover group-hover:controls"
                muted
                autoPlay
                loop
                playsInline
                controls
                onMouseEnter={(e) => {
                  if (window.innerWidth >= 768) e.currentTarget.controls = true;
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth >= 768) e.currentTarget.controls = false;
                }}
              />

              {/* Title Overlay */}
              <div className="absolute top-4 left-4 bg-black/60 px-4 py-2 rounded text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {work.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentDepartment;
