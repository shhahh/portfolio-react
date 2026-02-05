import React from 'react';
import '../styles/skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Vite" ,"TypeScript"]
        },
        {
            title: "Backend & Core",
            skills: ["Laravel", "PHP", "Node.js", "MySQL", "REST APIs"]
        },
        
        {
            title: "CMS & Tools",
            skills: ["WordPress", "Git/GitHub", "Composer", "npm", "Docker"]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Technical <span className="highlight">Expertise</span></h2>
                <p className="section-subtitle">A full-stack arsenal ready for any challenge.</p>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
