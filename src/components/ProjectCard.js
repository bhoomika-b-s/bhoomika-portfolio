
export default function ProjectCard({
  number,
  title,
  description,
  technologies,
  github,
  category,
}) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">{number}</span>
        <span className="project-category">{category}</span>
      </div>

      <h3>{title}</h3>

      <p className="project-description">
        {description}
      </p>

      <div className="tech-list">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-footer">
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub Repository ↗
          </a>
        ) : (
          <span className="project-link unavailable">
            Repository link to be added
          </span>
        )}
      </div>
    </article>
  );
}
