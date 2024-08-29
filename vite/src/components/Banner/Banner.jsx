// src/components/Banner/Banner.jsx
import React from 'react';
import './Banner.scss';


function Banner({ image, text }) {
  return (
    <div className="banner">
      <img
        className="banner-img"
        src={image}
        alt={text || 'Banner'}
      />
      {text && <div className="banner-text">{text}</div>}
    </div>
  );
}

export default Banner;
