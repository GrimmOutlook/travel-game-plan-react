import React from 'react';

export default function TripSummary(props) {
  const summaries = props.trips.map((trip, index) => (
    <li className={`trip trip-${index + 1}`} key={ index + 1 }>

        <h3 className="trip-number">Trip #{ index + 1 }</h3>
        <h2 className="trip-name">{ trip.name }</h2>

        <h3 className="trip-date-label">Dates:</h3>
        <h2 className="trip-dates">{ trip.dateStart } to { trip.dateEnd }</h2>

    </li>
  ));

  return (
    <ul className="trip-list">
      {summaries}
    </ul>
  );
};
