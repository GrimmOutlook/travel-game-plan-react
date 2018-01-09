import React from 'react';
import FontAwesome from 'react-fontawesome';


// connect to state and pass delete fxn / action to delete an update modal components.

// Add key to FontAwesome tags???

export default function List(props) {
  const items = props.items.map((item, index) => (
    <li className={`item item-${index + 1}`} key={ index + 1 }>

        <h3 className="item-name">{ item.item }</h3>
        <FontAwesome onClick={() => props.updateStuff(item.item_id)} name="pencil" className="iconUpdate" />
        <FontAwesome onClick={() => props.deleteStuff(item.item_id)} name="trash" className="iconTrash" />
        <h3 className="item-details">{ item.itemDetails }</h3>
        <h3 className="item-username">{ item.username }</h3>

    </li>
  ));

  return (
    <ul className={`item-list ${props.classProp}`}>
      {items}
    </ul>
  );
};
