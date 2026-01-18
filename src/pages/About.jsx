import "../styles/about.css"

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Bootstrap",
    "WordPress",
    "PHP",
    "Laravel"
  ]

  return (
    <section className="about page">
    <div className="container">
      <h2>About Me</h2>

      <p className="about-text">
        I am a web developer with strong hands-on experience in frontend and
        backend technologies. I focus on clean structure, reusable components
        and scalable logic.
      </p>

      <h3 className="skills-heading">Technical Skills</h3>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default About
