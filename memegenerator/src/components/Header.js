import trollface from "../images/troll_face.png";
import React, { useState } from "react";
import Circles from "../components/Circles.js";

export default function Navbar() {
  function greeting(name) {
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;
    if (hours >= 4 && hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else if (hours >= 17 && hours < 20) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }

    return `Good ${timeOfDay}, ${name}!`;
  }

  const [visibility, setVisibility] = useState(false);

  function handleMouseOver() {
    // console.log("Hola Pibito");
    // alert(greeting("Lucas"));
    setVisibility((visibility) => !visibility);
  }

  return (
    <header className="header">
      <img
        src={trollface}
        alt="troll_face"
        className="header_img"
        onMouseOver={handleMouseOver}
      />
      <h2 className="header_title">Meme Generator</h2>
      {visibility && <h3 className="header_greeting">{greeting("Lucas")} </h3>}
      <h4 className="header_project">React Course - Project </h4>
      <Circles />
    </header>
  );
}
