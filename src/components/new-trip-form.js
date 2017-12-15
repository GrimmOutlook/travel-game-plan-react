import React from 'react';

import Button from './button';
// import Modal from './modal';

export default class NewTripForm extends React.Component {

    render() {
      return (
        <div className="grid-new-trip-content">
          <form id="form__new-trip">

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


            <Button routePath="modal" text="Submit" buttonColor="btn--green" type="submit" />

          </form>

          {/* <Modal text="You have successfully created a new trip!" /> */}
        </div>
      );
    }

}


