import React from 'react'; // fix import

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';
import '../styles/hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <span className="subtitle">Hello, I'm</span>
                    <h1 className="title">Shah <span className="highlight">.</span></h1>
                    <h2 className="role">
                        Full Stack Developer <br />
                        <span className="role-highlight">Laravel & React Expert</span>
                    </h2>
                    <p className="description">
                        I build industry-level web applications that are fast, secure, and visually stunning.
                        Specializing in the PHP ecosystem and modern JavaScript frameworks.
                    </p>

                    <div className="cta-group">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:hello@example.com" className="social-icon">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual animate-float delay-300">
                    {/* Profile Image Container */}
                    <div className="profile-image-container">
                        <img
                            src={profileImg}
                            alt="Shah - Full Stack Developer"
                            className="profile-image"
                        />
                        <div className="profile-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
