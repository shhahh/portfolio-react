import "../styles/projects.css"

function ProjectCard({ title, description, tech }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="tech">{tech}</span>
    </div>
  )
}

export default ProjectCard
