import React from 'react';
import Section from './Section/Section';
import Notification from './components/feedbacktrack/Notification';
import FeedbackTracker from './components/feedbacktrack/FeedbackTracker';


const App=() => {

    return(
      <>

      <Section title = "Please leave feedback">
        <FeedbackTracker/>
      </Section>

      </>
    )
}


export default App;
