import React, { useState } from 'react';

function Carouselle({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0); // pour utiliser state dans le carouselle

  // Fonction pour aller à l'image précédente
  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>   //pour aller à l'image precedente
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>  //pour aller à l'image suivante
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

 
  const showNavigation = images.length > 1;  //pour afficher les boutons seulement si plus d'une image  

  return (
    <div className="carouselle">
      {showNavigation && (  
        <button onClick={previousSlide} className="carouselle-button prev">❮</button>
      )}
      <img
        className="carouselle-img"
        src={images[currentIndex]}
        alt={'slide $[currentIndex + 1]'}
      />
      {showNavigation && (
        <button onClick={nextSlide} className="carouselle-button next">❯</button>
      )}
     
      <div className="carouselle-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default Carouselle;
