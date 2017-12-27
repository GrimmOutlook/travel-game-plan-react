import {ADD_ITEM} from '../actions/index'

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
  return state;
}

export default itemReducer;




// const ITEMS = [
//   {item_id: 1, item: "firewood", itemDetails: "2 bundles"},
//   {item_id: 2, item: "chips and salsa", itemDetails: ""},
//   {item_id: 3, item: "kayak", itemDetails: ""},
//   {item_id: 4, item: "Sunday Dinner", itemDetails: "lasagna, garlic bread, salad"}
// ];
