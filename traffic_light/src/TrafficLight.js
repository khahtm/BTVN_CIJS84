import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green");
  const colors = {
    green: "#00ff00",
    yellow: "#ffff00",
    red: "#ff0000"
  };

  const handleNext = () => {
    if (color === "red") {
      setColor("green");
    } else if (color === "green") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("red");
    }
  };

  return (
    <div>
      <div className="light-container">
        <div className="light" style={{ backgroundColor: colors.green }}></div>
        <div className="light" style={{ backgroundColor: colors.yellow }}></div>
        <div className="light" style={{ backgroundColor: colors.red }}></div>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default TrafficLight;
