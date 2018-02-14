import React from 'react';

import {Link} from 'react-router-dom';

export default function TripSummary(props) {
  const summaries = props.trips.map((trip, index) => (
    <Link to={`/trip-lists/${trip._id}`} key={ index + 1 }>
      <li className={`trip trip-${index + 1}`} key={ index + 1 }>

        <h3 className="trip-number">Trip #{ index + 1 }</h3>
        <h2 className="trip-name">{ trip.tripName }</h2>

        <h3 className="trip-date-label">Dates:</h3>
        <h2 className="trip-dates">{ trip.dateStart } to { trip.dateEnd }</h2>

        <h4 className="trip-invite-link">www.travelgameplan.com/trip-invite/{ trip.tripUUID }</h4>

      </li>
    </Link>
  ));

  return (
    <ul className="trip-list">
      {summaries}
    </ul>
  );
};
