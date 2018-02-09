import {CREATE_NEW_TRIP_SUCCESS, GET_TRIPS_SUCCESS, SET_CURRENT_TRIP, CREATE_NEW_ITEM_SUCCESS, UPDATE_ITEM_SUCCESS, DELETE_ITEM_SUCCESS, MY_LIST_FILTER} from '../actions/index'

const initialStateCreateTrip = {
  trips: [],
  userFilter: false,
  currentTrip: null
};

// Add a GET reducer for all of a users trips

export const tripReducer = (state=initialStateCreateTrip, action) => {
  if (action.type === CREATE_NEW_TRIP_SUCCESS){
    return Object.assign({}, state, {trips: [...state.trips, {
      tripName: action.tripName,
      dateStart: action.dateStart,
      dateEnd: action.dateEnd,
      address: action.address,
      tripDetails: action.tripDetails,
      tripUUID: action.tripUUID   //,
      // items: action.items
    }]});
  }
  else if (action.type === GET_TRIPS_SUCCESS){
    return Object.assign({}, state, {trips: action.trip});
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

    return Object.assign({}, state, {trips: [...state.trips], currentTrip: action.trip});
  }

  else if (action.type === DELETE_ITEM_SUCCESS){
    const trip = state.trips.find(trip => trip._id === action.trip_id);
    trip.items.filter((item) => {
        return item.item_id !== action.item_id;
      })
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
