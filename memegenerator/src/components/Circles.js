import React, { useState } from "react";

export default function Circles() {
  const [count, setCount] = useState(1);

  function substract() {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="counter">
      <button onClick={substract} className="counter--minus">
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button onClick={add} className="counter--plus">
        +
      </button>
    </div>
  );
}
