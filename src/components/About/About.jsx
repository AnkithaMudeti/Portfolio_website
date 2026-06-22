import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import { Element } from 'react-scroll';
import AboutHighlightCard from './AboutHighlightCard';
import { aboutContent, aboutHighlights } from '../../data/aboutData';
import './About.css';

const introVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const highlightsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

function About() {
  return (
    <Element name="about">
      <section id="about" className="section about">
        <div className="container">
          <div className="about__grid">
            <Motion.div
              className="about__intro glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={introVariants}
            >
              <h2 className="section-title about__heading">
                <span className="gradient-text">{aboutContent.heading}</span>
              </h2>
              <p className="about__subheading">{aboutContent.subheading}</p>
              <p className="about__description">{aboutContent.description}</p>
            </Motion.div>

            <Motion.div
              className="about__highlights"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={highlightsContainerVariants}
            >
              {aboutHighlights.map((highlight) => (
                <AboutHighlightCard key={highlight.id} {...highlight} />
              ))}
            </Motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default memo(About);

