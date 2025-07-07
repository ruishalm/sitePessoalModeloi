import styles from './FaqItem.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { CSSProperties } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  animationDelay?: number;
}

function FaqItem({ question, answer, isOpen, onClick, animationDelay = 0 }: FaqItemProps) {
  const [itemRef, isItemVisible] = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const itemStyle: CSSProperties = {
    transitionDelay: `${animationDelay}ms`,
  };

  return (
    <div
      ref={itemRef}
      className={`${styles.accordionItem} ${isOpen ? styles.isOpen : ''} animate-on-scroll fade-in ${isItemVisible ? 'is-visible' : ''}`}
      style={itemStyle}
    >
      <div className={styles.accordionHeader} onClick={onClick}>
        {question}
      </div>
      <div className={styles.faqContent}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;