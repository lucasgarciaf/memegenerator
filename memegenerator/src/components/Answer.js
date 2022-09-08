import React from "react";
import { useState } from "react";

export default function Answer() {
  const [answer, setAnswer] = useState(true);

  function toggle() {
    setAnswer((prevState) => !prevState);
  }

  return (
    <div className="state">
      <h1 className="state--title">Do you like what I have developed here?</h1>
      <div onMouseEnter={toggle} className="state--value">
        <h1>{answer ? ":)" : "No"}</h1>
      </div>
    </div>
  );
}
