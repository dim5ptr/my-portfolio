import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaExternalLinkAlt, FaFilm, FaImages } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const projects = [
    {
      title: "Movie App",
      description: "A modern movie application built with React.js that allows users to browse and search movies. Features include movie details, ratings, and responsive design.",
      icon: <FaFilm className="project-icon" />,
      // icon: <img src="/film-slate.png" alt="Movie App Icon" className="project-icon" />,
      liveLink: "https://movie-app-ivory-two-95.vercel.app/",
      tech: ["React.js", "API Integration", "Responsive Design"]
    },
    {
      title: "Gallery App",
      description: "An elegant gallery application showcasing image management capabilities. Users can view, upload, and organize images in a beautiful interface.",
      icon: <FaImages className="project-icon" />,
      // icon: <img src="/galery-icon.png" alt="Gallery App Icon" className="project-icon" />,
      liveLink: "https://galery-app-eight.vercel.app/",
      tech: ["Ionic", "Image Processing"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container" data-aos="fade-up">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon-wrapper">
                {project.icon}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
