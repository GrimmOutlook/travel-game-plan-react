import React from 'react';

// import Button from './button';

export default function ModalDeleteItem(props) {

  return (
    <div className="delete-item-container">
      <h1 className="delete-question">Are you sure you want to delete this item?</h1>
      <button type="submit" >Yes</button>
      <button type="submit" >No</button>
    </div>
  );

};
