import { motion as Motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function AchievementCard({ icon, title, description }) {
  return (
    <Motion.article
      className="achievement-card glass-card"
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      <span className="achievement-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h3 className="achievement-card__title">{title}</h3>
      <p className="achievement-card__description">{description}</p>
    </Motion.article>
  );
}

export default memo(AchievementCard);
