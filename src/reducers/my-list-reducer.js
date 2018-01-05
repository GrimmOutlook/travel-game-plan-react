import {MY_LIST_FILTER} from '../actions/index';

const initialStateFilterItems = [
  {item_id: 1, item: "paper towels", itemDetails: "6-pack", username: "Dave"},
  {item_id: 2, item: "toilet paper", itemDetails: "12-pack", username: "Dave"},
  {item_id: 3, item: "bottled water", itemDetails: "2 cases", username: "Vincent"},
  {item_id: 4, item: "Saturday Dinner", itemDetails: "turkey, mashed potatoes, green beans, corn", username: "Scott"},
  {item_id: 5, item: "crock pot", itemDetails: "", username: "Vincent"},
  {item_id: 6, item: "turkey fryer", itemDetails: "", username: "Scott"},
  {item_id: 7, item: "Sunday Lunch", itemDetails: "chili, french fries, meatball subs", username: "Dave"}
]

const initialState = {
  items: initialStateFilterItems,
  userFilter: false
}

export const myListReducer = (state=initialState, action) => {
  if (action.type === MY_LIST_FILTER){

      return Object.assign({}, state, {userFilter: !state.userFilter})

  }

  return state;
}


export default myListReducer;
