import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx'; // Ajouter d'autres pages à mesure que vous en avez besoin
import Error from './pages/Error/Error.jsx';

function App() {
  return (
    <>
     <Header />
      <main className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
     
      <Footer />
    </>
  );
}

export default App;

