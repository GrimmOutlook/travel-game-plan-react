import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './css/trip-summary.css';

const date = dateFromServer => new Date(dateFromServer);

export default function TripSummary(props) {
  const summaries = props.trips.map((trip, index) => (
    <Link to={`/trip-lists/${trip._id}`} key={ index + 1 }>
      <li className={`trip trip-${index + 1}`} key={ index + 1 }>

        <h3 className="trip-number">Trip #{ index + 1 }</h3>
        <h2 className="trip-name">{ trip.tripName }</h2>

        <h3 className="trip-date-label">Dates:</h3>
        <h2 className="trip-dates">{ date(trip.dateStart).toLocaleDateString() } to { date(trip.dateEnd).toLocaleDateString() }</h2>

        <h4 className="trip-address">{ trip.address }</h4>
        <h4 className="trip-details">{ trip.tripDetails }</h4>

        <FontAwesome
          name="caret-square-down"
          className="icon-invite-caret"
          aria-hidden="false"
        />
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
