import React from 'react'
import './Cards.scss'



function Cards(props) {
    console.log(props)

  return (
<div className="card">{props.id}
    <figure>
        <img className="card-img"
        src={props.cover} 
        alt="{props.title}"/> 
        
            <h2 className="card-title">{props.title}</h2>
    </figure>
        
</div>


  )
}

export default Cards
