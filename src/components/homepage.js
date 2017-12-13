import React from 'react';

import Button from './button';
import FeatureBox from './feature-box';

import './css/homepage.css';

export default class Homepage extends React.Component {

  render() {
      return (
        <div className="unnecessary">
          <header className="header">
            <div id="homepage-container">
              <h1 className="heading-primary">
                <span className="heading-primary--main">Travel Game Plan</span>
                <span className="heading-primary--sub">Get Yourselves Together</span>
              </h1>

              <Button text="Signup" buttonColor="btn--blue"/>
              <Button text="Login" buttonColor="btn--green"/>
            </div>
          </header>
          <FeatureBox features={FEATURES} />
        </div>
      );
    }

}

const FEATURES = [
  {feature_id: 1, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cum, dolore officia fugiat mollitia, obcaecati quibusdam ea quis iure dolor error, magni incidunt laboriosam. Omnis saepe optio aliquid voluptatibus esse."},
  {feature_id: 2, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iusto sint sit fuga libero explicabo dignissimos placeat iure non, est ut inventore, odio voluptatem ea quod assumenda, cumque aut dolor!"},
  {feature_id: 3, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima corporis maxime rerum fugiat doloremque nemo id adipisci inventore excepturi sint."}
];


