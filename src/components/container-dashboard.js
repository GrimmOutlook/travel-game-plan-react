import React from 'react';

import Button from './button';
import TripSummary from './trip-summary';


export default class ContainerDashboard extends React.Component {

    render() {
      return (
        <div className="content-dashboard content__grid">
          <Button routePath="new-trip" text="Create A New Trip" buttonColor="btn--green" />
          <TripSummary trips={TRIPS} />
        </div>
      );
    }

}

const TRIPS = [
  {trip_id: 1, name: "Cancun", dateStart: "Jan. 14, 2018", dateEnd: "Jan. 21, 2018"},
  {trip_id: 2, name: "Pittsburgh", dateStart: "March 14, 2018", dateEnd: "March 21, 2018"},
  {trip_id: 3, name: "Las Vegas", dateStart: "July 14, 2018", dateEnd: "July 21, 2018"},
  {trip_id: 4, name: "Deep Creek Lake", dateStart: "Nov. 14, 2018", dateEnd: "Nov. 21, 2018"}
];
