import React from 'react';
import {Link} from 'react-router-dom';

export default function Button(props) {

  return (
    <div className={`${props.divClass}`}>
      <Link to={`/${props.routePath}`} className={`btn ${props.buttonColor} ${props.extraButtonClass}`} type={props.type} >{props.text}</Link>
    </div>
  );

};
