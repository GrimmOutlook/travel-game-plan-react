// In reducer for createNewTrip, create a unique uuid for this trip
// Also in this reducer, map through trip summary list again?
// Can 2 actions be dispatched by the same button click?
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

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item, itemDetails, username) => ({
  type: ADD_ITEM,
  item,
  itemDetails,
  username  //automatically use the username captured from login action
});

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const updateItem = (item_id, item, itemDetails, username) => ({
  type: UPDATE_ITEM,
  item_id,
  item,
  itemDetails,
  username  //use the username captured from login action as placeholder
});

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = (item_id) => ({
  type: DELETE_ITEM,
  item_id
})

//****** Need an action/reducer to filter list according to username in trip-lists *********
export const MY_LIST_FILTER = 'MY_LIST_FILTER';
export const myListFilter = () => ({
  type: MY_LIST_FILTER
});


// User clicks on individual item ==> modal form pops up ==> user has 3 different choices:
//   1. Delete item ==> user clicks button ==> modal changes to "Are you sure?":
//        - User clicks "Yes" ==> deleteItem action dispatched
//        - User clicks "No" ==> toggleModal action dispatched
//   2. Claim item as their own ==> user clicks button ==> modal goes away ==> action to switch item from "Things Needed" list to "Things Accounted For" list
//   3. Modify item name and/or details ==> modal changes to form that modifies items ==> user clicks "Submit" button ==> action to update item information.
