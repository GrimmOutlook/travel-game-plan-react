import {CREATE_NEW_TRIP} from '../actions/index'

const initialStateCreateTrip = {
  trips: [
    {_id: 1, tripUUID: null, tripName: "Cancun", dateStart: "Jan. 14, 2018", dateEnd: "Jan. 21, 2018", address: "1 Street, Town", items: []},
    {_id: 2, tripUUID: null, tripName: "Pittsburgh", dateStart: "March 14, 2018", dateEnd: "March 21, 2018", address: "1 Street, Town", items: []},
    {_id: 3, tripUUID: null, tripName: "Las Vegas", dateStart: "July 14, 2018", dateEnd: "July 21, 2018", address: "1 Street, Town", items: []},
    {_id: 4, tripUUID: null, tripName: "Deep Creek Lake", dateStart: "Nov. 14, 2018", dateEnd: "Nov. 21, 2018", address: "1 Street, Town", items: []}
  ]
};

// Add a GET reducer for all of a users trips

export const tripReducer = (state=initialStateCreateTrip, action) => {
  if (action.type === CREATE_NEW_TRIP){
    return Object.assign({}, state, {trips: [...state.trips, {
      tripUUID: action.tripUUID,
      tripName: action.tripName,
      dateStart: action.dateStart,
      dateEnd: action.dateEnd,
      address: action.address,
      tripDetails: action.tripDetails,
      items: action.items
    }]});
  }
  return state;
}

export default tripReducer;
