import React from 'react';

import Header from './header';
import Menu from './menu';
import ContainerDashboard from './container-dashboard';
import Footer from './footer';

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
          <ContainerDashboard />
          <Footer />
        </div>
      );
    }

}
