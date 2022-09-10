import Header from "./components/Header";
import Meme from "./components/Meme";
import Box from "./components/Box.js";
import Answer from "./components/Answer.js";
import boxes from "./env/boxes.js";
//import Footer from "./components/Footer";
import "./style.css";
import { useState } from "react";

export default function App() {
  const [squares, setSquares] = useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
  ));

  return (
    <div className="App">
      <Header />
      <Meme />
      <Answer />
      <div className="all-boxes">{squareElements}</div>
      {/* <Footer /> */}
    </div>
  );
}
