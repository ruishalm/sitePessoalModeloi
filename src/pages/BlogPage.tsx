import styles from './BlogPage.module.css';
import ArticleCard from '../components/ArticleCard';
import { Link } from 'react-router-dom';

// Dados de exemplo para os artigos. No futuro, podem vir de um CMS ou API.
const articles = [
  { id: 'primeiro-artigo', title: 'Os Benefícios da Terapia Cognitivo-Comportamental', summary: 'Descubra como a TCC pode transformar sua vida, ajudando a reestruturar pensamentos e comportamentos.', date: '15 de Julho, 2024' },
  { id: 'segundo-artigo', title: 'Ansiedade: Entendendo e Gerenciando os Sintomas', summary: 'Um guia prático para identificar os gatilhos da ansiedade e aprender técnicas eficazes de controle.', date: '22 de Julho, 2024' },
  { id: 'terceiro-artigo', title: 'A Importância do Autocuidado para a Saúde Mental', summary: 'Pequenas práticas diárias que fazem uma grande diferença no seu bem-estar emocional e psicológico.', date: '29 de Julho, 2024' },
];

const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
      <header className={styles.pageHeader}>
        <h1>Artigos</h1>
        <p>Artigos e reflexões sobre terapia, bem-estar e autoconhecimento.</p>
        <Link to="/" className={styles.backToHome}>&larr; Voltar para o início</Link>
      </header>
      <main className={styles.articlesGrid}>
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            summary={article.summary}
            date={article.date}
            animationDelay={index * 100}
          />
        ))}
      </main>
    </div>
  );
};

export default BlogPage;
