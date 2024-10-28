import React, { useState } from "react";
import "./New.css";

const New: React.FC = () => {
  const [mood, setMood] = useState<string>("");
  const handleMoodChange = (selectedMood: string) => {
    setMood(selectedMood);
  };

  const getBackgroundImage = (mood: string): string => {
    switch (mood) {
      case "optionHappy":
        return "var(--happy)";
      case "optionSad":
        return "var(--sad)";
      case "optionAngry":
        return "var(--angry)";
      case "optionEnergetic":
        return "var(--energetic)";
      case "optionTired":
        return "var(--tired)";
      default:
        return "";
    }
  };
  
  return (
    <div
      id="backgroundArea"
      style={{backgroundImage: getBackgroundImage(mood),}}
    >
      <div className="newContent">
      <div className="newCard">
        <h1 className="newHeader">How Are You Feeling</h1>
        <p>Select an emotion to log how you are feeling today.</p>
        <form className="newForm">
        <div className="newDropdown">
          <button
            type="button"
            id="newDropBtn"
            className="newDropBtn"
            onClick={() => handleMoodChange("")}
          >
            Select Mood
          </button>
          <div className="newDropContent">
            <a href="#Happy" onClick={() => handleMoodChange("optionHappy")}>
              Happy
            </a>
            <a href="#Sad" onClick={() => handleMoodChange("optionSad")}>
              Sad
            </a>
            <a href="#Angry" onClick={() => handleMoodChange("optionAngry")}>
              Angry
            </a>
            <a href="#Energetic" onClick={() => handleMoodChange("optionEnergetic")}>
              Energetic
            </a>
            <a href="#Tired" onClick={() => handleMoodChange("optionTired")}>
              Tired
            </a>
          </div>
        </div>
        <input type="submit" value="Submit" className="newSubmit" />
        </form>
      </div>
    </div>
    </div>
  );
};

export default New;