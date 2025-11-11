import { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import Container from './components/Container';
import Category from './components/Category';

function App() {
  // Estado para armazenar todos os vídeos
  const [videos, setVideos] = useState([]);

  // useEffect para buscar os dados da API mockada
  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        setVideos(data.videos);
      })
      .catch(error => console.error("Erro ao buscar vídeos:", error));
  }, []); // O array vazio [] faz com que rode apenas uma vez

  // Função para agrupar os vídeos por categoria
  const groupVideosByCategory = () => {
    return videos.reduce((acc, video) => {
      // Se a categoria ainda não existe no acumulador, cria um array vazio
      if (!acc[video.category]) {
        acc[video.category] = [];
      }
      // Adiciona o vídeo à sua categoria
      acc[video.category].push(video);
      return acc;
    }, {});
  };

  const categorizedVideos = groupVideosByCategory();

  return (
    <main>
      <Banner />
      
      <Container>
        {/* Mapeia as chaves do objeto (nomes das categorias)
          e renderiza um componente category para cada uma
        */}
        {Object.keys(categorizedVideos).map(categoryName => (
          <Category 
            key={categoryName}
            categoryName={categoryName}
            // Passa a lista de vídeos daquela categoria
            videos={categorizedVideos[categoryName]} 
          />
        ))}
      </Container>
    </main>
  );
}

export default App;