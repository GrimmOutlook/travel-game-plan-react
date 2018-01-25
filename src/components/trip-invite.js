import React from 'react';
import {connect} from 'react-redux';
import {storeInviteUUID} from '../actions/index';


export class TripInvite extends React.Component {

  changeUUIDState(e, inviteUUID){
    e.preventDefault();
    console.log('TripInvite inviteUUID before dispatch: ', inviteUUID); //undefined - why?
    this.props.dispatch(storeInviteUUID(inviteUUID));
  }

  render() {
    const inviteUUID = this.props.match.params.tripUUID;
    console.log(`inviteUUID: ${inviteUUID}`);
    console.log(`this.props.inviteUUIDInStore: ${this.props.inviteUUIDInStore}`);

    return (

      <div>
        <h1>Welcome!  You have received an invite for trip code {inviteUUID}</h1>
        <h2>Click button below to add to your dashboard:</h2>
        <button onClick={(e) => this.changeUUIDState(e, inviteUUID)}>Dummy button for updating inviteUUID state</button>
        <h3>inviteUUIDInStore: {this.props.inviteUUIDInStore}</h3>
      </div>

    )
  }

}

const mapStateToProps = state => ({
  inviteUUIDInStore: state.inviteUUID.inviteUUID
})

export default connect(mapStateToProps)(TripInvite);
