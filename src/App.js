import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Index.js'; 
import Watch from './pages/Watch/Index.js'; 

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // estado de busca 

  return (
    // Envolve a aplicação com o BrowserRouter
    <BrowserRouter>
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        
        <Route path="/watch" element={<Watch />} />
        
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;