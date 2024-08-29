// src/pages/Home.jsx
import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import aboutImage from '../../assets/about-image.png';
import Details from '../../components/Details/Details.jsx';

function About() {
  return (
    <div className="about-page">
      <Banner image={aboutImage} />

      <Details />

      
    </div>
  );
}

export default About;
