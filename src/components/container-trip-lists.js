import React from 'react';
import {connect} from 'react-redux';

import List from './list';
import {NewItemModalContent} from './modal';
import {toggleInfoModal} from '../actions/index';

import './css/button.css';


export class ContainerTripLists extends React.Component {

    modalAdd(e){
      e.preventDefault();
      this.props.dispatch(toggleInfoModal());
    }

    render() {
      return (
        <div className="content-trip-lists grid-trip-lists-content">
          <h1 className="heading-primary">TRIP NAME & Details</h1>
          <h3 className="heading__needed">Things Needed:</h3>
          <a className="btn btn--green btn-add__needed" onClick={e => this.modalAdd(e)}>Add An Item</a>
          <List classProp="needed__list" items={this.props.items} />

          <h3 className="heading__accounted">Things Accounted For:</h3>

          <a className="btn btn--green btn-add__accounted" onClick={e => this.modalAdd(e)}>Add An Item</a>

          {/* Need an onClick event to trigger filter by username */}
          <a className="btn btn--white btn-item-filter">My List</a>
          <List classProp="accounted__list" items={ITEMSACCOUNTED} />

         { this.props.showModal ? <NewItemModalContent text="Fill out the form below to add a new item to the list" /> : "" }

        </div>
      );
    }

}

const mapStateToProps = state => ({
  items: state.item.items,
  showModal: state.modal.showModal
});

export default connect(mapStateToProps)(ContainerTripLists);


const ITEMSACCOUNTED = [
  {item_id: 1, item: "paper towels", itemDetails: "6-pack", username: "Dave"},
  {item_id: 2, item: "toilet paper", itemDetails: "12-pack", username: "Dave"},
  {item_id: 3, item: "bottled water", itemDetails: "2 cases", username: "Vincent"},
  {item_id: 4, item: "Saturday Dinner", itemDetails: "turkey, mashed potatoes, green beans, corn", username: "Scott"},
  {item_id: 5, item: "crock pot", itemDetails: "", username: "Vincent"},
  {item_id: 6, item: "turkey fryer", itemDetails: "", username: "Scott"},
  {item_id: 7, item: "Sunday Lunch", itemDetails: "chili, french fries, meatball subs", username: "Dave"}
]
