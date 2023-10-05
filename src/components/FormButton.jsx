import classes from "./FormButton.module.css";
function FormButton({ disabled }) {
  return (
    <div className={classes.holder}>
      <div className={classes.separator}></div>
      <button
        type="submit"
        className={classes.button}
        disabled={disabled}
      ></button>
    </div>
  );
}
export default FormButton;
