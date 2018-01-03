import React from 'react';
import FontAwesome from 'react-fontawesome';


// connect to state and pass delete fxn / action to delete an update modal components.

export default function List(props) {
  const items = props.items.map((item, index) => (
    <li className={`item item-${index + 1}`} key={ index + 1 }>

        <h3 className="item-name">{ item.item }</h3>
        <FontAwesome name="trash" />
        <FontAwesome name="pencil" />
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
