import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './css/menu.css';

export class Menu extends React.Component {

  logOut() {
    console.log('In the logOut fxn in the Menu component.  Should print everytime button is clicked dammit!');
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  // shouldComponentUpdate(){
  //   this.logOut();
  // }

  render() {
    // Only render the log out button if user is logged in
    let logOutButton;
    if (this.props.loggedIn) {
      console.log('if statement in Menu comp. loggedIn is true');
      logOutButton = (
        <Link to="/">
          <button onClick={() => this.logOut()}>Log out</button>
        </Link>
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
