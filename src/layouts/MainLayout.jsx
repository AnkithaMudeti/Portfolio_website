import { memo } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollProgress from '../components/ScrollProgress/ScrollProgress';
import BackToTop from '../components/BackToTop/BackToTop';
import Particles from '../components/Particles/Particles';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';

function MainLayout({ children }) {
  return (
    <>
      <Particles />
      <ThemeToggle />
      <ScrollProgress />
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default memo(MainLayout);
