import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaRegFilePdf } from 'react-icons/fa';
import { SiHackerrank, SiCodechef } from 'react-icons/si';
import {
  footerBrand,
  footerCredits,
  footerQuickLinks,
  footerSocialLinks,
} from '../../data/footerData';
import { SCROLL_OFFSET } from '../../constants/navLinks';
import './Footer.css';

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  hackerrank: SiHackerrank,
  codechef: SiCodechef,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const socialContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const socialItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glass">
        <div className="container">
          <Motion.div
            className="footer__top"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="footer__brand">
              <Link
                to="home"
                spy
                smooth
                offset={SCROLL_OFFSET}
                duration={500}
                className="footer__logo"
              >
                {footerBrand.logo}
              </Link>
              <p className="footer__description">{footerBrand.description}</p>
            </div>

            <nav className="footer__nav" aria-label="Footer navigation">
              <p className="footer__nav-title">Quick Links</p>
              <ul className="footer__links">
                {footerQuickLinks.map(({ label, to, url, external }) => (
                  <li key={external ? url : to}>
                    {external ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__link"
                      >
                        {label}
                        <FaRegFilePdf className="footer__link-icon" aria-hidden="true" />
                      </a>
                    ) : (
                      <Link
                        to={to}
                        spy
                        smooth
                        offset={SCROLL_OFFSET}
                        duration={500}
                        className="footer__link"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </Motion.div>

          <Motion.div
            className="footer__divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />

          <Motion.div
            className="footer__bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <Motion.div
              className="footer__social"
              variants={socialContainerVariants}
            >
              {footerSocialLinks.map(({ name, url, icon }) => {
                const Icon = socialIconMap[icon];

                return (
                  <Motion.a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={name}
                    variants={socialItemVariants}
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  >
                    <Icon aria-hidden="true" />
                  </Motion.a>
                );
              })}
            </Motion.div>

            <div className="footer__meta">
              <p className="footer__credit">{footerCredits.designedBy}</p>
              <p className="footer__credit">{footerCredits.builtWith}</p>
              <p className="footer__year">&copy; {currentYear} Mudeti Ankitha</p>
            </div>
          </Motion.div>
        </div>
      </div>
    </footer>
  );
}
