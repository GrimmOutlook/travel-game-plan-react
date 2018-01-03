import React from 'react';
import {Link} from 'react-router-dom';

export default function Button(props) {

  return (
    <div className={`${props.className}`}>
      <Link to={`/${props.routePath}`} className={`btn ${props.buttonColor}`} type={props.type} >{props.text}</Link>
    </div>
  );

};
