import React from 'react';
import { FeedbackOptions } from './Components/FeedbackOptions/FeedbackOptions';
import { Statictic } from './Components/Statistics/Statistics';
import { Notification } from './Components/Notification/Notification';
import { Section } from './Components/Section/Section';
import { Wrapper } from './Components/Wrapper/Wrapper';
import s from './Components/Wrapper/Wrapper.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Функция увеличение значения State
  onLeaveFeedback = val => {
    this.setState(prevState => ({ [val]: prevState[val] + 1 }));
  };

  // Функция подсчета количества отзывов
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  // Функция вывода % позитивных отзывов (good & neutral)
  countPositiveFeedbackPercentage = () =>
    ((this.state.good + this.state.neutral) / this.countTotalFeedback()) * 100;

  render() {
    return (
      <div className="App">
        <Wrapper>
          <div className={s.container}>
            <Section title="Please leave feedbak">
              <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.onLeaveFeedback}
              />
            </Section>

            {Object.values(this.state).find(val => val !== 0) ? (
              <Section title="Statistics">
                <Statictic
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={this.countTotalFeedback()}
                  positiveFeedback={Math.round(
                    this.countPositiveFeedbackPercentage(),
                  )}
                />
              </Section>
            ) : (
              <Section>
                <Notification message="No feedback given" />
              </Section>
            )}
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
