import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import SkillIcon from './SkillIcon';

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

function SkillBadge({ name, icon, index }) {
  return (
    <Motion.li
      className="skills__badge"
      variants={badgeVariants}
      custom={index}
      whileHover={{ scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <SkillIcon icon={icon} className="skills__badge-icon" />
      <span>{name}</span>
    </Motion.li>
  );
}

export default memo(SkillBadge);
