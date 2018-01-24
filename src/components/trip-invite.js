import React from 'react';

export default class TripInvite extends React.Component {
  // {/* const urlUUID = this.match.props.tripUUID; */}

  render() {
    return (

      <div>
        <h2>{this.props.match.params.tripUUID}</h2>
      </div>

    )
  }

}
