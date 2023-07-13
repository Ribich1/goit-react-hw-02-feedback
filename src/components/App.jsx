import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions';
// import initialButton from './FeedbackOptions/button.json';
let total=0;
let totalPositive=0;
let positivePercentage=0;
class App extends Component {
  state = { Good: 0, Neutral: 0, Bad: 0 };

  incrementFeedBack = (e) => {
 
    this.setState(prevState => {
      return {
        [e]: prevState[e] + 1,
      };
    });
  };

  countTotalFeedback=()=>{
    total+=1;
      };
      countPositiveFeedbackPercentage=(e)=>{
if (e==='Good'){totalPositive+=1}
      positivePercentage=Math.round(totalPositive*100/total);
}

  render() {
    const { Good, Neutral, Bad } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.incrementFeedBack}
        onTotalFeedback={this.countTotalFeedback}
        onPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
        <h2>Statistics</h2>
        <p>Good: {Good}</p>
        <p>Neutral: {Neutral}</p>
        <p>Bad: {Bad}</p>
        <p>Total: {total} </p>
        <p>Positive feedback: {positivePercentage} %</p>
      </>
    );
  }
}

export default App;
