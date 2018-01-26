import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

import Button from './button';
import TripSummary from './trip-summary';


export class ContainerDashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    // this.props.dispatch(fetchTripData());
  }

  render() {
    return (
      <div className="content-dashboard content__grid">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          Protected data: {this.props.protectedData}
        </div>
        <Button routePath="new-trip" text="Create A New Trip" buttonColor="btn--green" />
        <TripSummary trips={this.props.trips} />
      </div>
    );
  }

}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    trips: state.trip.trips
  };
};

// const mapStateToProps = state => ({
//   trips: state.trip.trips
// });

export default requiresLogin()(connect(mapStateToProps)(ContainerDashboard));
