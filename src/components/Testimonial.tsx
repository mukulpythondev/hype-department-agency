import React from "react";

const testimonials = [
  {
    title: "The Hype Department",
    message: "This is an amazing platform to showcase your projects. With an intuitive interface and a vast array of tools, it allows you to bring your creative ideas to life effortlessly.",
    stars: 4,
    gradient: "from-pink-500 to-red-500"
  },
  {
    title: "The Hepa",
    message: "Great interface and user-friendly design! The platform ensures seamless navigation and efficient management of tasks, making it a must-have tool for professionals.",
    stars: 5,
    gradient: "from-green-400 to-teal-500"
  },
  {
    title: "The Of Due",
    message: "Perfect for collaboration and innovation. The platform fosters teamwork with its robust features, enabling users to achieve their goals effectively.",
    stars: 3,
    gradient: "from-yellow-400 to-pink-500"
  },
  {
    title: "The Mor",
    message: "Amazing experience, highly recommended! Its unique features and ease of use have significantly improved my productivity.",
    stars: 5,
    gradient: "from-gray-300 to-gray-400"
  },
  {
    title: "The EMT",
    message: "Creative and functional, love the simplicity. The platform's minimalistic design ensures maximum efficiency and user satisfaction.",
    stars: 4,
    gradient: "from-pink-300 to-blue-400"
  },
  {
    title: "The Maf",
    message: "One of the best platforms I have ever used! It combines cutting-edge technology with unparalleled usability, making it a top choice for professionals and beginners alike.",
    stars: 5,
    gradient: "from-pink-500 to-purple-400"
  }
];

const Testimonials = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`w-72 p-6 rounded-lg text-white text-center shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r ${testimonial.gradient}`}
        >
          <h2 className={`text-xl font-bold mb-4 ${index % 2 === 0 ? "text-black" : "text-white"}`}>{testimonial.title}</h2>
          <p className="text-base mb-6">{testimonial.message}</p>
          <div className="flex justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-2xl ${i < testimonial.stars ? "text-yellow-400" : "text-gray-400"}`}>
                &#9733;
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
