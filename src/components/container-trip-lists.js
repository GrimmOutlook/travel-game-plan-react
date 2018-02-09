import React from 'react';
import {connect} from 'react-redux';
// import requiresLogin from './requires-login';

import List from './list';
import ModalDeleteItem from './modal-delete-item';
import ModalUpdateItem from './modal-update-item';
import {NewItemModalContent, modalContent} from './modal';
import {toggleInfoModal, toggleDeleteModal, toggleUpdateModal, myListFilter, deleteItem, updateItem, setCurrentTrip} from '../actions/index';

import './css/button.css';

let DeleteModalContent;
let UpdateModalContent;

export class ContainerTripLists extends React.Component {
    constructor(props){
      super(props);
      // console.log("this.props.tripId: ", this.props.tripId);
      // console.log("this.props.trips: ", this.props.trips);  // why an array of zero?
      // const tripId = this.props.tripId;
      // this.trip = this.props.trips.find(trip => tripId == trip._id);
      // const theOnlyTripIWant = this.trip
      // this.props.dispatch(setCurrentTrip(theOnlyTripIWant));
      // console.log("this.trip: ", this.trip);

    }

    componentDidMount() {
      console.log("this.props.tripId: ", this.props.tripId);
      console.log("this.props.trips: ", this.props.trips);  // why an array of zero?
      const tripId = this.props.tripId;
      this.trip = this.props.trips.find(trip => tripId == trip._id);
      const theOnlyTripIWant = this.trip
      this.props.dispatch(setCurrentTrip(theOnlyTripIWant));
      console.log("this.trip: ", this.trip);
    }

    modalAdd(e){
      e.preventDefault();
      this.props.dispatch(toggleInfoModal());
    }

    filterFxn(e){
      e.preventDefault();
      this.props.dispatch(myListFilter());
    }

    deleteItemFxn(item_id, item){
      this.props.dispatch(toggleDeleteModal(item_id));
      DeleteModalContent = modalContent(
        ModalDeleteItem,
        "Delete This Item:",
        // pass which modal to close
        toggleDeleteModal,
        {
          id: item_id,
          itemToDelete: item,
          doDelete: () => {
            this.props.dispatch(deleteItem(item_id, item));
            this.props.dispatch(toggleDeleteModal(item_id));
          }
        }
      )
    }

    updateItemFxn(item_id, item, itemDetails, username){
      this.props.dispatch(toggleUpdateModal());
      UpdateModalContent = modalContent(
        ModalUpdateItem,
        "Fill in Any Changes to this Item:",
        toggleUpdateModal,
        {
          id: item_id,
          doUpdate: () => {
            this.props.dispatch(updateItem(item_id, item, itemDetails, username));
            this.props.dispatch(toggleUpdateModal(item_id));
          }
        }
      )
    }

    render() {

      { !this.props.currentTrip
        ?
         <h1>"Please wait, system processing."</h1>
        :
          const neededList = this.props.currentTrip.items.filter((item) => {return !item.username});
          const accountedList = this.props.currentTrip.items.filter((item) => {return item.username});

          const filteredList = this.props.filter ? accountedList.filter((item) => {
            return item.username === this.props.username;
          }) : accountedList;
      }

      return (
        <div className="content-trip-lists grid-trip-lists-content">

          <h1>{this.trip.tripName} and {this.trip.items}</h1>

          <h1 className="heading-primary">TRIP NAME & Details</h1>
          <h3 className="heading__needed">Things Needed:</h3>
          <a className="btn btn--green btn-add__needed" onClick={e => this.modalAdd(e)}>Add An Item</a>

          <List classProp="needed__list" items={neededList}
            deleteStuff={(item_id, item) => this.deleteItemFxn(item_id, item)}
            updateStuff={(item_id, item, itemDetails, username) => this.updateItemFxn(item_id, item, itemDetails, username)}
          />

          <h3 className="heading__accounted">Things Accounted For:</h3>
          <a className="btn btn--green btn-add__accounted" onClick={e => this.modalAdd(e)}>Add An Item</a>

          <button className="btn btn--white btn-item-filter" onClick={e => this.filterFxn(e)}>My List</button>
          <List classProp="accounted__list"
            items={filteredList}
            deleteStuff={(item_id, item) => this.deleteItemFxn(item_id, item)}
            updateStuff={(item_id, item, itemDetails, username) => this.updateItemFxn(item_id, item, itemDetails, username)}
          />

         { this.props.showModal ? <NewItemModalContent text="Fill out the form below to add a new item to the list" /> : "" }

         { this.props.showModalDelete ? <DeleteModalContent text="Delete stuff" /> : "" }

         { this.props.showModalUpdate ? <UpdateModalContent text="Update stuff" /> : "" }

        </div>
      );
    }

}

const mapStateToProps = state => ({
  // const {currentUser} = state.auth;
  // return {
    // username: state.auth.currentUser.username,
    trips: state.trip.trips,
    showModal: state.modal.showModal,
    showModalDelete: state.modal.showModalDelete,
    showModalUpdate: state.modal.showModalUpdate,
    filter: state.trip.userFilter,
    currentTrip: state.trip.currentTrip
  // }
});

// export default requiresLogin()(connect(mapStateToProps)(ContainerTripLists));

export default connect(mapStateToProps)(ContainerTripLists);


