import css from "./Feedback.module.css";

const Feedback = () => {
  return (
    <div className={css.feedbackWrap}>
      <p className={css.feedback}>
        Good: <span className={css.feedbackGood}>{5}</span>
      </p>
      <p className={css.feedback}>
        Neutral: <span className={css.feedbackNeutral}>{4}</span>
      </p>
      <p className={css.feedback}>
        Bad: <span className={css.feedbackBad}>{5}</span>
      </p>
      <p className={css.feedback}>
        Total: <span className={css.feedbackText}>{4}</span>
      </p>
      <p className={css.feedback}>
        Positive: <span className={css.feedbackText}>{5}</span>
      </p>
    </div>
  );
};

export default Feedback;
