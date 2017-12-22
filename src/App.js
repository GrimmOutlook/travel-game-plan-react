import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Dashboard from './components/dashboard';
import Homepage from './components/homepage';
import NewTrip from './components/new-trip';
import TripLists from './components/trip-lists';
// import Modal from './components/modal';
// import {SuccessModalContent, FormModalContent} from './components/modal';

export default class App extends React.Component {

    render() {
      return (
        <Router>
          <div>
            <Switch>
              {/* This is how you comment JSX */}
              <Route exact path="/" component={Homepage} />
              {/* <Route exact path="/modal-success" component={SuccessModalContent} /> */}
              {/* <Route exact path="/modal-form" component={FormModalContent} /> */}
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/new-trip" component={NewTrip} />
              <Route exact path="/trip-lists" component={TripLists} />
            </Switch>
          </div>
        </Router>
      );
    }

}
