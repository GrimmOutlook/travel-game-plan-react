import React from 'react';

import Button from './button';

export default function Menu() {

  return (
    <div className="menu">
      <Button routePath="dashboard" text="Trip Dashboard" buttonColor="btn--blue" />
      <Button routePath="new-trip" text="Create New Trip" buttonColor="btn--blue" />
      <Button routePath="" text="Home" buttonColor="btn--blue" />
    </div>
  );

};


