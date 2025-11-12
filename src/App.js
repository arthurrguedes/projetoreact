import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'; // importado header
import Banner from './components/Banner';
import Container from './components/Container';
import Category from './components/Category';
import Footer from './components/Footer'; // importado footer

function App() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // estado de busca

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        setVideos(data.videos);
      })
      .catch(error => console.error("Erro ao buscar vídeos:", error));
  }, []);

  // filtra os vídeos antes de agrupar
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // agrupa os vídeos já filtrados
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

  return (
    // fragmento <> para agrupar tudo
    <>
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      
      <main>
        <Banner />
        <Container>
          {Object.keys(categorizedVideos).map(categoryName => (
            <Category 
              key={categoryName}
              categoryName={categoryName}
              videos={categorizedVideos[categoryName]} 
            />
          ))}
        </Container>
      </main>
      
      <Footer />
    </>
  );
}

export default App;