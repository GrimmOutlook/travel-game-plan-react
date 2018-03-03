import React from 'react';
import {connect} from 'react-redux';
import {createNewItem, toggleInfoModal} from '../actions/index';
import {reduxForm, Field} from 'redux-form';

import './css/modal-new-item.css';

export class ModalNewItem extends React.Component {

  addItemFxn(values){
    this.props.dispatch(createNewItem(values.item, values.itemDetails, values.claimOrNot, this.props.currentTrip._id));
    console.log('values: ', values);
    this.props.dispatch(toggleInfoModal());
  }


  render() {
    return (
      <div className="add-item-container">
        <form id="form__add-item" onSubmit={this.props.handleSubmit(values => this.addItemFxn(values))}>

          <label htmlFor="item">Item Name:</label>
          <Field type="text" placeholder="Item Name" name="item" component="input" required />

          <label htmlFor="itemDetails">Item Details:</label>
          <Field type="text" placeholder="Item Details" name="itemDetails" component="input" />

          <label htmlFor="claimOrNot">Are you bringing this item?</label>
          <div>
            <label className="yes-check"><Field type="checkbox" value="Yes" name="claimOrNot" component="input" />Yes</label>
          </div>
          <button className="btn btn--green" type="submit" >Submit</button>

        </form>

      </div>

    );
  }
};

const mapStateToProps = state => ({
  showModal: state.modal.showModal,
  currentTrip: state.trip.currentTrip
});

const form = reduxForm({
  form: 'addItemForm'
})(ModalNewItem);


export default connect(mapStateToProps)(form);

// export default form;
