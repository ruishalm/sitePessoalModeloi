import React from 'react';
import styles from './Footer.module.css';

// Define a interface para as propriedades que o componente vai receber.
// Isso ajuda o TypeScript a garantir que estamos usando os tipos corretos.
interface FooterProps {
  theme: 'light' | 'dark';
  onThemeSwitch: (theme: 'light' | 'dark') => void;
}

function Footer({ theme, onThemeSwitch }: FooterProps) {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerLogo}>
        <img src="" alt="Logo da Cliente" />
      </div>
      <div className={styles.footerInfo}>
        <p>CRP 0000000 | <strong>Blabla de Bla Blala</strong></p>
        <p>endereco blabla</p>
        <p>Todos os Direitos Reservados</p>
        <div className={styles.developerCredit}>
          <span>Desenvolvido por</span>
          <a href="https://wa.me/5515981539443" target="_blank" rel="noopener noreferrer" className={styles.svgLogoLink} title="Fale com Rafa Munhoz no WhatsApp">
            <svg className={styles.rafaMunhozLogo} viewBox="0 0 220 40" xmlns="http://www.w3.org/2000/svg">
                <rect className={styles.logoBgCapsule} x="-10" y="-5" width="240" height="50" rx="25"/>
                <rect className={styles.logoFlair} x="0" y="0" width="10" height="10" rx="2"/>
                <text x="20" y="27">
                    <tspan className={styles.logoFirstName}>Rafa</tspan><tspan className={styles.logoLastName}> Munhoz</tspan>
                </text>
                <path className={styles.logoUnderline} d="M20 35 H 215" />
            </svg>
          </a>
        </div>
        <div className={styles.themeSwitcher}>
          <button className={`${styles.themeButton} ${theme === 'light' ? styles.active : ''}`} data-theme="light" title="Tema Claro" onClick={() => onThemeSwitch('light')}>
            <i className="fas fa-sun"></i>
          </button>
          <button className={`${styles.themeButton} ${theme === 'dark' ? styles.active : ''}`} data-theme="dark" title="Tema Escuro" onClick={() => onThemeSwitch('dark')}>
            <i className="fas fa-moon"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;