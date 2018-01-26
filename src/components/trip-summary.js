import React from 'react';

import {Link} from 'react-router-dom';

export default function TripSummary(props) {
  // const tripId = props.match.params.tripId;
  const summaries = props.trips.map((trip, index) => (
    <Link to={`/trip-lists/${trip._id}`} key={ index + 1 }>
      <li className={`trip trip-${index + 1}`} key={ index + 1 }>

        <h3 className="trip-number">Trip #{ index + 1 }</h3>
        <h2 className="trip-name">{ trip.tripName }</h2>

        <h3 className="trip-date-label">Dates:</h3>
        <h2 className="trip-dates">{ trip.dateStart } to { trip.dateEnd }</h2>

      </li>
    </Link>
  ));

  return (
    <ul className="trip-list">
      {summaries}
    </ul>
  );
};
