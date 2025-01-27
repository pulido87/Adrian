import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default App;