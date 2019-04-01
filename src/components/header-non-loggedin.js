import React from 'react';

import './css/header-non-loggedin.css';

export default function HeaderNonLoggedIn() {
  return (
    <div className="top-non-loggedin">
      <header className="header-non-loggedin">
        <ul className="header-non-loggedin-menu-list">
          <li className="header-non-loggedin-logo-box">
            <a href="/">
              <img src="../images/travel-svgrepo-com.svg" alt="logo" className="header-non-loggedin-logo"/>
            </a>
          </li>
        </ul>
        <div className="header-non-loggedin-text">Travel Game Plan</div>
      </header>
      <div className="main-content-wrapper">
        <div className="logo-large-container">
          <img src="../images/logo-color.svg" alt="logo" className="logo-large"/>
        </div>
      </div>
    </div>
  )
}
