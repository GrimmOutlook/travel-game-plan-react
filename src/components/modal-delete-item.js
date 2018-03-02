import React from 'react';
import {Link} from 'react-router-dom';

import './css/modal-delete.css';

export default function ModalDeleteItem(props) {
  return (
    <div className="delete-item-container">
      <h3>{props.text}</h3>
      <h2 className="delete-question">Are you sure you want to delete:</h2>
      <h3>{props.itemToDelete}?</h3>
      <button className="btn btn--red btn--delete" type="submit" onClick={() => props.doDelete()}>Yes</button>
      <Link className="btn btn--green btn--no-delete" onClick={() => props.doNotDelete()} to={`/trip-lists/${props.tripLink}`}>No</Link>
    </div>
  );
};
