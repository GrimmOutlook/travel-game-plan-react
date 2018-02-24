import React from 'react';

import './css/header.css';

export default function Header() {

  return (
    <div className="header">
      <img src="../images/travel-svgrepo-com.svg" alt="logo" className="header-logo"/>
      <div className="header-site-names">
        <h1>Travel Game Plan</h1>
        <h2>Get Yourselves Together</h2>
      </div>
    </div>
  );

};
