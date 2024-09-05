import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import backData from '../../data/back-data.json';
import './Lodging.scss';
import Carouselle from '../../components/Carouselle/Carouselle.jsx'; 
import Rate from '../../components/Rate/Rate.jsx';
import Description from '../../components/Desciption/Description.jsx';
import Equipement from '../../components/Equipement/Equipement.jsx';


function Lodging () {
    const { id } = useParams();

    console.log('ID from useParams',id);
    
    // Find the lodging item based on the id
    const lodging = backData.find((lodging) => lodging.id === id);

    // Handle case where lodging is not found
    if (!lodging) {
        return <Navigate to="/error" />;
    }
    const {title,
         pictures,
         host,
          rating,
          location,
        tags,} = lodging;

    return (
        <div className="lodging-page">
            {/* Pass the pictures array to Carouselle */}
            <Carouselle images={pictures} />{" "}

            {/* Display other lodging details */}
            
                <div className="all-infos">
            <div className="first-case">
                <div className="logInfos">
                <h2>{title}</h2>
                <p>{location}</p>
                </div>
            <div>
                <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
                </ul>
            </div>
            </div>

            {/* Deuxième ligne  */}
            <div className="second-case">
            <div className="host">
                <div className="headinfos">
                {" "}
                <p>{host.name}</p>
                <img src={host.picture} alt={host.name} className="host-image" />
                </div>

                <div className="rate">
                <Rate rating={parseInt(rating)} />{" "}
                {/* Passer la note en tant que prop */}
                </div>
            </div>
            </div>
        </div>

        <div className="col-container">
            <div className="description">
            <Description lodgingId={id} />{" "}
            {/* Passer l'ID du logement en tant que prop */}
            </div>
            
            <div className="equipements">
            <Equipement lodgingId={id} data={backData} />
            </div>
        </div>
        </div>
  );
}
      

export default Lodging;


