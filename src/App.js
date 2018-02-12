import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';

import Dashboard from './components/dashboard';
import Homepage from './components/homepage';
import NewTrip from './components/new-trip';
import TripLists from './components/trip-lists';
import TripInvite from './components/trip-invite';
import LoginPage from './components/login-page';
import Menu from './components/menu';
import RegistrationPage from './components/registration-page';
import {refreshAuthToken} from './actions/auth';


export class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route path="/trip-invite/:tripUUID" component={TripInvite} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/new-trip" component={NewTrip} />
          <Route path="/trip-lists/:tripId" component={TripLists} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));

