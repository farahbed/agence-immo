import React, { useState } from 'react';
import './Collapse.scss';
import arrowIcon from './arrow.png'; 

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour gérer le clic sur un titre
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleSection}>
        <div className="collapse-title">{title}</div>
        <img
          src={arrowIcon}
          alt="Arrow"
          className={`collapse-arrow ${isOpen ? 'rotate' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="collapse-content">
          {content}
        </div>
      )}
    </div>
  );
}

export default Collapse;
