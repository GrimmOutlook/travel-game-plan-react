import React from 'react';
import FontAwesome from 'react-fontawesome';

import './css/list.css';

export default function List(props) {
  const items = props.items.map((item, index) => (
    <li className={`item item-${index + 1}`} key={ index + 1 }>

        <h3 className="item-name">{ item.item }</h3>

        <FontAwesome onClick={() => props.updateStuff(item._id, item.item, item.itemDetails, item.userClaim)}
          name="pencil"
          className="iconUpdate"
        />

        <FontAwesome onClick={() => props.deleteStuff(item._id, item.item)}
          name="trash"
          className="iconTrash"
        />

        <h3 className="item-details">{ item.itemDetails }</h3>
        <h3 className="item-username">{ item.userClaim ? item.userClaim.username : 'no one' } <span>is bringing this item</span></h3>

    </li>
  ));

  return (
    <ul className={`item-list ${props.classProp}`}>
      {items}
    </ul>
  );
};
