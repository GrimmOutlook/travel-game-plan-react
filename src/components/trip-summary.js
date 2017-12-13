import React from 'react';

export default function TripSummary(props) {
  const summaries = props.trips.map((trip, index) => (
    <li key={index}>
      <div className="trip-name">
        <h3>Trip #{index}</h3>
        <h2>{trip.name}</h2>
      </div>
      <div className="trip-dates">
        <h3>Dates:</h3>
        <h2>{trip.dateStart} to {trip.dateEnd}</h2>
      </div>
    </li>
  ));

  return (
    <ul>
      {summaries}
    </ul>
  );
};


