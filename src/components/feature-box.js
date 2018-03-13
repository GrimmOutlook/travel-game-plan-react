import React from 'react';

export default function FeatureBox(props) {
  const featureList = props.features.map((feature, index) => (
    <li className={`feature-box-${ index + 1 }`} key={ index + 1 }>
      <div className={`icon-${ index + 1 }`}>
        <img src={ feature.icon } alt={ feature.alt } className="icon-img" />
      </div>
      <div className={`feature-text-${ index + 1 }`}>
        <h3>{ feature.description }</h3>
      </div>
    </li>
  ));

  return (
    <ul className="explanations">
      { featureList }
    </ul>
  );
};

