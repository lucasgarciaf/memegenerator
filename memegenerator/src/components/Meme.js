import memeData from "../env/memeData.js";
import { useState } from "react";

export default function Meme() {
  // function handleClick() {
  //   // alertMe();
  //   // getMemeImage();
  // }
  // function alertMe() {
  //   alert("I was clicked");
  // }

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/39t1o.jpg",
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isFriendly: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        ></input>
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        ></input>
        <button onClick={getMemeImage} className="form--button">
          Get a new image 🖼️
        </button>
        <input
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />
      </form>
      <div className="meme--image_container">
        <img src={meme.randomImage} alt="meme_img" className="meme_img" />
        {formData.firstName && (
          <h2 className="top--text">{formData.firstName}</h2>
        )}
        {formData.lastName && (
          <h2 className="bottom--text">{formData.lastName}</h2>
        )}
      </div>
    </main>
  );
}
