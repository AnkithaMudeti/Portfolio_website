import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import { Element } from 'react-scroll';
import SkillCard from './SkillCard';
import SkillProgressRing from './SkillProgressRing';
import { skillCategories, skillsSection, topSkills } from '../../data/skillsData';
import './Skills.css';

const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ringsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

function Skills() {
  return (
    <Element name="skills">
      <section id="skills" className="section skills">
        <div className="container">
          <Motion.header
            className="skills__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            <h2 className="section-title skills__title">
              <span className="gradient-text">{skillsSection.title}</span>
            </h2>
            <p className="skills__subtitle">{skillsSection.subtitle}</p>
          </Motion.header>

          <Motion.div
            className="skills__rings"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ringsContainerVariants}
          >
            {topSkills.map((skill) => (
              <SkillProgressRing key={skill.id} {...skill} />
            ))}
          </Motion.div>

          <Motion.div
            className="skills__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardsContainerVariants}
          >
            {skillCategories.map((category) => (
              <SkillCard key={category.id} {...category} />
            ))}
          </Motion.div>
        </div>
      </section>
    </Element>
  );
}

export default memo(Skills);
