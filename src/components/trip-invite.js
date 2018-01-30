import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// import Dashboard from './components/dashboard';
// import LoginPage from './components/login-page';
import {storeInviteUUID, fetchTripName} from '../actions/index';


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

  // componentDidMount(){
  //   this.props.dispatch(fetchTripName(this.props.inviteUUIDInStore));
  // }

  changeUUIDState(e){
    e.preventDefault();
    this.setState({
      redirect: this.props.loggedIn ? (<Redirect to="/dashboard" />) : (<Redirect to="/login" />)
    })

  }

  render() {

    return (

      <div>
        {this.state.redirect}
        {/*ternary operator that renders conditionally if UUID was correct or if error occurred.*/}
        <h1>Welcome!  You have received an invite for trip name: {this.props.inviteTripName}</h1>
        <h2>Click button below to add to your dashboard:</h2>
        <button onClick={(e) => this.changeUUIDState(e)}>Dummy button for updating inviteUUID state</button>
        <h3>inviteUUIDInStore: {this.props.inviteUUIDInStore}</h3>
      </div>

    )
  }

}

const mapStateToProps = state => ({
  inviteUUIDInStore: state.inviteUUID.inviteUUID,
  inviteTripName: state.inviteUUID.tripName,
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(TripInvite);
