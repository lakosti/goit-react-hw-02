import css from "./Options.module.css";

const Options = () => {
  return (
    <div className={css.optionsWrap}>
      <button type="button" className={css.optionsBtn}>
        Good
      </button>
      <button type="button" className={css.optionsBtn}>
        Neutral
      </button>
      <button type="button" className={css.optionsBtn}>
        Bad
      </button>
      <button type="button" className={css.optionsBtn}>
        Reset
      </button>
    </div>
  );
};

export default Options;
