import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader/Loader';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

const LOADER_DURATION = 1800;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : '';
  }, [isLoading]);

  const mainContent = useMemo(() => <Home />, []);
  const layout = useMemo(() => <MainLayout>{mainContent}</MainLayout>, [mainContent]);

  return (
    <ThemeProvider>
      {layout}

      <AnimatePresence>{isLoading && <Loader key="loader" />}</AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
