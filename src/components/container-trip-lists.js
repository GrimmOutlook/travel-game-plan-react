import React from 'react';

import Button from './button';
import List from './list';


export default class ContainerTripLists extends React.Component {

    render() {
      return (
        <div className="content-dashboard content__grid">
          <h1>TRIP NAME</h1>
          <h3>Things Needed:</h3>
          <Button routePath="modal-form" text="Add an Item" buttonColor="btn--green" />
          <List items={ITEMS} />

          <h3>Things Accounted For:</h3>
          <Button routePath="modal-form" text="Add an Item" buttonColor="btn--green" />
          <Button text="My List" buttonColor="btn--white" />
          <List items={ITEMSACCOUNTED} />

        </div>
      );
    }

}

const ITEMS = [
  {item_id: 1, item: "firewood", itemDetails: "2 bundles"},
  {item_id: 2, item: "chips and salsa", itemDetails: ""},
  {item_id: 3, item: "kayak", itemDetails: ""},
  {item_id: 4, item: "Sunday Dinner", itemDetails: "lasagna, garlic bread, salad"}
];

const ITEMSACCOUNTED = [
  {item_id: 1, item: "paper towels", itemDetails: "6-pack", username: "Dave"},
  {item_id: 2, item: "toilet paper", itemDetails: "12-pack", username: "Dave"},
  {item_id: 3, item: "bottled water", itemDetails: "2 cases", username: "Vincent"},
  {item_id: 4, item: "Saturday Dinner", itemDetails: "turkey, mashed potatoes, green beans, corn", username: "Scott"},
  {item_id: 5, item: "crock pot", itemDetails: "", username: "Vincent"},
  {item_id: 6, item: "turkey fryer", itemDetails: "", username: "Scott"},
  {item_id: 7, item: "Sunday Lunch", itemDetails: "chili, french fries, meatball subs", username: "Dave"}
]
