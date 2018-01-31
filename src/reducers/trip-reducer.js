import {CREATE_NEW_TRIP, GET_TRIPS_SUCCESS} from '../actions/index'

const initialStateCreateTrip = {
  trips: []
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
  else if (action.type === GET_TRIPS_SUCCESS){
    return Object.assign({}, state, {trips: action.trip});
  }
  return state;
}

export default tripReducer;
