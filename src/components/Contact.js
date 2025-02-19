import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);
  const socialLinks = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      link: "mailto:dimasetya1836@gmail.com",
      username: "dimasetya1836"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/dimas-s-b75608258/",
      username: "Dimas S"
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      link: "https://www.instagram.com/dim_5ptr/",
      username: "@dim_5ptr"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      link: "https://github.com/dim5ptr",
      username: "dim5ptr"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container" >
        <h2 data-aos="fade-up">Get In Touch</h2>
        <div className="social-grid" data-aos="fade-up">
          {socialLinks.map((social, index) => (
            <a 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card"
              key={index}
            >
              <div className="social-icon">
                {social.icon}
              </div>
              <h3>{social.title}</h3>
              <p>{social.username}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;