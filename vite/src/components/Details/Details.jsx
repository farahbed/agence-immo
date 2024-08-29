import React, { useState } from 'react';
import './Details.scss';


function Details() {
  const [openSections, setOpenSections] = useState({});

  // Fonction pour gérer le clic sur un titre
  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="details">
      <div className={`details-section ${openSections.fiabilite ? 'dropdown-open' : 'dropdown-close'}`}>
        <div className="details-title" onClick={() => toggleSection('fiabilite')}>
          Fiabilité
        </div>
        {openSections.fiabilite && (
          <p className="details-text">
            Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos sont conformes aux logements, et toutes les informations
            sont régulièrement vérifiées par nos équipes.
          </p>
        )}
      </div>

      <div className={`details-section ${openSections.respect ? 'dropdown-open' : 'dropdown-close'}`}>
        <div className="details-title" onClick={() => toggleSection('respect')}>
          Respect
        </div>
        {openSections.respect && (
          <p className="details-text">
            La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        )}
      </div>

      <div className={`details-section ${openSections.service ? 'dropdown-open' : 'dropdown-close'}`}>
        <div className="details-title" onClick={() => toggleSection('service')}>
          Service
        </div>
        {openSections.service && (
          <p className="details-text">
            La qualité du service est au cœur de Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou locataires,
            soit empreinte de respect et de bienveillance.
          </p>
        )}
      </div>

      <div className={`details-section ${openSections.securite ? 'dropdown-open' : 'dropdown-close'}`}>
        <div className="details-title" onClick={() => toggleSection('securite')}>
          Sécurité
        </div>
        {openSections.securite && (
          <p className="details-text">
            La sécurité est la priorité de Kasa.
            Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond
            aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
            qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        )}
      </div>
    </div>
  );
}

export default Details;
