import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/projects.css';
import DocuchatImg from "../assets/Docuchat.png";
import hoobankImg from "../assets/hoobank.png"
import FirawebImg from "../assets/Firaweb.png"
const Projects = () => {
    const projects = [

         {           
            description: "This is an improved version of a Modern Bank Landing Page. I have optimized the layout for better responsiveness and added new components to enhance the user experience.",
            title: "Modern Bank App",
            tech: ["React", "Node.js", "MongoDB", "Socket.io"],
            image: hoobankImg,
            github: "https://github.com/shhahh/modern-bank-app-improved",
            demo: "https://modern-bank-app-improved.vercel.app/"
        },
       
        {
            title: "Firaweb Web Agency",
            description: "We Build Modern Logical and Rich Websites. We craft digital experiences that look sharp, feel intuitive, and perform flawlessly across every platform.",
            tech: ["Wordpress", "PHP", "Mapbox API"],
            image: FirawebImg,
            github: "https://github.com/shhahh/Firaweb",
            demo: "https://shah-firaweb.vercel.app/"
        },

         {
            title: "DocuChat",
            description: "A full-featured online store built with Laravel and React. Features include stripe payment, admin dashboard, and inventory management.",
            tech: ["Laravel", "React", "MySQL", "Stripe"],
             image: DocuchatImg,
            github: "https://github.com/shhahh/Laravel-Offline-RAG-DocuChat",
            demo: "https://example.com"
        },
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
