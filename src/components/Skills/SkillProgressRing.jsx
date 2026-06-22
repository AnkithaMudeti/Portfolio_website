import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import SkillIcon from './SkillIcon';

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ringVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function SkillProgressRing({ name, percentage, icon }) {
  const offset = CIRCUMFERENCE * (1 - percentage / 100);

  return (
    <Motion.div
      className="skills__ring"
      variants={ringVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="skills__ring-chart">
        <svg viewBox="0 0 128 128" className="skills__ring-svg" aria-hidden="true">
          <defs>
            <linearGradient id={`ring-gradient-${icon}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-blue)" />
              <stop offset="50%" stopColor="var(--accent-purple)" />
              <stop offset="100%" stopColor="var(--accent-teal)" />
            </linearGradient>
          </defs>
          <circle
            className="skills__ring-track"
            cx="64"
            cy="64"
            r={RADIUS}
          />
          <Motion.circle
            className="skills__ring-progress"
            cx="64"
            cy="64"
            r={RADIUS}
            stroke={`url(#ring-gradient-${icon})`}
            strokeWidth="7"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            transform="rotate(-90 64 64)"
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          />
        </svg>
        <div className="skills__ring-center">
          <SkillIcon icon={icon} className="skills__ring-icon" />
        </div>
      </div>
      <p className="skills__ring-name">{name}</p>
      <p className="skills__ring-percent">{percentage}%</p>
    </Motion.div>
  );
}

export default memo(SkillProgressRing);
