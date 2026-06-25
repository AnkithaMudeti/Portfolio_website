import { memo } from 'react';
import { FaJava, FaAws, FaGithub } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa6';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { motion as Motion } from 'framer-motion';

const iconMap = {
  springboot: SiSpringboot,
  react: FaReact,
  database: SiMysql,
  java: FaJava,
  aws: FaAws,
  github: FaGithub,
  rest: TbApi,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function CertificationCard({ title, icon }) {
  const Icon = iconMap[icon] ?? FaJava;

  return (
    <Motion.article
      className="certification-card glass-card"
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      <span className="certification-card__icon-wrap">
        <Icon className="certification-card__icon" aria-hidden="true" />
      </span>
      <h3 className="certification-card__title">{title}</h3>
    </Motion.article>
  );
}

export default memo(CertificationCard);
