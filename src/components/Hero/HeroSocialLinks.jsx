import { memo } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef, SiHackerrank } from 'react-icons/si';
import { socialLinks } from '../../constants/socialLinks';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  codechef: SiCodechef,
  hackerrank: SiHackerrank,
};

function HeroSocialLinks() {
  return (
    <div className="hero__social">
      {socialLinks.map(({ name, url, icon }) => {
        const Icon = iconMap[icon];

        return (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label={name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export default memo(HeroSocialLinks);
