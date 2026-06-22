import { memo } from 'react';
import { motion as Motion } from 'framer-motion';
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import { comingSoonProject, projectData, projectsSection } from '../../data/projectData';
import './Projects.css';

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

function Projects() {
  return (
    <Element name="projects">
      <section id="projects" className="section projects">
        <div className="container">
          <Motion.header
            className="projects__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            <h2 className="section-title projects__title">
              <span className="gradient-text">{projectsSection.title}</span>
            </h2>
            <p className="projects__subtitle">{projectsSection.subtitle}</p>
          </Motion.header>

          <Motion.div
            className="projects__grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={gridVariants}
          >
            {projectData.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
            <ProjectCard {...comingSoonProject} />
          </Motion.div>
        </div>
      </section>
    </Element>
  );
}

export default memo(Projects);
