import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHackerrank, SiCodechef } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';

const iconMap = {
  github: FaGithub,
  hackerrank: SiHackerrank,
  codechef: SiCodechef,
  linkedin: FaLinkedin,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProfileCard({
  platform,
  username,
  description,
  url,
  icon,
  color,
}) {
  const Icon = iconMap[icon] ?? FaGithub;

  return (
    <Motion.article
      className="profile-card glass-card"
      variants={cardVariants}
      style={{ '--platform-color': color }}
      whileHover={{
        y: -10,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      <span className="profile-card__icon-wrap">
        <Icon className="profile-card__icon" aria-hidden="true" />
      </span>

      <p className="profile-card__platform">{platform}</p>
      <h3 className="profile-card__username">{username}</h3>
      <p className="profile-card__description">{description}</p>

      <a
        href={url}
        className="profile-card__btn secondary-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Profile
        <HiExternalLink aria-hidden="true" />
      </a>
    </Motion.article>
  );
}

export default memo(ProfileCard);
