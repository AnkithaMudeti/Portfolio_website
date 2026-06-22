import { memo, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Element } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHackerrank, SiCodechef } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import ContactCard from './ContactCard';
import {
  contactCards,
  contactSection,
  contactSocialLinks,
  formFields,
} from '../../data/contactData';
import './Contact.css';

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  hackerrank: SiHackerrank,
  codechef: SiCodechef,
};

const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardsVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showTemporaryToast = (message, error = false) => {
    setToastMessage(message);
    setIsError(error);
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 5000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailRegex.test(formData.email)) {
      showTemporaryToast('Please enter a valid email address.', true);
      return;
    }

    setIsSending(true);

    if (!serviceId || !templateId || !publicKey) {
      showTemporaryToast('Email service configuration is missing. Please check environment variables.', true);
      setIsSending(false);
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, publicKey);

      setFormData(initialFormState);
      showTemporaryToast("✓ Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error('EmailJS error:', error);
      showTemporaryToast('Failed to send message. Please try again.', true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Element name="contact">
      <section id="contact" className="section contact">
        <div className="container">
          <Motion.header
            className="contact__header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            <h2 className="section-title contact__title">
              <span className="gradient-text">{contactSection.title}</span>
            </h2>
            <p className="contact__subtitle">{contactSection.subtitle}</p>
          </Motion.header>

          <div className="contact__grid">
            <Motion.form
              className="contact-form glass-card"
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={columnVariants}
            >
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className={`contact-form__field ${
                    field.type === 'textarea' ? 'contact-form__field--textarea' : ''
                  }`}
                >
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder=" "
                      required={field.required}
                      rows={5}
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder=" "
                      required={field.required}
                    />
                  )}
                  <label htmlFor={field.id}>{field.label}</label>
                </div>
              ))}

              <button
                type="submit"
                className="primary-button contact-form__submit"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </Motion.form>

            <div className="contact__info">
              <Motion.div
                className="contact__cards"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={cardsVariants}
              >
                {contactCards.map((card) => (
                  <ContactCard key={card.id} {...card} />
                ))}
              </Motion.div>

              <Motion.div
                className="contact__social"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={columnVariants}
              >
                <p className="contact__social-label">Connect with me</p>
                <div className="contact__social-links">
                  {contactSocialLinks.map(({ name, url, icon }) => {
                    const Icon = socialIconMap[icon];

                    return (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__social-link"
                        aria-label={name}
                      >
                        <Icon aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </Motion.div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showToast && (
            <Motion.div
              className={`contact__toast ${isError ? 'contact__toast--error' : ''}`}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              role="status"
              aria-live="polite"
            >
              {toastMessage}
            </Motion.div>
          )}
        </AnimatePresence>
      </section>
    </Element>
  );
}

export default memo(Contact);
