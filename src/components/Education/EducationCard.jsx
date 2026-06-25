import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGraduationCap, FaMedal } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function EducationCard({
  degree,
  institution,
  duration,
  highlight,
  cgpa,
  description,
}) {
  return (
    <Motion.article
      className="education-card glass-card"
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      <div className="education-card__header">
        <span className="education-card__icon-wrap">
          <FaGraduationCap className="education-card__icon" aria-hidden="true" />
        </span>
        <div>
          <span className="education-card__duration">{duration}</span>
          <span className="education-card__cgpa">CGPA: {cgpa}</span>
        </div>
      </div>

      <h3 className="education-card__degree">{degree}</h3>
      <p className="education-card__institution">{institution}</p>

      {highlight && (
        <span className="education-card__highlight">
          <FaMedal className="education-card__highlight-icon" aria-hidden="true" />
          {highlight}
        </span>
      )}

      <p className="education-card__description">{description}</p>
    </Motion.article>
  );
}

export default memo(EducationCard);
