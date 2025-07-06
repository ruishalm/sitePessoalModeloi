import React from 'react';
import styles from './Principal.module.css';

function Principal() {
  return (
    <section className={styles.principalSection}>
      <h1>Psicologia blablabla</h1>
      <h2>blablabla</h2>
      <p>blablabla</p>
      <p>blablabla</p>
      <div className={styles.videoContainer}>
        <div className={styles.videoPlaceholder}>video de introducao</div>
      </div>
      <p>blablabla</p>
      <a href="#/" className={styles.ctaButton}>BlaBlaBlog</a>
    </section>
  );
}

export default Principal;