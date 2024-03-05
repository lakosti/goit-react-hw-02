import css from "./Options.module.css";

const Options = ({ updateFeedback, resetBtn, resetFeedback }) => {
  return (
    <div className={css.optionsWrap}>
      <button onClick={() => updateFeedback("good")} type="button" className={css.optionsBtn}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} type="button" className={css.optionsBtn}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} type="button" className={css.optionsBtn}>
        Bad
      </button>
      {resetFeedback >= 1 && (
        <button onClick={resetBtn} type="button" className={css.optionsBtn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
