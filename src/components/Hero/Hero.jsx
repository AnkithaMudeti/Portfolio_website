import { memo, useMemo } from 'react';
import { motion as Motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Element, Link } from 'react-scroll';
import { HiDownload, HiMail } from 'react-icons/hi';
import ProfileImage from './ProfileImage';
import HeroSocialLinks from './HeroSocialLinks';
import { heroSkillBadges, typingRoles, resumeUrl } from '../../constants/heroData';
import { SCROLL_OFFSET } from '../../constants/navLinks';
import './Hero.css';

const CONTENT_VARIANTS = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const FADE_SLIDE_LEFT = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const FADE_SLIDE_RIGHT = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const getBadgeFloat = (index) => ({
  y: [0, -10, 0],
  transition: {
    duration: 3 + index * 0.4,
    repeat: Infinity,
    ease: 'easeInOut',
    delay: index * 0.3,
  },
});

const typingSequence = typingRoles.flatMap((role) => [role, 2000]);

function Hero() {
  return (
    <Element name="home">
      <section id="home" className="hero section">
        <div className="hero__background" aria-hidden="true">
          <div className="hero__glow hero__glow--blue" />
          <div className="hero__glow hero__glow--purple" />
          <div className="hero__glow hero__glow--teal" />
          <div className="hero__light hero__light--one" />
          <div className="hero__light hero__light--two" />
          <div className="hero__light hero__light--three" />
        </div>

        <div className="container hero__container">
          <div className="hero__grid">
            <Motion.div
              className="hero__content"
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              <Motion.p className="hero__greeting" variants={fadeSlideLeft}>
                Hello, I&apos;m
              </Motion.p>

              <Motion.h1 className="hero__name gradient-text" variants={fadeSlideLeft}>
                Mudeti Ankitha
              </Motion.h1>

              <Motion.div className="hero__typing" variants={fadeSlideLeft}>
                <TypeAnimation
                  sequence={typingSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor
                />
              </Motion.div>

              <Motion.p className="hero__description" variants={FADE_SLIDE_LEFT}>
                MCA Gold Medalist and passionate Full Stack Developer specializing in
                Java, Spring Boot, React, REST APIs, and scalable web applications. I
                enjoy building elegant digital experiences and solving real-world
                problems.
              </Motion.p>

              <Motion.div className="hero__actions" variants={FADE_SLIDE_LEFT}>
                <a
                  href={resumeUrl}
                  className="primary-button hero__button"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Mudeti Ankitha's resume"
                >
                  <HiDownload aria-hidden="true" />
                  Download Resume
                </a>
                <Link
                  to="contact"
                  spy
                  smooth
                  offset={SCROLL_OFFSET}
                  duration={500}
                  className="secondary-button hero__button"
                  aria-label="Scroll to contact section"
                >
                  <HiMail aria-hidden="true" />
                  Contact Me
                </Link>
              </Motion.div>

              <Motion.div variants={FADE_SLIDE_LEFT}>
                <HeroSocialLinks />
              </Motion.div>
            </Motion.div>

            <Motion.div
              className="hero__visual"
              initial="hidden"
              animate="visible"
              variants={FADE_SLIDE_RIGHT}
            >
              <ProfileImage />

              <div className="hero__badges">
                {heroSkillBadges.map((skill, index) => (
                  <Motion.span
                    key={skill}
                    className="hero__badge glass-card"
                    animate={getBadgeFloat(index)}
                  >
                    {skill}
                  </Motion.span>
                ))}
              </div>
            </Motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default memo(Hero);
