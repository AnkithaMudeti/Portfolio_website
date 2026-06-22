import { memo } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollProgress from '../ScrollProgress/ScrollProgress';
import BackToTop from '../BackToTop/BackToTop';
import Particles from '../Particles/Particles';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

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
