import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className="buttonList">
    {options.map((butt, index) => (
      <li key={index} className="button__item">
        <button
          onClick={() => {
            onLeaveFeedback(butt);
          }}
        >
          {butt}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
