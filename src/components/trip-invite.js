import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';
// import Dashboard from './components/dashboard';
// import LoginPage from './components/login-page';
import {storeInviteUUID} from '../actions/index';


export class TripInvite extends React.Component {

  // redirectToDashboard(){
  //   return (<Redirect to="/dashboard" />);
  // }

  // redirectToLogin(){
  //   return (<Redirect to="/login" />);
  // }

  changeUUIDState(e, inviteUUID){
    e.preventDefault();
    console.log('TripInvite inviteUUID before dispatch: ', inviteUUID);
    this.props.dispatch(storeInviteUUID(inviteUUID));

    // return (
    //     <Route exact path="/" render={() => (
    //       this.props.loggedIn ? (
    //         <Redirect to="/dashboard"/>
    //       ) : (
    //         <Redirect to="/login"/>
    //       )
    //     )}/>
    // )

    // { this.props.loggedIn ? (<Redirect to="/dashboard" />) : (<Redirect to="/login" />) }

    // { this.props.loggedIn ? this.redirectToDashboard() : this.redirectToLogin() }

  }

  render() {
    const inviteUUID = this.props.match.params.tripUUID;

    return (

      <div>
        {/* <Route exact path="/" render={() => (
          this.props.loggedIn ? (
            <Redirect to="/dashboard"/>
          ) : (
            <Redirect to="/login"/>
          )
        )}/> */}

        <h1>Welcome!  You have received an invite for trip code {inviteUUID}</h1>
        <h2>Click button below to add to your dashboard:</h2>
        <button onClick={(e) => this.changeUUIDState(e, inviteUUID)}>Dummy button for updating inviteUUID state</button>
        <h3>inviteUUIDInStore: {this.props.inviteUUIDInStore}</h3>

        {/* { this.props.loggedIn ? this.redirectToDashboard() : this.redirectToLogin() } */}
      </div>

    )
  }

}

const mapStateToProps = state => ({
  inviteUUIDInStore: state.inviteUUID.inviteUUID,
  loggedIn: state.auth.currentUser !== null
})

// export default withRouter(connect(mapStateToProps)(TripInvite));
export default connect(mapStateToProps)(TripInvite);
