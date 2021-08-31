import React from 'react';
import { useState } from 'react';

import { FeedbackOptions } from './Components/FeedbackOptions/FeedbackOptions';
import { Statictic } from './Components/Statistics/Statistics';
import { Notification } from './Components/Notification/Notification';
import { Section } from './Components/Section/Section';
import { Wrapper } from './Components/Wrapper/Wrapper';
import s from './Components/Wrapper/Wrapper.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const grades = ['good', 'neutral', 'bad'];

  // Функция увеличение значения State
  const onLeaveFeedback = val => {
    switch (val) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        throw new Error();
    }
  };

  // Функция подсчета количества отзывов
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // Функция вывода % позитивных отзывов (good & neutral)
  const countPositiveFeedbackPercentage = () => {
    return ((good + neutral) / countTotalFeedback()) * 100;
  };

  return (
    <div className="App">
      <Wrapper>
        <div className={s.container}>
          <Section title="Please leave feedbak">
            <FeedbackOptions
              options={grades}
              onLeaveFeedback={onLeaveFeedback}
            />
          </Section>

          {Object.values(grades).find(val => val !== 0) ? (
            <Section title="Statistics">
              <Statictic
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positiveFeedback={Math.round(countPositiveFeedbackPercentage())}
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
// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   // Функция увеличение значения State
//   onLeaveFeedback = val => {
//     this.setState(prevState => ({ [val]: prevState[val] + 1 }));
//   };

//   // Функция подсчета количества отзывов
//   countTotalFeedback = () =>
//     this.state.good + this.state.neutral + this.state.bad;

//   // Функция вывода % позитивных отзывов (good & neutral)
//   countPositiveFeedbackPercentage = () =>
//     ((this.state.good + this.state.neutral) / this.countTotalFeedback()) * 100;

//   render() {
//     return (
//       <div className="App">
//         <Wrapper>
//           <div className={s.container}>
//             <Section title="Please leave feedbak">
//               <FeedbackOptions
//                 options={Object.keys(this.state)}
//                 onLeaveFeedback={this.onLeaveFeedback}
//               />
//             </Section>

//             {Object.values(this.state).find(val => val !== 0) ? (
//               <Section title="Statistics">
//                 <Statictic
//                   good={this.state.good}
//                   neutral={this.state.neutral}
//                   bad={this.state.bad}
//                   total={this.countTotalFeedback()}
//                   positiveFeedback={Math.round(
//                     this.countPositiveFeedbackPercentage(),
//                   )}
//                 />
//               </Section>
//             ) : (
//               <Section>
//                 <Notification message="No feedback given" />
//               </Section>
//             )}
//           </div>
//         </Wrapper>
//       </div>
//     );
//   }
// }
