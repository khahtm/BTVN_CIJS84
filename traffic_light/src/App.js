import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // Số lần nhấp nút "Next"
  const [stop, setStop] = useState(false); // Trạng thái dừng

  const handleNextClick = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện
    if (!stop) {
      if (count < 14) {
        setCount((prevCount) => prevCount + 1);
      } else {
        setStop(true);
      }
    }
  };
  

  const getCircleColor = (index) => {
    if (!stop) {
      if (count % 3 === index) {
        if (count % 3 === 0) {
          return "green";
        } else if (count % 3 === 1) {
          return "yellow";
        } else if (count % 3 === 2) {
          return "red";
        }
      }
    }
    return "";
  };

  return (
    <div className="container">
      <div className="traffic-light">
        <div className={`circle ${getCircleColor(0)}`}></div>
        <div className={`circle ${getCircleColor(1)}`}></div>
        <div className={`circle ${getCircleColor(2)}`}></div>
      </div>
      {!stop && <button onClick={handleNextClick}>Next</button>}
      {stop && <p>Đã đạt tới số lần nhấp tối đa.</p>}
    </div>
  );
}

export default App;
