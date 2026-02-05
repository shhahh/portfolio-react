import React from 'react';   // fix import
import { Calendar, Briefcase } from 'lucide-react';
import '../styles/about.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About <span className="highlight">Me</span></h2>

                <div className="about-content">
                    <div className="about-text animate-slide-left">
                        <h3 className="about-subtitle">Building digital products with passion.</h3>
                        <p>
                            I'm Shah, a dedicated Web Developer with a strong foundation in both frontend and backend technologies.
                            My journey started with Html and Css ,WordPress and evolved into building complex applications using React.
                        </p>
                        <p>
                            I believe in writing clean, maintainable code and solving real-world problems through technology.
                            Whether it's a simple landing page or a complex SaaS platform, I bring the same level of attention to detail.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-number">1.5+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">23+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">22+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>
                    </div>

                    <div className="experience-timeline">
                        <h3 className="timeline-title">Experience</h3>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <Briefcase size={18} />
                                    <h4>Web Developer</h4>
                                </div>
                                <div className="timeline-date">
                                    <Calendar size={14} /> 2026 - Present
                                </div>
                                <p>Leading development of full-stack applications using React.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <Briefcase size={18} />
                                    <h4>Freelance Developer</h4>
                                </div>
                                <div className="timeline-date">
                                    <Calendar size={14} /> 2024 - 2026
                                </div>
                                <p>Delivered 5+ projects for international clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
