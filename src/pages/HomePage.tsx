import { experiences, profile, projects, skillGroups, stats } from '../data/content'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="section-label">{profile.title}</p>
            <h1 className="hero-title">Victor <em>Mikell</em></h1>
            <p className="hero-copy">{profile.tagline}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/Victor_Mikell_Resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
              <a className="button button-secondary" href="#projects">View Projects</a>
            </div>
          </div>
          <div className="hero-panel">
            <p>{profile.intro}</p>
            <p className="hero-bridge">In other words</p>
            <p>{profile.about}</p>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <p className="section-label">About</p>
          <h2 className="section-title">Building products, systems, and workflows that work for your clients.</h2>
          <div className="stats-grid">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section alt">
        <div className="container">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I make ambiguity executable.</h2>
          <div className="timeline">
            {experiences.map((item) => (
              <article key={`${item.company}-${item.role}`} className="timeline-item">
                <p className="timeline-date">{item.date}</p>
                <h3>{item.role}</h3>
                <p className="timeline-meta">{item.company} · {item.location}</p>
                <p>{item.description}</p>
                <div className="tag-row">
                  {item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <p className="section-label">Selected Product Builds</p>
          <h2 className="section-title">AI-assisted product work, with stable URLs.</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.slug} className="project-card">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <div className="case-study-block">
                  <p className="project-label">Challenge</p>
                  <p>{project.challenge}</p>
                </div>

                <div className="case-study-block">
                  <p className="project-label">Approach</p>
                  <p>{project.approach}</p>
                </div>

                <div className="case-study-block">
                  <p className="project-label">Outcome</p>
                  <p>{project.outcome}</p>
                </div>

                <div className="case-study-block">
                  <p className="project-label">My role</p>
                  <p>{project.role}</p>
                </div>

                <div className="case-study-block">
                  <p className="project-label">What this proves</p>
                  <ul className="case-study-list">
                    {project.proofPoints.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>

                <p className="muted">Stable route: /projects/{project.slug}</p>
                <a className="text-link" href={`/projects/${project.slug}`}>Open project page</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">What I bring to a product team.</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container narrow">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let’s connect.</h2>
          <div className="contact-card">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span>{profile.location}</span>
          </div>
        </div>
      </section>
    </>
  )
}
