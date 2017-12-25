import React from 'react';

import Header from './header';
import Menu from './menu';
import ContainerTripLists from './container-trip-lists';
import Footer from './footer';

import './css/lists.css';
import './css/button.css';

export default class TripLists extends React.Component {

    render() {
      return (
        <div className="grid-trip-lists-main">
          <Header />
          <Menu />
          <ContainerTripLists />
          <Footer />
        </div>
      );
    }

}
