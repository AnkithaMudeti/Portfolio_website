import { memo } from 'react';
import { motion as Motion } from 'framer-motion';

function TimelineNode() {
  return (
    <div className="timeline-node">
      <Motion.span
        className="timeline-node__pulse"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />
      <Motion.span
        className="timeline-node__core"
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(56, 189, 248, 0.4)',
            '0 0 0 8px rgba(56, 189, 248, 0)',
            '0 0 0 0 rgba(56, 189, 248, 0)',
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default memo(TimelineNode);
