import React from 'react';
import AdditionalFeature from './AdditionalFeature';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeatures = () => {
  const additionalFeatures = useSelector(state => state.additionalFeatures);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature dispatch={dispatch} addFeature={addFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { additionalFeatures: state.additionalFeatures }
// }

// export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
export default AdditionalFeatures;
