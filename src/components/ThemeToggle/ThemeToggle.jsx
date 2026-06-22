import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggleTheme}
    >
      <span className={`theme-toggle__icon ${isDark ? 'theme-toggle__icon--dark' : 'theme-toggle__icon--light'}`}>
        {isDark ? <HiMoon /> : <HiSun />}
      </span>
    </button>
  );
}
