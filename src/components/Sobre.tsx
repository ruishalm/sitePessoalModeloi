import styles from './Sobre.module.css';
import perfilImage from '../assets/imagens/perfil.png';


function Sobre() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutText}>
        <h2>Sobre Mim</h2>
        <p>Rosangela Chicarelli eh minha mae, tem uns anos ai  e ja fez umas coisas ai tb.</p>
        <blockquote>"SE VOCE QUEBRAR ISSO EU RANCO OUTRO DAS TUA COSTELA!"</blockquote>
      </div>
      <div className={styles.aboutImage}>
        <img src={perfilImage} alt="Foto de perfil de Rosangela Chicarelli" />
      </div>
    </section>
  );
}

export default Sobre;