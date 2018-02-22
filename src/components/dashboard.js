import React from 'react';

import Header from './header';
import Menu from './menu';
import ContainerDashboard from './container-dashboard';
import Footer from './footer';

import './css/dashboard.css';
import './css/button.css';

export class Dashboard extends React.Component {

  render() {
    return (
      <div className="grid-dashboard-main">
        <Header />
        <Menu />
        <ContainerDashboard />
        <Footer />
      </div>
    );
  }

}

export default Dashboard;
