import { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Category from '../../components/Category';
import styles from './Home.module.css';

// Recebe searchTerm como prop
function Home({ searchTerm }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        setVideos(data.videos);
      })
      .catch(error => console.error("Erro ao buscar vídeos:", error));
  }, []);

  // filtra os vídeos
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // agrupa os vídeos
  const groupVideosByCategory = (videosToGroup) => {
    return videosToGroup.reduce((acc, video) => {
      if (!acc[video.category]) {
        acc[video.category] = [];
      }
      acc[video.category].push(video);
      return acc;
    }, {});
  };

  const categorizedVideos = groupVideosByCategory(filteredVideos);
  
  // Verifica se há categorias para exibir
  const hasCategories = Object.keys(categorizedVideos).length > 0;

  return (
    <main className={styles.main}>
      <Banner />
      <Container>
        {hasCategories ? (
          Object.keys(categorizedVideos).map(categoryName => (
            <Category 
              key={categoryName}
              categoryName={categoryName}
              videos={categorizedVideos[categoryName]} 
            />
          ))
        ) : (
          <p style={{ color: '#f1f1f1', textAlign: 'center' }}>Nenhum vídeo encontrado para "{searchTerm}".</p>
        )}
      </Container>
    </main>
  );
}

export default Home;