// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.scss'; // Votre fichier CSS/SCSS
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
