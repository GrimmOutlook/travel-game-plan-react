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
        <h2>{trip.date-start} to {trip.date-end}</h2>
      </div>
    </li>
  ));

  return (
    <ul>
      {summaries}
    </ul>
  );
};



const TRIPS = [
  {trip_id: 1, name: "Cancun", date-start: "Jan. 14, 2018", date-end: "Jan. 21, 2018"},
  {trip_id: 2, name: "Pittsburgh", date-start: "March 14, 2018", date-end: "March 21, 2018"},
  {trip_id: 3, name: "Las Vegas", date-start: "July 14, 2018", date-end: "July 21, 2018"},
  {trip_id: 4, name: "Deep Creek Lake", date-start: "Nov. 14, 2018", date-end: "Nov. 21, 2018"}
]
