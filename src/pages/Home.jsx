import { memo } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Achievements from '../components/Achievements/Achievements';
import Education from '../components/Education/Education';
import CodingProfiles from '../components/CodingProfiles/CodingProfiles';
import Contact from '../components/Contact/Contact';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <CodingProfiles />
      <Contact />
    </>
  );
}

export default memo(Home);
