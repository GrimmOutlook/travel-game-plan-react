import React from 'react';
import {connect} from 'react-redux';
import {toggleInfoModal, createNewTrip} from '../actions/index';
import {reduxForm, Field} from 'redux-form';

import {SuccessModalContent} from './modal';
import {DatePicker} from './date-picker';

export class NewTripForm extends React.Component {

    createTripModal(values){
      this.props.dispatch(toggleInfoModal());
      this.props.dispatch(createNewTrip(values.tripName, values.startDate, values.endDate, values.address, values.tripDetails));
    }

    render() {
      return (
        <div className="grid-new-trip-content">
          <form id="form__new-trip" onSubmit={this.props.handleSubmit(values => this.createTripModal(values))}>

            <label htmlFor="tripName">Trip Name</label>
            <Field type="text" placeholder="Trip Name" name="tripName" component="input" required />

            <label htmlFor="startDate">Start Date</label>
            <Field type="text" placeholder="Start Date" name="startDate" component={DatePicker} required />

            <label htmlFor="endDate">End Date</label>
            <Field type="text" placeholder="End Date" name="endDate" component={DatePicker} required />

            <label htmlFor="address">Destination Address</label>
            <Field type="text" placeholder="Destination Address" name="address" component="input" required />

            <label htmlFor="tripDetails">Trip Details</label>
            <Field type="text" placeholder="Trip Details" name="tripDetails" component="textarea" required />


            <button type="submit" >Submit</button>

          </form>


          { this.props.showModal ? <SuccessModalContent text="You have successfully created a new trip!" /> : "" }
        </div>
      );
    }

}


const mapStateToProps = state => ({
    showModal: state.modal.showModal
});

const form = reduxForm({
  form: 'tripForm'
})(NewTripForm);


export default connect(mapStateToProps)(form);













