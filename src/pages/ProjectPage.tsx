import { Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/content'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  if (!project) return <Navigate to="/" replace />

  return (
    <section className="project-shell">
      <div className="container narrow">
        <p className="section-label">{project.eyebrow}</p>
        <h1 className="page-title">{project.title}</h1>
        <p className="page-copy">{project.summary}</p>

        {project.images?.length ? (
          <section className="project-gallery" aria-label={`${project.title} screenshots`}>
            {project.images.map((image) => (
              <figure key={image.src} className="project-shot">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </section>
        ) : null}

        <div className="project-card solo">
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
        </div>
      </div>
    </section>
  )
}
