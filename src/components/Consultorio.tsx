import { useState } from 'react';
import styles from './Consultorio.module.css';

// Vamos usar placeholders por enquanto. Depois podemos receber isso como props.
const images = [
  "https://via.placeholder.com/500x500.png?text=Imagem+1",
  "https://via.placeholder.com/500x500.png?text=Imagem+2",
  "https://via.placeholder.com/500x500.png?text=Imagem+3"
];

function Consultorio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveCarousel = (direction: number) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <section className={styles.officeSection}>
      <div className={styles.textContent}>
        <h2>blablabla</h2>
        <p>blablabla</p>
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