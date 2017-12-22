import React from 'react';
import {connect} from 'react-redux';
import {toggleInfoModal} from '../actions/index';

import Button from './button';
import {SuccessModalContent} from './modal';

export class NewTripForm extends React.Component {

    createTripModal(e){
      e.preventDefault();
      this.props.dispatch(toggleInfoModal())
    }

    render() {
      return (
        <div className="grid-new-trip-content">
          <form id="form__new-trip"  onSubmit={e => this.createTripModal(e)}>

            <label htmlFor="tripName">Trip Name</label>
            <input type="text" placeholder="Trip Name" name="tripName" required />

            <label htmlFor="startDate">Start Date</label>
            <input type="text" placeholder="Start Date" name="startDate" required />

            <label htmlFor="endDate">End Date</label>
            <input type="text" placeholder="End Date" name="endDate" required />

            <label htmlFor="address">Destination Address</label>
            <input type="text" placeholder="Destination Address" name="address" required />

            <label htmlFor="tripDetails">Trip Details</label>
            <textarea type="text" placeholder="Trip Details" name="tripDetails" required />


            <button type="submit" >Submit</button>

          </form>


          { this.props.showModal ? <SuccessModalContent text="You have successfully created a new trip!" /> : "" }
        </div>
      );
    }

}


const mapStateToProps = state => ({
    showModal: state.showModal
});

export default connect(mapStateToProps)(NewTripForm);














