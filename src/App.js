import { useState } from "react";
import "./App.css";

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [amPm, setamPm] = useState("");

  const handleTime = () => {
    const date = new Date();
    setHour(date.getHours());
    setMinute(date.getMinutes());
    setSecond(date.getSeconds());
    setamPm(hour >= 12 ? "PM" : "AM");
  };

  setInterval(handleTime, 1000);

  return (
    <div>
      <div className="clock">
        <h1 style={{ backgroundColor: "rgb(154, 54, 220)" }}>
          {hour > 12 ? hour - 12 : hour}
        </h1>
        <h1 style={{ backgroundColor: "rgb(54, 220, 87)" }}>
          {minute < 10 ? "0" + minute : minute}
        </h1>
        <h1 style={{ backgroundColor: "rgb(220, 187, 54)" }}>
          {second < 10 ? "0" + second : second}{" "}
        </h1>
        <h1 style={{ backgroundColor: "rgb(220, 54, 165)" }}>{amPm}</h1>
      </div>
    </div>
  );
}

export default App;
