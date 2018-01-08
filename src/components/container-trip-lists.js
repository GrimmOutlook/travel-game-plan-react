import React from 'react';
import {connect} from 'react-redux';

import List from './list';
import {NewItemModalContent} from './modal';
import {toggleInfoModal, myListFilter} from '../actions/index';

import './css/button.css';


export class ContainerTripLists extends React.Component {

    modalAdd(e){
      e.preventDefault();
      this.props.dispatch(toggleInfoModal());
    }

    filterFxn(e){
      e.preventDefault();
      this.props.dispatch(myListFilter());
    }

    deleteItemFxn(){

    }

    render() {
      const neededList = this.props.items.filter((item) => {return !item.username});
      const accountedList = this.props.items.filter((item) => {return item.username});

      const filteredList = this.props.filter ? accountedList.filter((item) => {
        return item.username === "Dave";
      }) : accountedList;

      return (
        <div className="content-trip-lists grid-trip-lists-content">
          <h1 className="heading-primary">TRIP NAME & Details</h1>
          <h3 className="heading__needed">Things Needed:</h3>
          <a className="btn btn--green btn-add__needed" onClick={e => this.modalAdd(e)}>Add An Item</a>
          <List classProp="needed__list" items={neededList} />

          <h3 className="heading__accounted">Things Accounted For:</h3>

          <a className="btn btn--green btn-add__accounted" onClick={e => this.modalAdd(e)}>Add An Item</a>

          {/* Need an onClick event to trigger filter by username */}
          <button className="btn btn--white btn-item-filter" onClick={e => this.filterFxn(e)}>My List</button>
          <List classProp="accounted__list" items={filteredList} />

         { this.props.showModal ? <NewItemModalContent text="Fill out the form below to add a new item to the list" /> : "" }

        </div>
      );
    }

}

const mapStateToProps = state => ({
  items: state.item.items,
  showModal: state.modal.showModal,
  filter: state.item.userFilter
});

export default connect(mapStateToProps)(ContainerTripLists);


