import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { removeFeature } from '../actions';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  const car = useSelector(state => state.car);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature dispatch={dispatch} removeFeature={removeFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { car: state.car }
// }

// export default connect(mapStateToProps, { removeFeature })(AddedFeatures);

export default AddedFeatures;