import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Index.js'; 
import Watch from './pages/Watch/Index.js';
import Sobre from './pages/Sobre/Index.js';
import Contato from './pages/Contato/index.js';

function RoutesConfig() {
    const [searchTerm, setSearchTerm] = useState(''); 
    
    return (
        <BrowserRouter>
            <Header 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
            />
            
            <Routes>
                <Route path="/" element={<Home searchTerm={searchTerm} />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                
                <Route path="/video/:id" element={<Watch />} />
                
                <Route path="*" element={<Home searchTerm={searchTerm} />} /> 
            </Routes>
            
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesConfig;