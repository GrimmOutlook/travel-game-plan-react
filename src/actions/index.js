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
export const getTripsSuccess = (trips) => ({
  type: GET_TRIPS_SUCCESS,
  trips
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
    dispatch(getTripsSuccess(data.trips))
  });
}


// -------------------- CREATE A NEW TRIP ACTIONS ------------------------------------------

export const CREATE_NEW_TRIP_SUCCESS = 'CREATE_NEW_TRIP_SUCCESS';
export const createNewTripSuccess = (id, tripName, dateStart, dateEnd, address, tripDetails, tripUUID, users) => ({
    type: CREATE_NEW_TRIP_SUCCESS,
    id,
    tripName,
    dateStart,
    dateEnd,
    address,
    tripDetails,
    tripUUID,
    users
});

export const createNewTrip = (tripName, dateStart, dateEnd, address, tripDetails) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/trip`, {
    method: 'POST',
    mode: 'no-cors',
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
    dispatch(createNewTripSuccess(data._id, data.tripName, data.dateStart, data.dateEnd, data.address, data.tripDetails, data.tripUUID, data.users))
  });
}

// --------------------- Current Trip -----------------------------------------
   // Set Current Trip:
export const SET_CURRENT_TRIP = 'SET_CURRENT_TRIP';
export const setCurrentTrip = (currentTrip) => ({
  type: SET_CURRENT_TRIP,
  currentTrip
});



// --------------------- Items -----------------------------------------
   // Create New Item:

export const CREATE_NEW_ITEM_SUCCESS = 'CREATE_NEW_ITEM_SUCCESS';
export const createNewItemSuccess = (trip) => ({
  type: CREATE_NEW_ITEM_SUCCESS,
  trip
});

export const createNewItem = (item, itemDetails, claimOrNot, trip_id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/trip/${trip_id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item,
      itemDetails,
      claimOrNot
    })
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => {
    console.log('data in createNewItem action creator: ', data);
    // return data._id as well??????
    dispatch(createNewItemSuccess(data))
  });
};


export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';
export const updateItemSuccess = (trip) => ({
  type: UPDATE_ITEM_SUCCESS,
  trip
})


export const updateItem = (item_id, item, itemDetails, claimOrNot, trip_id) => (dispatch, getState) => {
  console.log('item_id in updateItem action: ', item_id);
  console.log('trip_id in updateItem action: ', trip_id);
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/trip/${trip_id}/${item_id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      trip_id,
      item_id,
      item,
      itemDetails,
      claimOrNot
    })
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => {
    console.log('data in updateItem action creator: ', data);
    dispatch(updateItemSuccess(data))
  });
};



export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const deleteItemSuccess = (message, item_id, trip_id) => {
  console.log('item_id in action: ', item_id);
  console.log('trip_id in action: ', trip_id);
  return { type: DELETE_ITEM_SUCCESS,
  message,
  item_id,
  trip_id}
};

export const deleteItem = (trip_id, item_id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/trip/${trip_id}/${item_id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => {
    console.log('data in deleteItem action creator: ', data);
    // What do I dispatch????  There's no item left
    dispatch(deleteItemSuccess(data.message, item_id, trip_id))
  });
};



export const MY_LIST_FILTER = 'MY_LIST_FILTER';
export const myListFilter = () => ({
  type: MY_LIST_FILTER
});

export const CLEAR_LIST_FILTER = 'CLEAR_LIST_FILTER';
export const clearListFilter = () => ({
  type: CLEAR_LIST_FILTER
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

export const ADD_INVITE_TRIP_SUCCESS = 'ADD_INVITE_TRIP_SUCCESS';
export const addInviteTripSuccess = (trip) => ({
  type: ADD_INVITE_TRIP_SUCCESS,
  trip
})

export const addInviteTrip = (inviteUUID) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/users/me`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({inviteUUID})
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => {
    console.log('data.tripUUID: ', data);
    // console.log('parameter inviteUUID: ', inviteUUID);
    if (data.tripUUID === inviteUUID){
      dispatch(addInviteTripSuccess(data))
    }
  })
  .catch(err => {
      console.log('err: ', err);
      dispatch(fetchTripNameError(err));
  });

};
















