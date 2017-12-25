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

// Do I need a separate toggle action for each modal? - Don't think so.

// User clicks on "Add an Item" button ==> modal form pops up ==> user fills out form & clicks "Submit" button ==> The following actions are dispatched: 1. Toggle Modal action  2. Add an Item action ==> state is updated to include that added item.

// User clicks on "My List" button ==> state is updated to include only items belonging to the user.  filterMyList() action?

// User clicks on individual item ==> modal form pops up ==> user has 3 different choices:
//   1. Delete item ==> user clicks button ==> modal changes to "Are you sure?":
//        - User clicks "Yes" ==> deleteItem action dispatched
//        - User clicks "No" ==> toggleModal action dispatched
//   2. Claim item as their own ==> user clicks button ==> modal goes away ==> action to switch item from "Things Needed" list to "Things Accounted For" list
//   3. Modify item name and/or details ==> modal changes to form that modifies items ==> user clicks "Submit" button ==> action to update item information.
