import {ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../actions/index'

const initialStateAddItem = {
  items: [
    {item: "firewood", itemDetails: "2 bundles"},
    {item: "chips and salsa", itemDetails: ""},
    {item: "kayak", itemDetails: ""},
    {item: "Sunday Dinner", itemDetails: "lasagna, garlic bread, salad"}
  ]
};


export const itemReducer = (state=initialStateAddItem, action) => {
  if (action.type === ADD_ITEM){
    return Object.assign({}, state, {items: [...state.items, {
      item: action.item,
      itemDetails: action.itemDetails,
      username: action.username
    }]});
  }

  else if (action.type === UPDATE_ITEM){

  }

  else if (action.type === DELETE_ITEM){

  }
  return state;
}

export default itemReducer;


