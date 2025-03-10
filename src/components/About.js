import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact, FaNode, FaLaravel, FaJs } from 'react-icons/fa';
import { SiTypescript, SiBlazor } from 'react-icons/si';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const skills = [
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNode />, color: '#339933' },
    { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Blazor', icon: <SiBlazor />, color: '#512BD4', inProgress: true }, // Blazor dengan status belajar
  ];

  return (
    <section id="about" className="about">
      <div className="about-container" data-aos="fade-up">
        <div className="about-content">
          <div className="about-text">
            <h2>Tentang Saya</h2>
              <p>
              Saya adalah seorang pelajar kelas 12 semester akhir di <strong>SMKN 6 Malang</strong> yang memiliki keahlian dalam bidang <strong>pengembangan frontend</strong>. 
              Selain itu, saya juga memiliki pemahaman dasar tentang <strong>pengembangan backend</strong>, yang memungkinkan saya untuk menciptakan solusi web yang lebih komprehensif.
              </p>
              <p>
              Saya mahir dalam membangun aplikasi yang andal menggunakan <strong>React.js</strong> untuk frontend, serta <strong>Node.js</strong> dan <strong>Laravel</strong> untuk pengembangan frontend maupun backend. 
              Saat ini, saya sedang mempelajari <strong>Blazor</strong> guna memperluas pengetahuan dan keterampilan saya di bidang pengembangan web.
              </p>
          </div>
          <div className="profile-image">
            <img src="icon.jpg" alt="Profile" />
          </div>
        </div>

        <div className="skills-section" data-aos="fade-up">
          <h3>Technical Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className={`skill-card ${skill.inProgress ? 'in-progress' : ''}`} key={index}>
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
                {skill.inProgress && (
                  <div className="progress-overlay">
                    <span>Learning</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;