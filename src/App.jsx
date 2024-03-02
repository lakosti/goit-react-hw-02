import "./App.css";
import Description from "./assets/components/Description/Description";
import Feedback from "./assets/components/Feedback/Feedback";
import Notification from "./assets/components/Notification/Notification";
import Options from "./assets/components/Options/Options";

// const feedback = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };
function App() {
  return (
    <div className="wrapper">
      <Description />
      <Options />
      <Notification />
      <Feedback />
      {/* {<Feedback /> ? <Notification /> : ""} */}
    </div>
  );
}

export default App;
