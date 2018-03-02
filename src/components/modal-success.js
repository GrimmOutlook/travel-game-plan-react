import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {toggleInfoModal} from '../actions/index';

import './css/modal-success.css';

export class ModalSuccess extends React.Component {

  closeTheModal(){
    this.props.dispatch(toggleInfoModal());
  }

  render() {
    let display = 'Loading...';

    if(this.props.currentTrip){
      const date = dateFromServer => new Date(dateFromServer);

      display = (<div className="flex-success">
        <div className="success-message">{this.props.text}</div>
        <div className="trip-detail-message">
          Your trip to <span>{this.props.currentTrip.tripName}</span> starts on <span>{date(this.props.currentTrip.dateStart).toLocaleDateString()}</span>.
        </div>
        <div className="invite-section">
          <p className="invite-message">
            Invite your friends!  Share the link below with your friends to help coordinate your trip:
          </p>
          <p className="invite-link">www.travelgameplan.com/trip-invite/{this.props.currentTrip.tripUUID}</p>
        </div>
        <div className="nav">
          <Link to='/dashboard' onClick={() => this.closeTheModal()} className="btn btn--green btn--dashboard">Back to Trip Dashboard</Link>
          <Link to={`/trip-lists/${this.props.currentTrip._id}`} onClick={() => this.closeTheModal()} className="btn btn--blue btn--start">Start Your Game Plan</Link>
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
