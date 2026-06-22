import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import { Element } from 'react-scroll';
import EducationCard from './EducationCard';
import { educationData, educationSection } from '../../data/educationData';
import './Education.css';

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

function Education() {
  return (
    <Element name="education">
      <section id="education" className="section education">
        <div className="container">
          <Motion.header
            className="education__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            <h2 className="section-title education__title">
              <span className="gradient-text">{educationSection.title}</span>
            </h2>
            <p className="education__subtitle">{educationSection.subtitle}</p>
          </Motion.header>

          <Motion.div
            className="education__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={gridVariants}
          >
            {educationData.map((entry) => (
              <EducationCard key={entry.id} {...entry} />
            ))}
          </Motion.div>
        </div>
      </section>
    </Element>
  );
}

export default memo(Education);
