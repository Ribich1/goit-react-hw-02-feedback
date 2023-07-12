import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions';
// import initialButton from './FeedbackOptions/button.json';

class App extends Component {
  state = { good: 0, neutral: 1, bad: 2 };

  incrementFeedBack = (e) => {

    this.setState(prevState => {
      return {
        [e]: prevState[e] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.incrementFeedBack}/>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </>
    );
  }
}

export default App;
