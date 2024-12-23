import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentDepartment from './components/ContentDepartment';
import Numbers from './components/Numbers';
import Services from './components/Services';
import Testimonials from './components/Testimonial';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <ContentDepartment />
      <Numbers />
      <Services />
      <Testimonials/>
    </div>
  );
}

export default App;