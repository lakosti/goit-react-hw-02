import css from "./Feedback.module.css";

const Feedback = ({ feedbackStats, feedbackPositive, feedbackTotal }) => {
  return (
    <div className={css.feedbackWrap}>
      <p className={css.feedback}>
        Good: <span className={css.feedbackGood}>{feedbackStats.good}</span>
      </p>
      <p className={css.feedback}>
        Neutral: <span className={css.feedbackNeutral}>{feedbackStats.neutral}</span>
      </p>
      <p className={css.feedback}>
        Bad: <span className={css.feedbackBad}>{feedbackStats.bad}</span>
      </p>
      <p className={css.feedback}>
        Total: <span className={css.feedbackText}>{feedbackTotal}</span>
      </p>
      <p className={css.feedback}>
        Positive: <span className={css.feedbackText}>{feedbackPositive}%</span>
      </p>
    </div>
  );
};

export default Feedback;
