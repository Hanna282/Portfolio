import './ProjectCard.css'

const ProjectCard = ({ title, img, links = [], intro, description }) => {
  return (
    <article className="project">
      <h3>{title}</h3>

      <img className="project-image" src={img} alt={title} loading="lazy" />

      {links.length > 0 && (
        <div className="project-links">
          {links.map((link, index) => (
            <a
              key={index}
              className="primary-button project-link-button"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Screenshot of ${title} - ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <div className="project-description">
        {intro && <p className="project-intro">{intro}</p>}
        {description && <div>{description}</div>}
      </div>
    </article>
  )
}

export default ProjectCard