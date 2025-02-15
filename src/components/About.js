import React from 'react';
import { FaReact, FaNode, FaLaravel } from 'react-icons/fa';
// import { SiTypescript } from 'react-icons/si';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNode />, color: '#339933' },
    { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
    // { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    // { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>I'm a Full Stack Developer specializing in modern web technologies. My expertise spans both frontend and backend development, allowing me to create complete web solutions.</p>
            <p>I excel in building robust applications using React.js for frontend, Node.js and Laravel for frontend and backend.</p>
          </div>
          
          <div className="profile-image">
            <img src="icon.jpg" alt="Profile" />
          </div>
        </div>

        <div className="skills-section">
          <h3>Technical Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;