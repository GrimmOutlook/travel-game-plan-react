import React from 'react';
import {Link} from 'react-router-dom';

export default function ModalDeleteItem(props) {
  return (
    <div className="delete-item-container">
      <h3>{props.text}</h3>
      <h1 className="delete-question">Are you sure you want to delete {props.itemToDelete}? {props.id}</h1>
      <button className="btn btn--red" type="submit" onClick={() => props.doDelete()}>Yes</button>
      <Link className="btn btn--green" onClick={() => props.doNotDelete()} to={`/trip-lists/${props.tripLink}`}>No</Link>
    </div>
  );
};
