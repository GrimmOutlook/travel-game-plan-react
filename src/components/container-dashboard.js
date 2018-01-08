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
