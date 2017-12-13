import React from 'react';

import Header from './header';
import Menu from './menu';
import ContainerNewTrip from './container-new-trip';
import Footer from './footer';
import Modal from './modal';

export default class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    render() {
      return (
        <div>
          <Header />
          <Menu />
          <ContainerNewTrip />
          <Footer />
          <Modal />
        </div>
      );
    }

}
