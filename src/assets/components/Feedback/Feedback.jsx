import css from "./Feedback.module.css";

const Feedback = () => {
  return (
    <>
      <p className={css.withoutFeedback}>Not feedback yet!</p>
      <div className={css.feedbackWrap}>
        <p className={css.feedback}>
          Good: <span className={css.feedbackGood}>{}</span>
        </p>
        <p className={css.feedback}>
          Neutral: <span className={css.feedbackNeutral}>{}</span>
        </p>
        <p className={css.feedback}>
          Bad: <span className={css.feedbackBad}>{}</span>
        </p>
        <p className={css.feedback}>
          Total: <span className={css.feedbackText}>{}</span>
        </p>
        <p className={css.feedback}>
          Positive: <span className={css.feedbackText}>{}</span>
        </p>
      </div>
    </>
  );
};

export default Feedback;
