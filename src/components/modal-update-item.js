import React from 'react';
import {connect} from 'react-redux';

import {updateItem} from '../actions/index';
import {reduxForm, Field} from 'redux-form';
import {toggleUpdateModal} from '../actions/index';

import './css/modal-update-item.css';

export class ModalUpdateItem extends React.Component {

  updateItemFxn(values){
    // this.props.dispatch(toggleInfoModal());
    this.props.dispatch(updateItem(this.props.id, values.item, values.itemDetails, values.claimOrNot, this.props.tripLink));
    console.log('values: ', values);
    this.props.dispatch(toggleUpdateModal());
  }


  render() {
    return (
      <div className="update-item-container">
        <h3>{this.props.text}</h3>
        <form id="form__update-item" onSubmit={this.props.handleSubmit(values => this.updateItemFxn(values))}>

          <label htmlFor="item">Item Name:</label>
          <Field type="text" placeholder={this.props.item} name="item" component="input" />

          <label htmlFor="itemDetails">Item Details:</label>
          <Field type="text" placeholder={this.props.itemDetails} name="itemDetails" component="input" />

         <div>
            <label className="yes-check"><Field type="checkbox" value="Yes" name="claimOrNot" component="input" />Claim this item</label>
          </div>

          <button className="btn btn--blue" type="submit">Submit</button>

        </form>

      </div>

    );
  }
};

const mapStateToProps = state => ({
  showModal: state.modal.showModal,
  showModalUpdate: state.modal.showModalUpdate
});

const form = reduxForm({
  form: 'updateItemForm'
})(ModalUpdateItem);


export default connect(mapStateToProps)(form);

// export default form;
// onClick={() => this.props.doUpdate()}

