import React from 'react';

import Header from './header';
import Menu from './menu';
import ContainerNewTrip from './container-new-trip';
import NewTripForm from './new-trip-form';
import Footer from './footer';

export default class Dashboard extends React.Component {

    render() {
      return (
        <div>
          <Header />
          <Menu />
          <ContainerNewTrip />
          <NewTripForm />
          <Footer />
        </div>
      );
    }

}
