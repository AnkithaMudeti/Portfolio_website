import { useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function CounterCard({ label, value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <Motion.div
      ref={ref}
      className="counter-card glass-card"
      variants={cardVariants}
    >
      <p className="counter-card__value gradient-text">
        {isInView ? (
          <CountUp end={value} duration={2.5} suffix={suffix} enableScrollSpy={false} />
        ) : (
          `0${suffix}`
        )}
      </p>
      <p className="counter-card__label">{label}</p>
    </Motion.div>
  );
}

export default memo(CounterCard);
