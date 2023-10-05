import classes from "./App.module.css";
import DatePicker from "./components/DatePicker";
import DateResult from "./components/DateResults";
import { useState } from "react";
function App() {
  const [day, setDay] = useState("0");
  const [month, setMonth] = useState("0");
  const [year, setYear] = useState("0");

  function getFormDataHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
    calculateAge(formDataObject);
  }
  function animateNumbers(counters) {
    for (const counter in counters) {
      const interval = 1000;
      let startValue = 0;
      let speed = 1;
      const endValue = counters[counter];
      let setValue;
      let duration = Math.floor(interval / endValue);
      if (counter === "day") {
        startValue = parseInt(day);
        setValue = setDay;
      } else if (counter === "month") {
        startValue = parseInt(month);
        setValue = setMonth;
      } else if (counter === "year") {
        startValue = year;
        setValue = setYear;
        duration = 1 / duration;
      }
      let count = setInterval(() => {
        if (startValue === endValue) {
          clearInterval(count);
          return;
        }
        if (Math.abs(startValue - endValue < 15)) {
          speed = 1;
        } else if (Math.abs(startValue - endValue < 100)) {
          speed = 15;
        } else {
          speed = 85;
        }
        startValue =
          startValue > endValue ? startValue - speed : startValue + speed;
        setValue(startValue);
      }, duration);
    }
  }

  function calculateAge(data) {
    var date = `${data.Year}/${data.Month}/${data.Day}`;
    const birthDate = new Date(date);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    let day = currentDate.getDate() - birthDate.getDate();
    if (month < 0 || (month === 0 && day < 0)) {
      age--;
      month += 12;
    }
    if (day < 0) {
      const daysInLastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      day += daysInLastMonth;
      month--;
    }
    console.log(`Age: ${age}`);
    animateNumbers({ day: day, month: month, year: age });
  }
  return (
    <>
      <div className={classes.card}>
        <DatePicker handleSubmit={getFormDataHandler}></DatePicker>
        <DateResult day={day} month={month} year={year}></DateResult>
      </div>
    </>
  );
}

export default App;
