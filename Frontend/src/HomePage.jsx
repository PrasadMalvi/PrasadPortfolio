import React from 'react';
import Hero from './Components/Hero';
import ScrollingText from './Components/ScrollingText';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';

function HomePage() {
  return (
    <main>
      <Hero />
      <ScrollingText />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}

export default HomePage;
