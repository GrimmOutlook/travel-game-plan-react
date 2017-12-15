import React from 'react';

import Header from './header';
import Menu from './menu';
// import ContainerTripLists from './container-trip-lists';
import Footer from './footer';

export default class TripLists extends React.Component {

    render() {
      return (
        <div>
          <Header />
          <Menu />
          {/* <ContainerTripLists /> */}
          <Footer />
        </div>
      );
    }

}
