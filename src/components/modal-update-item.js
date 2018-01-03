import React from 'react';
import {connect} from 'react-redux';
import {updateItem, toggleInfoModal} from '../actions/index';
import {reduxForm, Field} from 'redux-form';

// import Button from './button';

export class ModalUpdateItem extends React.Component {

  updateItemFxn(values){
    this.props.dispatch(toggleInfoModal());
    this.props.dispatch(updateItem(values.item, values.itemDetails, values.username));
    console.log('values: ', values);
  }


  render() {
    return (
      <div className="update-item-container">
        <form id="form__update-item" onSubmit={this.props.handleSubmit(values => this.updateItemFxn(values))}>

          <label htmlFor="item">Item Name:</label>
          <Field type="text" placeholder="Item Name" name="item" component="input" required />

          <label htmlFor="itemDetails">Item Details:</label>
          <Field type="text" placeholder="Item Details" name="itemDetails" component="input" />

          <label htmlFor="username">Username:</label>
          <Field type="text" placeholder="Your Username" name="username" component="input" />

          <button type="submit" >Submit</button>

        </form>

      </div>

    );
  }
};

const mapStateToProps = state => ({
  showModal: state.modal.showModal

});

const form = reduxForm({
  form: 'updateItemForm'
})(ModalUpdateItem);


export default connect(mapStateToProps)(form);

// export default form;
