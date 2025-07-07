import { useState, useEffect } from 'react';
import styles from './Consultorio.module.css';
import carrocel1 from '../assets/imagens/carrocel1.png';
import carrocel2 from '../assets/imagens/carrocel2.png';

const images = [
  carrocel1,
  carrocel2,
];

function Consultorio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveCarousel = (direction: number) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel(1);
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className={styles.officeSection}>
      <div className={styles.textContent}>
      
        <h2>Atendimento 100% Online</h2>
        <p>Realize suas sessões no conforto e na segurança da sua casa. A terapia online oferece a mesma eficácia e acolhimento do atendimento presencial, com a flexibilidade e segurancque você precisa.</p>
      </div>
      <div className={styles.imageCarousel}>
        <div
          className={styles.carouselImages}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Imagem do consultório ${index + 1}`} />
          ))}
        </div>
        <button className={`${styles.carouselButton} ${styles.prev}`} onClick={() => moveCarousel(-1)}>&lt;</button>
        <button className={`${styles.carouselButton} ${styles.next}`} onClick={() => moveCarousel(1)}>&gt;</button>
      </div>
    </section>
  );
}

export default Consultorio;