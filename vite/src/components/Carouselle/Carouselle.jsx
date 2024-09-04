import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Carouselle.scss';

function Carouselle({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showNavigation = images.length > 1;

  return (
    <div className="carouselle">
      {showNavigation && (
        <button onClick={previousSlide} className="carouselle-button prev">❮</button>
      )}
      <img
        className="carouselle-img"
        src={images[currentIndex]}
        alt={`slide ${currentIndex + 1}`}
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

Carouselle.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carouselle;
