import React from "react"
import logo from "./LOGO.png"
import "./Header.scss"


function Header() {
  return (
    <header>
        <h1><img className="logo" src={logo} alt="logo" /></h1>
      <nav>
        <a className="accueilBtn" href="../">Accueil</a>
        <a className="aproposBtn" href="../About#">A propos</a>
      </nav>
    </header>
  );
}

export default Header;
