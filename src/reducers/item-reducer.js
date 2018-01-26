import {ADD_ITEM_SUCCESS, UPDATE_ITEM, DELETE_ITEM_SUCCESS, MY_LIST_FILTER} from '../actions/index';

const initialStateAddItem = {
  items: [
    {item_id: 8, item: "firewood", itemDetails: "2 bundles", username: null},
    {item_id: 9, item: "chips and salsa", itemDetails: "", username: null},
    {item_id: 10, item: "kayak", itemDetails: "", username: null},
    {item_id: 11, item: "Sunday Dinner", itemDetails: "lasagna, garlic bread, salad", username: null},
    {item_id: 1, item: "paper towels", itemDetails: "6-pack", username: "Dave"},
    {item_id: 2, item: "toilet paper", itemDetails: "12-pack", username: "Dave"},
    {item_id: 3, item: "bottled water", itemDetails: "2 cases", username: "Vincent"},
    {item_id: 4, item: "Saturday Dinner", itemDetails: "turkey, mashed potatoes, green beans, corn", username: "Scott"},
    {item_id: 5, item: "crock pot", itemDetails: "", username: "Vincent"},
    {item_id: 6, item: "turkey fryer", itemDetails: "", username: "Scott"},
    {item_id: 7, item: "Sunday Lunch", itemDetails: "chili, french fries, meatball subs", username: "Dave"}
  ],
  userFilter: false
};


export const itemReducer = (state=initialStateAddItem, action) => {
  if (action.type === ADD_ITEM_SUCCESS){
    return Object.assign({}, state, {items: [...state.items, {
      item_id: action.item_id,
      item: action.item,
      itemDetails: action.itemDetails,
      username: action.username
    }]});
  }

  else if (action.type === UPDATE_ITEM){
    return Object.assign({}, state, {
      items: state.items.map((item) => {
        if(item.item_id !== action.item_id){
          return item;
        }
        else {
          return {
            item_id: action.item_id,
            item: action.item,
            itemDetails: action.itemDetails,
            username: action.username
          };
        }
      })
    })
  }

  else if (action.type === DELETE_ITEM_SUCCESS){
    return Object.assign({}, state, {
      items: state.items.filter((item) => {
        return item.item_id !== action.item_id;
      })
    })
  }

  else if (action.type === MY_LIST_FILTER){
    return Object.assign({}, state, {userFilter: !state.userFilter})
  }
  return state;
};

export default itemReducer;


