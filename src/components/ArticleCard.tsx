import { Link } from 'react-router-dom';
import styles from './ArticleCard.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { CSSProperties } from 'react';

interface ArticleCardProps {
  id: string;
  title: string;
  summary: string;
  date: string;
  animationDelay?: number;
}

const ArticleCard = ({ id, title, summary, date, animationDelay = 0 }: ArticleCardProps) => {
  const [cardRef, isCardVisible] = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cardStyle: CSSProperties = {
    transitionDelay: `${animationDelay}ms`,
  };

  return (
    <article
      ref={cardRef}
      className={`${styles.articleCard} animate-on-scroll slide-in-up ${isCardVisible ? 'is-visible' : ''}`}
      style={cardStyle}
    >
      <span className={styles.articleDate}>{date}</span>
      <h2 className={styles.articleTitle}>
        <Link to={`/artigos/${id}`}>{title}</Link>
      </h2>
      <p className={styles.articleSummary}>{summary}</p>
      <Link to={`/artigos/${id}`} className={styles.readMoreLink}>
        Ler mais &rarr;
      </Link>
    </article>
  );
};

export default ArticleCard;