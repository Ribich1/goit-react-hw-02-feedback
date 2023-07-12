import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className="buttonList">
    {options.map((butt, index) => (
      <li key={index} className="button__item">
        <button onClick={() => onLeaveFeedback(butt)}>{butt}</button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
