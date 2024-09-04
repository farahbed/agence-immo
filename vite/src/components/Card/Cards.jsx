import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Cards.scss'



function Cards({id, title, cover}) {

  const navigate = useNavigate();
  console.log('navigate:', navigate);

  const handleClick = () => {
    navigate(`/lodging/${id}`);
  };

  return (
<div className="card" onClick={handleClick}>
    <figure>
        <img className="card-img"
        src={cover} 
        alt="{title}"/> 
        
            <h2 className="card-title">{title}</h2>
    </figure>
        
</div>


  )
}

export default Cards
