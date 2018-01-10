import React from 'react';

export default function ModalDeleteItem(props) {
  // button toggles next modal popup?
  return (
    <div className="delete-item-container">
      <h3>{props.text}</h3>
      <h1 className="delete-question">Are you sure you want to delete this item?</h1>
      <button className="btn btn--red" type="submit" >Yes</button>
      <button className="btn btn--green" type="submit" >No</button>
    </div>
  );

};
