import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import { Element } from 'react-scroll';
import AchievementCard from './AchievementCard';
import CounterCard from './CounterCard';
import {
  achievementCards,
  achievementsSection,
  counterStats,
} from '../../data/achievementsData';
import './Achievements.css';

const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const rowVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

function Achievements() {
  return (
    <Element name="achievements">
      <section id="achievements" className="section achievements">
        <div className="container">
          <Motion.header
            className="achievements__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            <h2 className="section-title achievements__title">
              <span className="gradient-text">{achievementsSection.title}</span>
            </h2>
            <p className="achievements__subtitle">{achievementsSection.subtitle}</p>
          </Motion.header>

          <Motion.div
            className="achievements__counters"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rowVariants}
          >
            {counterStats.map((stat) => (
              <CounterCard key={stat.id} {...stat} />
            ))}
          </Motion.div>

          <Motion.div
            className="achievements__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={rowVariants}
          >
            {achievementCards.map((achievement) => (
              <AchievementCard key={achievement.id} {...achievement} />
            ))}
          </Motion.div>

        </div>
      </section>
    </Element>
  );
}

export default memo(Achievements);
