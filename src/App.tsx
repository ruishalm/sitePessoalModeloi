import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Principal from './components/Principal';
import Consultorio from './components/Consultorio';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Faq from './components/Faq';

function App() {
  // Define o tipo para o tema, garantindo que só pode ser 'light' ou 'dark'
  type Theme = 'light' | 'dark';

  // Cria o estado para controlar o tema atual
  const [theme, setTheme] = useState<Theme>('light');

  // Função para trocar o tema
  const handleThemeSwitch = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme); // Salva a preferência
  };

  // Efeito que roda quando o tema muda para aplicar a classe no body
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);

  // Efeito que roda apenas uma vez para carregar o tema salvo
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <>
      <Header />
      <Principal />
      <main>
        <Consultorio />
        <Servicos />
        <Sobre />
        <Faq />
      </main>
      <Footer theme={theme} onThemeSwitch={handleThemeSwitch} />
    </>
  )
}

export default App
