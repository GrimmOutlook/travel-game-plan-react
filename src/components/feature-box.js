import React from 'react';

export default function FeatureBox(props) {
  const feature = props.features.map((feature, index) => (
    <li key={index}>
      <div className="image">
      </div>
      <div className="feature-description">
        <h3>{feature.description}</h3>
      </div>
    </li>
  ));

  return (
    <ul>
      {feature}
    </ul>
  );
};


