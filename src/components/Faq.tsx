import { useState } from 'react';
import styles from './Faq.module.css';
import FaqItem from './FaqItem';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Dados para o FAQ. No futuro, podem vir de uma API.
const faqData = [
  {
    question: "blablabla",
    answer: "blablabla"
  },
  {
    question: "blablabla",
    answer: "blablabla"
  },
  {
    question: "blablabla",
    answer: "blablabla"
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Hook de animação para o bloco de contato
  const [contactRef, isContactVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 });

  return (
    <section className={styles.faqSection}>
      <h2>blablabla</h2>
      <div className={styles.faqContentWrapper}>
        <div className={styles.faqContainer}>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              animationDelay={index * 100}
            />
          ))}
        </div>
        <div
          ref={contactRef}
          className={`${styles.faqContact} animate-on-scroll slide-in-right ${isContactVisible ? 'is-visible' : ''}`}
        >
          <h3>blablabla</h3>
          <p>blablabla</p>
          <a href="#/" className={styles.whatsappButton}>
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19.11 4.91C17.22 3 14.71 2 12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.7 1.21h.01c5.52 0 10-4.48 10-10c0-2.71-1.04-5.22-2.9-7.1zM12 20.27c-1.53 0-3-.39-4.31-1.15l-.3-.18l-3.2 1.07l1.09-3.13l-.2- .32c-.85-1.38-1.3-3-1.3-4.7c0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm4.2-6.11c-.22-.11-1.29-.64-1.5-.71c-.2-.07-.36-.11-.51.11c-.15.22-.57.71-.7.85c-.13.14-.26.16-.48.05c-.22-.11-1.03-.38-1.96-1.21c-.73-.64-1.22-1.43-1.36-1.67c-.14-.24-.01-.37.1-.48c.1-.11.22-.28.33-.42c.11-.14.15-.24.22-.4c.07-.16.04-.3-.01-.41c-.05-.11-.51-1.22-.7-1.67c-.19-.45-.38-.39-.51-.39h-.4c-.15 0-.38.05-.59.28c-.21.23-.8.79-.8 1.93c0 1.14.82 2.24.93 2.4c.11.16 1.61 2.46 3.9 3.44c.55.24.98.38 1.32.48c.5.15.95.13 1.3-.08c.39-.23.67-.94.76-1.27c.1-.33.1-.61.07-.71c-.03-.1z"/></svg>
            <span>Converse no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Faq;
