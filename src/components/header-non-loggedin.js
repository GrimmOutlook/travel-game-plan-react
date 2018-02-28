import React from 'react';

import './css/header-non-loggedin.css';

export default function HeaderNonLoggedIn() {
  return (
    <div className="top-non-loggedin">
      <header class="header-non-loggedin">
        <ul class="header-non-loggedin-menu-list">
          <li class="header-non-loggedin-logo-box">
            <a href="/">
              <img src="../images/travel-svgrepo-com.svg" alt="logo" className="header-non-loggedin-logo"/>
            </a>
          </li>
        </ul>
        <div class="header-non-loggedin-text">Travel Game Plan</div>
      </header>
      <div class="main-content-wrapper">
        <div class="logo-large-container">
          <img src="../images/logo-color.svg" alt="logo" className="logo-large"/>
        </div>
      </div>
    </div>
  )
}
