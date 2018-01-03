import React from 'react';
import {connect} from 'react-redux';

import Button from './button';
import List from './list';
import {NewItemModalContent} from './modal';
import {toggleInfoModal} from '../actions/index';


export class ContainerTripLists extends React.Component {

    someFxn(e){
      e.preventDefault();
      this.props.dispatch(toggleInfoModal());
    }

    render() {
      return (
        <div className="content-trip-lists grid-trip-lists-content">
          <h1 className="heading-primary">TRIP NAME & Details</h1>
          <h3 className="heading__needed">Things Needed:</h3>
          <button className="btn-add__needed" onClick={e => this.someFxn(e)}>Add An Item</button>
          <List classProp="needed__list" items={this.props.items} />

          <h3 className="heading__accounted">Things Accounted For:</h3>
          <Button routePath="modal-form" text="Add an Item" buttonColor="btn--green" className="btn-add__accounted" />
          <Button text="My List" buttonColor="btn--white" className="btn-item-filter" />
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

// const ITEMS = [
//   {item_id: 1, item: "firewood", itemDetails: "2 bundles"},
//   {item_id: 2, item: "chips and salsa", itemDetails: ""},
//   {item_id: 3, item: "kayak", itemDetails: ""},
//   {item_id: 4, item: "Sunday Dinner", itemDetails: "lasagna, garlic bread, salad"}
// ];

const ITEMSACCOUNTED = [
  {item_id: 1, item: "paper towels", itemDetails: "6-pack", username: "Dave"},
  {item_id: 2, item: "toilet paper", itemDetails: "12-pack", username: "Dave"},
  {item_id: 3, item: "bottled water", itemDetails: "2 cases", username: "Vincent"},
  {item_id: 4, item: "Saturday Dinner", itemDetails: "turkey, mashed potatoes, green beans, corn", username: "Scott"},
  {item_id: 5, item: "crock pot", itemDetails: "", username: "Vincent"},
  {item_id: 6, item: "turkey fryer", itemDetails: "", username: "Scott"},
  {item_id: 7, item: "Sunday Lunch", itemDetails: "chili, french fries, meatball subs", username: "Dave"}
]
