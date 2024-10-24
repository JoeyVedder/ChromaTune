import React, { useState } from "react";
import "./New.css";

const New: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedEmotion) {
      window.location.href = selectedEmotion;
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selectedEmotion) {
      window.location.hash = selectedEmotion;
    }
  };

  return (
    <div className="newContent">
      <div className="newCard">
        <h1 className="newHeader">How Are You Feeling</h1>
        <p>Select an emotion to log how you are feeling today.</p>
        <form className="newForm" onSubmit={handleSubmit}>
          <div className="newDropdown">
            <button
              type="button"
              id="newDropBtn"
              className="newDropBtn"
              onClick={handleButtonClick}
            >
              Dropdown
            </button>
            <div className="newDropContent">
              <a href="#" onClick={() => setSelectedEmotion("optionHappy")}>
                Happy
              </a>
              <a href="#" onClick={() => setSelectedEmotion("optionSad")}>
                Sad
              </a>
              <a href="#" onClick={() => setSelectedEmotion("optionAngry")}>
                Angry
              </a>
              <a href="#" onClick={() => setSelectedEmotion("optionEnergetic")}>
                Energetic
              </a>
              <a href="#" onClick={() => setSelectedEmotion("optionTired")}>
                Tired
              </a>
            </div>
          </div>
          <input type="submit" value="Submit" className="newSubmit" />
        </form>
      </div>
    </div>
  );
};

export default New;