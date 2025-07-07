import styles from './Footer.module.css';
import Logo from './Logo';


// Define a interface para as propriedades que o componente vai receber.
// Isso ajuda o TypeScript a garantir que estamos usando os tipos corretos.
interface FooterProps {
  theme: 'light' | 'dark';
  onThemeSwitch: (theme: 'light' | 'dark') => void;
}

function Footer({ theme, onThemeSwitch }: FooterProps) {
  return (
    <div className={styles.footerBackground}>
      <footer className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <div className={styles.headerLogo}>
            <a href="#">
              <img src="" alt="Logo da Cliente" />
            </a>
          </div>
          <p className={styles.crpInfo}>CRP 0000000 | <strong>Blabla de Bla Blala</strong></p>
        </div>

        <div className={styles.footerCenter}>
          <div className={styles.themeSwitcher}>
              <button className={`${styles.themeButton} ${theme === 'light' ? styles.active : ''}`} data-theme="light" title="Tema Claro" onClick={() => onThemeSwitch('light')}>
                  <i className="fas fa-sun"></i>
              </button>
              <button className={`${styles.themeButton} ${theme === 'dark' ? styles.active : ''}`} data-theme="dark" title="Tema Escuro" onClick={() => onThemeSwitch('dark')}>
                  <i className="fas fa-moon"></i>
              </button>
          </div>
        </div>

        <div className={styles.footerRight}>
          <p>Todos os Direitos Reservados</p>
          <div className={styles.developerCredit}>
              <span>Desenvolvido por</span>
              <Logo variant="inverse" size="small" href="https://wa.me/5515981539443" title="Fale com Rafa Munhoz no WhatsApp" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;