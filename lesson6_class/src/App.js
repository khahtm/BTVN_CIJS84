import React, { useState } from "react";
import "./App.css";

// Component Counter
const Counter = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(10);

  const handleIncrement = () => {
    setCounter1((prevCount) => prevCount + 1);
    setCounter2((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCounter1((prevCount) => prevCount - 1);
    setCounter2((prevCount) => prevCount - 1);
  };

  return (
    <div className="counter">
      <div className="column">
        <h3>Counter 1</h3>
        <button onClick={handleDecrement}>-</button>
        <span>{counter1}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="column">
        <h3>Counter 2</h3>
        <button onClick={handleDecrement}>-</button>
        <span>{counter2}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

// Component SubmitName
const SubmitName = () => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(`${name} + and + ${occupation}`);
    setName("");
    setOccupation("");
  };

  return (
    <div className="submit-name">
      <h3>Submit Name</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Occupation:
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="submitted-text">{submittedText}</div>
    </div>
  );
};

// Component App
const App = () => {
  return (
    <div className="app">
      <h2>React Custom Hook</h2>
      <Counter />
      <SubmitName />
    </div>
  );
};

export default App;
