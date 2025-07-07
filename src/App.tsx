import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
// Importe os componentes de seção
import Principal from './components/Principal';
import Consultorio from './components/Consultorio';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Faq from './components/Faq';

// 1. Importe o hook de animação
import useScrollAnimation from './hooks/useScrollAnimation';

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

  // 2. Crie uma ref e um estado de visibilidade para cada seção que será animada
  const [principalRef, isPrincipalVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.4 });
  const [consultorioRef, isConsultorioVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [servicosRef, isServicosVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [sobreRef, isSobreVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [faqRef, isFaqVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <>
      <Header />
      {/* 3. Aplique a ref e as classes CSS no elemento que você quer animar.
         Neste caso, estamos envolvendo cada componente de seção em uma `div`
         para aplicar a animação a todo o bloco. */}
      <div ref={principalRef} className={`animate-on-scroll fade-in ${isPrincipalVisible ? 'is-visible' : ''}`}>
        <Principal />
      </div>
      <main>
        <div ref={consultorioRef} className={`animate-on-scroll slide-in-up ${isConsultorioVisible ? 'is-visible' : ''}`}>
          <Consultorio />
        </div>

        {/* A seção inteira aparece suavemente (fade-in) */}
        <div ref={servicosRef} className={`animate-on-scroll fade-in ${isServicosVisible ? 'is-visible' : ''}`}>
          <Servicos />
        </div>

        <div ref={sobreRef} className={`animate-on-scroll slide-in-right ${isSobreVisible ? 'is-visible' : ''}`}>
          <Sobre />
        </div>

        <div ref={faqRef} className={`animate-on-scroll scale-up ${isFaqVisible ? 'is-visible' : ''}`}>
          <Faq />
        </div>
      </main>
      <Footer theme={theme} onThemeSwitch={handleThemeSwitch} />
    </>
  )
}

export default App
