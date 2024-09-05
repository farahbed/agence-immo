import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About'; 
import Error from './pages/Error/Error';
import Lodging from './pages/Lodging/Lodging';

function App() {
  return (
    <>
     <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lodging/:id" element={<Lodging />} />
          <Route path="*" element={<Error />} />
        </Routes>
     
      <Footer />
    </>
  );
}

export default App;

