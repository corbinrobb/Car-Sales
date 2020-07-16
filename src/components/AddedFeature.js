import React from 'react';

const AddedFeature = ({ dispatch, removeFeature, feature }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => dispatch(removeFeature(feature))} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
