import React, { Component } from 'react';
import Buttons from './Buttons';
import Info from  './Info';
import Notification from './Notification';


export class FeedbackTracker extends Component {

  state={
    good: 0,
    neutral: 0,
    bad: 0
  };

  feedBackChange=(e)=>{
    const key = e.target.dataset.name;
    this.setState(prevState=>({[key]:prevState[key]+1}));
  }

  feedbackReset=()=>{
    const {good,neutral,bad} = this.state;
    this.setState({good: 0, neutral: 0, bad: 0});
  }

  getTotal(){
    const {good,bad,neutral} = this.state;
    return good+bad+neutral;
  }

  getPositive(){
    const {good} = this.state;
    return good >0? (good/this.getTotal() * 100).toFixed(2) : 0;
  }

  render() {
    const {good,bad,neutral} = this.state;
    const total = this.getTotal();
    const positive=this.getPositive();

    return (
      <div>
        <Buttons onfeedBackChange={this.feedBackChange} options={this.state}/>
        <Info good={good} neutral={neutral} bad={bad} total={this.getTotal()} positive={this.getPositive()}/>

        { total >0 ?
        (<div><p>Total: {total} </p>
        <p>Positive: {positive} %</p></div>) :
        (<Notification message="No feedback given"/>)}
        <button type="button" onClick={this.feedbackReset}>Reset</button>
      </div>
    )
  }
}


export default FeedbackTracker;
