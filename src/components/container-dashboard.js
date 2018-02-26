import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
// import {fetchProtectedData} from '../actions/protected-data';
import {getTrips, addInviteTrip} from '../actions/index';

import Button from './button';
import TripSummary from './trip-summary';

import './css/container-dashboard.css';

export class ContainerDashboard extends React.Component {
  componentWillMount(){
    this.props.dispatch(getTrips());   //if user not logged in, calling getTrips here may be a problem
    console.log('the invite prop: ', this.props.inviteUUIDInStore);
  }

  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
    if (this.props.inviteUUIDInStore){
      this.props.dispatch(addInviteTrip(this.props.inviteUUIDInStore));
    }
  }

  render() {
    let tripCheck = <p className="trip-empty">Click on Create New Trip button to create your first trip!</p>;
    if(this.props.trips.length){
      tripCheck = <TripSummary trips={this.props.trips} />
    }
      return (
        <div className="content-dashboard content__grid">
          <div className="dashboard-username">
            {this.props.username}
          </div>
          <div className="dashboard-name">{this.props.name}</div>
          {/* <div className="dashboard-protected-data">
             Protected data: {this.props.protectedData}
           </div> */}
          <Button routePath="new-trip" text="Create New Trip" buttonColor="btn btn--blue" />
          {tripCheck}
        </div>
      );
  }

}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    // protectedData: state.protectedData.data,
    inviteUUIDInStore: state.inviteUUID.inviteUUID,
    trips: state.trip.trips
  };
};

export default requiresLogin()(connect(mapStateToProps)(ContainerDashboard));
