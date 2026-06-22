import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import { Element } from 'react-scroll';
import ExperienceCard from './ExperienceCard';
import TimelineNode from './TimelineNode';
import { experienceData, experienceSection } from '../../data/experienceData';
import './Experience.css';

const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const timelineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

function Experience() {
  return (
    <Element name="experience">
      <section id="experience" className="section experience">
        <div className="container">
          <Motion.header
            className="experience__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            <h2 className="section-title experience__title">
              <span className="gradient-text">{experienceSection.title}</span>
            </h2>
            <p className="experience__subtitle">{experienceSection.subtitle}</p>
          </Motion.header>

          <div className="experience__timeline">
            <div className="experience__line-wrap" aria-hidden="true">
              <Motion.div
                className="experience__line"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <Motion.div
              className="experience__items"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={timelineVariants}
            >
              {experienceData.map((entry, index) => (
                <div
                  key={entry.id}
                  className={`experience__item ${
                    index % 2 === 0 ? 'experience__item--left' : 'experience__item--right'
                  }`}
                >
                  <div className="experience__card-slot">
                    <ExperienceCard {...entry} />
                  </div>
                  <TimelineNode />
                  <div className="experience__spacer" aria-hidden="true" />
                </div>
              ))}
            </Motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default memo(Experience);
