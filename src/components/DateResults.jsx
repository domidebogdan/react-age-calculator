import classes from "./DateResults.module.css";
import Result from "./Result";
function DateResult({ day, month, year }) {
  return (
    <div>
      <Result value={year} type="years"></Result>
      <Result value={month} type="months"></Result>
      <Result value={day} type="days"></Result>
    </div>
  );
}
export default DateResult;
