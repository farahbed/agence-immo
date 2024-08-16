import { useState } from 'react'
import viteLogo from '/vite.svg'
import './index.scss'
import Banner from './banner.jsx'

function App() {
  return <header>
    <nav>
    <img src={viteLogo} className="logo" alt="Vite logo" />
     
    <a className="accueilBtn" href="#">Accueil</a>
    <a className="aproposBtn" href="#">A propos</a> 
    </nav>
  </header>
}

export default App
