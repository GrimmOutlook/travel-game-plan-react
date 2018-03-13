import React from 'react';

import Button from './button';
import FeatureBox from './feature-box';

import './css/homepage.css';

export default class Homepage extends React.Component {

  render() {
      return (
        <div className="homepage">
          <header className="header">
            <div id="homepage-container">
              <h1 className="heading-primary">

                <img src="../images/logo-black.svg" alt="logo" className="homepage-logo"/>
                <span className="heading-primary--main">Travel Game Plan</span>
                <span className="heading-primary--sub">Get Yourselves Together</span>

              </h1>

              <Button routePath="register" text="Signup" buttonColor="btn--blue"/>
              <Button routePath="login" text="Login" buttonColor="btn--green"/>
            </div>
          </header>
          <FeatureBox features={FEATURES} />
        </div>
      );
    }

}

const FEATURES = [
  {feature_id: 1, description: "Going on vacation?  A business trip?  Organizing a trip with friends?  Keep track of them all with Travel Game Plan!", icon: "../images/camping-trip.svg", alt: "", classProp: ""},

  {feature_id: 2, description: "Collaborate with your travelmates on what to bring along and who will bring it.  No more long e-mail chains needed to organize a trip among many people!", icon: "../images/collab.svg", alt: "", classProp: ""},

  {feature_id: 3, description: "When you create a trip, you will be given a link to send to your travelmates so that everyone can help plan the trip.", icon: "../images/invite.svg", alt: "", classProp: ""},

  {feature_id: 4, description: "Fill in the details and dates of your trip.  Your trip dashboard will display the details and dates for every one of your trips in chronological order.", icon: "../images/beach-trip.svg", alt: "", classProp: ""},

  {feature_id: 5, description: "For each trip, make a list of 'Items Needed.'  Someone can then claim that item to bring, which moves that item to the 'Items Accounted For' list.  You can also filter the list to show only the items you signed up to bring.", icon: "../images/checklist.svg", alt: "", classProp: ""}
];


