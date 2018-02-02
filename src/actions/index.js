import {API_BASE_URL} from '../config';   // = 'http://localhost:8080/api'
import {normalizeResponseErrors} from './utils';


// -------------------------- Modal Actions ------------------------------------------------

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});

export const TOGGLE_DELETE_MODAL = 'TOGGLE_DELETE_MODAL';
export const toggleDeleteModal = () => ({
    type: TOGGLE_DELETE_MODAL
});

export const TOGGLE_UPDATE_MODAL = 'TOGGLE_UPDATE_MODAL';
export const toggleUpdateModal = () => ({
    type: TOGGLE_UPDATE_MODAL
});


// ------------------------------- Trip Actions -----------------------------------------------

  //  GET all trips for a given user:
export const GET_TRIPS_SUCCESS = 'GET_TRIPS_SUCCESS';
export const getTripsSuccess = (trip) => ({
  type: GET_TRIPS_SUCCESS,
  trip
})


export const getTrips = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => {
    console.log('data: ', data);
    dispatch(getTripsSuccess(data.trip))
  });
}


// -------------------- CREATE A NEW TRIP ACTIONS ------------------------------------------

export const CREATE_NEW_TRIP_SUCCESS = 'CREATE_NEW_TRIP_SUCCESS';
export const createNewTripSuccess = (tripName, dateStart, dateEnd, address, tripDetails, tripUUID) => ({
    type: CREATE_NEW_TRIP_SUCCESS,
    tripName,
    dateStart,
    dateEnd,
    address,
    tripDetails,
    tripUUID
});

export const createNewTrip = (tripName, dateStart, dateEnd, address, tripDetails) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/trip`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      tripName,
      dateStart,
      dateEnd,
      address,
      tripDetails
    })
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => {
    console.log('data: ', data);
    dispatch(createNewTripSuccess(data.tripName, data.dateStart, data.dateEnd, data.address, data.tripDetails, data.tripUUID))
  });
}

// --------------------- Items -----------------------------------------
   // Create New Item:

export const CREATE_NEW_ITEM_SUCCESS = 'CREATE_NEW_ITEM_SUCCESS';
export const createNewItemSuccess = (_id, item, itemDetails, username) => ({
  type: CREATE_NEW_ITEM_SUCCESS,
  _id,
  item,
  itemDetails,
  username
});

export const createNewItem = (item, itemDetails, username) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const allTrips = getState().trip;
  //Not correct.  what to compare it to?
  this.trip = allTrips.find(trip => tripId === trip._id.toString());

  console.log('getState trip_id in createNewItem: ', getState().trip);
  fetch(`${API_BASE_URL}/trip/${trip_id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item,
      itemDetails,
      username
    })
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => {
    console.log('data in createNewItem action creator: ', data);
    // return data._id as well??????
    dispatch(createNewItemSuccess(data.items._id, data.items.item, data.items.itemDetails, data.items.username))
  });
};







export const UPDATE_ITEM = 'UPDATE_ITEM';
export const updateItem = (item_id, item, itemDetails, username) => ({
  type: UPDATE_ITEM,
  item_id,
  item,
  itemDetails,
  username  //use the username captured from login action as placeholder
});



export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const deleteItemSuccess = (item_id) => ({
  type: DELETE_ITEM_SUCCESS,
  item_id
});

export const deleteItem = (trip_id, item_id, authToken) => dispatch => {
  fetch(`${API_BASE_URL}/trip/${trip_id}/${item_id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok){
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(item => {
    dispatch(deleteItemSuccess(item.item_id));
  })
};



export const MY_LIST_FILTER = 'MY_LIST_FILTER';
export const myListFilter = () => ({
  type: MY_LIST_FILTER
});


// --------------- Actions for Initial welcome screen upon arriving. ----------------------------

export const STORE_INVITE_UUID = 'STORE_INVITE_UUID';
export const storeInviteUUID = (inviteUUID) => ({
  type: STORE_INVITE_UUID,
  inviteUUID
});


export const FETCH_TRIP_NAME_SUCCESS = 'FETCH_TRIP_NAME_SUCCESS';
export const fetchTripNameSuccess = (inviteUUID, tripName) => ({
  type: FETCH_TRIP_NAME_SUCCESS,
  inviteUUID,
  tripName
});

export const FETCH_TRIP_NAME_ERROR = 'FETCH_TRIP_NAME_ERROR';
export const fetchTripNameError = (error) => ({
  type: FETCH_TRIP_NAME_ERROR,
  error
});

export const fetchTripName = (inviteUUID) => dispatch => {
  fetch(`${API_BASE_URL}/trip/trip-invite/${inviteUUID}`, {
    method: 'GET',
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => {
    console.log('data.tripUUID: ', data.tripUUID);
    console.log('parameter inviteUUID: ', inviteUUID);
    if (data.tripUUID === inviteUUID){
      dispatch(fetchTripNameSuccess(data.tripUUID, data.tripName))
    }
      // : dispatch(fetchTripNameError({message: 'Not a valid trip link.'}))
  })
  .catch(err => {
      console.log('err: ', err);
      dispatch(fetchTripNameError(err));
  });

};


















