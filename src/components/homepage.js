import React from 'react';

import Button from './button';
import FeatureBox from './feature-box';

import './homepage.css';



export default class Homepage extends React.Component {

  render() {
      return (
        <div>
          <Button />
          <Button />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
        </div>
      );
    }

}
