import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {toggleInfoModal} from '../actions/index';

export class ModalSuccess extends React.Component {

  closeTheModal(){
    this.props.dispatch(toggleInfoModal());
  }

  render() {
    let display = 'Loading...';

    if(this.props.currentTrip){
      display = (<div className="content content__grid">

        <p>This is the prop from the HOC: {this.props.text}</p>

        <div className="success-message">You have successfully created a new trip!</div>
        <div className="trip-detail-message">
          Your trip to <span>{this.props.currentTrip.tripName}</span> starts on <span>{this.props.currentTrip.dateStart}</span>.
        </div>
        <div className="invite-section">
          <p className="invite-message">
            Invite your friends!  Share the link below with your friends to help coordinate your trip:
          </p>
          <p className="invite-link">www.travelgameplan.com/trip-invite/{this.props.currentTrip.tripUUID}</p>
        </div>
        <div className="nav">
          <Link to='/dashboard' onClick={() => this.closeTheModal()} className="btn btn--green">Back to Trip Dashboard</Link>
          <Link to={`/trip-lists/${this.props.currentTrip._id}`} onClick={() => this.closeTheModal()} className="btn btn--blue">Start Your Game Plan</Link>
        </div>

      </div>);
    }

    return (

      <div className="success-modal__content">

       { display }

      </div>

    );
  }
};

const mapStateToProps = state => ({
  currentTrip: state.trip.currentTrip,
  allTrips: state.trip.trips,
  showModal: state.modal.showModal
})

export default connect(mapStateToProps)(ModalSuccess);
