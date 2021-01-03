import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({onLeaveFeedback}){
  // const newArr = (Object.keys(options));
  // console.log(newArr);
  return (
      <div>
        {/* {newArr.map(item=> ( */}

          <button type="button" onClick={()=>onLeaveFeedback('good')}>Good</button>
          <button type="button" onClick={()=>onLeaveFeedback('neutral')}>Neutral</button>
          <button type="button" onClick={()=>onLeaveFeedback('bad')}>Bad</button>

        {/* } */}
      </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback:PropTypes.func.isRequired
};