import memeData from "../env/memeData.js";
import boxes from "../env/boxes.js";
import Answer from "../components/Answer.js";
import Box from "../components/Box.js";
import { useState } from "react";

export default function Meme() {
  const [squares, setSquares] = useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.lentgth; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = { ...currentSquare, on: !currentSquare.on };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} toggle={toggle} />
  ));

  function handleClick() {
    // alertMe();
    // getMemeImage();
  }
  function alertMe() {
    alert("I was clicked");
  }

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <form className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
        ></input>
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
        ></input>
        <button onClick={getMemeImage} className="form--button">
          Get a new image 🖼️
        </button>
      </form>
      <div className="meme--image_container">
        <img src={meme.randomImage} alt="meme_img" className="meme_img" />
        <h2 className="top--text">input 1</h2>
        <h2 className="bottom--text">input 2</h2>
      </div>
      <Answer />
      <div className="all-boxes">{squareElements}</div>
    </main>
  );
}
