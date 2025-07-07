import Principal from '../components/Principal';
import Consultorio from '../components/Consultorio';
import Servicos from '../components/Servicos';
import styles from './HomePage.module.css';
import Sobre from '../components/Sobre';
import Faq from '../components/Faq';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HomePage = () => {
  // A lógica de animação para as seções da página inicial continua aqui.
  const [principalRef, isPrincipalVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.4 });
  const [consultorioRef, isConsultorioVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [servicosRef, isServicosVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [sobreRef, isSobreVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [faqRef, isFaqVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div className={styles.homePage}>
      <div ref={principalRef} className={`animate-on-scroll fade-in ${isPrincipalVisible ? 'is-visible' : ''}`}>
        <Principal />
      </div>
      <main>
        <div ref={consultorioRef} className={`animate-on-scroll slide-in-up ${isConsultorioVisible ? 'is-visible' : ''}`}>
          <Consultorio />
        </div>

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
    </div>
  );
};

export default HomePage;