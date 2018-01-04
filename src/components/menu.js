import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

import './css/menu.css';

export default function Menu() {

  return (
    <div className="menu">

      <Link to="/dashboard" className="linkDashboard">
        <FontAwesome name="home" className="iconDashboard" />
          <span>Trip Dashboard</span>
      </Link>

      <Link to="/new-trip" className="linkCreateTrip">
        <FontAwesome name="plus-square-o" className="iconCreateTrip" />
          <span>Create New Trip</span>
      </Link>

    </div>
  );

};


