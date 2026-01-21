import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/projects.css';
import DocuchatImg from "../assets/Docuchat.png";

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store built with Laravel and React. Features include stripe payment, admin dashboard, and inventory management.",
            tech: ["Laravel", "React", "MySQL", "Stripe"],
             image: DocuchatImg,
            github: "https://github.com/shhahh/Laravel-Offline-RAG-DocuChat",
            demo: "https://example.com"
        },
        {
            title: "Task Management App",
            description: "Real-time collaboration tool using MERN stack. Includes drag-and-drop boards, live chat, and team permissions.",
            tech: ["React", "Node.js", "MongoDB", "Socket.io"],
            image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
            github: "https://github.com",
            demo: "https://example.com"
        },
        {
            title: "Real Estate Portal",
            description: "Property listing website with advanced search, map integration, and automated email notifications.",
            tech: ["Wordpress", "PHP", "Mapbox API"],
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
            github: "https://github.com",
            demo: "https://example.com"
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title custom-color">Featured <span className="highlight">Projects</span></h2>
                <p className="section-subtitle">Highlights from my recent work.</p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="project-overlay">
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="tech-badge">{tech}</span>
                                    ))}
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
