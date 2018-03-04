import {CREATE_NEW_TRIP_SUCCESS, GET_TRIPS_SUCCESS, SET_CURRENT_TRIP, CREATE_NEW_ITEM_SUCCESS, UPDATE_ITEM_SUCCESS, DELETE_ITEM_SUCCESS, MY_LIST_FILTER, ADD_INVITE_TRIP_SUCCESS} from '../actions/index';

// import {AUTH_SUCCESS} from '../actions/auth';

const initialStateCreateTrip = {
  trips: [],
  userFilter: false,
  currentTrip: null
};

// Add a GET reducer for all of a users trips

export const tripReducer = (state=initialStateCreateTrip, action) => {
  if (action.type === CREATE_NEW_TRIP_SUCCESS){
    const newTrip = {
      _id: action.id,
      tripName: action.tripName,
      dateStart: action.dateStart,
      dateEnd: action.dateEnd,
      address: action.address,
      tripDetails: action.tripDetails,
      tripUUID: action.tripUUID,
      items: []
    }
    return Object.assign({}, state, {trips: [...state.trips, newTrip], currentTrip: newTrip});
  }
  else if (action.type === GET_TRIPS_SUCCESS){
    return Object.assign({}, state, {trips: action.trips});
  }
  else if (action.type === ADD_INVITE_TRIP_SUCCESS){
    return Object.assign({}, state, {trips: [...state.trips, action.trip]})
  }
  else if (action.type === SET_CURRENT_TRIP){
    console.log('SET_CURRENT_TRIP Reducer: ', action.currentTrip);
    return Object.assign({}, state, {currentTrip: action.currentTrip})
  }
  else if (action.type === CREATE_NEW_ITEM_SUCCESS){
    const tripIndex = state.trips.findIndex(trip => trip._id === action.trip._id);
    state.trips.splice(tripIndex, 1, action.trip);

    return Object.assign({}, state, {trips: [...state.trips], currentTrip: action.trip});
  }

  else if (action.type === UPDATE_ITEM_SUCCESS){
    const tripIndex = state.trips.findIndex(trip => trip._id === action.trip._id);
    state.trips.splice(tripIndex, 1, action.trip);
    console.log('tripIndex in UPDATE_ITEM_SUCCESS: ', state.trips[tripIndex]);
    return Object.assign({}, state, {trips: [...state.trips], currentTrip: action.trip});
  }

  else if (action.type === DELETE_ITEM_SUCCESS){
    // cycle thru all trips to find the one where the _id === to the id passed into the action
    const trip = state.trips.find(trip => trip._id === action.trip_id);
    // Once that trip is found, cycle thru all the items in that trip & return all of those that do not match the item _id of the item_id passed into the action

    trip.items = trip.items.filter((item) => {
        console.log('action.item_id: ', action.item_id);
        return item._id !== action.item_id;
      })
    console.log('trip in DELETE_ITEM_SUCCESS #2: ', trip);
    return Object.assign({}, state, {
      trips: [...state.trips], currentTrip: trip
    })
  }

  else if (action.type === MY_LIST_FILTER){
    return Object.assign({}, state, {userFilter: !state.userFilter})
  }
  return state;
}

export default tripReducer;
