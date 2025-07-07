import styles from './Servicos.module.css';
import ServiceCard from './ServiceCard';

// No futuro, estes dados poderiam vir de uma API ou de um arquivo de conteúdo.
const servicesData = [
  { title: 'Tratamento de Traumas', description: 'Reprocessamento de memórias traumáticas, aliviando o peso emocional de eventos passados.' },
  { title: 'Alívio da Ansiedade', description: 'Identificação e tratamento das causas da ansiedade, fobias e síndrome do pânico.' },
  { title: 'Superação da Depressão', description: 'Foco na raiz dos sentimentos depressivos para uma recuperação eficaz e consciente.' },
  { title: 'Resolução de Conflitos', description: 'Melhora nos relacionamentos e na comunicação através do autoconhecimento e da cura emocional.' },
];

function Servicos() {
  return (
    <section className={styles.servicesSection}>
      <h2>Como a Terapia TRG pode te ajudar</h2>
      <p>Através de um método estruturado, vamos juntos reprocessar as memórias que geram sofrimento e construir um futuro mais leve e equilibrado.</p>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} animationDelay={index * 100} />
        ))}
      </div>
    </section>
  );
}

export default Servicos;