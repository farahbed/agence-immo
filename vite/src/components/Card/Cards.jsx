import React from 'react'
import './Cards.scss'



function Cards({ title, cover}) {
 
  return (
<div className="card"> 
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
