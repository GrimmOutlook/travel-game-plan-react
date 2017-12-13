import React from 'react';

import Button from './button';
import FeatureBox from './feature-box';



export default class Homepage extends React.Component {

  render() {
      return (
        <div className="homepage-container">
        <div className="hero-image"><h1>Travel Game Plan</h1></div>
        <div>
          <Button text="Signup" />
          <Button text="Login" />
          <FeatureBox features={FEATURES} />
        </div>
        </div>
      );
    }

}


const FEATURES = [
  {feature_id: 1, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cum, dolore officia fugiat mollitia, obcaecati quibusdam ea quis iure dolor error, magni incidunt laboriosam. Omnis saepe optio aliquid voluptatibus esse."},
  {feature_id: 2, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iusto sint sit fuga libero explicabo dignissimos placeat iure non, est ut inventore, odio voluptatem ea quod assumenda, cumque aut dolor!"},
  {feature_id: 3, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima corporis maxime rerum fugiat doloremque nemo id adipisci inventore excepturi sint. Praesentium, excepturi itaque, commodi consequuntur hic quod provident amet perferendis."}
];
