import React from 'react';

export default function Button(props) {

  return (
    <div className="add-trip-button">
      <a href="#" className={`btn ${props.buttonColor}`} type={props.type} >{props.text}</a>
    </div>
  );

};
