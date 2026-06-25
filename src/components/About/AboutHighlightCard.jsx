import { memo } from 'react';
import { motion as Motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function AboutHighlightCard({ icon, title, description }) {
  return (
    <Motion.article
      className="about__card glass-card"
      variants={cardVariants}
      whileHover={{
        y: -6,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      <span className="about__card-icon" aria-hidden="true">
        {icon}
      </span>
      <h3 className="about__card-title">{title}</h3>
      <p className="about__card-description">{description}</p>
    </Motion.article>
  );
}

export default memo(AboutHighlightCard);
