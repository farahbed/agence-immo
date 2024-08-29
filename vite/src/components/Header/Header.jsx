import React from "react"
import logo from "./LOGO.png"
import "./Header.scss"


function Header() {
  return (
    <header>
        <img className="logo" src={logo} alt="logo" />
      <nav>
        <a className="accueilBtn" href="../Home#">Accueil</a>
        <a className="aproposBtn" href="../About#">A propos</a>
      </nav>
    </header>
  );
}

export default Header;
