import React from 'react';
import { useParams } from 'react-router-dom';
import backData from '../../data/back-data.json';
import Carouselle from '../../components/Carouselle/Carouselle.jsx'; 


function Lodging () {
    const { id } = useParams();
    
    // Find the lodging item based on the id
    const lodging = backData.find((item) => item.id === id);

    // Handle case where lodging is not found
    if (!lodging) {
        return <div>Lodging not found</div>;
    }

    return (
        <div className="lodging-page">
            {/* Pass the pictures array to Carouselle */}
            <Carouselle images={lodging.pictures} />

            {/* Display other lodging details */}
            <h1>{lodging.title}</h1>
           
        </div>
    );
}

export default Lodging;


