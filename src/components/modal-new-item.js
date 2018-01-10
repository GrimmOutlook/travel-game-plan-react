import React from 'react';
import {connect} from 'react-redux';
// import {addItem, toggleInfoModal} from '../actions/index';
import {addItem} from '../actions/index';
import {reduxForm, Field} from 'redux-form';

export class ModalNewItem extends React.Component {

  addItemFxn(values){
    // this.props.dispatch(toggleInfoModal());
    this.props.dispatch(addItem(values.item, values.itemDetails, values.username));
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
  showModal: state.modal.showModal

});

const form = reduxForm({
  form: 'addItemForm'
})(ModalNewItem);


export default connect(mapStateToProps)(form);

// export default form;
