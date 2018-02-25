import React from 'react';
import {connect} from 'react-redux';
import {toggleInfoModal, createNewTrip} from '../actions/index';
import {reduxForm, Field, change} from 'redux-form';
import {SuccessModalContent} from './modal';
import {DatePicker} from './date-picker';

import './css/new-trip-form.css';

export class NewTripForm extends React.Component {

    createTripModal(values){
      this.props.dispatch(createNewTrip(values.tripName, values.startDate.toString(), values.endDate.toString(), values.address, values.tripDetails));
      this.props.dispatch(toggleInfoModal());
    }

    render() {
      return (
        <div className="grid-new-trip-content">
          <form id="form__new-trip" onSubmit={this.props.handleSubmit(values => this.createTripModal(values))}>

            <label htmlFor="tripName">Trip Name</label>
            <Field type="text" placeholder="Trip Name" name="tripName" component="input" required />

            <label htmlFor="startDate">Start Date</label>
            <Field type="text" placeholder="Start Date" name="startDate" component={DatePicker} change={change} required />

            <label htmlFor="endDate">End Date</label>
            <Field type="text" placeholder="End Date" name="endDate" component={DatePicker} change={change} required />

            <label htmlFor="address">Destination Address</label>
            <Field type="text" placeholder="Destination Address" name="address" component="input" required />

            <label htmlFor="tripDetails">Trip Details</label>
            <Field type="text" placeholder="Trip Details" name="tripDetails" component="textarea" required />


            <button type="submit" className="btn btn--blue">Submit</button>

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













