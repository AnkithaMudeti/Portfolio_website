import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import SkillIcon from './SkillIcon';
import SkillBadge from './SkillBadge';

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgesContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

function SkillCard({ title, icon, skills }) {
  return (
    <Motion.article
      className="skills__card glass-card"
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      <div className="skills__card-header">
        <span className="skills__card-icon-wrap">
          <SkillIcon icon={icon} className="skills__card-icon" />
        </span>
        <h3 className="skills__card-title">{title}</h3>
      </div>

      <Motion.ul
        className="skills__badges"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={badgesContainerVariants}
      >
        {skills.map((skill, index) => (
          <SkillBadge key={skill.name} {...skill} index={index} />
        ))}
      </Motion.ul>
    </Motion.article>
  );
}

export default memo(SkillCard);
