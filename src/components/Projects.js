import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt, FaFilm, FaImages, FaLaravel } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const projects = [
    {
      title: "Movie App",
      description:
        "A modern movie application built with React.js that allows users to browse and search movies. Features include movie details, ratings, and responsive design.",
      icon: <FaFilm className="project-icon" />,
      liveLink: "https://movie-app-ivory-two-95.vercel.app/",
      tech: ["React.js", "API Integration", "Responsive Design", "Rating System"],
      status: "completed"
    },
    {
      title: "Gallery App",
      description:
        "An elegant gallery application showcasing image management capabilities. Users can view, upload, and organize images in a beautiful interface.",
      icon: <FaImages className="project-icon" />,
      liveLink: "https://galery-app-eight.vercel.app/",
      tech: ["Ionic", "Image Processing", "File Storage", "Responsive Design"],
      status: "completed"
    },
    {
      title: "Laravel Project",
      description:
        "A Laravel-based application currently in development. Features include authentication, database management, and a RESTful API backend.",
      icon: <FaLaravel className="project-icon" />,
      liveLink: "#",
      tech: ["Laravel", "MySQL", "CRUD Operations", "JWT Authentication"],
      status: "in-progress"
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container" data-aos="fade-up">
        <h2>My Projects</h2>
        <Swiper
          navigation={true} // Navigasi aktif
          modules={[Navigation]}
          spaceBetween={10} // Kurangi jarak antar card
          slidesPerView={2} // Default satu per satu
          breakpoints={{
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="projects-carousel"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-card">
              <div className={`project-card ${project.status === 'in-progress' ? 'in-progress' : ''}`} key={index}>
                <div className="project-icon-wrapper">{project.icon}</div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                  {project.status === 'in-progress' ? (
                    <span className="progress-text">On Progress</span>
                  ) : (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;