import styles from './Principal.module.css';

function Principal() {
  return (
    <section className={styles.principalSection}>
      <h1>Rosangela Chicarelli Terapeuta TRG</h1>
      <h2>Terapia de Reprocessamento Generativo (TRG)</h2>
      <p>
        Encontre a raiz dos seus traumas e ressignifique sua história. A TRG é uma abordagem terapêutica breve e focada, que busca identificar e tratar a origem de bloqueios emocionais, medos e ansiedades, promovendo uma transformação profunda e duradoura.
      </p>
      {/* <div className={styles.videoContainer}>
        <div className={styles.videoPlaceholder}>video de introducao</div>
      </div> */}
      {/* Ocultado pois a cliente não possui blog no momento */}
      {/* <a href="#/" className={styles.ctaButton}>BlaBlaBlog</a> */}
    </section>
  );
}

export default Principal;