import ProjectCard from "../components/ProjectCard"
import "../styles/projects.css"

function Projects() {
  const projects = [
    {
      title: "Business Portfolio Website",
      description:
        "A clean and responsive portfolio website built with React and modern CSS.",
      tech: "React, CSS"
    },
    {
      title: "WordPress Corporate Website",
      description:
        "Custom WordPress website using Elementor with performance optimization.",
      tech: "WordPress, Elementor"
    },
    {
      title: "Laravel Admin Panel",
      description:
        "CRUD based admin panel with authentication and role management.",
      tech: "Laravel, MySQL"
    },
    {
      title: "Landing Page for Client",
      description:
        "High-conversion landing page with modern UI and responsive layout.",
      tech: "HTML, CSS, JavaScript"
    }
  ]

  return (
    <section className="projects page">
         <div className="container">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
      </div>
    </section>
  )
}

export default Projects
