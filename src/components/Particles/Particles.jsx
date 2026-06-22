import { memo } from 'react';
import './Particles.css';

function Particles() {
  // Reduce particle count on mobile for better performance
  const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 15;

  return (
    <div className="particles-background" aria-hidden="true">
      {Array.from({ length: particleCount }, (_, index) => (
        <span key={index} className="particle" />
      ))}
    </div>
  );
}

export default memo(Particles);

