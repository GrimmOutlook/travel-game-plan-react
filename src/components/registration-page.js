import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import HeaderNonLoggedIn from './header-non-loggedin';
import RegistrationForm from './registration-form';

// import './css/registration-page.css';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home">
          <HeaderNonLoggedIn />
          <h2>Register for Travel Game Plan:</h2>
          <RegistrationForm />
          <h2>Already Have an Account?</h2>
          <Link to="/login">Login Here!</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
