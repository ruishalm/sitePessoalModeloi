import styles from './Servicos.module.css';
import ServiceCard from './ServiceCard';

// No futuro, estes dados poderiam vir de uma API ou de um arquivo de conteúdo.
const servicesData = [
  { title: 'blablabla', description: 'blablabla' },
  { title: 'blablabla', description: 'blablabla' },
  { title: 'blablabla', description: 'blablabla' },
  { title: 'blablabla', description: 'blablabla' },
];

function Servicos() {
  return (
    <section className={styles.servicesSection}>
      <h2>servicos e blablabla</h2>
      <p>blablabla</p>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
}

export default Servicos;