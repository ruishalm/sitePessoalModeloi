
import styles from './ServiceCard.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { CSSProperties } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  animationDelay?: number;
}

function ServiceCard({ title, description, animationDelay = 0 }: ServiceCardProps) {
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
      className={`${styles.serviceCard} animate-on-scroll slide-in-up ${isCardVisible ? 'is-visible' : ''}`}
      style={cardStyle}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;