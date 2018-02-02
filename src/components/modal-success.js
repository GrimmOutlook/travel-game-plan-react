import React from 'react';
import {connect} from 'react-redux';

import Button from './button';

export class ModalSuccess extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tripMostRecent: this.props.allTrips.slice(-1)[0]
    };
  }

  render(props) {
    return (

      <div className="success-modal__content">
        <div className="content content__grid">

          <p>This is the prop from the HOC: {this.props.text}</p>

          <div className="success-message">You have successfully created a new trip!</div>
          <div className="trip-detail-message">
            Your trip to <span>{this.state.tripMostRecent.tripName}</span> starts on <span>{this.state.tripMostRecent.dateStart}</span>.
          </div>
          <div className="invite-section">
            <p className="invite-message">
              Invite your friends!  Share the link below with your friends to help coordinate your trip:
            </p>
            <p className="invite-link">www.travelgameplan.com/trip-invite/{this.state.tripMostRecent.tripUUID}</p>
          </div>
          <div className="nav">
            <Button routePath="dashboard" text="Back to Trip Dashboard" buttonColor="btn--green" />
            <Button routePath="trip-lists" text="Start Your Game Plan" buttonColor="btn--blue" />
          </div>

        </div>
      </div>

    );
  }
};

const mapStateToProps = state => ({
  allTrips: state.trip.trips !== null
})

export default connect(mapStateToProps)(ModalSuccess);
