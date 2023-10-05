import classes from "./Input.module.css";
import { useState } from "react";
function Input({ labelName, onInputError }) {
  const errorClass = classes.error;
  const [error, setError] = useState(false);

  function validateInput(event) {
    const inputValue = event.target.value;
    if (labelName === "Day") {
      if (inputValue > 31 || inputValue < 1) {
        setError(true);
        onInputError(true);
      } else {
        setError(false);
        onInputError(false);
      }
    } else if (labelName === "Month") {
      if (inputValue > 12 || inputValue < 1) {
        setError(true);
        onInputError(true);
      } else {
        setError(false);
        onInputError(false);
      }
    } else if (labelName === "Year") {
      if (inputValue > new Date().getFullYear() || inputValue < 1) {
        setError(true);
        onInputError(true);
      } else {
        setError(false);
        onInputError(false);
      }
    }
  }

  return (
    <div className={classes.holder}>
      <label htmlFor={labelName} className={error ? errorClass : 0}>
        {labelName}
      </label>
      <input
        type="number"
        id={labelName}
        name={labelName}
        className={error ? errorClass : 0}
        onChange={(e) => {
          validateInput(e);
        }}
      />
      {error && <p>{labelName} is not valid</p>}
    </div>
  );
}
export default Input;
