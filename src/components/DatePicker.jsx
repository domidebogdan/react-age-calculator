import classes from "./DatePicker.module.css";
import Input from "./Input";
import FormButton from "./FormButton";
import { useState } from "react";
function DatePicker({ handleSubmit }) {
  const [dayError, setDayError] = useState(true);
  const [monthError, setMonthError] = useState(true);
  const [yearError, setYearError] = useState(true);

  const handleDayChange = (value) => {
    setDayError(value);
    console.log("Day: " + dayError);
  };

  const handleMonthChange = (value) => {
    setMonthError(value);
    console.log("Month: " + monthError);
  };

  const handleYearChange = (value) => {
    setYearError(value);
    console.log("Year: " + yearError);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.inputHolder}>
        <Input labelName="Day" onInputError={handleDayChange} />
        <Input labelName="Month" onInputError={handleMonthChange}></Input>
        <Input labelName="Year" onInputError={handleYearChange}></Input>
      </div>
      <FormButton disabled={dayError || monthError || yearError}></FormButton>
    </form>
  );
}
export default DatePicker;
