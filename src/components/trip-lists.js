import React from 'react';

import Header from './header';
import Menu from './menu';
import ContainerTripLists from './container-trip-lists';
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
          <ContainerTripLists />
          <Footer />
          <Modal />
        </div>
      );
    }

}
