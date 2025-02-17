import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const content = document.querySelector('.hero-content');
    content.classList.add('fade-in');
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="animate-text">Hi, I'm Dimas Putra </h1>
        <h2 className="animate-text-delay-1">Fullstack Developer</h2>
        <p className="animate-text-delay-2">I craft responsive websites where technology meets creativity</p>
        <div className="hero-buttons animate-text-delay-3">
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