import {Component} from "react";
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from "./Notification/Notification";

export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addStatisticValue = prop => {
    this.setState(prevState => ({
      [prop]: prevState[prop] + 1
    }))
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, prop) => acc + prop, 0 ); 
  }

  countPositiveFeedbackPercentage() {
    const{ good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()) || 0;
  } 

  render() {

    const { good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div
      style={{
        marginBottom: 20,
        padding: 20,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
      > 
        <Section title="Please leave feedback">
            <FeedbackOptions 
                options={Object.keys(this.state)} 
                onLeaveFeedback={this.addStatisticValue}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
          <Statistics
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={total} 
            positiveFeedbackPercentage={positiveFeedbackPercentage}></Statistics>
          )
            : (
          <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>   
    );
  }
};
