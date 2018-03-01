import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import HeaderNonLoggedIn from './header-non-loggedin'
import LoginForm from './login-form';

// import './css/login.css';

export function LoginPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-wrapper">
      <HeaderNonLoggedIn />
      <h2>Travel Game Plan Login Page</h2>
      <LoginForm />
      <div className="for-centering">
        <Link to="/register" className="login-register-text">New around here?  Register!</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
