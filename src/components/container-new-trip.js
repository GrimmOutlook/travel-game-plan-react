import React from 'react';

import NewTripForm from './new-trip-form';

export default class ContainerNewTrip extends React.Component {

    render() {
      return (
        <div className="content">
          <h1 className="heading-secondary">Fill in New Trip Details:</h1>
          <NewTripForm />
        </div>
      );
    }

}
