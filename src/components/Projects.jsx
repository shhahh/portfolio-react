import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/projects.css';
import hoobankImg from "../assets/hoobank.png"
import FirawebImg from "../assets/Firaweb.png"
import shopingstoreImg from "../assets/shopingstore.png"
import EB5GlobalImg from "../assets/eb-5sc.png"
import sgfoodImg from "../assets/sgfood.png"
import hotelimImg from "../assets/hotelim.png"

const Projects = () => {
    const projects = [
        
        {
            title: "EB-5 Global Capital", 
            description: "A responsive homepage clone of a WordPress website built using React.js and Vite. This project focuses on accurate UI replication, component-based structure, and modern frontend development practices.",
            tech: ["React.js", "VITE", "Styled-Components", "Context API"],
            image: EB5GlobalImg,
            github: "https://github.com/shhahh/EB-5-clone",
            demo: "https://eb-5-clone.vercel.app/"
        },

        {
            title: "SSNG Hotels - Premium Stay", 
            description: "A luxury-focused Hotel Management System overhauled from a basic functional site to an elite digital experience. Features include cinematic visual storytelling, optimized room-booking logic, and a high-end responsive UI with smooth navigation. ",
            tech: ["React", "Tailwind CSS", "Firebase", "Context API"],
            image: hotelimImg,
            github: "https://github.com/shhahh/Hotel-management-system-improve",
            demo: "https://hotel-management-system-improve.vercel.app/"
        },

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
            tech: ["javascript 95.9%", "Html 0.6%", "css 3.5%"],
            image: FirawebImg,
            github: "https://github.com/shhahh/Firaweb",
            demo: "https://shah-firaweb.vercel.app/"
        },

       {
            title: "TS-Shopping Hub", 
            description: "A high-performance E-commerce storefront built with a mobile-first approach. Features a dynamic shopping cart, complex product filtering, and a sleek responsive grid layout. Engineered for type-safety and seamless user interactions.",
            tech: ["React.js", "TypeScript 95.9 %", "Styled-Components", "Context API"],
            image: shopingstoreImg,
            github: "https://github.com/shhahh/shoping-store",
            demo: "https://shoping-store-delta.vercel.app/"
        },

        {
            title: "Sg-food for Honor", 
            description: "This project was created to improve the SG-FOOD website by redesigning and modernizing its homepage UI. The layout was rebuilt using React.js and Vite, focusing on responsiveness, performance, and clean structure. ",
            tech: ["React.js", "VITE", "Styled-Components", "Antigravity – Gemini model", "Context API"],
            image: sgfoodImg,
            github: "https://github.com/shhahh/Sgfood-theChallenge",
            demo: "https://sgfood-the-challenge.vercel.app/"
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
