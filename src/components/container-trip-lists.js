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

    updateItemFxn(item_id, item, itemDetails, claim){
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
          // username: username,
          tripLink: this.props.currentTrip._id,
          doUpdate: () => {
            this.props.dispatch(updateItem(item_id, item, itemDetails, claim, this.props.currentTrip._id));
            this.props.dispatch(toggleUpdateModal());
          }
        }
      )
    }

    render() {

      if(!this.props.trips.length){
       return <Redirect to='/dashboard' />
      }

      let userList = [];
      let filteredList = [];
      let neededList = [];
      let accountedList = [];
      let display = "Loading ...";
      if(this.props.currentTrip){

          console.log('currentTrip.users: ', this.props.currentTrip.users);
          userList = this.props.currentTrip.users.map((user, index) => {
            return <li key={ index + 1 }>{user.username + ' '}</li>;})

          neededList = this.props.currentTrip.items.filter((item) => {return !item.userClaim});
          accountedList = this.props.currentTrip.items.filter((item) => {return item.userClaim});

          filteredList = this.props.filter ? accountedList.filter((item) => {
            return item.userClaim.username === this.props.username;
          }) : accountedList;


          let itemNeedCheck = <p className="trip-empty">Click on Add an Item button to create your first item for this trip!</p>;
          if(neededList.length){
            itemNeedCheck = <div className="enclosing-tag">
              <h4>To claim an item, click Edit button, then check 'Claim this item'</h4>
              <List classProp="needed__list" items={neededList}
                deleteStuff={(item_id, item) => this.deleteItemFxn(item_id, item)}
                updateStuff={(item_id, item, itemDetails, claim) => this.updateItemFxn(item_id, item, itemDetails, claim)}
              />
            </div>
          }

          let itemAccountedCheck = <p className="trip-empty">Claim an existing item from Items Needed list or click Add an Item button and create and claim a new item!</p>;
          if(accountedList.length){
            itemAccountedCheck =
              <List classProp="accounted__list"
                items={filteredList}
                deleteStuff={(item_id, item) => this.deleteItemFxn(item_id, item)}
                updateStuff={(item_id, item, itemDetails, claim) => this.updateItemFxn(item_id, item, itemDetails, claim)}
              />
          }

        display = (<div className="grid-trip-lists-content">
          <h1 className="list-tripName">{this.props.currentTrip.tripName}</h1>
          <h4 className="list-tripDetails">{this.props.currentTrip.tripDetails}</h4>
          <ul className="list-users">Friends on this trip: {userList}</ul>

          <Tabs className="list-toggles">
            <TabLink to='tab-needed' className="heading__needed">Items Needed</TabLink>
            <TabLink to='tab-accounted' className="heading__accounted">Items Accounted For</TabLink>

            <TabContent for='tab-needed'>
              <a className="btn btn--blue btn-add__needed" onClick={e => this.modalAdd(e)}>Add An Item</a>

              <h3>Items Needed:</h3>

              {itemNeedCheck}
            </TabContent>

            <TabContent for='tab-accounted'>
              <a className="btn btn--blue btn-add__accounted" onClick={e => this.modalAdd(e)}>Add An Item</a>

              <button className="btn btn--white btn-item-filter" onClick={e => this.filterFxn(e)}>My List</button>
              <h3>Items Accounted For:</h3>
              {itemAccountedCheck}
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


