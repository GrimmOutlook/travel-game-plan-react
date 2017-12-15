import React from 'react';

import Header from './header';
import Menu from './menu';
import ContainerNewTrip from './container-new-trip';
import Footer from './footer';

import './css/new-trip.css';
import './css/button.css';

export default class NewTrip extends React.Component {

    render() {
      return (
        <div className="grid-new-trip-main">
          <Header />
          <Menu />
          <ContainerNewTrip />
          <Footer />
        </div>
      );
    }

}
