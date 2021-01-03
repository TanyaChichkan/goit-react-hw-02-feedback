import React, {Component} from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';


class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  addPoints=(field)=>{
    this.setState({
      [field]: this.state[field] + 1
    })

    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback =() =>{
    return Object.values(this.state).reduce((acc,el)=>acc+el,0)

  };

  countPositiveFeedbackPercentage =()=>{
    return this.countTotalFeedback()  >0 ? (this.state.good / this.countTotalFeedback() * 100).toFixed(0) : 0;
  };

  render(){
    const {good,neutral,bad} = this.state
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return(
      <>
      <Section title = "Please leave feedback">
      <FeedbackOptions onLeaveFeedback={this.addPoints}></FeedbackOptions>
      </Section>

      {total >0 ?
      (<Section title = "Statistics">
      <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percentage}></Statistics>
      </Section>)
        :
      <Notification message="No feedback given"/>}
      </>
    )
  }
}

export default App;
