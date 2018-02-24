import React from 'react';
import NewTripForm from './new-trip-form';

import './css/container-new-trip.css';

export default class ContainerNewTrip extends React.Component {

    render() {
      return (
        <div className="content-new-trip">
          <h2 className="heading-new-trip">Fill in New Trip Details:</h2>
          <NewTripForm />
        </div>
      );
    }

}
