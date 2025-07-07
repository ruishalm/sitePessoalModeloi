import { useParams, Link } from 'react-router-dom';
import styles from './ArticlePage.module.css';

// Dados de exemplo para os artigos. No futuro, virão de um CMS ou API.
const articles = [
  { id: 'primeiro-artigo', title: 'Os Benefícios da Terapia Cognitivo-Comportamental', content: '<h2>O que é TCC?</h2><p>A Terapia Cognitivo-Comportamental (TCC) é uma abordagem psicoterapêutica que foca na relação entre pensamentos, emoções e comportamentos...</p><p>Continue o texto aqui.</p>', date: '15 de Julho, 2024' },
  { id: 'segundo-artigo', title: 'Ansiedade: Entendendo e Gerenciando os Sintomas', content: '<h2>Identificando a Ansiedade</h2><p>A ansiedade é uma resposta natural do corpo ao estresse, mas quando se torna crônica, pode ser debilitante...</p><p>Continue o texto aqui.</p>', date: '22 de Julho, 2024' },
  { id: 'terceiro-artigo', title: 'A Importância do Autocuidado para a Saúde Mental', content: '<h2>Práticas de Autocuidado</h2><p>O autocuidado vai além de um banho relaxante. Envolve um conjunto de práticas diárias que nutrem sua mente e corpo...</p><p>Continue o texto aqui.</p>', date: '29 de Julho, 2024' },
];

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className={styles.articleNotFound}>
        <h2>Artigo não encontrado</h2>
        <p>O artigo que você está procurando não existe ou foi movido.</p>
        <Link to="/artigos">Voltar para Artigos</Link>
      </div>
    );
  }

  return (
    <article className={styles.articlePage}>
      <header className={styles.articleHeader}>
        <h1>{article.title}</h1>
        <span className={styles.articleDate}>{article.date}</span>
      </header>
      <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: article.content }} />
      <Link to="/artigos" className={styles.backLink}>&larr; Voltar para todos os artigos</Link>
    </article>
  );
};

export default ArticlePage;