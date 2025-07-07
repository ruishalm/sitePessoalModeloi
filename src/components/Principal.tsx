import styles from './Principal.module.css';
import { Link } from 'react-router-dom';

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
      <Link to="/artigos" className={styles.ctaButton}>Ver Artigos</Link>
    </section>
  );
}

export default Principal;