import { motion as Motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn, MdWork } from 'react-icons/md';

const iconMap = {
  email: MdEmail,
  phone: MdPhone,
  location: MdLocationOn,
  work: MdWork,
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function ContactCard({ label, value, href, icon }) {
  const Icon = iconMap[icon] ?? MdEmail;

  const content = (
    <>
      <span className="contact-card__icon-wrap">
        <Icon className="contact-card__icon" aria-hidden="true" />
      </span>
      <div className="contact-card__content">
        <p className="contact-card__label">{label}</p>
        <p className="contact-card__value">{value}</p>
      </div>
    </>
  );

  return (
    <Motion.article
      className="contact-card glass-card"
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      {href ? (
        <a href={href} className="contact-card__link">
          {content}
        </a>
      ) : (
        <div className="contact-card__link">{content}</div>
      )}
    </Motion.article>
  );
}

export default memo(ContactCard);
