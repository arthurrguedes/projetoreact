import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 1. Removemos Header e Footer daqui
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* renderizando apenas o App */}
  </React.StrictMode>
);

reportWebVitals();