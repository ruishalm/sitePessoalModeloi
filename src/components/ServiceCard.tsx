import { CSSProperties } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  animationDelay?: number;
}

function ServiceCard({ title, description, animationDelay = 0 }: ServiceCardProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const style: CSSProperties = {
    transitionDelay: `${animationDelay}ms`,
  };

  return (
    <article
      ref={ref}
      className={`${styles.serviceCard} animate-on-scroll slide-in-up ${isVisible ? 'is-visible' : ''}`}
      style={style}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;