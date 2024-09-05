import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Collapse.scss';
import arrowIcon from './arrow.png'; 

function Collapse({ title, content }) {
  const [Open, setOpen] = useState(false);
  const contentRef = useRef(null);

  // Fonction pour gérer le clic sur un titre
  const toggleCollapse = () => {
    setOpen(!Open);
  };

  useEffect(() => {
    if (Open) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [Open]);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
      <h3>{title}</h3>
        <img
          src={arrowIcon}
          alt="arrow"
          className={`collapse-arrow ${Open ? "open" : ""}`}
          style={{
            transform: `rotate(${Open ? "180deg" : "0"})`,
            transition: "transform 0.2s ease",
          }}
        />
      </div>
      <div
        className={`collapse-content ${Open ? "open" : ""}`}
        ref={contentRef}
      >
        <ul>{content}</ul>
      </div>
    </div>
  );
}


export default Collapse;
