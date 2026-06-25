import { memo } from 'react';
import { motion as Motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function ExperienceCard({ title, role, description, techStack, duration }) {
  return (
    <Motion.article
      className="experience-card glass-card"
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      <div className="experience-card__header">
        <span className="experience-card__duration">{duration}</span>
        <h3 className="experience-card__title">{title}</h3>
      </div>

      <p className="experience-card__role">{role}</p>
      <p className="experience-card__description">{description}</p>

      <ul className="experience-card__badges">
        {techStack.map((tech) => (
          <li key={tech} className="experience-card__badge">
            {tech}
          </li>
        ))}
      </ul>
    </Motion.article>
  );
}

export default memo(ExperienceCard);
