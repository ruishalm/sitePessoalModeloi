import styles from './LogoTerapeuta.module.css';

const LogoTerapeuta = () => {
  return (
    <a href="#" className={styles.logoLink}>
      <div className={styles.logoText}>
        Terapeuta <span>Rô</span>
      </div>
    </a>
  );
};

export default LogoTerapeuta;