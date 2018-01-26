import {API_BASE_URL} from '../config';


export const CREATE_NEW_TRIP = 'CREATE_NEW_TRIP';
export const createNewTrip = (tripName, dateStart, dateEnd, address, tripDetails) => ({
    type: CREATE_NEW_TRIP,
    tripName,
    dateStart,
    dateEnd,
    address,
    tripDetails
});

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


// --------------------- Items -----------------------------------------
   // Add:

export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const addItemSuccess = (trip) => ({
  type: ADD_ITEM_SUCCESS,
  trip  //automatically use the username captured from login action
});

export const addItem = (trip_id, item, itemDetails, username, authToken) => dispatch => {
  console.log(`trip_id: ${trip_id}`);
  // console.log(`item_id: ${item_id}`);
  console.log(`authToken: ${authToken}`);

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
  .then(res => {
    if (!res.ok){
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(trip => {
    dispatch(addItemSuccess(trip));
  })
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
  fetch(`${API_BASE_URL}/trip_id/item_id`, {
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

export const STORE_INVITE_UUID = 'STORE_INVITE_UUID';
export const storeInviteUUID = (inviteUUID) => ({
  type: STORE_INVITE_UUID,
  inviteUUID
});


















