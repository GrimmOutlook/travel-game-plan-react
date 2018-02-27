import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {storeInviteUUID, fetchTripName} from '../actions/index';

import HeaderNonLoggedIn from './header-non-loggedin'

export class TripInvite extends React.Component {
  //local state, not Redux state:
  constructor(props){
    super(props);
    this.state = {
      redirect: ""
    };
  }

  componentWillMount(){
    const inviteUUID = this.props.match.params.tripUUID;
    this.props.dispatch(storeInviteUUID(inviteUUID));
    this.props.dispatch(fetchTripName(inviteUUID));
  }

  changeUUIDState(e){
    e.preventDefault();
    this.setState({
      redirect: this.props.loggedIn
      ? ( // some action that saves the trip to a user's trips array
        <Redirect to="/dashboard" />
        )
      : (<Redirect to="/login" />)
    })
  }

  render() {
    return (

      <div>
        <HeaderNonLoggedIn />
        {this.state.redirect}

          {/*ternary operator that renders conditionally if UUID was correct or if error occurred.*/}
          { this.props.inviteTripName ?
              <div>
                <h2>Welcome!  You have received an invite for trip name: <span> {this.props.inviteTripName} </span></h2>
                <h3>Click button below to add this trip to your dashboard:</h3>
                <button onClick={(e) => this.changeUUIDState(e)}>Continue</button>
              </div>
            : <h2> {this.props.inviteError.message} Check Link and Try Again.</h2> }

        {<h5>inviteUUIDInStore: {this.props.inviteUUIDInStore}</h5>}
      </div>

    )
  }
}

const mapStateToProps = state => ({
  inviteUUIDInStore: state.inviteUUID.inviteUUID,
  inviteTripName: state.inviteUUID.tripName,
  inviteError: state.inviteUUID.error,
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(TripInvite);
