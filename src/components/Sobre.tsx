import React from 'react';
import styles from './Sobre.module.css';

// Placeholder para a imagem
const aboutImageSrc = "https://via.placeholder.com/400x400.png?text=Foto";

function Sobre() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutText}>
        <h2>Sobre Mim</h2>
        <p>blablabla</p>
        <blockquote>blablabla</blockquote>
        <p>blablabla</p>
      </div>
      <div className={styles.aboutImage}>
        <img src={aboutImageSrc} alt="Foto de perfil" />
      </div>
    </section>
  );
}

export default Sobre;