import "../styles/services.css"

function Services() {
  return (
    <section className="services page">
        <div className="container">
      <h2>What I Do</h2>

      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            High quality websites using HTML, CSS, JavaScript and React with
            clean and scalable structure.
          </p>
        </div>

        <div className="service-card">
          <h3>UI / UX Design</h3>
          <p>
            User focused layouts with proper spacing, typography and modern
            design principles.
          </p>
        </div>

        <div className="service-card">
          <h3>WordPress Development</h3>
          <p>
            Custom themes, Elementor based layouts and performance optimized
            WordPress websites.
          </p>
        </div>

        <div className="service-card">
          <h3>Laravel Applications</h3>
          <p>
            Secure backend systems, CRUD applications and business logic driven
            web apps.
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Services
