import styles from './FaqItem.module.css';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.isOpen : ''}`}>
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