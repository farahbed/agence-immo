import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Card/Cards';
import backData from '../../data/back-data.json';
import homeImage from '../../assets/home-image.png';
import '../../components/Banner/Banner.scss';

function Home() {
  console.log('homeImage:', homeImage);  

  

  return (
    <div className="home-page">
      <Banner
        image={homeImage}  
        text="Chez vous, partout et ailleurs"
      />
      <div className="cards-container">
        {backData.map((props) => (
          <Cards
            key={props.id}
            title={props.title}
            cover={props.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

