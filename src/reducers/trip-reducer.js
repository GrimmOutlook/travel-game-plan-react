import {CREATE_NEW_TRIP} from '../actions/index'

const initialStateCreateTrip = {
  trips: [
    {trip_id: 1, tripName: "Cancun", dateStart: "Jan. 14, 2018", dateEnd: "Jan. 21, 2018", address: "1 Street, Town"},
    {trip_id: 2, tripName: "Pittsburgh", dateStart: "March 14, 2018", dateEnd: "March 21, 2018", address: "1 Street, Town"},
    {trip_id: 3, tripName: "Las Vegas", dateStart: "July 14, 2018", dateEnd: "July 21, 2018", address: "1 Street, Town"},
    {trip_id: 4, tripName: "Deep Creek Lake", dateStart: "Nov. 14, 2018", dateEnd: "Nov. 21, 2018", address: "1 Street, Town"}
  ]
};


export const tripReducer = (state=initialStateCreateTrip, action) => {
  if (action.type === CREATE_NEW_TRIP){
    return Object.assign({}, state, {trips: [...state.trips, {
      tripName: action.tripName,
      dateStart: action.dateStart,
      dateEnd: action.dateEnd,
      address: action.address,
      tripDetails: action.tripDetails
    }]});
  }
  return state;
}

export default tripReducer;
