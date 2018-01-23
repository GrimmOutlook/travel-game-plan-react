import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './css/menu.css';

export class Menu extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log out</button>
      );
    }

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

        <div className="logout-button">
          {logOutButton}
        </div>

      </div>
    );
  }
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Menu);
