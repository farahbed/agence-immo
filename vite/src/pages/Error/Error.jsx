import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';


function Error() {
  return (
    <div className="error-page">
      <h1 className='errorTitle'>404</h1>
      <p className='errorText'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className='errorLink'>Retourner sur la page d’accueil</Link>
      
    </div>
  );
}

export default Error;