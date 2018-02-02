import React from 'react';
import {connect} from 'react-redux';
// import {addItem, toggleInfoModal} from '../actions/index';
import {createNewItem} from '../actions/index';
import {reduxForm, Field} from 'redux-form';

export class ModalNewItem extends React.Component {

  addItemFxn(values){
    // this.props.dispatch(toggleInfoModal());
    // console.log('this.props.trips: ', this.props.trips);
    // this.trip = this.props.trips.find(trip => tripId === trip._id.toString());
    this.props.dispatch(createNewItem(values.item, values.itemDetails, values.username));
    console.log('values: ', values);
  }


  render() {
    return (
      <div className="add-item-container">
        <form id="form__add-item" onSubmit={this.props.handleSubmit(values => this.addItemFxn(values))}>

          <label htmlFor="item">Item Name:</label>
          <Field type="text" placeholder="Item Name" name="item" component="input" required />

          <label htmlFor="itemDetails">Item Details:</label>
          <Field type="text" placeholder="Item Details" name="itemDetails" component="input" />

          <label htmlFor="username">Username:</label>
          <Field type="text" placeholder="Your Username" name="username" component="input" />

          <button className="btn btn--green" type="submit" >Submit</button>

        </form>

      </div>

    );
  }
};

const mapStateToProps = state => ({
  showModal: state.modal.showModal  //,
  // trips: state.trip.trips
});

const form = reduxForm({
  form: 'addItemForm'
})(ModalNewItem);


export default connect(mapStateToProps)(form);

// export default form;
