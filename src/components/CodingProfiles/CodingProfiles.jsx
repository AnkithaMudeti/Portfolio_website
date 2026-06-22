import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import { Element } from 'react-scroll';
import ProfileCard from './ProfileCard';
import {
  codingProfilesData,
  codingProfilesSection,
} from '../../data/codingProfilesData';
import './CodingProfiles.css';

const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

function CodingProfiles() {
  return (
    <Element name="coding-profiles">
      <section id="coding-profiles" className="section coding-profiles">
        <div className="container">
          <Motion.header
            className="coding-profiles__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            <h2 className="section-title coding-profiles__title">
              <span className="gradient-text">{codingProfilesSection.title}</span>
            </h2>
            <p className="coding-profiles__subtitle">
              {codingProfilesSection.subtitle}
            </p>
          </Motion.header>

          <Motion.div
            className="coding-profiles__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={gridVariants}
          >
            {codingProfilesData.map((profile) => (
              <ProfileCard key={profile.id} {...profile} />
            ))}
          </Motion.div>
        </div>
      </section>
    </Element>
  );
}

export default memo(CodingProfiles);
