import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// import Dashboard from './components/dashboard';
// import LoginPage from './components/login-page';
import {storeInviteUUID} from '../actions/index';


export class TripInvite extends React.Component {

constructor(props){
  super(props);

  this.state = {
    redirect: ""
  };
}

componentWillMount(){
  const inviteUUID = this.props.match.params.tripUUID;
  this.props.dispatch(storeInviteUUID(inviteUUID));
  //server call to validate UUID + Basic trip info. - just trip name to render on "welcome" page.
}

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

        <h1>Welcome!  You have received an invite for trip name: {this.props.inviteUUIDInStore}</h1>
        <h2>Click button below to add to your dashboard:</h2>
        <button onClick={(e) => this.changeUUIDState(e)}>Dummy button for updating inviteUUID state</button>
        <h3>inviteUUIDInStore: {this.props.inviteUUIDInStore}</h3>
      </div>

    )
  }

}

const mapStateToProps = state => ({
  inviteUUIDInStore: state.inviteUUID.inviteUUID,
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(TripInvite);
