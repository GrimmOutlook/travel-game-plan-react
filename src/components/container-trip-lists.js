import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {Redirect} from 'react-router-dom';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import List from './list';
import ModalDeleteItem from './modal-delete-item';
import ModalUpdateItem from './modal-update-item';
import {NewItemModalContent, modalContent} from './modal';
import {toggleInfoModal, toggleDeleteModal, toggleUpdateModal, myListFilter, deleteItem, updateItem, setCurrentTrip} from '../actions/index';

import './css/button.css';
import './css/container-trip-lists.css';

let DeleteModalContent;
let UpdateModalContent;

export class ContainerTripLists extends React.Component {
    // constructor(props){
    //   super(props);
      // console.log("this.props.tripId: ", this.props.tripId);

      // const tripId = this.props.tripId;
      // this.trip = this.props.trips.find(trip => tripId == trip._id);
      // const theOnlyTripIWant = this.trip
      // this.props.dispatch(setCurrentTrip(theOnlyTripIWant));

      // console.log("this.trip: ", this.trip);
    // }

    componentDidMount() {
      console.log("this.props.tripId: ", this.props.tripId);
      console.log("this.props.trips: ", this.props.trips);
      const tripId = this.props.tripId;
      this.trip = this.props.trips.find(trip => tripId === trip._id.toString());
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
          tripLink: this.props.currentTrip._id,
          doDelete: () => {
            this.props.dispatch(deleteItem(this.props.currentTrip._id, item_id));
            this.props.dispatch(toggleDeleteModal());
          },
          doNotDelete: () => {
            this.props.dispatch(toggleDeleteModal());
          }
        }
      )
    }

    updateItemFxn(item_id, item, itemDetails, username){
      this.props.dispatch(toggleUpdateModal());
      console.log('currentTrip._id in updateItemFxn in ContainerTripLists: ', this.props.currentTrip._id);
      UpdateModalContent = modalContent(
        ModalUpdateItem,
        "Fill in Any Changes to this Item:",
        toggleUpdateModal,
        {
          id: item_id,
          item: item,
          itemDetails: itemDetails,
          username: username,
          tripLink: this.props.currentTrip._id,
          doUpdate: () => {
            this.props.dispatch(updateItem(item_id, item, itemDetails, username, this.props.currentTrip._id));
            this.props.dispatch(toggleUpdateModal());
          }
        }
      )
    }

    render() {

      if(!this.props.trips.length){
       return <Redirect to='/dashboard' />
      }

      let filteredList = [];
      let neededList = [];
      let accountedList = [];
      let display = "Loading ...";
      if(this.props.currentTrip){
          neededList = this.props.currentTrip.items.filter((item) => {return !item.userClaim});
          accountedList = this.props.currentTrip.items.filter((item) => {return item.userClaim});

          filteredList = this.props.filter ? accountedList.filter((item) => {
            return item.userClaim.username === this.props.username;
          }) : accountedList;

        display = (<div className="grid-trip-lists-content">
          <h1 className="list-tripName">{this.props.currentTrip.tripName}</h1>
          <h4 className="list-tripDetails">{this.props.currentTrip.tripDetails}</h4>
          <h3 className="list-users">{this.props.currentTrip.users.map(user => user.username + ' ')}</h3>

          <Tabs className="list-toggles">
            <TabLink to='tab-needed' className="heading__needed">Things Needed</TabLink>
            <TabLink to='tab-accounted' className="heading__accounted">Things Accounted For</TabLink>

            <TabContent for='tab-needed'>
              <a className="btn btn--blue btn-add__needed" onClick={e => this.modalAdd(e)}>Add An Item</a>

              <h3>Things Needed:</h3>
              <List classProp="needed__list" items={neededList}
                deleteStuff={(item_id, item) => this.deleteItemFxn(item_id, item)}
                updateStuff={(item_id, item, itemDetails, username) => this.updateItemFxn(item_id, item, itemDetails, username)}
              />
            </TabContent>

            <TabContent for='tab-accounted'>
              <a className="btn btn--blue btn-add__accounted" onClick={e => this.modalAdd(e)}>Add An Item</a>

              <button className="btn btn--white btn-item-filter" onClick={e => this.filterFxn(e)}>My List</button>
              <h3>Things Accounted For:</h3>
              <List classProp="accounted__list"
                items={filteredList}
                deleteStuff={(item_id, item) => this.deleteItemFxn(item_id, item)}
                updateStuff={(item_id, item, itemDetails, username) => this.updateItemFxn(item_id, item, itemDetails, username)}
              />
            </TabContent>
          </Tabs>
        </div>)
      }

      return (
        <div className="content-trip-lists">

          { display }

          { this.props.showModal ? <NewItemModalContent text="Fill out the form below to add a new item to the list" /> : "" }

          { this.props.showModalDelete ? <DeleteModalContent text="Delete stuff" /> : "" }

          { this.props.showModalUpdate ? <UpdateModalContent text="Update stuff" /> : "" }

        </div>
      );
    }

}

const mapStateToProps = state => {
  // const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    trips: state.trip.trips,
    showModal: state.modal.showModal,
    showModalDelete: state.modal.showModalDelete,
    showModalUpdate: state.modal.showModalUpdate,
    filter: state.trip.userFilter,
    currentTrip: state.trip.currentTrip
  }
};

// export default connect(mapStateToProps)(ContainerTripLists);

export default requiresLogin()(connect(mapStateToProps)(ContainerTripLists));


