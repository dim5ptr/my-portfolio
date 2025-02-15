import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Dimas</h1>
        <h2>Frontend Developer</h2>
        <p>I craft responsive websites where technology meets creativity</p>
        <div className="hero-buttons">
          <button 
            className="primary-btn" 
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
          <button 
            className="secondary-btn" 
            onClick={() => scrollToSection('projects')}
          >
            My Work
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
