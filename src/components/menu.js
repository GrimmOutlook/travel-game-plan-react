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
          <button onClick={() => this.logOut()} className="btn btn--green btn--logout">Log out</button>
        </Link>
      );
    }

    return (
      <nav className="menu">
        <ul className="menu-list">

          <li>
            <input id="button" type="checkbox" />
            <label htmlFor="button" onClick="">
              <div className="burger"><span className="burger-line"></span><span className="burger-line"></span><span className="burger-line"></span></div>
            </label>
            <nav className="menu-mobile">
              <ul>
                <li className="mobile-one mobile hide-mobile">{logOutButton}</li>
                <li className="mobile-two mobile">
                  <Link to="/dashboard" className="linkDashboard">
                    <FontAwesome name="home" className="iconDashboard" />
                      <div>Trip Dashboard</div>
                  </Link>
                </li>
                <li className="mobile-three mobile">
                  <Link to="/new-trip" className="linkCreateTrip">
                    <FontAwesome name="plus-square-o" className="iconCreateTrip hide" />
                      <div>Create New Trip</div>
                  </Link>
                </li>
              </ul>
            </nav>
          </li>

          <li className="logout-button hide">
            {logOutButton}
          </li>

          <li>
            <Link to="/dashboard" className="linkDashboard hide">
              <FontAwesome name="home" className="iconDashboard hide" />
                <div>Trip Dashboard</div>
            </Link>
          </li>

          <li>
            <Link to="/new-trip" className="linkCreateTrip hide">
              <FontAwesome name="plus-square-o" className="iconCreateTrip hide" />
                <div>Create New Trip</div>
            </Link>
          </li>

        </ul>
      </nav>
    );
  }
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Menu);
