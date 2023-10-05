import classes from "./Result.module.css";
function Result(props) {
  return (
    <div className={classes.result}>
      <div className={classes.value}>{props.value}</div>
      <div className={classes.type}>{props.type}</div>
    </div>
  );
}
export default Result;
