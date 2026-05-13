import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="main-container">
      <div className="counter-card">
        <h1>React Counter<br />Application</h1>

        <h2>{count}</h2>

        <div className="button-row">
          <button onClick={increment}>Increment (+)</button>
          <button onClick={decrement}>Decrement (-)</button>
        </div>

        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;