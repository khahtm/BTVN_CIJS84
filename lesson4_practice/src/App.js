import React from "react";
import UseHook from "./UseHook";
import "./App.css";

function App() {
  const { count, increment, decrement } = UseHook();

  return (
    <div className="container">
      <label className="value">Giá trị: {count}</label>
      <div className="button-group">
        <button className="button" onClick={increment}>
          +
        </button>
        <button className="button" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
