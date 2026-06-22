import { motion as Motion } from 'framer-motion';
import './Loader.css';

export default function Loader() {
  return (
    <Motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading portfolio"
    >
      <Motion.div
        className="loader__content"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Motion.span
          className="loader__logo gradient-text"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ANKITHA.
          <span className="loader__underline" aria-hidden="true" />
        </Motion.span>

        <div className="loader__spinner" aria-hidden="true" />
      </Motion.div>
    </Motion.div>
  );
}
