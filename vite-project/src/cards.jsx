import React from 'react'

function Cards(props) {
    console.log(props)

  return (
<div className="card w-96 bg-neutral shadow-xl">
    <figure>
        <img className="h-32 w-full object-cover"
        src={props.image} alt="logement" /> 
    </figure>
    <div className="card-body">
        <div className="flex items-center gap-2">
            <h2 className="card-title">{props.title}</h2>
        </div>
    </div>
</div>

  )
}

export default function CardsList() {
  return (
    <div className="flex flex-col gap-4">
        <Cards image="./vite-project/backend/https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" title="Logement 1"/>    
        <Cards image="./vite-project/backend/https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" title="Logement 2"/>       
        <Cards image="./vite-project/backend/https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" title="Logement 3"/>       
        <Cards image="./vite-project/backend/https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" title="Logement 4"/>
        <Cards image="./vite-project/backend/https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" title="Logement 5"/>
        <Cards image="./vite-project/backend/https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" title="Logement 6"/>
    </div>
  )
}