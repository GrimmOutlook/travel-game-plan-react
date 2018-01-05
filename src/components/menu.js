import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

import './css/menu.css';

export default function Menu() {

  return (
    <div className="menu">

      <Link to="/dashboard" className="linkDashboard">
        <FontAwesome name="home" className="iconDashboard" />
          <div>Trip Dashboard</div>
      </Link>

      <Link to="/new-trip" className="linkCreateTrip">
        <FontAwesome name="plus-square-o" className="iconCreateTrip" />
          <div>Create New Trip</div>
      </Link>

    </div>
  );

};


