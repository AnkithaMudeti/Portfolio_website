import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaCheck } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import TechBadge from './TechBadge';

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectCard({
  title,
  category,
  description,
  techStack,
  features,
  githubUrl,
  liveUrl,
  privateRepo,
  gradient,
  image,
  alt,
  isComingSoon,
  message,
}) {
  if (isComingSoon) {
    return (
      <Motion.article
        className="project-card project-card--coming-soon glass-card"
        variants={CARD_VARIANTS}
      >
        <div className="project-card__coming-soon-content">
          <span className="project-card__coming-soon-icon" aria-hidden="true">
            +
          </span>
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__coming-soon-message">{message}</p>
        </div>
      </Motion.article>
    );
  }

  return (
    <Motion.article
      className="project-card glass-card"
      variants={CARD_VARIANTS}
      whileHover={{
        y: -12,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      <div className={`project-card__image ${gradient ? `project-card__image--${gradient}` : ''}`}>
        {/** Render image when provided, otherwise fallback to gradient background */}
        {typeof image === 'string' && (
          <img
            src={image}
            alt={alt || title}
            className="project-card__image-img"
            loading="lazy"
          />
        )}
        <div className="project-card__image-overlay" />
        <span className="project-card__image-label">{category}</span>
      </div>

      <div className="project-card__body">
        <span className="project-card__category">{category}</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <ul className="project-card__features">
          {features.map((feature) => (
            <li key={feature} className="project-card__feature">
              <FaCheck className="project-card__feature-icon" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <ul className="project-card__tech">
          {techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </ul>

        {privateRepo ? (
          <div className="project-card__private-badge glass-card">
            <span className="project-card__private-icon" aria-hidden="true">
              🔒
            </span>
            <div>
              <p className="project-card__private-title">Private Repository</p>
              <p className="project-card__private-subtitle">Academic Research Project</p>
            </div>
          </div>
        ) : (
          <div className="project-card__actions">
            {githubUrl && githubUrl !== '#' && (
            <a
              href={githubUrl}
              className="project-card__btn project-card__btn--github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          )}
          {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              className="project-card__btn project-card__btn--live"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiExternalLink aria-hidden="true" />
              Live Demo
            </a>
          )}
          </div>
        )}
      </div>
    </Motion.article>
  );
}

export default memo(ProjectCard);
