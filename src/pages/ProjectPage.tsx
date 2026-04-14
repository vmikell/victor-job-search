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
        <div className="project-card solo">
          <p>{project.details}</p>
          <p className="muted">Stable route: /projects/{project.slug}</p>
        </div>
      </div>
    </section>
  )
}
