import React from 'react';
import {connect} from 'react-redux';

import Button from './button';
import TripSummary from './trip-summary';


export class ContainerDashboard extends React.Component {

    render() {
      return (
        <div className="content-dashboard content__grid">
          <Button routePath="new-trip" text="Create A New Trip" buttonColor="btn--green" />
          <TripSummary trips={this.props.trips} />
        </div>
      );
    }

}

const mapStateToProps = state => ({
  trips: state.trip.trips
});

export default connect(mapStateToProps)(ContainerDashboard);


// // initialState in reducers
// const TRIPS = [
//   {trip_id: 1, tripName: "Cancun", dateStart: "Jan. 14, 2018", dateEnd: "Jan. 21, 2018"},
//   {trip_id: 2, tripName: "Pittsburgh", dateStart: "March 14, 2018", dateEnd: "March 21, 2018"},
//   {trip_id: 3, tripName: "Las Vegas", dateStart: "July 14, 2018", dateEnd: "July 21, 2018"},
//   {trip_id: 4, tripName: "Deep Creek Lake", dateStart: "Nov. 14, 2018", dateEnd: "Nov. 21, 2018"}
// ];
