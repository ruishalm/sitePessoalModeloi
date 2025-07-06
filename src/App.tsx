import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';

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
      <main>
        {/* Aqui virão as outras seções do site */}
      </main>
      <Footer theme={theme} onThemeSwitch={handleThemeSwitch} />
    </>
  )
}

export default App
