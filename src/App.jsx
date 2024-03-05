import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

function App() {
  const feedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [counter, setCounter] = useState(() => {
    const data = window.localStorage.getItem("data-obj");
    if (data !== null) {
      return JSON.parse(data);
    }
    return feedback;
  });
  useEffect(() => {
    window.localStorage.setItem("data-obj", JSON.stringify(counter));
  }, [counter]);

  const totalFeedback = counter.good + counter.neutral + counter.bad;
  const positiveFeedback = Math.round(((counter.good + counter.neutral) / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setCounter({
      ...counter,
      [feedbackType]: counter[feedbackType] + 1,
    });
  };
  const resetBtn = () => setCounter(feedback);
  return (
    <div className="wrapper">
      <Description />
      <Options
        updateFeedback={(feedbackType) => updateFeedback(feedbackType)}
        resetFeedback={totalFeedback >= 1}
        resetBtn={resetBtn}
      />
      {totalFeedback >= 1 && (
        <Feedback
          feedbackStats={counter}
          feedbackTotal={totalFeedback}
          feedbackPositive={positiveFeedback}
        />
      )}
      {totalFeedback < 1 && <Notification />}
    </div>
  );
}

export default App;
