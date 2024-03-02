import css from "./Description.module.css";

const Description = () => {
  return (
    <>
      <h1 className={css.cafeName}>Sip Happens Café</h1>
      <p className={css.cafeDesc}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>
    </>
  );
};

export default Description;
